import React from 'react';
import tasksReducer from '../@reducers/tasksReducer';
import { MOCK_TASKS } from '../mocks/mock-tasks';
import { TasksContext, TasksDispatchContext } from './TasksContext';

type Props = {
  children: React.ReactNode;
};

export default function TasksProvider({ children }: Props) {
  const [tasks, dispatch] = React.useReducer(tasksReducer, MOCK_TASKS);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
