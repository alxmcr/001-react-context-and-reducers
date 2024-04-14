import React from 'react';
import { TaskData } from '../@types/appTypes';
import { TaskAction } from '../@reducers/tasksReducer';

export const TasksContext = React.createContext<TaskData[]>([]);
export const TasksDispatchContext = React.createContext<
  React.Dispatch<TaskAction>
>(() => {});
