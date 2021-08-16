import React, { useState } from "react";
import { ToDoList } from "./ToDo/ToDoList";
import { AddToDo } from "./ToDo/AddToDo";
import { Row, Col, Card } from "react-bootstrap";
import "./ToDo/ToDo.css";

export const Home = () => {
  const [todoItems, setToDoItems] = useState(["Learning React", "Lunch time"]);
  const handleAdd = (newToDo) => {
    setToDoItems([...todoItems, newToDo]);
  };
  return (
    <Card className="home">
      <Row>
        <Col md={3}></Col>
        <Col className="centralCol" md={6}>
          <AddToDo handleAdd={handleAdd} />

          <ToDoList todoItems={todoItems} />
        </Col>
        <Col md={3}></Col>
      </Row>
    </Card>
  );
};
