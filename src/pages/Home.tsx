import { FC, useContext, useEffect, useMemo, useState } from "react";
import AddTask from "../components/addTask/AddTask";
import Filters from "../components/filters/filters";
import Pagination from "../components/pagination/pagination";
import TasksList from "../components/tasksList/TasksList";
import { AuthContext } from "../context";
import { ITask, optionsType } from "../types/types";

const Home: FC = () => {
  // const [task, useTask] = useState<string>('')
  const [tasks, setTasks] = useState<ITask[]>([]);
  // const [compleatedTasks, setCompliatedTasks] = useState<ITask[]>([])

  // 'by date', 'by name'
  const [selectedSort, setSelectedSort] = useState<string>(""); // selected sort by default
  const [searchValue, setSearchValue] = useState<string>("");

  const { isAuth } = useContext(AuthContext)

  const sortOptions: optionsType[] = [
    { name: "by date", value: "date" },
    { name: "by name", value: "name" },
    { name: "by default", value: "default" },
  ];

  const [page, setPage] = useState<number>(1);

  const MAX_LIMIT_ON_PAGE = 3;

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

  function editTaskHandler(id: number) {
    setTasks(tasks.map(el => ({
      ...el,
      isEditing: el.id === id ? true : false
    })))

  }

  function saveTaskHandler(id: number, value: string) {
    const current = tasks.find((el) => el.id === id);
    if (current) {
      current.title = value;
      current.isEditing = false;
      setTasks([...tasks]);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  function closeTaskHandler(id: number) {
    setTasks(tasks.map(el => {
      if (el.id === id) {
        el.isEditing = false
      }
      return el
    }))
  }

  function doneTaskHandler(id: number) {

    setTasks(tasks.map(el => {
      if (el.id === id) {
        el.isDone = true
      }
      return el
    }))

    localStorage.setItem("tasks", JSON.stringify(tasks.filter(el => !el.isDone)));

  }

  const sortedTask = useMemo(() => {
    // TODO sort by date
    if (selectedSort) {
      switch (selectedSort) {
        case "name":
          return [...tasks].sort((a, b) =>
            a["title"].localeCompare(b["title"])
          );
        case "default":
          return [...tasks].sort((a, b) => {
            return a.id - b.id;
          });
        default:
          return tasks;
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

  // const currentTasks = sortedAndSearchedTasks.slice(firstTaskIndex, lastTaskIndex)

  const sortedSearchedAndPageSlicedTasks = useMemo(() => {
    const lastTaskIndex = page * MAX_LIMIT_ON_PAGE; // 3 // 6
    const firstTaskIndex = lastTaskIndex - MAX_LIMIT_ON_PAGE; // 0 // 3
    return sortedAndSearchedTasks.slice(firstTaskIndex, lastTaskIndex);
  }, [page, sortedAndSearchedTasks]);

  const totalPage = useMemo(() => {
    return Math.ceil(tasks.length / MAX_LIMIT_ON_PAGE);
  }, [tasks]);

  function sortHandler(value: string) {
    setSelectedSort(value);

  }

  function searchHandler(value: string) {
    setSearchValue(value);
  }

  function prevPage() {
    setPage((prev) => prev - 1);
  }
  function nextPage() {
    setPage((prev) => prev + 1);
  }

  // удаление, редактирование, изменение

  return (
    <div className='py-5'>
      <div className='row justify-content-center'>
        <div className='col-12 col-xxl-6 col-xl-6 col-lg-8 col-md-10'>
          <div className='d-flex justify-content-between align-items-start'>
            <h1 className='lh-1'>
              Welcom, <br />
              <span className='fs-5 fw-normal'>{isAuth.login || ''}</span>
            </h1>
            <button className='btn btn-outline-primary'>
              <i
                className='bi bi-box-arrow-left'
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
          <TasksList
            removeTask={removeTask}
            editTask={editTaskHandler}
            saveTask={saveTaskHandler}
            tasks={sortedSearchedAndPageSlicedTasks}
            doneTask={doneTaskHandler}
            closeTask={closeTaskHandler}
          />
          {sortedAndSearchedTasks.length > MAX_LIMIT_ON_PAGE && (
            <Pagination
              currentPage={page}
              prevPage={prevPage}
              nextPage={nextPage}
              totalPage={totalPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
