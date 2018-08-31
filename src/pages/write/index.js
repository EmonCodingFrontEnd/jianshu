import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Write extends PureComponent {
  render() {
    const {loginStatus} = this.props;
    console.log(loginStatus);
    if (!loginStatus) {
      return <Redirect to={'/login'}/>
    } else {
      return (
        <div>写文章页面</div>
      )
    }
  }
}


const mapState = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
};

const mapDispatch = (dispatch) => ({
  // login(accountElem, passwordElem) {
  //   dispatch(actionCreators.login(accountElem, passwordElem));
  // }
});

export default connect(mapState, mapDispatch)(Write);