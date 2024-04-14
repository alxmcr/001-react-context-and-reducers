import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TaskListPage from '../pages/TaskListPage';

export const routes: RouteObject[] = [
  {
    id: 'home-page',
    path: '/',
    element: <HomePage />,
  },
  {
    id: 'tasks-list-page',
    path: '/tasks-list',
    element: <TaskListPage />,
  },
];
