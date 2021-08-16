import React from "react";
import { Card } from "react-bootstrap";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ todoItems }) => {
  return (
    <Card className="toDoList">
      {todoItems.map((item) => (
        <ToDoItem item={item} />
      ))}
    </Card>
  );
};
