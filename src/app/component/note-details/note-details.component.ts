import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/service/note.model';
import { NotesService } from 'src/app/service/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent {
  note: Note = new Note();
  noteId: number | undefined;
  new: boolean | undefined;
  constructor(private formBuilder: FormBuilder, private noteService: NotesService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params)
      if (params['id'] != 'new') {
        this.note = this.noteService.get(params['id']);
        this.noteId = params['id'];
        this.new = false;
      } else {
        this.new = true;
      }
    })
  }
  submit(form: NgForm) {
    console.log(form)
    if (this.new) {
      this.noteService.add(form.value)
    } else {
      this.noteService.update(this.noteId, form.value.title, form.value.body)
    }
    this.router.navigateByUrl('/')
  }
  cancel() {
    this.router.navigateByUrl('/')
  }
}
