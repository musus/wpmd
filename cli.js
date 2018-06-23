#!/usr/bin/env node

'use strict';

const wp = require("wordpress");
const program = require('commander');
const pkg = require('./package.json');
const wpconfig = require("./wp-config");

program
.version(pkg.version)
.usage('[options] <URL>')
.option('--user <username>', 'The username for the WordPress account.')
.option('--password <password>', 'The password for the WordPress account.')
.option('--title <title>', 'The title for the Post title .')
.option('--content <content>', 'The content for the Post title .')
.option('--status <status>', 'The status for the Post title .')
.parse(process.argv);


const user = wpconfig.user;
const password = wpconfig.password;
const configtitle = program.title;

if (configtitle == null) {
  console.log('Nothing title on wp-config.');
  var title = wpconfig.title;
}

const content = program.content;
const status = program.status;

const wpmdUser = wp.createClient({
  url: program.args[0],
  username: user,
  password
});

wpmdUser.newPost({
    title, content, status
  }, (error, data) => {
    console.log("error : ", error);
    console.log("ID : ", data);
  }
);
