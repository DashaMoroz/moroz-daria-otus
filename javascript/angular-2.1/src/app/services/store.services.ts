import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() {}

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }
  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
  len() {
    try {
      return localStorage.length;
    } catch (e) {
      console.error('Error getting length from localStorage', e);
      return null;
    }
  }
  del(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error deleting to localStorage', e);
    }
  }
  k(i: number) {
    try {
      return localStorage.key(i);
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
  clear() {
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Error clear to localStorage', e);
    }
  }
}
