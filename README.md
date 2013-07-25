# ![Feedly tabs icon](images/icon38.png) Feedly tabs

Open Feedly articles in new tabs.

See example usage on [YouTube](http://www.youtube.com/watch?v=CEug6uf_UoI).

# Installation

## From Chrome Web Store

See https://chrome.google.com/webstore/detail/feedly-tabs/bbknmbmpegpkeamflgefmekmjjhgddhk

## Load unpacked extension

* `git clone https://github.com/splattael/chrome-feedly-tabs.git`
* Open Chrome with `chrome://extensions/`
* Tick "Developer mode" (upper right hand)
* "Load unpacked extension..." and select `chrome-feedly-tabs` path

## Release extension in Chrome Web Store (as ZIP)

* code
* bump version in manifest.json
* `git tag vVERSION`
* `git push --tags`
* `make zip`
* Upload `build/feedly-tabs.zip` to https://chrome.google.com/webstore/developer/dashboard

## Release CRX

Ensure that your private `chromium.pem` is stored in your `$HOME`.

* code
* `make crx`
* Distribute `build/feedly-tabs.crx`

## Ideas

* Configure amount of tabs to open (default 20)
* Mark article read if tabs is closed or URL has changed

## License

[MIT License](LICENSE.txt)
