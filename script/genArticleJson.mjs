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

function genArticleIds() {
  const articleIds = {}
  fileNames.forEach(fileName => {
    const slug = fileName.split('_')[1]
    articleIds[slug] = fileName
  })
  const json = JSON.stringify(articleIds, undefined, 2)
  fs.writeFile('./gen/articleIds.json', json, (err) => {
    if (err) throw err
    console.log(logColors.cyan + '[Script]' + logColors.white + ' - Generating articleIds.json has been completed' + logColors.reset)
  })
}

async function genArticleList() {
  const articleList = fileNames.map(fileName => {
    const fullPath = path.join(articlesDir, fileName)
    const doc = fs.readFileSync(fullPath, 'utf8')
    const frontMatter = matter(doc).data
    const slug = fileName.split('_')[1]
    return { slug, fileName, fm: { ...frontMatter } }
  })
  const json = JSON.stringify(articleList, undefined, 2)
  fs.writeFile('./gen/articles.json', json, (err) => {
    if (err) throw err
    console.log(logColors.cyan + '[Script]' + logColors.white + ' - Generating articles.json has been completed' + logColors.reset)
    return Promise.resolve(1)
  })
}

function genTagMap() {
  const tagMap = {}
  // console.log(fs.readFileSync('./gen/articles.json', 'utf8'))
  // const articlesJson = fs.readFileSync('./gen/articles.json', 'utf8')
  // const articles = JSON.parse(articlesJson)
  fs.readFile('./gen/articles.json', 'utf8', (err, data) => {
    if (err) throw err
    const articles = JSON.parse(data)
    articles.forEach(article => {
      article.fm.tags.forEach(tag => {
        if (!(tag in tagMap)) tagMap[tag] = []
        tagMap[tag].push(article.slug)
      })
    })
    const json = JSON.stringify(tagMap, undefined, 2)
    fs.writeFile('./gen/tagMap.json', json, (err) => {
      if (err) throw err
      console.log(logColors.cyan + '[Script]' + logColors.white + ' - Generating tagMap.json has been completed' + logColors.reset)
    })
  })
  // const articles = JSON.parse(fs.readFileSync('./gen/test.json', 'utf8'))
  // articles.forEach(article => {
  //   article.fm.tags.forEach(tag => {
  //     if (!(tag in tagMap)) tagMap[tag] = []
  //     console.log(tagMap)
  //     tagMap[tag].push(article.slug)
  //   })
  // })
  // const json = JSON.stringify(tagMap, undefined, 2)
  // fs.writeFile('./gen/tagMap.json', json, (err) => {
  //   if (err) throw err
  //   console.log('genTagMap() done!!!')
  //   return Promise.resolve(1)
  // })
}

async function main() {
  genArticleIds()
  await genArticleList()
  genTagMap()
}

main()