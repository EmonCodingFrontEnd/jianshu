import React, {Component} from 'react';
import {connect} from 'react-redux';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import axios from 'axios';
import {HomeWrapper, HomeLeft, HomeRight} from './style';

class Home extends Component {
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
      </HomeWrapper>
    )
  }

  componentDidMount() {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      const action = {
        type: 'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      };
      this.props.changeHomeData(action);
    })
  }
}


const mapDispatch = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action);
  }
});
export default connect(null, mapDispatch)(Home);