/*
# Introduction

Welcome to Strata!

[Strata](http://stratajs.org) is a fast, streaming web framework for [node.js](http://nodejs.org)
that is patterned after time-honored and battle tested web application design
principles pioneered in the [Python](http://python.org/) and [Ruby](http://ruby-lang.org)
communities (see [WSGI](http://wsgi.org/wsgi/) and [Rack](http://rack.rubyforge.org/)).
Using Strata, developers can build highly performant web servers in a
powerful, modular style that is easy to maintain and takes full advantage of
the streaming capabilities and excellent I/O handling of node.js.

The goal of this manual is to introduce you to the Strata web framework in a
way that will help you get started quickly by providing clear, concise
explanations and example code. At the same time, the manual provides detailed
descriptions of various components of the framework so that you're not left
wondering how things actually work behind the scenes.

The manual is designed to be read linearly. Earlier chapters cover the basic
principles you should understand before proceeding to later chapters, so you
should start with them if you're having trouble understanding more advanced
concepts.

## Installation

Strata is a web framework for [node.js](http://nodejs.org). So, to install and
use Strata you first need to install node.js and [npm](http://npmjs.org/) (the
node.js package manager). Detailed instructions about how to do this are
available [on the node.js wiki](https://github.com/joyent/node/wiki/Installation).

Once you've installed node.js and npm, you can use npm to install Strata:

    $ npm install strata

## Your First Application

Now that you've installed Strata, copy and paste the code below into a file
named `app.js`.
*/

var strata = require("strata");
var app = new strata.Builder;

app.use(strata.commonLogger);
app.use(strata.contentType, "text/plain");
app.use(strata.contentLength);

app.get("/", function (env, callback) {
    callback(200, {}, "Hello world!");
});

module.exports = app;

/*
You can run the file using the Strata executable:

    $ strata app.js

Now visit the app at [http://localhost:1982/](http://localhost:1982/).

Congratulations! You just ran your first Strata app complete with middleware,
logging, and custom routing capabilities. Keep reading the manual to understand
more about what's going on in the above example.
*/
