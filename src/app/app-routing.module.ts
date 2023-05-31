import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './component/notes-list/notes-list.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { NoteDetailsComponent } from './component/note-details/note-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children:[
      {
        path:'',
        component:NotesListComponent
      },
      {
        path:':id',
        component:NoteDetailsComponent
      },
      {
        path:'new',
        component:NoteDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
