import { FC } from "react";
import { ITask } from "../../types/types";
import TaskPreview from "../taskPreview/TaskPreview";

interface ITasksListProps {
  tasks: ITask[];
  removeTask: (id: number) => void;
  editTask: (id: number) => void;
  doneTask: (id: number) => void;
  saveTask: (id: number, value: string) => void;
  closeTask: (id: number) => void;
}

const TasksList: FC<ITasksListProps> = ({
  tasks,
  removeTask,
  saveTask,
  editTask,
  doneTask,
  closeTask,
}) => {
  return (
    <div className='tasks-list'>
      {tasks.length ? (
        tasks.map((task) => (
          <TaskPreview
            removeTask={removeTask}
            saveTask={saveTask}
            editTask={editTask}
            doneTask={doneTask}
            closeTask={closeTask}
            key={task.id}
            task={task}
          />
        ))
      ) : (
        <p className='text-center py-5'>Задачь нет.</p>
      )}
    </div>
  );
};

export default TasksList;
