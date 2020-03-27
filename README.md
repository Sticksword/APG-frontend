# Highlight Please! (frontend website)

Has a demo + Chrome Web Store link. Oh you can also log in but nothing to see currently.

## Installation

* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Deploying

use [ember-cli-deploy-s3](https://github.com/ember-cli-deploy/ember-cli-deploy-s3) to deploy
use [ember-cli-deploy-json-config](https://github.com/ember-cli-deploy/ember-cli-deploy-json-config) for getting the json that contains paths to the assets

``` bash
ember deploy production
```

or do it manually

``` bash
ember build --environment=production
aws s3 sync --cache-control 'max-age=604800' --exclude index.html dist/ s3://ember-s3-prod/
aws s3 sync --cache-control 'no-cache' dist/ s3://ember-s3-prod/
```

then copy the `index.json` file to the rails project `dist` folder

``` bash
cp ../APG-frontend/tmp/deploy-dist/index.json dist
```

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
