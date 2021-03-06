import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import BottomTabBar from '../utilities/bottomTabBar/bottomTabBar'
import './SearchDetails.css'

import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/loading.scss";

class SearchDetails extends Component {
    config = {
    navigationBarTitleText: '详情页面'
  }

  componentWillMount () { 
    console.log(this.$router.params) // 输出 { id: 2, type: 'test' }
  }

  jumpToHomePage() {
    Taro.redirectTo({
      url: '/pages/index/index'
    })
  }

  render () {
    return (
      <div>
        <View className='index'>详情页面</View>
        <AtButton type='primary' onClick={(e) => this.jumpToHomePage(e)}>返回主页</AtButton>
        <BottomTabBar current={0}/>
      </div>
    )
  }
}

export default SearchDetails
