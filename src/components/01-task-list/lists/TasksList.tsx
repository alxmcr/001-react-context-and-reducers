import { TaskData } from '../../../@types/appTypes';
import TaskItem from './TaskItem';

type Props = {
  tasks: TaskData[];
};

export default function TasksList({ tasks = [] }: Props) {
  if (tasks.length === 0) {
    return (
      <div>
        <p>NO tasks</p>
      </div>
    );
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
