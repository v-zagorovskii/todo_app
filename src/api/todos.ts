import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 1451;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const postTodo = ({ title, userId, completed }: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', { title, userId, completed });
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const patchTodo = ({ id, completed }: Todo) => {
  return client.patch<Todo>(`/todos/${id}`, { completed: !completed });
};

export const patchTitleTodo = ({ id }: Todo, newTitle: string) => {
  return client.patch<Todo>(`/todos/${id}`, { title: newTitle });
};
