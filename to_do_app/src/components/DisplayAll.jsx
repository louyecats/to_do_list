import React from 'react'

const DisplayAll = ({allTasks, setAllTasks}) => {
    //filter returns a new array w/only the values that meet condition
  //return true to keep index, so if index does not equal the index we want to delete, we keep it
  const deleteTaskHandler = (delIndex) => {
    const filteredTasks = allTasks.filter((task, index) => {
      return index !== delIndex;
    })
    //we need to return the new array to our setter
    setAllTasks(filteredTasks);
  }

  //checkbox set completedTask: true if checked and completedTask: false if unchecked
  //need to create a new array
  const completedHandler = (checkedIndex) => {
    const updatedTasks = allTasks.map((task, index) => {
      if (checkedIndex === index) {
        task.completedTask = !task.completedTask;
        // const updatedTasks = {...task, completedTask: !task.completedTask};
        // return updatedTasks;
      }
      return task;
    });
  //we need to return the updated array to our setter  
  setAllTasks(updatedTasks);
  }
  return (
    <div className="mt-5 col-md-4 offset-4">
    <h2>Tasks:</h2>
    {
      allTasks.map((task, index) => {
        const toDoTasks = [];
        if (task.completedTask) {
          toDoTasks.push("strikedTask");
        }

        return (
          <div key={index} className="tasksList mt-3">
            <p class={toDoTasks.join(" ")}>Task Name: {task.taskName}</p>
            <p>Category: {task.taskCategory}</p>
            {/* javaScript checkbox means when clicked it sets completedTask to true */}
            <input onChange = {(e) => {
              completedHandler(index);
            }} checked={task.completedTask} type="checkbox" id="completedTask" name="completedTask"/>
            <label htmlFor="completedTask" style={{marginLeft: "5px"}}> Completed</label>
            <button className="btn btn-dark m-2" onClick={(e)=> {
              deleteTaskHandler(index);
              }}>Delete Task</button>
            <p>____________________________</p>
          </div>
        )
      })
    }
</div>
  )
}

export default DisplayAll