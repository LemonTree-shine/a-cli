var fs = require('fs');
var download = require('download-git-repo');

function createTemplate(path,options={}){
    fs.mkdirSync(path);

    //判断模版内是否需要form表单
    if(options.form){

    }

    //判断模版内是否需要详情
    if(options.detail){

    }

    //生成模版
    fs.writeFileSync(`${path}/test.txt`,'123123123123');
}

module.exports = {
    createTemplate
}