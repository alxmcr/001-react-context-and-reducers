import { TaskData } from '../@types/appTypes';

const task001: TaskData = {
  id: 'task-0001',
  name: 'Visit Kafka Museum',
  done: true,
};

const task002: TaskData = {
  id: 'task-0002',
  name: 'Watch a puppet show',
  done: false,
};

const task003: TaskData = {
  id: 'task-0003',
  name: 'Lennon Wall pic',
  done: false,
};

export const MOCK_TASKS: TaskData[] = [task001, task002, task003];
