import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModuleModule} from './shared/custom-material-module/custom-material-module.module';
import {TaskInputComponent} from './components/task-input/task-input.component';
import {TodoFacade} from './shared/state-core-module/todo-facade';
import {TodosListComponent} from './components/todos-list/todos-list.component';
import {FooterComponent} from './components/footer/footer.component';
import {TodosFilterPipe} from './pipes/todos-filter.pipe';
import {AppStateCoreModule} from './shared/state-core-module/state-core-module';


@NgModule({
    declarations: [
        AppComponent,
        TaskInputComponent,
        TodosListComponent,
        FooterComponent,
        TodosFilterPipe
    ],
    imports: [
        AppStateCoreModule,
        CustomMaterialModuleModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [TodoFacade],
    bootstrap: [AppComponent]
})
export class AppModule {
}
