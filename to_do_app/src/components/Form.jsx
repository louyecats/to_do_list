import React, {useState} from 'react'

//since we don't have database, temporariy store data submitted in an empty array that's on App.js and pass in as props
const Form = ({allTasks, setAllTasks}) => {
  //to use state, import it at top, create anonymous function [setter, getter] = useState ({key:value}) 
  const [task, setTask] = useState({
    taskName: "",
    taskCategory: "",
    completedTask: false

  })
  //to get value from input use onChange synthetic event 
  const changeHandler = (e) => {
    //use name attribute on <input/> and grab value
    //make function w/setter used to create state (setTask), then set it to an object, using the spread operator with getter (task) to get all data held in state/update all keys
    setTask({
      ...task, [e.target.name]: e.target.value
    }) 
  }

  //form submission, use settter setAllTasks to add info submitted to empty array in state
  const submitHandler = (e) => {
    e.preventDefault();
    //prevents someone from submitting if setter is empty
    if (!task) return;
    
    //call on setter setAllTasks, pass in argument of array holding allTasks(to get all the tasks have already) & spread operator to add on the new task in our task 
    setAllTasks([...allTasks, task])

    setTask({
      taskName: "",
      taskCategory: "",
      completedTask: false
    })
  }

  return (
    <div className="mt-5">
        <h2>Add item to To Do List:</h2>
        <div className="row">
            <form action="" className="col-md-4 offset-4" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="taskName">Task:</label>
                    <input type="text" name="taskName" onChange={changeHandler} id="taskName"  value={task.taskName} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="taskCategory">Category:</label>
                    <input type="text" name="taskCategory" onChange={changeHandler} id="taskCategory" value={task.taskCategory}className="form-control"/>
                </div>
                <button className="btn btn-dark mt-3">Add</button>
            </form>
        </div>
  </div> 
  )
}

export default Form