import React, { FC, useState } from "react";

interface IAddTaskProps {
  createTask: (value:string) => void
}

const AddTask: FC<IAddTaskProps> = ({createTask}) => {

  const [value, setValue] = useState<string>('')

  function onSubmit(e:React.FormEvent) {
    e.preventDefault()
    // console.log(value)
    createTask(value)
    setValue('')
  }

  return (
    <div className='card mt-5'>
      <div className='card-body'>
        <form onSubmit={onSubmit}>
          <div className='d-flex'>
            <input
              type='text'
              className='form-control'
              placeholder='Add new task...'
              aria-label='add task'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' className='btn btn-primary ms-2'>
              <i className="bi bi-plus"></i>
            </button>
          </div>
        
            
       
        </form>
      </div>
    </div>
  );
};

export default AddTask;
