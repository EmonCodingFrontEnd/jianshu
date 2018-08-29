import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store';
import {Link} from 'react-router-dom';

import {
  HeaderWrapper, Logo,
  Nav, NavItem,
  SearchWrapper, NavSearch,
  SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem,
  Addition, Button
} from './style';

class Header extends Component {
  render() {
    const {focused, handleInputFocus, handleInputBlur, list} = this.props;
    return (
      <HeaderWrapper>
        <Link to={'/'}>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className={'left active'}>首页</NavItem>
          <NavItem className={'left'}>下载App</NavItem>
          <NavItem className={'right'}>登录</NavItem>
          <NavItem className={'right'}>
            <i className={'iconfont'}>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={300}
              classNames={'slide'}
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60c;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button
            className={'writting'}
          >
            <i className={'iconfont'}>&#xe615;</i>
            写文章
          </Button>
          <Button className={'reg'}>注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }

  getListArea = () => {
    const {
      focused, list, page, totalPage, mouseIn,
      handleMouseEnter, handleMouseLeave, handleChangePage
    } = this.props;
    const jsList = list.toJS();
    const pageList = [];
    if (jsList.length) {
      const num = Math.min(page * 10, jsList.length);
      for (let i = (page - 1) * 10; i < num; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {
                this.spinIcon = icon
              }} className={'iconfont spin'}>&#xe851;</i>换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) &&
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 1080) + 'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);