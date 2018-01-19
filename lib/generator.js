'use strict';

const path = require('path'),
    Command = require('/usr/local/lib/node_modules/doy-api').Command,
    Generator = require('/usr/local/lib/node_modules/doy-api').Generator;

class ProjectCommand extends Command {

    get generator() {
        return new ProjectGenerator();
    }

    pre(input) {
        console.log('[new] Doygen project: ' + input.project.name);
    }

    toInput(args) {
        return { project: { name: args[0] } };
    }
}

class ProjectGenerator extends Generator {

    get generatorPath() {
        return __dirname;
    }

    get params() {
        return { "project": { "name": this.input.project.name } };
    }
}

module.exports.Command = ProjectCommand;