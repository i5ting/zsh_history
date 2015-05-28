#!/usr/bin/env node

var child_process = require('child_process');

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();


// execFile: executes a file with the specified arguments
child_process.execFile(file_path + '/process.sh',null,{cwd:current_path},function (error,stdout,stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }else{
      console.log('fix zsh corrupt history issue success');
    }
});