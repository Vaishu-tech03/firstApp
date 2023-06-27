import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodosService } from 'src/todos/todos.service';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    create(dto: CreateTodoDto): Promise<import("./todo.entity").Todo>;
    findMany(): Promise<import("./todo.entity").Todo[]>;
    findOne(id: number): Promise<import("./todo.entity").Todo>;
    remove(id: any): void;
}
