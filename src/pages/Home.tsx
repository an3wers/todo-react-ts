import { FC, useEffect, useMemo, useState } from "react";
import AddTask from "../components/addTask/AddTask";
import Filters from "../components/filters/filters";
import Pagination from "../components/pagination/pagination";
import TasksList from "../components/tasksList/TasksList";
import { ITask, optionsType } from "../types/types";

const Home: FC = () => {
  // const [task, useTask] = useState<string>('')
  const [tasks, setTasks] = useState<ITask[]>([]);

  // 'by date', 'by name'
  const [selectedSort, setSelectedSort] = useState<string>(""); // selected sort by default
  const [searchValue, setSearchValue] = useState<string>("");

  const sortOptions: optionsType[] = [
    { name: "by date", value: "date" },
    { name: "by name", value: "name" },
    { name: "by default", value: "default" },
  ];

  const [page, setPage] = useState<number>(1);
  
  const MAX_LIMIT = 3;

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

  function removeTask(id: number) {
    // console.log(id)
    const filtered = tasks.filter((el) => el.id !== id);
    localStorage.setItem("tasks", JSON.stringify(filtered));
    setTasks(filtered);
  }

  const sortedTask = useMemo(() => {

    // TODO sort by date
    if (selectedSort) {
      switch (selectedSort) {
        case "name":
          return [...tasks].sort((a, b) =>
            a["title"].localeCompare(b["title"])
          );
          break;
        case "default":
          return [...tasks].sort((a, b) => {
            return a.id - b.id;
          });
          break;
        default:
          return tasks;
          break;
      }
    } else {
      return tasks;
    }
  }, [selectedSort, tasks]);

  const sortedAndSearchedTasks = useMemo(() => {
    return sortedTask.filter((el) =>
      el.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, sortedTask]);

  function sortHandler(value: string) {
    setSelectedSort(value);

    // move to useMemo
    // if(value === 'name') {

    //   setTasks([...tasks].sort((a, b) => a['title'].localeCompare(b['title'])))
    // }
    // else if(value === 'default') {
    //   setTasks([...tasks].sort((a, b) => {
    //     return a.id - b.id
    //   }))
    // }
  }

  function searchHandler(value: string) {
    setSearchValue(value);
  }

  // удаление, редактирование, изменение

  return (
    <div className="py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-xxl-6 col-xl-6 col-lg-8 col-md-10">
          <div className="d-flex justify-content-between align-items-start">
            <h1 className="lh-1">
              Welcom, <br />
              <span className="fs-5 fw-normal">an3wers@gmail.com</span>
            </h1>
            <button className="btn btn-outline-primary">
              <i
                className="bi bi-box-arrow-left"
                style={{ fontSize: "1rem" }}
              ></i>
            </button>
          </div>

          <AddTask createTask={createTaskHandler} />
          <Filters
            options={sortOptions}
            sortValue={selectedSort}
            searchValue={searchValue}
            onSort={sortHandler}
            onSearch={searchHandler}
          />
          <TasksList removeTask={removeTask} tasks={sortedAndSearchedTasks} />
          {tasks.length > MAX_LIMIT && <Pagination />}
        </div>
      </div>
    </div>
  );
};

export default Home;
