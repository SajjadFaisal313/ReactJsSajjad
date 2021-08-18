import React, { useEffect, useState } from "react";
import { Card, Button, Form, Row, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getEmpDetails } from "../Selector/EmpDetailsSelector";
import { AddEmp } from "../Action/EmpDetailsAction";

const EmpDetails = () => {
  const selector = useSelector(getEmpDetails);
  const [empData, setEmpData] = useState();

  const [mentersName, setMentersName] = useState();
  const [mentersDesc, setMentersDesc] = useState();
  const [mentersImg, setMentersImg] = useState();

  useEffect(() => {
    setEmpData(selector);
  }, [selector]);

  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch(AddEmp(mentersName, mentersDesc, mentersImg));
  };

  return (
    <div>
      <Row>
        <Form.Control
          placeholder="Name"
          className="mt-2"
          style={{ width: "50rem", marginLeft: "50px" }}
          onChange={(e) => setMentersName(e.target.value)}
        />{" "}
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setMentersDesc(e.target.value)}
        ></input>{" "}
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setMentersImg(e.target.value)}
        ></input>{" "}
        <Button
          style={{ marginLeft: "50px", width: "6%" }}
          onClick={handleDispatch}
        >
          Dispatch
        </Button>
      </Row>
      {empData &&
        empData.map((itemCurrent) => {
          return (
            <Card
              style={{
                width: "18rem",
                display: "inline-block",
                textAlign: "center",
                backgroundColor: "orange",
              }}
            >
              <Card.Title style={{ backgroundColor: "navy", color: "white" }}>
                Mentors
              </Card.Title>
              <Card.Body>
                <Card.Header
                  style={{ backgroundColor: "navy", color: "white" }}
                >
                  {itemCurrent.name}
                </Card.Header>
                <Card.Img
                  src={itemCurrent.img}
                  style={{ width: "10rem", height: "16rem" }}
                />
                <p>{itemCurrent.desc}</p>
                <Button variant="outline-success">More Details</Button>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};

export default EmpDetails;
