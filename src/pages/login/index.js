import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {LoginWrapper} from './style';


class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>login</LoginWrapper>
    )
  }

}


const mapState = (state) => {
  return {}
};

const mapDispatch = (dispatch) => ({
  // getDetail(id) {
  //   dispatch(actionCreators.getDetail(id));
  // }
});

export default connect(mapState, mapDispatch)(Login);