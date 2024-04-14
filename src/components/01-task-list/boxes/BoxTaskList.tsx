import { LoadingStates } from '../../../@enums/appEnums';
import useTasks from '../../../hooks/useTasks';
import FormCreateTask from '../forms/FormCreateTask';
import TasksList from '../lists/TasksList';

export default function BoxTaskList() {
  const { tasks, statusTasks } = useTasks();

  if (LoadingStates.PENDING === statusTasks) {
    return (
      <div>
        <p>Loading tasks...</p>
      </div>
    );
  }

  return (
    <div>
      <FormCreateTask />
      <TasksList tasks={tasks} />
    </div>
  );
}
