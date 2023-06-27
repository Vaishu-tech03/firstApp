import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from 'src/todo/dto/create-todo.dto';
//import { UpdateTodoDto } from 'src/todos/dtos/update-todo.dto';
//import { CreateTodoDto } from './dtos/create-todo.dto';

@Injectable()
export class TodosService {
  update //     Object.assign(todo, dto);
    (arg0: number, dto: CreateTodoDto) {
      throw new Error('Method not implemented.');
  }
  
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async create(dto: CreateTodoDto) {
    const todo = this.todoRepository.create(dto);

    return await this.todoRepository.save(todo);
  }

  async findMany() {
    return this.todoRepository.find( );
  }

  async findOne(id: number){
    return this.todoRepository.findOne({where:{id}});
  }


  //   async update(id: number, dto: CreateTodoDto) {
  //     const todo = this.todoRepository.findOne({ where: { id } });

  //     Object.assign(todo, dto);

  //     await this.todoRepository.save(todo);

  //     return todo;
  //   }

//   async update(id: number, dto: CreateTodoDto): Promise<Todo> {
//     const updatedRes = this.todoRepository.findOne({ where: { id } });

//     (await updatedRes).title = dto.title;

//     return await this.todoRepository.save(updatedRes);
//   }


// async updateTodo(id:number, dto: UpdateTodoDto){
//   const updateDto = dto.id;
//   return this.todoRepository.update(updateDto, dto);
// }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
    
  }
}


