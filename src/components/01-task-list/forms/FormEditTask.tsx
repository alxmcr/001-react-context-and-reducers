import React from 'react';
import { TaskData } from '../../../@types/appTypes';
import { TasksDispatchContext } from '../../../providers/TasksContext';

type Props = {
  taskToUpdate: TaskData;
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FormEditTask({ taskToUpdate, setIsEditable }: Props) {
  const [text, setText] = React.useState(taskToUpdate.name);
  const dispatch = React.useContext(TasksDispatchContext);

  const handleText = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setText(ev.target.value);
  };

  const handleUpdateTask = (ev: React.FormEvent) => {
    ev.preventDefault();
    // Dispatch actions
    dispatch({
      type: 'changed',
      payload: { ...taskToUpdate, name: text },
    });

    // Clear
    setText('');
    setIsEditable(false);
  };

  return (
    <form onSubmit={handleUpdateTask} className="flex items-center gap-2">
      <label htmlFor="task-to-update" className="flex items-center gap-2">
        <input
          type="text"
          name="task-to-update"
          id="task-to-update"
          autoComplete="off"
          className="rounded-lg border border-black p-2"
          value={text}
          onChange={handleText}
          required
        />
      </label>
      <button
        type="submit"
        className="rounded-lg bg-purple-400 p-2 text-center"
      >
        Save
      </button>
    </form>
  );
}
