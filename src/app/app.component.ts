import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, State } from "@ngrx/store";
import { TodoType } from "./app.typings";
import { TodoService } from "./shared/todo.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    public title = 'app works!';
    public todosList: any = [];
    private state$: Subscription;

    constructor(private _store: Store<State<TodoType>>,
                private todoService: TodoService) {
    }

    ngOnInit() {
        this.state$ = this._store.select((state) => {
            return state;
        }).subscribe((state) => {
            this.todosList = state
        })
    }

    public addTask($event) {
        let _todo = new TodoType($event);

        this.todoService.addTodo(_todo)
    }

    ngOnDestroy() {
        if (!!this.state$)
            this.state$.unsubscribe()
    }
}
