const {table} = require('table');

var config,
    data,
    output;

data = [
  ['最热文章','作者','文章链接'],
  [ 'ECharts 全新大版本 4.0 正式发布！百度数据可视化实验室成立','ECharts','https://juejin.im/post/5a5da932f265da3e591e4901' ],
  [ '别找了，这就是你想要的年会抽奖开源项目','hanmin','https://juejin.im/post/5a5cb54d6fb9a01c9f5b684d' ]
];

config = {
    columns: {
        0: {
            alignment: 'center',
            minWidth: 50
        },
        1: {
            alignment: 'center',
            minWidth: 50
        },
        2: {
            alignment: 'center',
            minWidth: 50
        }
    }
};

output = table(data, config);

console.log(output);
