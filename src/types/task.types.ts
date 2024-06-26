import type { IBase } from '@/types/root.type';

export enum EnumTaskPriority {
  low = 'low',
  medium = 'medium',
  high = 'high'
}

export interface ITaskResponse extends IBase{
  name: string;
  priority?: EnumTaskPriority;
  isCompleted: boolean;
}

export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updateAt'>>;
