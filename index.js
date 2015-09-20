'use strict';

/**
 * Dependencies
 */

var promisify = require('pify');
var Promise = require('pinkie-promise');
var redis = require('redis');


/**
 * Expose `crown-redis-store`
 */

module.exports = RedisStore;


/**
 * Redis store for Crown
 */

function RedisStore (args) {
  // dirty hack to support all `redis` options
  if (!(this instanceof RedisStore)) return new RedisStore([].slice.call(arguments || []));

  args = Array.isArray(args) ? args : [].slice.call(arguments);

  this.redis = redis.createClient.apply(redis, args);

  this.redis.set = promisify(this.redis.set, Promise);
  this.redis.get = promisify(this.redis.get, Promise);
  this.redis.del = promisify(this.redis.del, Promise);
}


/**
 * Get value
 *
 * @param {String} key
 * @return {Mixed}
 */

RedisStore.prototype.get = function (key) {
  return this.redis.get(key)
    .then(function (value) {
      if (!value) {
        return Promise.reject();
      }

      return JSON.parse(value);
    });
};


/**
 * Set value
 *
 * @param {String} key
 * @param {Mixed} value
 * @return {Mixed}
 */

RedisStore.prototype.set = function (key, value) {
  return this.redis.set(key, JSON.stringify(value));
};


/**
 * Delete value
 *
 * @param {String} key
 */

RedisStore.prototype.destroy = function (key) {
  return this.redis.del(key);
};
