class LocalStorage {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key, defaultValue = null) {
    const value = JSON.parse(localStorage.getItem(key));
    return value === null ? defaultValue : value;
  }
}

export default new LocalStorage();
