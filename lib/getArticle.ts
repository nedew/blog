import articles from '../gen/articles.json'

export function getSortedArticles(limit?: number) {

  const items = articles.map(article => {
    return {
      slug: article.slug,
      title: article.fm.title,
      date: article.fm.date,
    }
  })

  items.sort((a, b) => {
    const dateA = +a.date.replace(/-/g, '')
    const dateB = +b.date.replace(/-/g, '')
    if (dateA > dateB) return -1
    if (dateA < dateB) return 1
    return 0
  })

  if (limit) {
    return items.slice(0, limit)
  }

  return items
}
