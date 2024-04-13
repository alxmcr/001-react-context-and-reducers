import { TaskData } from '../../../@types/appTypes';
import TaskItem from './TaskItem';

type Props = {
  tasks: TaskData[];
};

export default function TasksList({ tasks = [] }: Props) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
