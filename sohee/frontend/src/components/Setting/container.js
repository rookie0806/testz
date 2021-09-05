import React, { Component } from "react";
import PropTypes from "prop-types";
import Setting from "./presenter";
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
    text : PropTypes.object,
    getText: PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired,
    postXY: PropTypes.func.isRequired,
  };
  
  draw(data,text) {
    const {postXY} = this.props;
    var canvas = document.getElementsByTagName('canvas')[0];
          canvas.width = document.body.clientWidth ; canvas.height = window.innerHeight;
          var image = new Array()
          for (var i = 0; i < data.length; i++) {
              image[i] = new Image()
              image[i].src = data[i]["image"]
          }
          //console.log(image);
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
                function makeRandom(min, max){
                  var RandVal = Math.floor(Math.random()*(max-min+1)) + min;
                  return RandVal;
              }
          function redraw(texttowrite){
            // Clear the entire canvas
            var p1 = ctx.transformedPoint(0,0);
            var p2 = ctx.transformedPoint(canvas.width,canvas.height);
                  
            ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);
                  
            // Alternatively:
            // ctx.save();
            // ctx.setTransform(1,0,0,1,0,0);
            // ctx.clearRect(0,0,canvas.width,canvas.height);
            // ctx.restore();
                      ctx.font= '70px Calibri';
                      ctx.fillText(texttowrite,0,70,1000);
                      var List = new Array();
                      if(first){
                        for(var i=0;i<1000;i++){
                          for(var j=0;j<1000;j++){
                              if(ctx.getImageData(i,j,1,1).data[3]==255){
                                  //console.log(i,j);
                                  var xy = new Object() ;
                                  xy.x = i;
                                  var listdata =
                                  {
                                    "x" : i,
                                    "y" : j
                                  }
                                  xy.y = j;
                                 
                                  List.push(
                                    xy
                                  );
                                  imagearray.push([i,j]);
                                  maxarray_x.push(i);
                                  maxarray_y.push(j);
                                  
                              }           
                          }
                        }
                        //console.log(List);
                        postXY(List);
                        first = false;
                      }
                      
                      
                    }
              redraw(text.text); 
              redraw("세팅 완료");     
          }

    componentWillReceiveProps = nextProps => {
      const { data } = this.props;
      const {postXY} = this.props;
      if ( nextProps.data && nextProps.text) {	
          //console.log(nextProps.data);
          this.draw(nextProps.data,nextProps.text);
      }
    };
  

  componentDidMount() {
    const { getData,getText } = this.props;
    getText();
    getData();
    //console.log(this.props);
    
};
  render() {
    
    return (
      <Setting/>
      
    );
    
  }
}

export default Container;