import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { HttpClient } from '@angular/common/http';
import { envoirment } from 'envoirment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Note[] = new Array<Note>()
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(envoirment.DATABASE_URL + 'todo-list').toPromise();
  }

  get(id: number) {
    return this.http.get(envoirment.DATABASE_URL + 'todo-list/' + id).toPromise();
  }

  add(note: Note) {
    return this.http.post(envoirment.DATABASE_URL + 'todo-list', note).toPromise();
  }

  update(id: any, title: string, body: string) {
    const value = {
      body,
      title
    };
    this.http.put(envoirment.DATABASE_URL + 'todo-list/' + id, value).toPromise();
  }

  delete(id: number) {
    this.http.delete(envoirment.DATABASE_URL + 'todo-list/' + id).toPromise();
  }
}
