import { TaskData } from '../../../@types/appTypes';

type Props = {
  task: TaskData;
};

export default function TaskItem({ task }: Props) {
  return (
    <li>
      <label htmlFor={task.id}>
        <input type="checkbox" name={task.id} id={task.id} />
        <span>{task.name}</span>
      </label>
    </li>
  );
}
