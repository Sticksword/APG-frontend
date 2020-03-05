/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here

    ENV.s3 = {
      accessKeyId: 'AKIAXTNS2DPREOEQSBFA',
      secretAccessKey: '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',
      bucket: 'ember-s3-prod',
      region: 'us-west-2',
      cacheControl: 'max-age=604800'
    }
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
