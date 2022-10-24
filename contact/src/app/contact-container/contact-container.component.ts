import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.css']
})
export class ContactContainerComponent implements OnInit {
  @Input()
  public con:any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
