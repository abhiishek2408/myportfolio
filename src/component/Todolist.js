import React, {useState} from 'react'


const Todolist =()=>{

const [student,setStudent] = useState({
    name:"Abhishek",
    age:20,
    cgpa:7.6
})


const changecgpa = () => {

    setStudent((prevState) => ({
      ...prevState, // Spread the previous state to keep name and age intact
      cgpa: 6.6     // Update only the cgpa property
    }));

    
  };


//   const changecgpa = () => {
//     setStudent(prevState => {
//       return {
//         name: prevState.name,
//         age: prevState.age,
//         cgpa: 6.6 // Update only the CGPA
//       };
//     });
//   };


return (
    <div>
        <h6>My name is {student.name}. My age is {student.age}. My cgpa is {student.cgpa} </h6>
        <button onClick={changecgpa}>Change CGPA</button>
    </div>
)


}

export default Todolist