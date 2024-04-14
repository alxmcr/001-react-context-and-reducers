import { TaskData } from '../@types/appTypes';

type AddTaskAction = {
  type: 'added';
  payload: TaskData;
};

type RemoveTaskAction = {
  type: 'deleted';
  payload: {
    id: string;
  };
};

type ChangeTaskAction = {
  type: 'changed';
  payload: TaskData;
};

export type TaskAction = AddTaskAction | RemoveTaskAction | ChangeTaskAction;

export default function tasksReducer(tasks: TaskData[], action: TaskAction) {
  switch (action.type) {
    case 'added': {
      return [...tasks, action.payload];
    }

    case 'deleted': {
      return tasks.filter((t) => t.id !== action.payload.id);
    }

    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.payload.id) {
          return action.payload;
        }
        return t;
      });
    }

    default: {
      throw Error(`Unknown action`);
    }
  }
}
