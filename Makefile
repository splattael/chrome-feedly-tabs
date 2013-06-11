
all: crx

crx: export
	cd build && chromium-browser --pack-extension=feedly-tabs --pack-extension-key=${HOME}/chromium.pem

export:
	git checkout-index -a -f --prefix=build/feedly-tabs/

clean:
	rm -fr build
