import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDir = path.join(process.cwd(), 'articles')
const fileNames = fs.readdirSync(articlesDir)

const genArticleList = () => {
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
  })
}

const genArticleIds = () => {
  const articleIds = {}
  fileNames.forEach(fileName => {
    const slug = fileName.split('_')[1]
    articleIds[slug] = fileName
  })
  const json = JSON.stringify(articleIds, undefined, 2)
  fs.writeFile('./gen/articleIds.json', json, (err) => {
    if (err) throw err
  })
}

const main = () => {
  genArticleList()
  genArticleIds()
}

main()