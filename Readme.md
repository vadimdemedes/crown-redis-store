# crown-redis-store [![Circle CI](https://circleci.com/gh/vdemedes/crown-redis-store.svg?style=svg)](https://circleci.com/gh/vdemedes/crown-redis-store)

Redis store for [Crown](https://github.com/vdemedes/crown).


### Installation

```
$ npm install crown-redis-store --save
```


### Usage

For all supported arguments, see [redis](https://www.npmjs.com/package/redis#redis-createclient) module.
It accepts arguments exactly as `redis` module.

```js
const RedisStore = require('crown-redis-store');

let redisStore = new RedisStore(2369, '127.0.0.1');
```


### Tests

[![Circle CI](https://circleci.com/gh/vdemedes/crown-redis-store.svg?style=svg)](https://circleci.com/gh/vdemedes/crown-redis-store)

```
$ make test
```


### License

MIT © [vdemedes](https://github.com/vdemedes)
