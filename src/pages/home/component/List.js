import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListItem, ListInfo, LoadMore} from '../style';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';

class List extends Component {
  render() {
    const {list, getMoreList, page} = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              /**
               * 方式1：'/detail?id=' + item.get('id')
               * App.js路由匹配： /detail
               * detail/index.js页面获取参数： this.props.location.search
               *
               * 方式2： '/detail/' + item.get('id)
               * App.js路由匹配： /deatil/:id
               * detail/index页面获取参数： this.props.match.params.id
               */
              <Link key={index} to={'/detail/' + item.get('id')}>
                <ListItem key={index}>
                  <img className={'pic'}
                       src={item.get('imgUrl')}
                       alt={''}
                  />
                  <ListInfo>
                    <h3 className={'title'}>{item.get('title')}</h3>
                    <p className={'desc'}>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => {
          getMoreList(page)
        }}>更多文字</LoadMore>
      </div>
    );
  }
}


const mapState = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
};

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});

export default connect(mapState, mapDispatch)(List);