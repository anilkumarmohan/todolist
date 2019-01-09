export class TodoList {
    id: number;
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export interface EditItem {
    name: string,
    id: number
}