import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/service/note.model';
import { NotesService } from 'src/app/service/notes.service';
import { NotesListComponent } from '../notes-list/notes-list.component';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent {
  note: Note = new Note();
  noteId: number | undefined;
  new: boolean | undefined;

  constructor(private noteService: NotesService, private router: Router, private route: ActivatedRoute, public listComponent: NotesListComponent) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['id'] != 'new') {
        this.noteService.get(params['id']).then((notes: any) => this.note = notes);
        this.noteId = params['id'];
        this.new = false;
      } else {
        this.new = true;
      }
    })
  }

  submit(form: NgForm) {
    if (this.new) {
      this.noteService.add(form.value);
    } else {
      this.noteService.update(this.noteId, form.value.title, form.value.body)
    }
    this.noteService.getAll().then((innotes: any) => { this.listComponent.notes = innotes })
    this.router.navigateByUrl('/')
  }

  cancel() {
    this.router.navigateByUrl('/')
  }
}
