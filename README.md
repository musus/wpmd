# WPMD [![Build Status](https://travis-ci.org/musus/wpmd.svg?branch=master)](https://travis-ci.org/musus/wpmd)

WPMD is a Markdown importer user interfaces for WordPress.


## Installation 

```
$ mkdir wpmd
$ cd wpmd
$ npm install wpmd -g .
```

Update to wp-config.js

```js
exports.user = "Your Username";
exports.password = "Your Password";
exports.title = "FRITZ and MAYONESE" ;


```


```
$ wpmd <URL>
```

### Require option
* URL = your WordPress url.
* USERNAME = Admin user name on WordPress.
* PASSWORD = Admin user password on WordPress.

### Advanced Options
* CONTENT = Post content.
* STATUS = publish,draft,pending,private

```
$ wpmd <URL> --user=<USERNAME> --password=<PASSWORD> --title=<TITLE> --content=<CONTENT> --status=<STATUS> 
```


## Example
```
$ wpmd https://susu.mu --user=susumu --password=hyperstrangpassword --title=HeySeiSkip --content=YoYoYo --status=pending 
```


## License
WPMD is [MIT licensed](https://github.com/musus/wpmd/blob/master/LICENSE).
