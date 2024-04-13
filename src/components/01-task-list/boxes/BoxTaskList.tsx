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

  if (LoadingStates.SUCCESS === statusTasks) {
    return <div>{tasks.length === 0 ? <TasksList tasks={tasks} /> : null}</div>;
  }

  return null;
}
