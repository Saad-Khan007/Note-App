import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {
  @Input() title: string = '';
  @Input() body: string = '';
  @Input() link: any;
  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>() 
  xBtnClick(){
    this.deleteEvent.emit();
  }
}
