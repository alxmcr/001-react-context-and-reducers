import React from 'react';

export default function FormCreateTask() {
  const [text, setText] = React.useState('');

  const handleText = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setText(ev.target.value);
  };

  const handleAddTask = (ev: React.FormEvent) => {
    ev.preventDefault();
    // Dispatch actions
    console.log('adding...', text);
  };

  return (
    <form onSubmit={handleAddTask} className="flex items-center gap-2">
      <label htmlFor="task-to-create" className="flex items-center gap-2">
        <input
          type="text"
          name="task-to-create"
          id="task-to-create"
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
        Add
      </button>
    </form>
  );
}
