'use strict';

const Worker = require('/usr/local/lib/node_modules/doy-api').Worker,
    path = require('path');

class ProjectWorker extends Worker {

    doWork() {
        const projectName = this.input.project.name;

        console.log('[create] %s', projectName);
        this.mkdir(projectName);

        this._writing();
    }

    _writing() {
        this.goTo(this.input.project.name);

        this._writeDoygen();
        this._writeMetadata();
        this._writeRules();
    }

    _writeDoygen() {
        this.invoke('doygen-file');
    }

    _writeMetadata() {
        this.invoke('metadata-file');
    }

    _writeRules() {
        this.invoke('rules-file');
    }
}

module.exports = ProjectWorker;