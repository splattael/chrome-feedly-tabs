# ![Feedly tabs icon](images/icon.png) Feedly tabs

Open Feedly articles in new tabs.

## Load unpacked extension

* `git clone https://github.com/splattael/chrome-feedly-tabs.git`
* Open Chrome with `chrome://extensions/`
* Tick "Developer mode" (upper right hand)
* "Load unpacked extension..." and select `chrome-feedly-tabs` path

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
