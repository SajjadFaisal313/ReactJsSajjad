import React, { useState, useEffect } from "react";
import "./task.css";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { Checkbox } from "@mui/material";
import Switch from "@mui/material/Switch";
import { color } from "@mui/system";

export const Task = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const selectColor = useSelector((state) => state.colorReducer.myColor);
  const dispatch = useDispatch();

  const handleChangeColor = (col) => {
    dispatch({
      type: "ADD_COLOR",
      data: col,
    });
  };

  useEffect(() => {
    setBackgroundColor(selectColor);
  }, [selectColor]);
  return (
    <div className="main" style={{ backgroundColor: `${backgroundColor}` }}>
      <div>
        <Button
          onClick={() => handleChangeColor("#5E4FDB")}
          variant="text"
          style={{ color: "#5E4FDB", margin: "10px" }}
        >
          Red Test
        </Button>
        <Button
          onClick={() => handleChangeColor("#5E4FDB")}
          variant="contained"
          style={{ backgroundColor: "#5E4FDB", color: "white", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#5E4FDB")}
          variant="outlined"
          style={{ color: "#5E4FDB", margin: "10px" }}
        >
          Button
        </Button>
      </div>
      <div>
        <Button
          onClick={() => handleChangeColor("#F3F2FC")}
          variant="text"
          style={{ color: "#F3F2FC", margin: "10px" }}
        >
          Button 3
        </Button>
        <Button
          onClick={() => handleChangeColor("#F3F2FC")}
          variant="contained"
          style={{ backgroundColor: "#F3F2FC", color: "white", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#F3F2FC")}
          variant="outlined"
          style={{ color: "#F3F2FC", margin: "10px" }}
        >
          Button
        </Button>
      </div>{" "}
      <div>
        <Button
          onClick={() => handleChangeColor("#1ABC9C")}
          variant="text"
          style={{ color: "#1ABC9C", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#1ABC9C")}
          variant="contained"
          style={{ backgroundColor: "#1ABC9C", color: "white", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#1ABC9C")}
          variant="outlined"
          style={{ color: "#1ABC9C", margin: "10px" }}
        >
          Button
        </Button>
      </div>
      <div>
        <Button
          onClick={() => handleChangeColor("#D64B4B")}
          variant="text"
          style={{ color: "#D64B4B", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#D64B4B")}
          variant="contained"
          style={{ backgroundColor: "#D64B4B", color: "white", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#D64B4B")}
          variant="outlined"
          style={{ color: "#D64B4B", margin: "10px" }}
        >
          Button
        </Button>
      </div>
      <div>
        <Button
          onClick={() => handleChangeColor("#D64B4B")}
          variant="outlined"
          style={{ color: "#D64B4B", margin: "10px" }}
        >
          -
        </Button>
        <Button
          onClick={() => handleChangeColor("#5E4FDB")}
          variant="outlined"
          style={{ color: "#5E4FDB", margin: "10px" }}
        >
          +
        </Button>
        <Checkbox />
      </div>
      <div>
        <Button
          onClick={() => handleChangeColor("#D64B4B")}
          variant="contained"
          style={{ backgroundColor: "#D64B4B", margin: "10px" }}
        >
          -
        </Button>
        <Button
          onClick={() => handleChangeColor("#5E4FDB")}
          variant="contained"
          style={{ backgroundColor: "#5E4FDB", margin: "10px" }}
        >
          +
        </Button>
        <Checkbox defaultChecked />
      </div>
      <div>
        <Button
          onClick={() => handleChangeColor("#852121")}
          variant="contained"
          style={{ backgroundColor: "#852121", color: "white", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#FFE3E3")}
          variant="contained"
          style={{ backgroundColor: "#FFE3E3", color: "white", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#C06801")}
          variant="contained"
          style={{ backgroundColor: "#C06801", color: "white", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#FFF7E7")}
          variant="contained"
          style={{ backgroundColor: "#FFF7E7", color: "white", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#0E4316")}
          variant="contained"
          style={{ backgroundColor: "#0E4316", color: "white", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#E1EFE1")}
          variant="contained"
          style={{ backgroundColor: "#E1EFE1", color: "white", margin: "10px" }}
        >
          Button
        </Button>
      </div>
      <div>
        <Button
          onClick={() => handleChangeColor("#000000")}
          variant="contained"
          style={{ backgroundColor: "#000000", color: "white", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#FFFFFF")}
          variant="contained"
          style={{ backgroundColor: "#FFFFFF", color: "white", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#808080")}
          variant="contained"
          style={{ backgroundColor: "#808080", color: "white", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#D8D8D8")}
          variant="contained"
          style={{ backgroundColor: "#D8D8D8", color: "white", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#F0F0F0")}
          variant="contained"
          style={{ backgroundColor: "#F0F0F0", color: "white", margin: "10px" }}
        >
          Button
        </Button>
        <Button
          onClick={() => handleChangeColor("#F6F6F6")}
          variant="contained"
          style={{ backgroundColor: "#F6F6F6", color: "white", margin: "10px" }}
        >
          Button
        </Button>
      </div>
      <div>
        <Switch style={{ color: "#1ABC9C" }} defaultChecked />
        <Switch style={{ color: "#D64B4B" }} />
        <Switch style={{ color: "#1ABC9C" }} disabled defaultChecked />
        <Switch style={{ color: "#D64B4B" }} disabled />
      </div>
    </div>
  );
};
