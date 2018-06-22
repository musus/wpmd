#!/usr/bin/env node

'use strict';

const wp = require("wordpress");
const program = require('commander');
const pkg = require('./package.json');

program
  .version(pkg.version)
  .usage('[options] <URL>')
  .option('--user <username>', 'The username for the WordPress account.')
  .option('--password <password>', 'The password for the WordPress account.')
.parse(process.argv);

const user = program.user;
const pass = program.password;

var wordpress = require("wordpress");
var wpconfig = wordpress.createClient({
	url: program.args[0],
	username: user,
	password: pass
});

wpconfig.newPost({
	title: "タイトル",
	content: "コンテンツ",
	status: "dfaft"
}, function (error, data) {
	console.log(arguments);
});
