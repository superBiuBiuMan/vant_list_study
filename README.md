### 起因

* vant官网没有提及自定义列表当中的使用,并且只有一些简单的例子,这里记录下我使用vant-list的记录代码

### 需求和使用

* 需求
   * 下拉滚动加载,当快要触底的时候,加载下一页数据(这里不考虑上拉刷新和搜索列表数据)
* 使用
   * 给vant-list设置一个固定或者自适应`flex:1`的高度,并设置`overflow:scroll`即可正常使用

* 演示地址和git地址
   * 演示:https://codesandbox.io/p/github/superBiuBiuMan/vant_list_study/main?workspaceId=630f0af8-6fd3-4c54-8919-ba7cbec51883&file=%2FREADME.md
   * git:https://github.com/superBiuBiuMan/vant_list_study

* 演示图

![](https://dreamos.oss-cn-beijing.aliyuncs.com/gitblog/202302231159442.gif)
