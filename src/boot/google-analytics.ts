import { defineBoot } from '#q-app/wrappers';
import { createGtag } from 'vue-gtag';

export default defineBoot(({ app }) => {
  const gtag = createGtag({
    tagId: `${process.env.ANALYTICS_GTAG}`,
    appName: `${process.env.ANALYTICS_APP_NAME}`,
  });
  
  app.config.globalProperties.$gtag = gtag;
});