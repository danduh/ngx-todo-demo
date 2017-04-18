import { Component, OnInit, Input } from '@angular/core';
import { TodoType } from "../../app.typings";
import { TodoService } from "../../shared/todo.service";

@Component({
    selector: 'td-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    @Input('todosList') todosList: TodoType[] = [];
    completed: number;

    constructor(private todoService: TodoService) {
    }

    ngOnInit() {
        this.todoService.getFilteredBy('completed')
    }

}
