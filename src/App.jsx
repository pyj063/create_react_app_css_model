import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.css';
import {wx} from './util/wx.js' 

class App extends Component {
  constructor(){
    super()
    this.state={

    }
  }

  componentDidMount(){
    const shareUrl = '/front/';
    wx.onMenuShareAppMessage({
      title: `摇滚米粒礼盒限量抢啦，一起吃掉不开心！`,
      desc:"天大地大，吃货最大！摇滚米粒礼盒等你来拆~",
      link: `${shareUrl}`,
      imgUrl: "https://yanss-kitchen.oss-cn-beijing.aliyuncs.com/logo/logo.jpg",
      success: function(res) {
          console.log(res)
      },
      fail: function() {},
      cancle: function() {}
    })

    wx.onMenuShareTimeline({
        title: '摇滚米粒礼盒限量抢啦，一起吃掉不开心！', // 分享标题
        desc:"天大地大，吃货最大！摇滚米粒礼盒等你来拆~",
        link: `${shareUrl}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "https://yanss-kitchen.oss-cn-beijing.aliyuncs.com/logo/logo.jpg", // 分享图标
        success: function (res) { 
            console.log(res)
            // 用户确认分享后执行的回调函数
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
        }
    })
  }

  render() {
    return (
      <div className={style.App}>
        <header className={style.App_header}>
          <img src={logo} className={style.App_logo} alt="logo" />
          <h1 className={style.App_title}>Welcome to React</h1>
        </header>
        <p className={style.App_intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
