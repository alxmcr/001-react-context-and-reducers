import { TaskData } from '../../../@types/appTypes';

type Props = {
  task: TaskData;
};

export default function TaskItem({ task }: Props) {
  const handleDeleteTask = (taskId = '') => {
    console.log('delete tasks...', taskId);
  };

  const handleChangeTask = (taskToChange: TaskData) => {
    console.log('task to change', taskToChange);
  };

  return (
    <li>
      <label htmlFor={task.id}>
        <input type="checkbox" name={task.id} id={task.id} />
        <span>{task.name}</span>
      </label>
      <div>
        <button onClick={() => handleChangeTask(task)}>Edit</button>
        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
}
