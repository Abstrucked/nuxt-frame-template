const defaultMeta = {
  title: "Default Title",
  description: "Default Description",
  imgURL: "https://www.philmohun.com/content/images/size/w960/2022/12/farcaster-banner.png"
}
class FrameButton {
  constructor(public label: string, public action: string, public target: string, public index: number) {}
  get html(): string {
    return `
        <meta property="fc:frame:button:${this.index}" content="${this.label}">
        <meta property="fc:button:${this.index}:action"  content="${this.action}">
        <meta property="fc:button:${this.index}:target" content="${this.target}">
    `
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
const _html: string = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>${defaultMeta.title}</title>
        <meta property="og:title" content=${defaultMeta.title}>
        <meta property="og:description" content=${defaultMeta.description}>
        <meta property="og:image" content=${defaultMeta.imgURL}>
        <!------------------ CUSTOM META TAGS --------------------------------->
        <meta property="fc:frame" content="${farcasterMeta.frame}">
        <meta property="fc:frame:image" content=${defaultMeta.imgURL}>
        ${"buttons"}
     </head>
     <body>
        <h1>${defaultMeta.title}</h1>
        <h2>${defaultMeta.description}</h2>
    </body>
</html> 
`

export default defineEventHandler(async (event) => {
  console.log("event", event)
  console.log(_html)
  return {
    statusCode: 200,
    body: _html
  }
})
