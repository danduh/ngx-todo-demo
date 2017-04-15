import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CustomMaterialModuleModule } from "./shared/custom-material-module/custom-material-module.module";
import { TaskInputComponent } from './components/task-input/task-input.component';
import { StoreModule } from "@ngrx/store";
import { todosReducer } from "./shared/reducers/todos";
import { TodoService } from "./shared/todo.service";
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodosFilterPipe } from './pipes/todos-filter.pipe';


export function todosReducerFc(state: any, action: any) {
    return todosReducer(state, action);
}

@NgModule({
    declarations: [
        AppComponent,
        TaskInputComponent,
        TodosListComponent,
        FooterComponent,
        TodosFilterPipe
    ],
    imports: [
        StoreModule.provideStore(todosReducerFc),
        CustomMaterialModuleModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
