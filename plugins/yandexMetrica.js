const yandexMetricaPlugin = require('docusaurus-plugin-yandex-metrica');

module.exports = function (context, { counterID }) {
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;

  let counter;

  if (counterID) {
    counter = counterID;
  } else if (themeConfig.yandexMetrica && themeConfig.yandexMetrica.counterID) {
    counter = themeConfig.yandexMetrica.counterID;
  }

  if (!counter) {
    return {};
  }

  return yandexMetricaPlugin(context, { counter });
};
