import { Component, OnInit, Input } from '@angular/core';
import { TodoType } from "../../app.typings";

@Component({
  selector: 'td-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input('todosList') todosList:TodoType[] =[];
  constructor() { }

  ngOnInit() {
  }

}
