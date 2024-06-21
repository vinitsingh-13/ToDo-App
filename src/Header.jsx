/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ToDo from "./ToDo";

function Header() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todoTask, setTodoTask] = useState([]);
  let newArr = [];
  function handleAddTask(e) {
    e.preventDefault();
    if (!title || !desc) {
      toast.error("Please enter the task first");
      return;
    }
    const obj = {
      title: title,
      desc: desc,
      checked: false,
    };
    if (localStorage.length === 0) {
      newArr.push(obj);
      localStorage.setItem("task", JSON.stringify(newArr));
    } else {
      let task = JSON.parse(localStorage.getItem("task"));
      newArr.push(...task);
      newArr.push(obj);
      localStorage.setItem("task", JSON.stringify(newArr));
    }
    toast.success("Task added to taskmanager");
    setTodoTask([...todoTask, obj]);
    setTitle("");
    setDesc("");
  }

  useEffect(function () {
    let onStartTask = JSON.parse(localStorage.getItem("task"));
    if(!onStartTask) return
      setTodoTask(onStartTask)
  }, []);

  return (
    <>
      <div className=" w-full flex items-center justify-center py-10 h-[60vh]  px-4 md:w-[95%] lg:w-1/2 ">
        <div className="bg-white w-full flex item-center justify-center rounded-lg px-12 pt-12 pb-14 gap-6 flex-col shadow-lg border-2 border-gray-200 lg:w-full">
          <div className=" flex flex-col justify-center items-center gap-3 ">
            <h1 className="text-3xl font-semibold text-[#7a42f4;] md:text-4xl ">
              To Do App{" "}
            </h1>
            <p className="text-xl ">Add your desciption </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 lg:w-full">
            <form className="flex flex-col gap-3 lg:w-full ">
              <input
                type="text"
                placeholder="Enter your title"
                className="border-[2px] border-gray-200 rounded-md px-3 py-2 focus:outline-none w-[80vw] lg:w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter your description"
                className="border-[2px] border-gray-200 rounded-md px-3 py-2 focus:outline-none  "
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </form>
            <button
              className="bg-[#7a42f4;] text-white py-2 px-4 rounded-lg hover:bg-[#5a2cc8;]"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
      {todoTask.length !== 0 && (
        <ToDo todoTask={todoTask} setTodoTask={setTodoTask} />
      )}
    </>
  );
}

export default Header;
