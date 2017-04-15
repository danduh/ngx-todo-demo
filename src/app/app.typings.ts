let id = 0;
export class TodoType {
    id: number;
    text: string;
    completed: boolean = false;

    constructor(text: string) {
        this.id = id++;
        this.text = text;
    }
}