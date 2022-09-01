import { FC } from "react";
import { ITask } from "../../types/types";

interface ITaskPreviewProps {
  task: ITask;
  removeTask: (id: number) => void;
}

const TaskPreview: FC<ITaskPreviewProps> = ({ task, removeTask }) => {

const handleRemove = (id:number) => {
  removeTask(id)
}

  return (
    <div className='card'>
      <div className='card-body'>
        <p className='fw-semibold'>{task.title}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <span className='text-secondary'>{task.date}</span>
          <div className='d-flex'>
            <button className='btn btn-outline-primary btn-sm'>
              <i className='bi bi-check2'></i>
            </button>
            <button className='btn btn-outline-primary ms-2 btn-sm'>
              <i className='bi bi-pencil'></i>
            </button>
            <button onClick={() => handleRemove(task.id)} className='btn btn-outline-danger ms-2 btn-sm'>
              <i className='bi bi-trash3'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPreview;
