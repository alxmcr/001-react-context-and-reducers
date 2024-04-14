import React from 'react';
import { TasksContext } from '../../../providers/TasksContext';
import FormCreateTask from '../forms/FormCreateTask';
import TasksList from '../lists/TasksList';

export default function BoxTaskList() {
  const tasks = React.useContext(TasksContext);

  return (
    <div>
      <FormCreateTask />
      <TasksList tasks={tasks} />
    </div>
  );
}
