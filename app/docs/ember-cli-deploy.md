### deploy process
```
ember deploy production
npm copy-to-rails
```

[good reference for production deploy of a single page app on s3 and cloudfront](https://medium.com/@joecrobak/production-deploy-of-a-single-page-app-using-s3-and-cloudfront-d4aa2d170aa3)

------------------------------------------------------------------------

[main docs here for main deploy tool: `ember-cli-deploy`](http://ember-cli-deploy.com/docs/v1.0.x/quickstart/)

Here’s what an application’s initial setup might look like:

```
# Ensure Ember CLI Deploy itself is installed
ember install ember-cli-deploy

# Install the Build plugin, which builds your app during deployment
ember install ember-cli-deploy-build

# Gzip our files
ember install ember-cli-deploy-gzip

# Install the S3 plugin, to upload our app to S3
ember install ember-cli-deploy-s3

# Install the S3-index plugin, to upload our `index.html` to S3
ember install ember-cli-deploy-s3-index
```

```
// config/deploy.js

module.exports = function(deployTarget) {
  var ENV = {};

  ENV['s3'] = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: 'my-ember-app',
    region: 'us-east-1'
  };

  ENV['s3-index'] = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: 'my-ember-app-index',
    region: 'us-east-1'
  };
  return ENV;
};
```