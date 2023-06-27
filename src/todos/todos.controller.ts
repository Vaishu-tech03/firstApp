import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodosService } from 'src/todos/todos.service';
//import { UpdateTodoDto } from 'src/todos/dtos/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() dto: CreateTodoDto) {
    return this.todosService.create(dto);
  }

  @Get()
  findMany() {
    return this.todosService.findMany();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.todosService.findOne(id);
  }

  // @Patch(':id')
  // async update(@Body() dto: UpdateTodoDto, @Param('id') id: number){
  //   return this.todosService.update(id, UpdateTodoDto);
  // }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.todosService.remove(id);
  }
}
