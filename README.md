# Introduction

## Contributing

Use Node v16 and after `npm i` run `npm run dev`

### Troubleshooting Mac

If you are running `npm run dev` and receive an error about sharp or node-gyp you may need to [https://medium.com/flawless-app-stories/gyp-no-xcode-or-clt-version-detected-macos-catalina-anansewaa-38b536389e8d](re-install XCode).

When running `npm run dev` you see:

```text
Error in "/Users/smendenh/projects/ichiorg/node_modules/gatsby-transformer-sharp/gatsby-node.js":
Something went wrong installing the "sharp" module

dlopen(/Users/smendenh/projects/ichiorg/node_modules/sharp/build/Release/sharp.node, 1): Library not loaded: /usr/local/opt/x265/lib/libx265.192.dylib
  Referenced from: /usr/local/opt/libheif/lib/libheif.1.dylib
  Reason: image not found
```

To fix this run `brew unlink ffmpeg` then `brew reinstall ffmpeg`.
