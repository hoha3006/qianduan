import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import BottomTabBar from '../utilities/bottomTabBar/bottomTabBar'
import './User.css'

import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/loading.scss";

class User extends Component {
    config = {
    navigationBarTitleText: '用户'
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
        <View className='index'>这里是用户界面</View>
        <AtButton type='primary' onClick={(e) => this.jumpToHomePage(e)}>返回主页</AtButton>
        <BottomTabBar />
      </div>
    )
  }
}

export default User
