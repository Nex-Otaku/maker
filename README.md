# Maker

Run commands from any **Makefile** selecting them from menu.

![maker PNG](https://github.com/Nex-Otaku/maker/blob/master/img/screenshot.png?raw=true)

## Install

To use this tool, you need [NodeJS](https://nodejs.org/).

```
sudo npm install -g @nex_otaku/maker
```

## Run!

```
cd projects/my-cool-project
maker
```

## How it works

- Reads Makefile in current directory
- Lists commands from Makefile in a nice menu

## What's the profit?

**Maker** does only one task - fast and convenient way to access all your precious Makefile commands.

It doesn't require anything to run, all what needed is already in a Makefile.

Before **Maker**, I had to remember all those "make bla bla" commands for every project I have. :tired_face:

I don't have to remember them anymore! :stuck_out_tongue_winking_eye:

Now I just type ```maker``` and command list is there. 

No need look inside Makefile. Select and run, in seconds! :sparkles:  

## Features

- Comment before a command is displayed as command name

## Example Makefile
```bash
# Build app
build:
    ./bin/build.sh

# Run tests
test:
    ./vendor/bin/phpunit

# Deploy to production
deploy:
    ./bin/deploy.sh
```
<!--
## Options

Option | Description
--- | ---
**-d, --directory** | Apply command only to directories
**-f, --file** | Apply command only to files
**-r, --recursive** | Search recursively
**--include-dot-directories** | Look inside directories with names started with dot - ".git", ".idea" etc. Ignoring these directories by default.
**--include-directories-ignored-by-git** | Do not use ".gitignore" rules. By default we skip all directories mentioned in ".gitignore".
-->

## To Be Done

 - Mark command as "Favorite"
 - Hide command from list


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2021 © Nex Otaku.
