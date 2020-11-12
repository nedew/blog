import canvas from 'canvas'
import fs from 'fs'
import path from 'path'

export function generateOgp(title, slug) {
  // const OUTPUT_PATH = '../gen/ogp/'

  const WIDTH = 1200
  const HEIGHT = 630
  const FONT_SIZE = 60
  const FONT_FAMILY = '"Noto Sans CJK JP"'
  const FONT_TYPE = 'bold'
  // const FONT = 'bold 85px "Noto Sans CJK JP"'
  const LINE_HEIGHT = 100
  // const FONT_COLOR = '#262626'
  const FONT_COLOR = 'white'

  const cvs = canvas.createCanvas(WIDTH, HEIGHT)
  const ctx = cvs.getContext('2d')

  ctx.font = FONT_TYPE + ' ' + FONT_SIZE + 'px ' + FONT_FAMILY
  ctx.fillStyle = FONT_COLOR

  const textWidth = ctx.measureText(title).width

  ctx.fillText(title, (WIDTH - textWidth) / 2, FONT_SIZE)

  const buf = cvs.toBuffer()

  // const fileName = OUTPUT_PATH + './test.jpg'
  const fileName = './test.jpg'
  fs.writeFileSync(path.join(process.cwd(), `gen/ogp/${slug}.png`), buf)
}

generateOgp('Next.js, MDXで自分用のブログを作成した', '5428374823')