#!/usr/bin/env node

const request = require('superagent')
const echo = require('node-echo');
const exec = require('child_process').exec;
const {table} = require('table');

//存储数据的表格
var tableData=[];
//处理过的表格数据
var output;

//获取文章数据的网络请求
request.get('https://timeline-merger-ms.juejin.im/v1/get_entry_by_rank')
.query({
  src: 'sixgold',
  limit: 30,
  category: 'all'
})
.then(res => {
  var reqData=res.body.d.entrylist;
  for (var i = 0; i < reqData.length; i++) {
    tableData[i]=[reqData[i].title,reqData[i].user.username,reqData[i].originalUrl];
}
}).then(()=>{
  config = {
      columns: {
          0: {
              alignment: 'left',
              width: 25
          },
          1: {
              alignment: 'right',
              width: 10
          },
          2: {
              alignment: 'right',
              width: 60
          }
      }
  };

  //添加表头
  tableData.unshift(['最热文章','作者','文章链接（Command/Ctrl+鼠标左键链接可点击）']); // 注意数组索引, [0,1,2..]
  output = table(tableData, config);

  console.log(output);
})
.catch(err => {
  console.error(err);
})
