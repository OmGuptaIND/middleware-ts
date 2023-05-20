'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./middleware-ts-web-core-types.cjs.prod.js");
} else {
  module.exports = require("./middleware-ts-web-core-types.cjs.dev.js");
}
