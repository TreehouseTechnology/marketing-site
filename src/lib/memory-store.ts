export function MemoryStore() {
  const store = new Map<string, any>();

  return {
    async set(key: string, value: any) {
      store.set(key, value);
    },
    async get(key: string) {
      return store.get(key);
    },
    async del(key: string) {
      store.delete(key);
    },
  };
}

export default MemoryStore;
