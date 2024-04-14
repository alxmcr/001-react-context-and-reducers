import BoxTaskList from '../components/01-task-list/boxes/BoxTaskList';
import TasksProvider from '../providers/TasksProvider';

export default function TaskListPage() {
  return (
    <TasksProvider>
      <main>
        <h1 className="text-3xl font-bold underline">Task list</h1>
        <BoxTaskList />
      </main>
    </TasksProvider>
  );
}
