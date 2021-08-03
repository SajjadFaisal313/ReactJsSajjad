import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./TabsManager.css";
import { L2 } from "./SectionI/L2";
import { L5 } from "./SectionI/L5";

export const TabsManager = () => {
  return (
    <Tabs
      defaultActiveKey="SectionIII"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="SectionI" title="Section I">
        <h3>L2</h3>
        <L2 />
        <h3>L5</h3>
        <L5 />
      </Tab>
      <Tab eventKey="SectionII" title="Section II">
        Tab2
      </Tab>
      <Tab eventKey="SectionIII" title="Section III">
        Tab3
      </Tab>
    </Tabs>
  );
};
