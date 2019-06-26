const storage = window.localStorage

const STORAGE_KEY = 'people'

const loadStore = () => JSON.parse(storage.getItem(STORAGE_KEY) || '{}')
const saveStore = state => storage.setItem(STORAGE_KEY, JSON.stringify(state))

export { loadStore, saveStore }
