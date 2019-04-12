import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './discription.css'

class Description extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      value: ''
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }

    config = {
    navigationBarTitleText: '详情页'
  }

  render () {
    return (
      <View className='index'>Hello</View>
    )
  }
}

export default Description
