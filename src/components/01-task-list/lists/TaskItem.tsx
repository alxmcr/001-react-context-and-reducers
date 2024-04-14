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
    <li className="flex items-center justify-between gap-3">
      <label htmlFor={task.id} className="flex items-center gap-3">
        <input
          type="checkbox"
          name={task.id}
          id={task.id}
          className="size-8"
          checked={task.done}
        />
        <span>{task.name}</span>
      </label>
      <div className="flex items-center gap-4">
        <button
          className="rounded-lg bg-blue-300 p-2 text-center"
          onClick={() => handleChangeTask(task)}
        >
          Edit
        </button>
        <button
          className="rounded-lg bg-red-300 p-2 text-center"
          onClick={() => handleDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
