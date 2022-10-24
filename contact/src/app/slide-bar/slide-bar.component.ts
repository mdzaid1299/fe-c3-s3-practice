import { Component, OnInit } from '@angular/core';
import { Contact } from '../module/contact';
import { CONTACTS } from '../module/contacts';
@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.css']
})
export class SlideBarComponent implements OnInit {
  contacts:Contact[] =CONTACTS;

  public item:Contact = {};
  constructor() { }

  ngOnInit(): void {
  }

}
