# WPMD - [![Build Status](https://travis-ci.org/musus/wpmd.svg?branch=master)](https://travis-ci.org/musus/wpmd)

WPMD is a Markdown importer user interfaces for WordPress.


## How to use
1. Download zip by this repository.
2. Chande directory to wpmd.
3. Do wpmd command with require options. 

```
$ git clone git@github.com:musus/wpmd.git
$ cd wpmd
$ wpmd <URL> --user=<USERNAME> --password=<PASSWORD> --title=<TITLE> 
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
