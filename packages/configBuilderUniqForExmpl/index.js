const lodash = require('lodash');

export const build = (baseConfig, envConfig) => {
  return lodash.merge(baseConfig, envConfig);
}
