import { TOKEN_KEY_STORAGE } from "../utils/system";

export function save(token: string) {
  localStorage.setItem(TOKEN_KEY_STORAGE, token);
}

export function get(): string | null {
  return localStorage.getItem(TOKEN_KEY_STORAGE);
}

export function remove() {
  localStorage.removeItem(TOKEN_KEY_STORAGE);
}