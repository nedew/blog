import fs from 'fs'
import path from 'path'
import articleIds from '../gen/articleIds.json'

const articlesDir = path.join(process.cwd(), 'articles')

export function getSortedPostsData() {

}

export function getAllSlug() {
  return Object.keys(articleIds).map(id => {
    return {
      params: {
        slug: id
      }
    }
  })
}