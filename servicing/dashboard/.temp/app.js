import '@tarojs/async-await';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { Provider } from "@tarojs/redux-h5";

import configStore from "./store/index";

import './app.css';
import './customScss/custom-theme.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

import Taro from '@tarojs/taro-h5';
import { Router } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
const store = configStore();

class App extends Component {

  config = {
    pages: ['pages/index/index', 'pages/Favorites/Favorites', 'pages/User/User', 'pages/SearchDetails/SearchDetails', 'pages/SearchResults/SearchResults'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  };

  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
                <Router mode={"hash"} publicPath={"/"} routes={[{
        path: '/pages/index/index',
        componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
        isIndex: true
      }, {
        path: '/pages/Favorites/Favorites',
        componentLoader: () => import( /* webpackChunkName: "Favorites_Favorites" */'./pages/Favorites/Favorites'),
        isIndex: false
      }, {
        path: '/pages/User/User',
        componentLoader: () => import( /* webpackChunkName: "User_User" */'./pages/User/User'),
        isIndex: false
      }, {
        path: '/pages/SearchDetails/SearchDetails',
        componentLoader: () => import( /* webpackChunkName: "SearchDetails_SearchDetails" */'./pages/SearchDetails/SearchDetails'),
        isIndex: false
      }, {
        path: '/pages/SearchResults/SearchResults',
        componentLoader: () => import( /* webpackChunkName: "SearchResults_SearchResults" */'./pages/SearchResults/SearchResults'),
        isIndex: false
      }]} customRoutes={{}} basename={"/"} />
              </Provider>;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

  constructor(props, context) {
    super(props, context);

    Taro._set$app(this);
  }

}

Nerv.render(<App />, document.getElementById('app'));