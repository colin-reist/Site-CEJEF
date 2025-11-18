import type { ContentItem } from '../entities/ContentItem'
import { CmsClient } from '~/services/CmsClient'

export class NewsRepository {
  private cms: CmsClient

  constructor(cms: CmsClient) {
    this.cms = cms
  }

  async listPublished(): Promise<ContentItem[]> {
    return this.cms.list<ContentItem>('news', {
      filter: { status: { _eq: 'published' } },
      fields: ['id', 'title', 'description', 'image', 'status', 'body'],
      sort: ['-date_created']
    })
  }

  async getById(id: string | number): Promise<ContentItem> {
    return this.cms.getById<ContentItem>('news', id, {
      fields: ['id', 'title', 'description', 'image', 'status', 'body']
    })
  }
}
