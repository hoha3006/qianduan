import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import './bottomTabBar.css'

import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";
import "taro-ui/dist/style/components/grid.scss";

import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/icon.scss";

class BottomTabBar extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({ current: value }, ()=>{
      if(this.state.current === 1) {
        Taro.redirectTo({
          url: '/pages/Favorites/Favorites?id=1&type=C'
        })
      } else if (this.state.current === 0) {
        Taro.redirectTo({
          url: '/pages/index/index'
        })
      } else if (this.state.current === 2) {
        Taro.redirectTo({
          url: '/pages/User/User'
        })
      }
    })
  }

  render () {
    return (
      <View className='index'>
        <AtTabBar
          fixed
          tabList={[
            { title: '搜索', iconType: 'search', text: 'new' },
            { title: '收藏夹', iconType: 'star'},
            { title: '我', iconType: 'user', text: '100', max: '99' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}

export default BottomTabBar
