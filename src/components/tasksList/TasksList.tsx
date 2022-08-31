import { FC } from "react";
import { ITask } from "../../types/types";

interface ITasksListProps {
  tasks: ITask[];
}

const TasksList: FC<ITasksListProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.length ? (
        tasks.map((task) => <p key={task.id}>{task.title}</p>)
      ) : (
        <p>Задачи нет.</p>
      )}
    </div>
  );
};

export default TasksList;
