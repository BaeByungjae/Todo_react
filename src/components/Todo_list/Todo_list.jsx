import React, { useEffect, useState } from "react";
import CheckList from "../check_list";
import HeaderTodo from "../header_todo/header_todo";
import TodoItem from "../Todo_item/Todo_item";

const TodoList = (props) => {
  const [lists, setLists] = useState([]);
  const [states, setStates] = useState(-1);
  const createList = (list) => {
    setLists((lists) => [
      ...lists,
      {
        id: Date.now(),
        name: list,
        state: false,
      },
    ]);
  };
  const deleteList = (list) => {
    setLists((lists) => lists.filter((item) => item.id !== list.id));
  };
  const updateList = (list, value) => {
    setLists((lists) =>
      lists.map((item) => {
        if (item.id === list.id) {
          return { ...list, name: value };
        }
        return item;
      })
    );
  };
  const completeList = (list) => {
    setLists((lists) =>
      lists.map((item) => {
        if (item.id === list.id) {
          return { ...list, state: !list.state };
        }
        return item;
      })
    );
  };
  const updateState = (value) => {
    setStates(value);
    console.log(states);
  };
  return (
    <div className="todo-container">
      <HeaderTodo createList={createList}></HeaderTodo>
      <CheckList handleState={updateState} />
      <ul className="list-container">
        {lists.map((list) => {
          if (states === -1)
            return (
              <TodoItem
                handleUpdate={updateList}
                handleDelete={deleteList}
                handleComplete={completeList}
                list={list}
                key={list.id}
              />
            );
          else {
            if (states == list.state)
              return (
                <TodoItem
                  handleUpdate={updateList}
                  handleDelete={deleteList}
                  handleComplete={completeList}
                  list={list}
                  key={list.id}
                />
              );
          }
        })}
      </ul>
    </div>
  );
};

export default TodoList;
