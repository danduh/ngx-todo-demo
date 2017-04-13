import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'td-task-input',
    templateUrl: './task-input.component.html',
    styleUrls: ['task-input.component.scss']
})
export class TaskInputComponent implements OnInit {
    @Output('onInput')
    onInput: EventEmitter<string> = new EventEmitter();
    public newTodoText: string;

    constructor() {
    }

    ngOnInit() {
    }

    addTodo() {
        this.onInput.emit(this.newTodoText);
        this.newTodoText = null;
    }
}
