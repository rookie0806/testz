import { connect } from "react-redux";
import { actionCreators as dataActions } from "../../redux/modules/data";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { data: { data,text },  router: { location } } = state;
  return {
    data,
    text,
    location
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
        getData: () => {
            dispatch(dataActions.getDATA());
      },
      getText: () => {
        dispatch(dataActions.getTEXT());
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);