var wordpress = require("wordpress");
var wpconfig = wordpress.createClient({
	url: "url",
	username: "username",
	password: "password"
});

wpconfig.newPost({
	title: "タイトル",
	content: "コンテンツ",
	status: "dfaft"
}, function (error, data) {
	console.log(arguments);
});