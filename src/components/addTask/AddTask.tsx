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
    <div className='card'>
      <div className='card-body'>
        <form onSubmit={onSubmit}>
          <div className='mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Type...'
              aria-label='add task'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        
            <button type='submit' className='btn btn-primary'>
              Add task
            </button>
       
        </form>
      </div>
    </div>
  );
};

export default AddTask;
