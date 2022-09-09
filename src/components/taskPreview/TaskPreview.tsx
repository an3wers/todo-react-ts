import { FC, ChangeEventHandler, useState, ReactEventHandler } from "react";
import { ITask } from "../../types/types";

interface ITaskPreviewProps {
  task: ITask;
  removeTask: (id: number) => void;
  editTask: (id: number) => void;
  doneTask: (id: number) => void;
  saveTask: (id: number, value: string) => void;
  closeTask: (id: number) => void;
}

const TaskPreview: FC<ITaskPreviewProps> = ({
  task,
  removeTask,
  saveTask,
  editTask,
  doneTask,
  closeTask,
}) => {
  const [currentTask, setCurrentTask] = useState<string>(task.title); // ?

  // а с типа все ок?
  const handleRemove = (id: number) => {
    removeTask(id);
  };

  const setNewTitle: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCurrentTask(event.target.value);
  };

  // а с типа все ок?
  const onSave = (id: number, value: string) => {
    saveTask(id, value);
  };

  const onEdit = (id: number) => {
    editTask(id);
  };

  const onDone = (id: number) => {
    doneTask(id);
  };

  return (
    <div className='card'>
      <div className='card-body'>
        {!task.isEditing ? (
          <p
            className={
              task.isDone ? "text-decoration-line-through" : "fw-semibold"
            }
          >
            {task.title}
          </p>
        ) : (
          <div>
            <input
              className='form-control'
              value={currentTask}
              onChange={setNewTitle}
              type='text'
            />
            <div className='d-flex mt-2'>
              <button
                onClick={() => onSave(task.id, currentTask)}
                className='btn btn-sm btn-outline-success'
              >
                Save
              </button>
              <button
                onClick={() => {
                  closeTask(task.id);
                  setCurrentTask(task.title)
                }}
                className='btn btn-sm btn-outline-danger ms-2'
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className='d-flex justify-content-between align-items-center'>
          <span className='text-secondary'>{task.date}</span>
          <div className='d-flex'>
            <button
              disabled={task.isDone}
              onClick={() => onDone(task.id)}
              className='btn btn-outline-primary btn-sm'
            >
              <i className='bi bi-check2'></i>
            </button>
            <button
              disabled={task.isDone}
              onClick={() => onEdit(task.id)}
              className='btn btn-outline-primary ms-2 btn-sm'
            >
              <i className='bi bi-pencil'></i>
            </button>
            <button
              disabled={task.isDone}
              onClick={() => handleRemove(task.id)}
              className='btn btn-outline-danger ms-2 btn-sm'
            >
              <i className='bi bi-trash3'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPreview;
