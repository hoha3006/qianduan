import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import { connect } from "@tarojs/redux-h5";

import { add, minus, asyncAdd } from "../../actions/counter";

import { AtTabBar } from 'taro-ui';
import { AtGrid } from "taro-ui";
import { AtSearchBar } from 'taro-ui';
import { Swiper, SwiperItem } from '@tarojs/components';
import firstImg from '../../imgs/6398581.jpg';
import secondImg from '../../imgs/6398582.jpg';
import thirdImg from '../../imgs/6398584.jpg';
import './index.css';

import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";
import "taro-ui/dist/style/components/grid.scss";

import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/icon.scss";

@connect(({ counter }) => ({
  counter
}), dispatch => ({
  add() {
    dispatch(add());
  },
  dec() {
    dispatch(minus());
  },
  asyncAdd() {
    dispatch(asyncAdd());
  }
}))
class Index extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      value: ''
    };
  }
  handleClick(value) {
    this.setState({ current: value }, () => {
      if (this.state.current === 1) {
        Taro.redirectTo({
          url: '/pages/testpage/test?id=1&type=C'
        });
      } else if (this.state.current === 0) {
        Taro.redirectTo({
          url: '/pages/index/index'
        });
      }
    });
  }
  onChange(value) {
    this.setState({
      value: value
    });
  }
  onActionClick() {
    console.log('开始搜索');
  }

  config = {
    navigationBarTitleText: '首页'
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="index">
        <AtSearchBar showActionButton value={this.state.value} onChange={this.onChange.bind(this)} onActionClick={this.onActionClick.bind(this)} />
        <Swiper className="test-h" indicatorColor="#999" indicatorActiveColor="#333" vertical circular indicatorDots autoplay>
          <SwiperItem>
            <View className="demo-text-1">
              <img className="taro-img__mode-scaletofill" src={firstImg} />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-2">
              <img class="taro-img__mode-scaletofill" src={secondImg} />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-3">
              <img class="taro-img__mode-scaletofill" src={thirdImg} />
            </View>
          </SwiperItem>
        </Swiper>
        <AtGrid columnNum={2} data={[{
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: '老年大学'
      }, {
        image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
        value: '养老机构'
      }, {
        image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
        value: '活动中心'
      }]} />
        <AtTabBar fixed tabList={[{ title: '搜索', iconType: 'search', text: 'new' }, { title: '收藏夹', iconType: 'star' }, { title: '我', iconType: 'user', text: '100', max: '99' }]} onClick={this.handleClick.bind(this)} current={this.state.current} />
      </View>;
  }
}

export default Index;