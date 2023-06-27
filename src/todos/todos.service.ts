import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "./todo.entity";
import { Repository } from "typeorm";
import { CreateTodoDto } from "src/todo/dto/create-todo.dto";
import { UpdateTodoDto } from "src/todo/dto/update-todo.dto";
//import { UpdateTodoDto } from 'src/todos/dtos/update-todo.dto';
//import { CreateTodoDto } from './dtos/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>
  ) {}

  async create(dto: CreateTodoDto) {
    try {
      const todo = this.todoRepository.create(dto);

      let res = await this.todoRepository.save(todo);

      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findMany() {
    return this.todoRepository.find();
  }

  async findOne(id: number) {
    if (!id) {
      throw new Error("Not found: id is empty. ");
    }
    try {
      return this.todoRepository.findOne({ where: { id } });
    } catch (error) {
      console.debug(error);
      return false;
    }
  }

  async update(id: number, dto: UpdateTodoDto) {
    if (!id) {
      throw new Error("update error: id is empty. ");
    }
    try {
      dto.id = id;

      await this.todoRepository.save(dto);
      return `Updated successfully!`;
    } catch (error) {
      console.debug(error);
      return false;
    }
  }

  async remove(id: number): Promise<void> {
    if (!id) {
      throw new Error("Not found error: id is empty. ");
    }
    try {
      await this.todoRepository.delete(id);
    } catch (error) {
      console.debug(error);
    }
  }
}
