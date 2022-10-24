import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import { Contact } from '../module/contact';
@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  @Input()
  contacts?:Contact[] = [];


  @Output()
  hovercard:EventEmitter<any> = new EventEmitter<any>();
  displayCard(contact:any){
    this.hovercard.emit(contact);
  }

  displayOut(contact:any){
    this.hovercard.emit(null);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
