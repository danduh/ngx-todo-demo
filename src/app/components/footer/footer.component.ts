import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TodoType } from "../../app.typings";
import { TodoFacade } from "../../shared/state-core-module/todo-facade";
import { Subscription } from "rxjs";

@Component({
    selector: 'td-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
    @Input('todosList')
    public todosList: TodoType[] = [];

    completed: TodoType[];
    $subscriber: Subscription;

    constructor(private todoService: TodoFacade) {
        this.$subscriber = this.todoService.getFilteredBy('completed')
            .subscribe((resp: TodoType[]) => {
                this.completed = resp
            })
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        if (this.$subscriber)
            this.$subscriber.unsubscribe()
    }
}
