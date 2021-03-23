/*
 * @Date: 2021-03-22 15:01:04
 * @LastEditors: jian sun
 * @LastEditTime: 2021-03-23 10:14:21
 */
const _ = require('lodash')
const core = require("./src")

module.exports = {
    test () {
      core.core()
      console.log('core-test111');
    }
}