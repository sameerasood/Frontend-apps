(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // add.js
  var require_add = __commonJS({
    "add.js"(exports, module) {
      var add2 = (int1, int2) => {
        return int1 + int2;
      };
      module.exports = add2;
    }
  });

  // multiply.js
  var require_multiply = __commonJS({
    "multiply.js"(exports, module) {
      var multiply2 = (int1, int2) => {
        return int1 * int2;
      };
      module.exports = multiply2;
    }
  });

  // index.js
  var add = require_add();
  var multiply = require_multiply();
  console.log("Hello from the developer console!");
  console.log(new Date());
  console.log(add(12, 13));
  console.log(multiply(12, 13));
})();
