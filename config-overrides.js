const { alias, aliasJest, configPaths } = require("react-app-rewire-alias");
const rewireStyledComponents = require("react-app-rewire-styled-components");

const aliasMap = configPaths("./tsconfig.paths.json");

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env);
  return config;
};

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);
