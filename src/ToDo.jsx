/* eslint-disable react/prop-types */
import { TbCheckbox } from "react-icons/tb";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function ToDo({ todoTask, setTodoTask }) {
  function handleChecked(title) {
    setTodoTask((todos) =>
      todos.map((todo) =>
        todo.title === title ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  function handleDelete(title) {
    setTodoTask((todos) => todos.filter((todo) => todo.title !== title));
  }

  function formatDate(date) {
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formattedDate;
  }

  return (
    <div className="w-[100%] p-4 flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center mt-4">
      {todoTask.map((todo) => (
        <div
          className="flex flex-col p-4 gap-4 w-full border-2 border-gray-200 rounded-lg bg-white shadow-lg md:w-[45%]"
          key={todo.title}
        >
          <div className="flex w-full justify-between items-center">
            <h2
              className={`text-xl uppercase font-semibold w-[70%] break-words ${
                todo.checked ? "line-through" : ""
              }`}
            >
              {todo.title}
            </h2>
            <div className="flex gap-2 items-center">
              {todo.checked ? (
                <TbCheckbox
                  size={25}
                  color={"blueviolet"}
                  onClick={() => handleChecked(todo.title)}
                />
              ) : (
                <MdOutlineCheckBoxOutlineBlank
                  size={25}
                  color={"blueviolet"}
                  onClick={() => handleChecked(todo.title)}
                />
              )}
              <MdDelete
                size={25}
                color={"blueviolet"}
                onClick={() => handleDelete(todo.title)}
              />
            </div>
          </div>
          <div>
            <h3
              className={`${todo.checked ? "line-through" : ""} text-gray-600`}
            >
              {formatDate(new Date())}
            </h3>
          </div>
          <div className="w-full">
            <p
              className={`w-full text-xl break-words text-gray-700 ${
                todo.checked ? "line-through" : ""
              }`}
            >
              {todo.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToDo;
