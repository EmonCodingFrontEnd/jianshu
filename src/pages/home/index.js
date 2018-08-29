import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {actionCreators} from './store';
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style';

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className={'banner-img'}
               alt={''}
               src={'//upload.jianshu.io/admin_banners/web_images/4429/b46c9ab6fc30d375505aa121ee5a73510880dcff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'}/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll']),
  }
};

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow(e) {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});
export default connect(mapState, mapDispatch)(Home);