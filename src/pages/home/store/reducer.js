import {fromJS} from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 2,
    title: '读书',
    imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],
  articleList: [{
    id: 1,
    title: '如果你想变得更好，那就生个孩子吧',
    desc: '下午下班时候走到小区门口，给婆婆打电话，问她和孩子在哪里，电话那头的婆婆说：“往左拐，小树林的健身器材那里，看到没有？” “哪里？是往左边拐么”...',
    imgUrl: '//upload-images.jianshu.io/upload_images/6055701-f5a4f70ad62fb57e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }, {
    id: 2,
    title: '如果你想变得更好，那就生个孩子吧',
    desc: '下午下班时候走到小区门口，给婆婆打电话，问她和孩子在哪里，电话那头的婆婆说：“往左拐，小树林的健身器材那里，看到没有？” “哪里？是往左边拐么”...',
    imgUrl: '//upload-images.jianshu.io/upload_images/6055701-f5a4f70ad62fb57e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }, {
    id: 3,
    title: '如果你想变得更好，那就生个孩子吧',
    desc: '下午下班时候走到小区门口，给婆婆打电话，问她和孩子在哪里，电话那头的婆婆说：“往左拐，小树林的健身器材那里，看到没有？” “哪里？是往左边拐么”...',
    imgUrl: '//upload-images.jianshu.io/upload_images/6055701-f5a4f70ad62fb57e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }, {
    id: 5,
    title: '如果你想变得更好，那就生个孩子吧',
    desc: '下午下班时候走到小区门口，给婆婆打电话，问她和孩子在哪里，电话那头的婆婆说：“往左拐，小树林的健身器材那里，看到没有？” “哪里？是往左边拐么”...',
    imgUrl: '//upload-images.jianshu.io/upload_images/6055701-f5a4f70ad62fb57e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }, {
    id: 6,
    title: '如果你想变得更好，那就生个孩子吧',
    desc: '下午下班时候走到小区门口，给婆婆打电话，问她和孩子在哪里，电话那头的婆婆说：“往左拐，小树林的健身器材那里，看到没有？” “哪里？是往左边拐么”...',
    imgUrl: '//upload-images.jianshu.io/upload_images/6055701-f5a4f70ad62fb57e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}