import { EntityRepository, Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';
import { TodoInterface } from '../todo.interface';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {

  async createTodo(body: TodoInterface): Promise<TodoInterface> {
    const { description } = body;
    const createTodoItem = new Todo();
    createTodoItem.description = description;
    createTodoItem.isCompleted = false;
    createTodoItem.save();
    return createTodoItem;
  }
}
