export class LocalStorage{
  static has(key) {
    return localStorage.getItem(key) !== null;
  }

  static get(key, value = null){
    try {
      if(key && LocalStorage.has(key)){
        const data = localStorage.getItem(key);
        return JSON.parse(data)
      }
    } catch (error) {}

    return value;
  }

  static set(key, value = null) {
    try {
      if(key) localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {}
  }

  static remove(key) {
    localStorage.removeItem(key);
  }

  static removeThenSet(key, value){
    LocalStorage.remove(key);
    LocalStorage.set(key, value);
  }
}