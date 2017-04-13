import { Component, OnInit } from '@angular/core';
import { Store, State } from "@ngrx/store";
import { TodoType } from "./app.typings";
import { TodoService } from "./shared/todo.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public title = 'app works!';
    public todosList: any;

    constructor(private _store: Store<State<TodoType>>,
                private todoService: TodoService) {

        this.todosList = _store.select((state) => {
            return state
        })

    }

    ngOnInit() {
    }

    public addTask($event) {
        let _todo = new TodoType($event);

        this.todoService.addTodo(_todo)
    }
}
