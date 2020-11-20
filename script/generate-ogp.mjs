import canvas from 'canvas'
import fs from 'fs'
import path from 'path'
// import articles from '../gen/articles.json'

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
  console.log(lines)
  return lines
}

function generateOgpImg(slug, title) {
  const WIDTH = 1200
  const HEIGHT = 630
  const FONT_SIZE = 50
  const FONT_FAMILY = '"Noto Sans CJK JP"'
  const FONT_TYPE = 'bold'
  const TEXT_WIDTH = 900
  const FONT_COLOR = '#474747'
  const TEXT_MARGIN = 15
  const MAX_LINE = 4
  const BACKGROUND_COLOR = 'white'

  const canv = canvas.createCanvas(WIDTH, HEIGHT)
  const ctx = canv.getContext('2d')

  // Background color
  ctx.fillStyle = BACKGROUND_COLOR
  ctx.fillRect(0, 0, WIDTH, HEIGHT)

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
    console.log(i + ' - ' + titleLines[i])
    const text = titleLines[i].join('')
    const lineX = (WIDTH - ctx.measureText(text).width)/2
    const lineY = HEIGHT / 2 - FONT_SIZE * (titleLines.length + 1) / 2 + (FONT_SIZE + TEXT_MARGIN) * i
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
    if (fs.existsSync(path.join(process.cwd(), `public/ogp/${slug}.png`))) {
      continue
    }
    generateOgpImg(slug, title)
  }
}

// run
main()