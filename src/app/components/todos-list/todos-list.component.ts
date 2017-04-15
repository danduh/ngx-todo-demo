import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { TodoType } from "../../app.typings";
import { TodoService } from "../../shared/todo.service";

@Component({
    selector: 'td-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrls: ['./todos-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent implements OnInit {
    @Input('todosList')
    public todosList: TodoType[];

    constructor(private todoService: TodoService) {
    }

    ngOnInit() {
    }

    removeTodo(todo) {
        this.todoService.deleteTodo(todo);
    }

    toggleTodoComplete(todo: TodoType) {
        this.todoService.toggleTodoComplete(todo);
    }
}

