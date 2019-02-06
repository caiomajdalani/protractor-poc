'use strict';

class Home {
    constructor() {
    };

    go() {
        browser.get('/');
    };
};

module.exports = new Home();