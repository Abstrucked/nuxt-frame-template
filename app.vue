<script setup lang="ts">

import frameConfig from "./frame.config.json"

const {
  data
} = useFetch("/api/test")

declare type Meta = {
  name: string;
  content: string;
}

const defaultMeta = {
  title: "Default Title",
  description: "Default Description",
  imgURL: "https://www.philmohun.com/content/images/size/w960/2022/12/farcaster-banner.png"
}

// const meta: [
//   { name: 'description', content: 'My amazing site.' },
//   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//   { name: 'og:title', content: `${frameConfig.title}`},
//   { name: 'og:description', content: `${frameConfig.description}`},
//   { name: 'og:image', content: `${frameConfig.image}`},
//   { name: 'og:url', content: `${frameConfig.url}`},
//   { name: 'og:type', content: 'website'},
//   { name: 'og:site_name', content: `${frameConfig.title}`}
// ]
class FrameButton {
  constructor(public label: string, public action: string, public target: string, public index: number) {}
  getMeta(): Array<Meta> {
    return [
      { name: `fc:frame:button:${this.index}`, content: this.label },
      { name: `fc:button:${this.index}:action`, content: this.action },
      { name: `fc:button:${this.index}:target`, content: this.target }
    ]
  }
}
const farcasterMeta = {
  frame: "default",
  buttons: [
    new FrameButton("Warpcast", "link", "https://www.warpcast.com", 1),
    new FrameButton("Frame Validator", "link", "https://warpcast.com/~/developers/frames", 2),
    new FrameButton("Frame Docs", "link", "https://docs.farcaster.xyz/learn/what-is-farcaster/frames#frames", 3)
  ]
}
const _meta: Array<Meta> = [
  { name: 'description', content: defaultMeta.title },
  { name: 'og:title', content: frameConfig.title },
  { name: 'og:description', content: frameConfig.description },
  { name: 'og:image', content: frameConfig.image },
  { name: 'og:url', content: frameConfig.url },
  { name: 'og:type', content: 'website'},
  { name: 'og:site_name', content: frameConfig.title},
  { name: "fc:frame", content: farcasterMeta.frame},
  { name: "fc:frame:image", content: defaultMeta.imgURL },
  ...farcasterMeta.buttons.map((button: FrameButton) => button.getMeta()).flat()
]


useHead({
  title: 'Nuxt Frame Template',
  meta: _meta,
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})



</script>
<template>
  <div>
  </div>
</template>
