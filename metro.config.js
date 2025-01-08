const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  config.resolver.sourceExts.push('cjs'); // Ajoute cette ligne
  return config;
})();