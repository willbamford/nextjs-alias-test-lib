const { foo } = require("@nextjs-alias-test-lib/testpkg-1");

module.exports.foo = () => {
  return foo();
};
