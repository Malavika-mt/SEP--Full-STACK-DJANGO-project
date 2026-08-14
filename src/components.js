import React from 'react'

function Header() {
  return (
    <header className="app-header">
      <h1>University Hub Portal</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/courses">Courses</a>
      </nav>
    </header>
  )
}
export { Header }

function StudentCard(props){
    return(
        <div className="student-card"
        style={{border: '1px solid #ccc', padding: '10px', margin: '10px'}}>
            <h3>{props.name}</h3>
            <p>ID:{props.studentId}</p>
            <p>Major: {props.major}</p>

            <button onClick={() => alert("Viewing " + props.name)}>View Profile</button>
        
        </div>
    
    );
}


export { StudentCard };

function CourseCard(props){
    return(
        <div className="course-card"
        style={{border: '1px solid #ccc', padding: '10px', margin: '10px'}}>
            <h3>{props.title}</h3>
            <p>Code: {props.code}</p>
            <p>Credits: {props.credits}</p>

            {props.credits> 3 ? (
              <span style={{color: 'red'}}>
                Heavy Workload
              </span> 
             ) : null}             
             </div>
    );
  }

  export default CourseCard;


  


           