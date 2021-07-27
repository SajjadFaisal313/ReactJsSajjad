import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

export const Toggle = () => {
  const [colorName, setColorName] = useState("orange");

  return (
    <div>
      <Card>
        <Button onClick={() => colorName==="Blue" ? setColorName("Orange") : setColorName("Blue")}>ChangeMe</Button>
        <h3>PickupBiz Here</h3>
        <p>This my content</p>
        <span style={{ color: colorName }}>
          <h1>PDAC Course</h1>
        </span>
        <Button onClick={()=>setColorName("Blue")}>Blue</Button>
        <Button onClick={()=>setColorName("Red")}>Red</Button>
        <Button onClick={()=>setColorName("Green")}>Green</Button>
        <Button onClick={()=>setColorName("Purple")}>Purple</Button>
      </Card>
    </div>
  );
};