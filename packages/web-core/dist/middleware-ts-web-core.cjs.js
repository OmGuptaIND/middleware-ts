'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./middleware-ts-web-core.cjs.prod.js");
} else {
  module.exports = require("./middleware-ts-web-core.cjs.dev.js");
}
