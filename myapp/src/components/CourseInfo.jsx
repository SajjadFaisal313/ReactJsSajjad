export const CourseInfo=({CourseName, Institute, Contact, City})=>{
    return(
     
        <div>
          
        <table border="3px">
        <tr>
          <td>CourseName</td>
          <td>:</td>
          <td><span style={{color:"red"}}>{CourseName}</span></td>
        </tr>
        <tr>
          <td>Institute</td>
          <td>:</td>
          <td><span style={{color:"blue"}}>{Institute} </span></td>
        </tr>
        <tr>
          <td>Contact</td>
          <td>:</td>
          <td><span style={{color:"green"}}>{Contact} </span></td>
        </tr>
        <tr>
          <td>City</td>
          <td>:</td>
          <td><span style={{color:"orange"}}>{City}</span></td>
        </tr>
      </table>
      </div>
    )
}