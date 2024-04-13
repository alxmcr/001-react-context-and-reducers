import React from 'react';
import { TaskData } from '../@types/appTypes';
import { LoadingStates } from '../@enums/appEnums';
import { MOCK_TASKS } from '../mocks/mock-tasks';

export default function useTasks() {
  const [tasks, setTasks] = React.useState<TaskData[]>([]);
  const [statusTasks, setStatusTasks] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    setStatusTasks(LoadingStates.PENDING);
    setTasks(MOCK_TASKS);
    setStatusTasks(LoadingStates.SUCCESS);
  }, []);

  return { tasks, statusTasks };
}
