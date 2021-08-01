import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "./Audioplayer.css";

export const Audioplayer = () => {
  const audio = new Audio("audio2.mp3");
  const handleAudioplayer = () => {
    audio.play();
  };
  const handleAudiopause = () => {
    audio.pause();
  };
  return (
    <Card className="player">
      <Row>
        <Col></Col>
        <Col>
          <Button onClick={handleAudioplayer}>Play</Button>
        </Col>
        <Col>
          <Button onClick={handleAudiopause}>Pause</Button>
        </Col>
        <Col>
          <Button onMouseDown={handleAudioplayer} onMouseUp={handleAudiopause}>
            Hold
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Card>
  );
};
