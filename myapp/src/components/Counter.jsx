import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios"

export const Counter = () => {
  const [cntr, setCntr] = useState(0);
  const handleApi = () => {
    axios.get("http://localhost:4000/emp").then(res=>{
      console.log()
    })
  }
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
          </td>
        </tr>
      </table>
    </div>
  );
};
