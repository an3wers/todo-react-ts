import { FC, useEffect, useMemo, useState } from "react";
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
      isDone: false,
      isEditing: false,
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

  function removeTask(id:number) {
    // console.log(id)
    const filtered = tasks.filter(el => el.id !== id)
    localStorage.setItem("tasks", JSON.stringify(filtered));
    setTasks(filtered)
  }



  // удаление, редактирование, изменение

  return (
    <div className='py-5'>
      <div className='row justify-content-center'>
        <div className='col-12 col-xxl-6 col-xl-6 col-lg-8 col-md-10'>
          <div className='d-flex justify-content-between align-items-start'>
            <h1 className='lh-1'>
              Welcom, <br />
              <span className='fs-5 fw-normal'>an3wers@gmail.com</span>
            </h1>
            <button className='btn btn-outline-primary'>
              <i
                className='bi bi-box-arrow-left'
                style={{ fontSize: "1rem" }}
              ></i>
            </button>
          </div>

          <AddTask createTask={createTaskHandler} />
          <TasksList removeTask={removeTask} tasks={tasks} />

        </div>
      </div>
    </div>
  );
};

export default Home;
