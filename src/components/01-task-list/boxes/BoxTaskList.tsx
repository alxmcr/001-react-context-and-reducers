import { LoadingStates } from '../../../@enums/appEnums';
import useTasks from '../../../hooks/useTasks';
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
      {tasks.length === 0 ? <p>No tasks</p> : <TasksList tasks={tasks} />}
    </div>
  );
}
