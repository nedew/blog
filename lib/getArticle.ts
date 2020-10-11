import fs from 'fs'
import path from 'path'
import articleIds from '../gen/articleIds.json'
import articles from '../gen/articles.json'

// const articlesDir = path.join(process.cwd(), 'articles')

export function getLatestArticles() {
  const max = 2

  const items = articles.map(article => {
    return {
      slug: article.slug,
      title: article.fm.title,
      date: article.fm.date,
    }
  })

  items.sort((a, b) => {
    const dateA = +a.date.replace('-', '')
    const dateB = +b.date.replace('-', '')
    if (dateA < dateB) return -1
    if (dateA > dateB) return 1
    return 0
  })

  return items.slice(0, max)
}
