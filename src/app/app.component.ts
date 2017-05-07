import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoType } from "./app.typings";
import { TodoFacade } from "./shared/state-core-module/todo-facade";
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

    constructor(private todoFacade: TodoFacade) {
    }

    ngOnInit() {
        this.state$ = this.todoFacade.getAllTodos()
            .subscribe((resp) => {
                this.todosList = resp
            })
    }

    public addTask($event) {
        let _todo = new TodoType($event);

        this.todoFacade.addTodo(_todo)
    }

    ngOnDestroy() {
        if (!!this.state$)
            this.state$.unsubscribe()
    }
}
