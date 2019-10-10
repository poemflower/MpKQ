# MpKQ
整理自己常用的微信小程序组件
## 体验
使用微信扫一扫体验小程序组件示例  

<img width="200" src="https://raw.githubusercontent.com/poemflower/MpKQ/master/doc/wx_code.png">

## 快速上手
### 使用之前
在开始使用 MpKQ 之前，你需要先阅读 [微信小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/) 的相关文档。

### 如何使用
到 [GitHub](https://github.com/poemflower/MpKQ.git) 下载 MpKQ 的代码，将 `components` 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 Badge 为例，其它组件在对应的文档页查看：

1. 添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：
```json
"usingComponents": {
    "badge": "/components/badge/badge"
}
```
2. 在 wxml 中使用组件：
```html
<badge dot>
    <view class="demoSquare" ></view>
</badge>
```
