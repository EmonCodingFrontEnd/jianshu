import React, {Component} from 'react';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {HomeWrapper, HomeLeft, HomeRight} from './style';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className={'banner-img'}
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
}

export default Home;