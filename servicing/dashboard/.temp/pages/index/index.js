import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Text } from '@tarojs/components';
import { connect } from "@tarojs/redux-h5";

import { add, minus, asyncAdd } from "../../actions/counter";

import './index.css';

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
        <View style={{ textAlign: "center", marginTop: "20px" }}><Text>吼哈科技</Text></View>
      </View>;
  }

  componentDidMount() {}

}

export default Index;