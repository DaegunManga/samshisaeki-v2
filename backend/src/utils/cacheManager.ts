import { caching, MemoryCache } from 'cache-manager';

export class CacheManager {
  private cache: MemoryCache | undefined;

  constructor() {
    this.setupCache();
  }

  private async setupCache() {
    this.cache = await caching('memory');
  }

  async set(key: string, value: string, ttl?: number): Promise<boolean> {
    if (!this.cache) return false;

    try {
      await this.cache.set(key, value, ttl);
      return true;
    } catch (err) {
      return false;
    }
  }

  async get(key: string): Promise<string | false> {
    if (!this.cache) return false;

    try {
      const value = (await this.cache.get(key)) as string;
      return value || false;
    } catch (err) {
      return false;
    }
  }

  async del(key: string): Promise<boolean> {
    if (!this.cache) return false;

    try {
      await this.cache.del(key);
      return true;
    } catch (err) {
      return false;
    }
  }
}

const cacheManager = new CacheManager();

export default cacheManager;
