import { useState } from "react";
const pages = () => {
  const [InputValue, setInputValue] = useState(0);
  const [TaskValue, setTaskValue] = useState("");
  const [EditTaskValue, setEditTaskValue] = useState("");
  const [EditInputValue, setEditInputValue] = useState(0);
  const [lists, setLists] = useState([]);
  const [EdValue, setEdValue] = useState(0);
  const handleInputValue = (value) => {
    setInputValue(value);
    console.log(InputValue);
    setTaskValue(value);
  };

  const tap = () => {
    const ids = Math.floor(Math.random() * 100);

    if (InputValue == "") return;
    const newTask = {
      value: InputValue,
      id: ids,
      stats: false,
    };
    setLists([...lists, newTask]);
    setInputValue("");
    setTaskValue("");
  };
  const handleEditInputValue = (value) => {
    setEditInputValue(value);
    console.log(EditInputValue);
    setEditTaskValue(value);
  };
  const sub = (id) => {
    if (EditInputValue == "") return;
    const newTasks = {
      values: EditInputValue,
      ids: id,
    };
    setEditInputValue("");
    setEditTaskValue("");
    console.log("hi" + " " + newTasks.values);
    const editToDo = lists.map((listing) => {
      if (listing.id === id) {
        listing.value = newTasks.values;
        setLists([...lists]);
        setEdValue(0);
      }
    });
  };
  const doneTask = (sigma) => {
    const doneTask = lists.map((listing) => {
      if (listing.id === sigma) {
        listing.stats = true;
        setLists([...lists]);
      }
    });
    console.log();
  };
  const remTask = (idies) => {
    console.log("id", idies);
    const newTasks = lists.filter((list) => {
      return list.id !== idies;
    });
    setLists(newTasks);
  };

  return (
    <div className="content">
      <div className="container">
        <input
          type="text"
          className="input"
          value={TaskValue}
          placeholder="Your plan today is..."
          onChange={(event) => handleInputValue(event.target.value)}
        />
        <button className="button" onClick={tap}>
          Add
        </button>
      </div>
      <div>
        {lists.map((list, index) => {
          return (
            <div key={index}>
              <div
                key={index}
                style={{
                  backgroundColor: list.stats ? "red" : "rgb(242, 157, 100)",
                }}
                className="listing"
              >
                <div>{list.value}</div>
                {list.stats === false ? (
                  <div className="listing2">
                    <div onClick={() => remTask(list.id)}>remove</div>
                    <div onClick={() => doneTask(list.id)}>comp</div>
                    <div onClick={() => setEdValue(list.id)}>edit</div>
                  </div>
                ) : (
                  ""
                )}

                {EdValue === list.id ? (
                  <div>
                    <input
                      value={EditTaskValue}
                      onChange={(events) =>
                        handleEditInputValue(events.target.value)
                      }
                    />
                    <button className="button3" onClick={() => sub(list.id)}>
                      change
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default pages;
