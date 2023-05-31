import { Component } from '@angular/core';
import { Note } from 'src/app/service/note.model';
import { NotesService } from 'src/app/service/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {
  notes:Note[] =new Array<Note>()
  constructor(private noteService:NotesService){}
  ngOnInit(){
    this.notes = this.noteService.getAll();
  }
  deleteNote(id:number){
    console.log(id)
    this.noteService.delete(id)
  }
}
