import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDir = path.join(process.cwd(), 'articles')
const fileNames = fs.readdirSync(articlesDir)

const logColors = {
  white: '\u001b[37m',
  cyan: '\u001b[36m',
  reset: '\u001b[0m',
}

// Generate Article id list (articleIds.json)
function genArticleIds() {
  const articleIds = {}
  fileNames.forEach(fileName => {
    const slug = fileName.split('_')[1]
    articleIds[slug] = fileName
  })
  const json = JSON.stringify(articleIds, undefined, 2)
  fs.writeFileSync(path.join(process.cwd(), 'gen/articleIds.json'), json)
  console.log(logColors.cyan + '[script:build]' + logColors.white + ' articleIds.json' + logColors.reset)
}

// Generate Article list (articles.json)
async function genArticleList() {
  const articleList = fileNames.map(fileName => {
    const fullPath = path.join(articlesDir, fileName)
    const doc = fs.readFileSync(fullPath, 'utf8')
    const frontMatter = matter(doc).data
    const slug = fileName.split('_')[1]
    return { slug, fileName, fm: { ...frontMatter } }
  })
  const json = JSON.stringify(articleList, undefined, 2)
  fs.writeFileSync(path.join(process.cwd(), 'gen/articles.json'), json)
  console.log(logColors.cyan + '[script:build]' + logColors.white + ' articles.json' + logColors.reset)
  return articleList
}

// Generate Tag map (tagMap.json)
function genTagMap(articles) {
  const tagMap = {}

  for (const article of articles) {
    let tags = article.fm.tags

    if (tags === null) {
      continue
    }
    if (typeof tags === 'string') {
      tags = [tags]
    }

    tags.forEach(tag => {
      if (!(tag in tagMap)) {
        tagMap[tag] = []
      }
      tagMap[tag].push({
        slug: article.slug,
        title: article.fm.title,
        date: article.fm.date,
      })
    })
  }

  const json = JSON.stringify(tagMap, undefined, 2)
  fs.writeFileSync(path.join(process.cwd(), 'gen/tagMap.json'), json)
  console.log(logColors.cyan + '[script:build]' + logColors.white + ' tagMap.json' + logColors.reset)
}

// Call functions
async function main() {
  genArticleIds()
  const articles = await genArticleList()
  genTagMap(articles)

  return 1
}

main()