# ![Feedly tabs icon](images/icon.png) Feedly tabs

Open Feedly articles in new tabs.

## Release extension in Chrome Web Store (as ZIP)

* code
* increase version in manifest.json
* `make zip`
* Upload `build/feedly-tabs.zip` to https://chrome.google.com/webstore/developer/update

## Release CRX

Ensure that your private `chromium.pem` is stored in your `$HOME`.

* code
* `make crx`
* Distribute `build/feedly-tabs.crx`
