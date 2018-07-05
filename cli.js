#!/usr/bin/env node

'use strict';

const wp = require("wordpress");
const program = require('commander');
const pkg = require('./package.json');
const fs = require("fs");
const mdIt = require('markdown-it');
require('dotenv').config();

program
.version(pkg.version)
.usage('[options] <URL>')
.option('--user <username>', 'The username for the WordPress account.')
.option('--password <password>', 'The password for the WordPress account.')
.option('--title <title>', 'The title for the Post title .')
.option('--content <content>', 'The content for the Post title .')
.option('--status <status>', 'The status for the Post title .')
.parse(process.argv);

const user = process.env.NODE_USER;
const password = process.env.NODE_PASSWORD;

const optionTitle = program.title;
let title;
if (optionTitle == null) {
  console.log('Nothing title option');
  title = "None title";
}

const optionContent = program.content;
let content;

function markdownImport(path) {
  return fs.readFileSync(path, 'utf8', function (err, text) {
  });
}

const mdcontent = markdownImport('./import.md');

const md = new mdIt();
content = md.render(mdcontent);
  

const status = program.status;

const wpmdUser = wp.createClient({
  url: program.args[0],
  username: user,
  password
});

wpmdUser.newPost({
    title, content, status
  }, (error, data) => {
    if (error) {
      console.log("ERROR : " + error.faultString);
    }
    if (data) {
      console.log("Post done. ID is", data);
    }
  }
);
