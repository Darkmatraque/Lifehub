// Service de stockage local avec IndexedDB

const DB_NAME = 'DashboardDB';
const DB_VERSION = 1;

let db;

// Initialiser la base de données
export async function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const database = event.target.result;

      // Créer les stores (tables)
      if (!database.objectStoreNames.contains('todos')) {
        database.createObjectStore('todos', { keyPath: 'id' });
      }
      if (!database.objectStoreNames.contains('notes')) {
        database.createObjectStore('notes', { keyPath: 'id' });
      }
      if (!database.objectStoreNames.contains('budget')) {
        database.createObjectStore('budget', { keyPath: 'id' });
      }
      if (!database.objectStoreNames.contains('journal')) {
        database.createObjectStore('journal', { keyPath: 'id' });
      }
      if (!database.objectStoreNames.contains('goals')) {
        database.createObjectStore('goals', { keyPath: 'id' });
      }
    };
  });
}

// ============ FONCTIONS CRUD GÉNÉRIQUES ============

// CREATE / UPDATE
export async function saveItem(storeName, item) {
  const transaction = db.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName);
  return new Promise((resolve, reject) => {
    const request = store.put(item);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// READ (Un seul item)
export async function getItem(storeName, id) {
  const transaction = db.transaction([storeName], 'readonly');
  const store = transaction.objectStore(storeName);
  return new Promise((resolve, reject) => {
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// READ ALL
export async function getAllItems(storeName) {
  const transaction = db.transaction([storeName], 'readonly');
  const store = transaction.objectStore(storeName);
  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// DELETE
export async function deleteItem(storeName, id) {
  const transaction = db.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName);
  return new Promise((resolve, reject) => {
    const request = store.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

// DELETE ALL (clear un store)
export async function clearStore(storeName) {
  const transaction = db.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName);
  return new Promise((resolve, reject) => {
    const request = store.clear();
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

// ============ localStorage (pour données simples) ============

export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}