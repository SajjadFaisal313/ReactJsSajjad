import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export const Counter = () => {
  const [cntr, setCntr] = useState(0);
  const handleApi = () => {
    axios.get("http://localhost:4000").then((res) => {
      console.log(res.data.data[2]);
    });
  };
  return (
    <div>
      <table>
        <tr>
          <td>
            <Button
              variant="primary"
              onClick={() => cntr > 0 && setCntr(cntr - 1)}
            >
              -
            </Button>
          </td>
          <td>
            <h3>{cntr}</h3>
          </td>
          <td>
            <Button
              variant="primary"
              onClick={() => cntr < 10 && setCntr(cntr + 1)}
            >
              +
            </Button>
            <Button onClick={handleApi}>call my api</Button>
          </td>
        </tr>
      </table>
    </div>
  );
};
