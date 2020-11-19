import canvas from 'canvas'
import fs from 'fs'
import path from 'path'

export function getLines(title, ctx) {
  const TEXT_WIDTH = 900 // test
  let lines = []
  let currentLine = []
  let tokens = Array.from(title)
  let token
  while ((token = tokens.shift())) {
    const lineText = [...currentLine, token].join('')
    if (ctx.measureText(lineText + token).width > TEXT_WIDTH) {
      lines.push(currentLine.slice())
      currentLine = [token]
    } else {
      currentLine.push(token)
    }
  }
  if (currentLine.length) {
    lines.push(currentLine)
  }
  console.log(lines)
  return lines
}

export function generateOgpImg(title, slug) {
  // const OUTPUT_PATH = '../gen/ogp/'

  const WIDTH = 1200
  const HEIGHT = 630
  const LINE_HEIGHT = 60
  const FONT_FAMILY = '"Noto Sans CJK JP"'
  const FONT_TYPE = 'bold'
  const TEXT_WIDTH = 800
  // const LINE_HEIGHT = 100
  // const FONT_COLOR = '#262626'
  const FONT_COLOR = 'white'

  const canv = canvas.createCanvas(WIDTH, HEIGHT)
  const ctx = canv.getContext('2d')

  ctx.font = FONT_TYPE + ' ' + LINE_HEIGHT + 'px ' + FONT_FAMILY
  ctx.fillStyle = FONT_COLOR

  // const titleLines = getLines('Next.js, MDX, Typescriptで自分専用のブログシステムを作った（これは穴埋めようのテキストです）', ctx)
  const titleLines = getLines('Overwatch のプレイヤーデータを返す Discord Bot を作って公開してみた。（ discord.js , node.js , overwatch ）', ctx)
  for (let i = 0; i < titleLines.length; i++) {
    const text = titleLines[i].join('')
    ctx.fillText(text, (WIDTH - ctx.measureText(text).width) / 2, LINE_HEIGHT + (LINE_HEIGHT * i) + (5 * i))
  }

  // const textWidth = ctx.measureText(title).width
  // ctx.fillText(title, (WIDTH - textWidth) / 2, LINE_HEIGHT)
  const buf = canv.toBuffer()

  fs.writeFileSync(path.join(process.cwd(), `gen/ogp/${slug}.png`), buf)
}

generateOgpImg('Next.js, MDXで自分用のブログを作成した', '5428374823')