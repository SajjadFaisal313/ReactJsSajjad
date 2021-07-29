import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./Piano.css";

export const Piano = () => {
  const handlePlay = (bit) => {
  const audio = new Audio(`Pianosounds/${bit}.mp3`);
  audio.play();
  };
  return (
    <div>
      <Row>
        {/* <Col md={1}></Col> */}
        <Col>
          <Button className="sa" onMouseDown={() => handlePlay("A")}>Sa</Button>
          <Button className="sa" onMouseDown={() => handlePlay("B")}>Re</Button>
          <Button className="sa" onMouseDown={() => handlePlay("C")}>Ga</Button>
          <Button className="sa" onMouseDown={() => handlePlay("D")}>Ma</Button>
          <Button className="sa" onMouseDown={() => handlePlay("E")}>Pa</Button>
          <Button className="sa" onMouseDown={() => handlePlay("F")}>Dh</Button>
          <Button className="sa" onMouseDown={() => handlePlay("G")}>Ni</Button>
        </Col>
        <Col>
          <Button className="sa" onMouseDown={() => handlePlay("A")}>Sa</Button>
          <Button className="sa" onMouseDown={() => handlePlay("B")}>Re</Button>
          <Button className="sa" onMouseDown={() => handlePlay("C")}>Ga</Button>
          <Button className="sa" onMouseDown={() => handlePlay("D")}>Ma</Button>
          <Button className="sa" onMouseDown={() => handlePlay("E")}>Pa</Button>
          <Button className="sa" onMouseDown={() => handlePlay("F")}>Dh</Button>
          <Button className="sa" onMouseDown={() => handlePlay("G")}>Ni</Button>
        </Col>
        <Col>
          <Button className="sa" onMouseDown={() => handlePlay("A")}>Sa</Button>
          <Button className="sa" onMouseDown={() => handlePlay("B")}>Re</Button>
          <Button className="sa" onMouseDown={() => handlePlay("C")}>Ga</Button>
          <Button className="sa" onMouseDown={() => handlePlay("D")}>Ma</Button>
          <Button className="sa" onMouseDown={() => handlePlay("E")}>Pa</Button>
          <Button className="sa" onMouseDown={() => handlePlay("F")}>Dh</Button>
          <Button className="sa" onMouseDown={() => handlePlay("G")}>Ni</Button>
        </Col>
        {/* <Col md={1}></Col> */}
      </Row>
    </div>
  );
};
