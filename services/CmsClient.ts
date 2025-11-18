export class CmsClient {
  private baseUrl: string
  private token?: string

  constructor(baseUrl: string, token?: string) {
    this.baseUrl = baseUrl?.replace(/\/$/, '') || ''
    this.token = token
  }

  private headers() {
    return this.token ? { Authorization: `Bearer ${this.token}` } : {}
  }

  async list<T = any>(collection: string, params: Record<string, any> = {}): Promise<T[]> {
    const data = await $fetch<{ data: T[] }>(`${this.baseUrl}/items/${collection}`, {
      headers: this.headers(),
      params
    })
    return data.data
  }

  async getById<T = any>(collection: string, id: string | number, params: Record<string, any> = {}): Promise<T> {
    const data = await $fetch<{ data: T }>(`${this.baseUrl}/items/${collection}/${id}`, {
      headers: this.headers(),
      params
    })
    return data.data
  }
}
