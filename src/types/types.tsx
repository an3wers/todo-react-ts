export interface ITask {
  id: number;
  title: string;
  date: string;
  isDone: boolean;
  isEditing: boolean;
}

export type optionsType = {
  value: string
  name: string
}

export interface ILogin {
  email: string,
  password: string,
  token: string,
}
