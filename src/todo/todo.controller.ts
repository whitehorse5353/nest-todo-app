import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoInterface } from './todo.interface';

@Controller('todo')
@UsePipes(ValidationPipe)
export class TodoController {

  constructor(private todoService: TodoService) {
  }

  @Get()
  async getTodo(): Promise<TodoInterface[]> {
    return this.todoService.getTodo();
  }

  @Get(':id')
  async getTodoById(@Param('id', ParseIntPipe) id: number): Promise<TodoInterface> {
    return this.todoService.getTodoById(id);
  }

  @Post()
  async createTodo(@Body() body: TodoInterface) {
    return this.todoService.createTodo(body);
  }

  @Delete(':id')
  async deleteTodoItem(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.deleteTodoItem(id);
  }

  @Patch(':id')
  async updateTodoItem(@Param('id', ParseIntPipe) id: number, @Body() updateTodoItem: TodoInterface) {
    return this.todoService.updateTodoItem(id, updateTodoItem);
  }
}
