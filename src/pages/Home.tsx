import { FC, useEffect, useState } from "react";
import AddTask from "../components/addTask/AddTask";
import TasksList from "../components/tasksList/TasksList";
import { ITask } from "../types/types";

const Home: FC = () => {
  // const [task, useTask] = useState<string>('')
  const [tasks, setTasks] = useState<ITask[]>([]);

  function createTaskHandler(val: string) {
    const current: ITask = {
      date: new Date().toLocaleDateString(),
      title: val,
      id: Date.now(),
    };

    setTasks((state) => {
      const res = [...state, current];
      localStorage.setItem("tasks", JSON.stringify(res));
      return res;
    });
  }

  useEffect(() => {
    const dataFromLS = localStorage.getItem("tasks");

    if (dataFromLS && !tasks.length) {
      setTasks([...tasks, ...JSON.parse(dataFromLS)]);
    }
  }, []);

  return (
    <div className='py-5'>
      <div className='row justify-content-center'>
        <div className='col-12 col-xxl-6 col-xl-6 col-lg-8 col-md-10'>
          <div className='d-flex justify-content-between align-items-start'>
            <h1 className='mb-4 lh-1'>
              Welcom, <br />
              <span className='fs-5'>an3wers@gmail.com</span>
            </h1>
            <button className='btn btn-light'>
              <i
                className='bi bi-box-arrow-left'
                style={{ fontSize: "1.5rem" }}
              ></i>
            </button>
          </div>

          <AddTask createTask={createTaskHandler} />
          <TasksList tasks={tasks} />

        </div>
      </div>
    </div>
  );
};

export default Home;
