import React, { Component } from "react";
import PropTypes from "prop-types";
import Main from "./presenter";
import test1 from "./test_1.jpg";
class Container extends Component {

  state = {
    loading: true,
    loading2: true,
    idx : 1,
    page : [1], 
    maxpage : 0,
  };
  static propTypes = {
    data: PropTypes.array,
    xy :  PropTypes.array,
    getXY : PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired,
  };
  
  draw(data,xy) {
          var canvas = document.getElementsByTagName('canvas')[0];
          canvas.width = document.body.clientWidth ; canvas.height = window.innerHeight;
          var image = new Array()
          for (var i = 0; i < data.length; i++) {
              image[i] = new Image()
              image[i].src = data[i]["image"]
          }
          console.log(image);
          var timerId = "";

            var first = true;
            
            
            var ctx = canvas.getContext('2d');
            trackTransforms(ctx);
                var scale = ctx.scale;
                var imagearray = [];
                var maxarray_x = [];
                var maxarray_y = [];
                var randomimage = [];
                var y = 0;
                var zoomscale = 0;
                var firstx = 0;
                var gappos_x  = 0;
                var gappos_y = 0;
                var firsty = 0;
          function redraw(){
            // Clear the entire canvas
            var p1 = ctx.transformedPoint(0,0);
            var p2 = ctx.transformedPoint(canvas.width,canvas.height);
                  
            ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);
                  
            // Alternatively:
            // ctx.save();
            // ctx.setTransform(1,0,0,1,0,0);
            // ctx.clearRect(0,0,canvas.width,canvas.height);
            // ctx.restore();
                  if(first){
                      for(var i=0;i<xy.length;i++){
                            imagearray.push([xy[i].x,xy[i].y]);
                            maxarray_x.push(xy[i].x);
                            maxarray_y.push(xy[i].y);
                            var randompick = makeRandom(0,data.length-1);
                            randomimage.push(randompick);        
                      }
                      var max_x = Math.max.apply(null,maxarray_x);
                      var max_y = Math.max.apply(null,maxarray_y);
                      var min_y = Math.min.apply(null,maxarray_y);
                      y = document.body.clientHeight- ((max_y*(3000/max_x*(document.body.clientWidth/3168)))+  (min_y*(3000/max_x*(document.body.clientWidth/3168)))) -50 ;
                      first=false;
                      scale = 3000/max_x*(document.body.clientWidth/3168);
                      zoomscale = scale;
                      firstx = imagearray[0][0]*scale;
                      firsty = imagearray[0][1]*scale;
                  }
                 console.log(imagearray,"Zxczxczx");
                  ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);
                  function makeRandom(min, max){
                      var RandVal = Math.floor(Math.random()*(max-min+1)) + min;
                      return RandVal;
                  }
                  //console.log(imagearray.length);
                  for(i=0;i<imagearray.length;i++)
                  {
                    ctx.drawImage(image[randomimage[i]],imagearray[i][0]*scale,imagearray[i][1]*scale+y/2,scale,scale);
                  }
                  
                      
            //
          }
          
          canvas.addEventListener('dblclick', function(){ 
      
                  var rect = canvas.getBoundingClientRect();
                  var pt = ctx.transformedPoint(lastX,lastY);
                  for(var i=0;i<imagearray.length;i++)
                  {
                      if(pt.x<imagearray[i][0]*scale+scale && pt.x>imagearray[i][0]*scale){
                          if(pt.y<imagearray[i][1]*scale+y/2+scale && pt.y>imagearray[i][1]*scale+y/2){
                            window.open(data[randomimage[i]]["url"], '_blank');
                          }
                      }
                  }
      
              });
          var lastX=canvas.width/2, lastY=canvas.height/2;
          var dragStart,dragged;
          canvas.addEventListener('mousedown',function(evt){
            document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
            lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
            lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
            dragStart = ctx.transformedPoint(lastX,lastY);
                  gappos_x = lastX - firstx;
                  gappos_y = lastY - firsty;
            dragged = false;
          },false);
          canvas.addEventListener('mousemove',function(evt){
            lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
            lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
            dragged = true;
            if (dragStart){
              var pt = ctx.transformedPoint(lastX,lastY);
              ctx.translate(pt.x-dragStart.x,pt.y-dragStart.y);
              redraw();
              clearTimeout(timerId);
            }
          },false);
          canvas.addEventListener('mouseup',function(evt){
            dragStart = null;
      
          },false);
      
          var scaleFactor = 1.1;
              
          var zoom = function(clicks){
            var pt = ctx.transformedPoint(lastX,lastY);
            ctx.translate(pt.x,pt.y);
            var factor = Math.pow(scaleFactor,clicks);
                  zoomscale = zoomscale * factor;
            ctx.scale(factor,factor);
            ctx.translate(-pt.x,-pt.y);
            redraw();
            clearTimeout(timerId);
          }
              
          var handleScroll = function(evt){
                  
            var delta = evt.wheelDelta ? evt.wheelDelta/40 : evt.detail ? -evt.detail : 0;
                  
            if (delta) zoom(delta);
            clearTimeout(timerId);
            return evt.preventDefault() && false;
            
                  
          };
          canvas.addEventListener('DOMMouseScroll',handleScroll,false);
          canvas.addEventListener('mousewheel',handleScroll,false);
        
        
        // Adds ctx.getTransform() - returns an SVGMatrix
        // Adds ctx.transformedPoint(x,y) - returns an SVGPoint
        function trackTransforms(ctx){
          var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
          var xform = svg.createSVGMatrix();
          ctx.getTransform = function(){ return xform; };
          
          var savedTransforms = [];
          var save = ctx.save;
          ctx.save = function(){
            savedTransforms.push(xform.translate(0,0));
            return save.call(ctx);
          };
          var restore = ctx.restore;
          ctx.restore = function(){
            xform = savedTransforms.pop();
            return restore.call(ctx);
          };
      
          var scale = ctx.scale;
          ctx.scale = function(sx,sy){
            xform = xform.scaleNonUniform(sx,sy);
            return scale.call(ctx,sx,sy);
          };
          var rotate = ctx.rotate;
          ctx.rotate = function(radians){
            xform = xform.rotate(radians*180/Math.PI);
            return rotate.call(ctx,radians);
          };
          var translate = ctx.translate;
          ctx.translate = function(dx,dy){
            xform = xform.translate(dx,dy);
            return translate.call(ctx,dx,dy);
          };
          var transform = ctx.transform;
          ctx.transform = function(a,b,c,d,e,f){
            var m2 = svg.createSVGMatrix();
            m2.a=a; m2.b=b; m2.c=c; m2.d=d; m2.e=e; m2.f=f;
            xform = xform.multiply(m2);
            return transform.call(ctx,a,b,c,d,e,f);
          };
          var setTransform = ctx.setTransform;
          ctx.setTransform = function(a,b,c,d,e,f){
            xform.a = a;
            xform.b = b;
            xform.c = c;
            xform.d = d;
            xform.e = e;
            xform.f = f;
            return setTransform.call(ctx,a,b,c,d,e,f);
          };
          var pt  = svg.createSVGPoint();
          ctx.transformedPoint = function(x,y){
            pt.x=x; pt.y=y;
            return pt.matrixTransform(xform.inverse());
          }
        }
        function StartClock() {
      
          redraw();
      
          timerId = setTimeout(redraw, 500);
      
        }
        StartClock();
        
        }

    componentWillReceiveProps = nextProps => {
      const { data } = this.props;
      if ( nextProps.data && nextProps.xy) {	
          console.log(nextProps.data,"dd");
          console.log(nextProps.xy,"xx");
          this.draw(nextProps.data,nextProps.xy);
      }
    };
  

  componentDidMount() {
    const { getData,getXY } = this.props;
    getXY();
    getData();
    //console.log(this.props);
    
};
  render() {
    
    return (
      <Main/>
      
    );
    
  }
}

export default Container;