import React from "react";

// import FormImpl from "react-bootstrap/esm/Form";
import { CourseInfo } from "./CourseInfo";

export const CourseInfoParent = () => {
  return (
    <div>
      <h1>List Of Institutions</h1>
      <tr>
        <td>
          <CourseInfo
            CourseName="B.E (Mech)"
            Institute="SGGS"
            City="Nanded"
            Contact="8956487481"
          />
        </td>
        <td>
          <CourseInfo
            CourseName="B.E (Civil)"
            Institute="DY Patil"
            City="Pune"
            Contact="9745658986"
          />
        </td>
        <td>
          <CourseInfo
            CourseName="B.E (Electrical)"
            Institute="GECA"
            City="Aurangabad"
            Contact="9356446645"
          />
        </td>
      </tr>
      <tr>
        <td>
          <CourseInfo
            CourseName="B.E (Mech)"
            Institute="SGGS"
            City="Nanded"
            Contact="8956487481"
          />
        </td>
        <td>
          <CourseInfo
            CourseName="B.E (Civil)"
            Institute="DY Patil"
            City="Pune"
            Contact="9745658986"
          />
        </td>
        <td>
          <CourseInfo
            CourseName="B.E (Electrical)"
            Institute="GECA"
            City="Aurangabad"
            Contact="9356446645"
          />
        </td>
      </tr>
      <tr>
        <td>
          <CourseInfo
            CourseName="B.E (Mech)"
            Institute="SGGS"
            City="Nanded"
            Contact="8956487481"
          />
        </td>
        <td>
          <CourseInfo
            CourseName="B.E (Civil)"
            Institute="DY Patil"
            City="Pune"
            Contact="9745658986"
          />
        </td>
        <td>
          <CourseInfo
            CourseName="B.E (Electrical)"
            Institute="GECA"
            City="Aurangabad"
            Contact="9356446645"
          />
        </td>
      </tr>
      <p>Hello</p>
    </div>
  );
};
