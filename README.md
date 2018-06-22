# WPMD [![Build Status](https://travis-ci.org/musus/xmlrpc-node-wp.svg?branch=master)](https://travis-ci.org/musus/xmlrpc-node-wp)

WPMD is a Markdown importer user interfaces for WordPress.


## How to use
1. Download zip by this repository.
2. Chande directory to wpmd.
3. Do wpmd command with option.
* URL = your WordPress url.
* USERNAME = Admin user name on WordPress.
* PASSWORD = Admin user password on WordPress. 

```
$ git clone git@github.com:musus/wpmd.git
$ cd wpmd
$ wpmd <URL> --user=<USERNAME> --password=<PASSWORD> --title=<TITLE> 
```
### Advanced Options
* CONTENT = Post content.
* STATUS = publish,draft,pending,private

```
$ wpmd <URL> --user=<USERNAME> --password=<PASSWORD> --title=<TITLE> --content=<CONTENT> --status<STATUS> 
```


## License
WPMD is [MIT licensed](https://github.com/musus/wpmd/blob/master/LICENSE).
