let id = 0;
export class TodoType {
    id: number;
    text: string;
    complited: boolean = false;

    constructor(text: string) {
        this.id = id++;
        this.text = text;
    }
}