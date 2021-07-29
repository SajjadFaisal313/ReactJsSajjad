import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./Piano.css";

export const Piano = () => {
  const handlePlay = (bit) => {
    const audio = new Audio(`Pianosounds/${bit}.mp3`);
    audio.play();
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "a" && handlePlay("A"));
    if (e.key === "a" && handlePlay("B"));
    if (e.key === "a" && handlePlay("C"));
    if (e.key === "a" && handlePlay("D"));
    if (e.key === "a" && handlePlay("E"));
    if (e.key === "a" && handlePlay("F"));
    if (e.key === "a" && handlePlay("G"));
  });
  return (
    <div>
      <Row>
        {/* <Col md={1}></Col> */}
        <Col>
          <Button className="sa" onMouseDown={() => handlePlay("A")}>
            Sa
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("B")}>
            Re
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("C")}>
            Ga
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("D")}>
            Ma
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("E")}>
            Pa
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("F")}>
            Dh
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("G")}>
            Ni
          </Button>
        </Col>
        <Col>
          <Button className="sa" onMouseDown={() => handlePlay("A")}>
            Sa
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("B")}>
            Re
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("C")}>
            Ga
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("D")}>
            Ma
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("E")}>
            Pa
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("F")}>
            Dh
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("G")}>
            Ni
          </Button>
        </Col>
        <Col>
          <Button className="sa" onMouseDown={() => handlePlay("A")}>
            Sa
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("B")}>
            Re
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("C")}>
            Ga
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("D")}>
            Ma
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("E")}>
            Pa
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("F")}>
            Dh
          </Button>
          <Button className="sa" onMouseDown={() => handlePlay("G")}>
            Ni
          </Button>
        </Col>
        {/* <Col md={1}></Col> */}
      </Row>
    </div>
  );
};
