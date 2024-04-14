import React from 'react';
import { TaskData } from '../../../@types/appTypes';
import { TasksDispatchContext } from '../../../providers/TasksContext';
import FormEditTask from '../forms/FormEditTask';

type Props = {
  task: TaskData;
};

export default function TaskItem({ task }: Props) {
  const [isEditatable, setIsEditable] = React.useState(false);
  const dispatch = React.useContext(TasksDispatchContext);

  const handleDeleteTask = (taskId = '') => {
    console.log('delete tasks...', taskId);
    dispatch({
      type: 'deleted',
      payload: {
        id: taskId,
      },
    });
  };

  const handleChecked = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'changed',
      payload: { ...task, done: ev.target.checked },
    });
  };

  return (
    <li className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name={task.id}
          id={task.id}
          className="size-8"
          onChange={handleChecked}
        />
        {isEditatable ? (
          <FormEditTask taskToUpdate={task} setIsEditable={setIsEditable} />
        ) : (
          <label htmlFor={task.id} className="flex items-center gap-3">
            {task.name}
          </label>
        )}
      </div>
      <div className="flex items-center gap-4">
        <button
          className="rounded-lg bg-blue-300 p-2 text-center"
          onClick={() => setIsEditable(!isEditatable)}
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
