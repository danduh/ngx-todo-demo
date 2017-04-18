import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return null;
    }
}
