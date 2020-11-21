import canvas from 'canvas'
import fs from 'fs'
import path from 'path'

const logColors = {
  white: '\u001b[37m',
  cyan: '\u001b[36m',
  reset: '\u001b[0m',
}

function getLines(title, maxWidth, ctx) {
  let lines = []
  let currentLine = []
  let tokens = Array.from(title)
  let token
  while ((token = tokens.shift())) {
    const lineText = [...currentLine, token].join('')
    if (ctx.measureText(lineText + token).width > maxWidth) {
      lines.push(currentLine.slice())
      currentLine = [token]
    } else {
      currentLine.push(token)
    }
  }
  if (currentLine.length) {
    lines.push(currentLine)
  }
  // console.log(lines)
  return lines
}

async function generateOgpImg(slug, title) {
  const WIDTH = 1200
  const HEIGHT = 630
  const FONT_SIZE = 60
  const FONT_FAMILY = '"Noto Sans CJK JP"'
  const FONT_TYPE = 'bold'
  const TEXT_WIDTH = 950
  const FONT_COLOR = '#262626'
  const TEXT_MARGIN = 20
  const MAX_LINE = 4
  const BACKGROUND_IMG_PATH = path.join(process.cwd(), 'img/ogp_bg/ogp_bg_5.png')

  const canv = canvas.createCanvas(WIDTH, HEIGHT)
  const ctx = canv.getContext('2d')

  // Background image
  const bgImage = await canvas.loadImage(BACKGROUND_IMG_PATH)
  ctx.drawImage(bgImage, 0, 0, WIDTH, HEIGHT)

  ctx.font = FONT_TYPE + ' ' + FONT_SIZE + 'px ' + FONT_FAMILY
  ctx.fillStyle = FONT_COLOR

  // const titleLines = getLines('Next.js, MDX, Typescriptで自分専用のブログシステムを作った（これは穴埋めようのテキストです）', ctx)
  const titleLines = getLines(title, TEXT_WIDTH, ctx)
  if (titleLines.length > MAX_LINE) {
    titleLines[MAX_LINE - 1].pop()
    titleLines[MAX_LINE - 1].push('…')
    titleLines.splice(MAX_LINE, titleLines.length)
  }
  for (let i = 0; i < titleLines.length; i++) {
    // console.log(i + ' - ' + titleLines[i])
    const text = titleLines[i].join('')
    const lineX = (WIDTH - ctx.measureText(text).width)/2
    // const lineY = HEIGHT / 2 - FONT_SIZE * (titleLines.length + 1) / 2 + (FONT_SIZE + TEXT_MARGIN) * i
    // const lineY = (HEIGHT + 150) / 2 - FONT_SIZE * (titleLines.length + 1) / 2 + (FONT_SIZE + TEXT_MARGIN) * i
    const lineY = (HEIGHT + 0) / 2 - FONT_SIZE * (titleLines.length + 1) / 2 + (FONT_SIZE + TEXT_MARGIN) * i
    ctx.fillText(text, lineX, lineY)
  }

  const buf = canv.toBuffer()
  fs.writeFileSync(path.join(process.cwd(), `public/ogp/${slug}.png`), buf)
}

function main() {
  const filePath = path.join(process.cwd(), 'gen/articles.json')
  const articles = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  for (const a of articles) {
    const slug = a.slug
    const title = a.fm.title
    // if (fs.existsSync(path.join(process.cwd(), `public/ogp/${slug}.png`))) {
    //   continue
    // }
    generateOgpImg(slug, title)
  }
  console.log(logColors.cyan + '[script:ogpbuild]' + logColors.white + ' Successful!' + logColors.reset)
}

// run
main()