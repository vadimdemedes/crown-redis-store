'use strict';

/**
 * Dependencies
 */

const RedisStore = require('./');
const test = require('ava');


/**
 * Tests
 */

test('get and set value', function (t) {
  let store = new RedisStore();

  return store.set('some-key', { value: true })
    .then(function () {
      return store.get('some-key');
    })
    .then(function (value) {
      t.same(value, { value: true });
    });
});

test('delete value', function (t) {
  let store = new RedisStore();

  return store.set('another-key', { value: true })
    .then(function () {
      return store.destroy('another-key');
    })
    .then(function () {
      return store.get('another-key')
    })
    .then(function () {
      t.fail();
    })
    .catch(function () {
      t.pass();
    });
});

