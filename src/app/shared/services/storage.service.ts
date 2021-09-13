import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class StorageService {

  storage: Storage;

  constructor() {
    this.storage = localStorage;
  }

  hasItem(key: string): boolean {
    return !!this.getItem(key);
  }

  getItem(key: string): string {
    return this.storage.getItem(key);
  }

  getObject(key: string): any {
    return JSON.parse(this.getItem(key));
  }

  setItem(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  setObject(key: string, value: any) {
    this.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }
}
