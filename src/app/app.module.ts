import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './component/notes-list/notes-list.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { NoteCardComponent } from './component/note-card/note-card.component';
import { NoteDetailsComponent } from './component/note-details/note-details.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    MainLayoutComponent,
    NoteCardComponent,
    NoteDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NotesListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
