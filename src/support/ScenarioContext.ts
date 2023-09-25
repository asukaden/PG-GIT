/* eslint-disable @typescript-eslint/no-explicit-any */
class ScenarioContext {
    private store;
  
    constructor() {
      this.store = new Map<string, any>();
    }
  
    destroy() {
      this.store.clear();
    }
  
    put(key: string, value: any) {
      this.store.set(key, value);
    }
  
    get(key: string) {
      return this.store.get(key);
    }
  
    has(key: string) {
      return this.store.has(key);
    }
  }
  
  export default new ScenarioContext();
  