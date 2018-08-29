import * as constants from './constants';
import axios from 'axios';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list,
  nextPage,
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      const action = changeHomeData(result);
      dispatch(action);
    })
  }
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const list = res.data.data;
      dispatch(addHomeList(list, page + 1));
    })
  }
};

export const toggleTopShow = (showScroll) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  showScroll
});