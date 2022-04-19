#!/usr/bin/env node
var program = require('commander');
var fs = require('fs');
var UTILS = require('./utils');
var download = require('download-git-repo');

//自定义参数
program
  .version('1.2.1') 
  .option('-i, --init <name>', 'init package')      //初始化项目
  .option('-c, --create <name>', 'create page')     //创建页面
  .option('-f, --form','need form dialog')          //是否需要form弹窗
  .option('-d, --detail','need detail dialog')      //是否需要详情页面

//初始化项目
if(options.init){
    console.log('正在创建项目，请稍等...')
    download('direct:https://github.com/LemonTree-shine/react-admin/archive/refs/heads/main.zip', `${process.cwd()}/${options.init}`, function (err) {
        console.log(err ? err : '创建成功')
    })
}


//创建模版
if(options.create){
    const currentPath = `${process.cwd()}/page/${options.create}`;
    let currentDir = fs.existsSync(currentPath);
    //判断当前文件夹是否存在
    if(currentDir){
        console.log('文件夹已经存在，无法重复创建。');
    }else{
        try{
            //处理创建模版逻辑
            UTILS.createTemplate(currentPath,options);
        }catch(err){
            console.log(err);
        }
        
    }
}