'use strict'

const dependencies = require(`../helpers/dependencies`)
    , mappers = require(`../helpers/mappers`)
    , homePO = require(`../pages/homePO`)

describe(`Suite Test`, () => {
    describe(`Second Suite`, () => {
        let body
        beforeEach(() => {
            return new Promise((resolve) => {
                body = mappers.users()
                resolve()
            })
        })
        it(`Test Case`, () => {

        })
    })
})
