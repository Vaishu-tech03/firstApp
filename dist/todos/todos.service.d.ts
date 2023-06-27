import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from 'src/todo/dto/create-todo.dto';
export declare class TodosService {
    private readonly todoRepository;
    update(arg0: number, dto: CreateTodoDto): void;
    constructor(todoRepository: Repository<Todo>);
    create(dto: CreateTodoDto): Promise<Todo>;
    findMany(): Promise<Todo[]>;
    findOne(id: number): Promise<Todo>;
    remove(id: number): Promise<void>;
}
