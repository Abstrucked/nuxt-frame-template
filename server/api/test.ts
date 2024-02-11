import frameConfig from "~/frame.config.json";
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

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>${defaultMeta.title}</title>
//         <meta property="og:title" content=${defaultMeta.title}>
//         <meta property="og:description" content=${defaultMeta.description}>
//         <meta property="og:image" content=${defaultMeta.imgURL}>
//         <!------------------ CUSTOM META TAGS --------------------------------->
//         <meta property="fc:frame" content="${farcasterMeta.frame}">
//         <meta property="fc:frame:image" content=${defaultMeta.imgURL}>
//         ${farcasterMeta.buttons.map((button: FrameButton) => button.getMeta()).join("\n")}
//      </head>
//      <body>
//         <h1>${defaultMeta.title}</h1>
//         <h2>${defaultMeta.description}</h2>
//     </body>
// </html>
// `

export default defineEventHandler(async (event) => {
  console.log("event", event)
  console.log(_meta)
  return {
    _meta
  }
})
