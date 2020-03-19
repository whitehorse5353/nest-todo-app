import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoRepository } from './repository/todo.repository';
import { TodoInterface } from './todo.interface';

@Injectable()
export class TodoService {

  constructor(private todoRepository: TodoRepository) {
  }

  async getTodo(): Promise<TodoInterface[]> {
    return await this.todoRepository.find();
  }

  async getTodoById(id: number): Promise<TodoInterface> {
    const result = await this.todoRepository.findOne(id);

    if (!result) {
      throw new NotFoundException(`Given todo id:${id} not exist`);
    }

    return result;
  }

  async createTodo(body: TodoInterface): Promise<TodoInterface> {
    return this.todoRepository.createTodo(body);
  }

  async deleteTodoItem(id: number) {
    return await this.todoRepository.delete({ id });
  }

  async updateTodoItem(id: number, updateTodoItem: TodoInterface) {
    const { description, isCompleted } = updateTodoItem;
    return await this.todoRepository.update({ id }, { description, isCompleted });
  }
}
