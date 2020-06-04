import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {

  const [add, setAdd] = useState("");
  const [list, addL] = useState([]);

  const itemEvents = (event) => {
    setAdd(event.target.value);
  }

  const addList = () => {
    addL((oldList) => {
      return [...oldList, add];
    });
    setAdd("");
  };

  const deleteItems = (id) => {
    console.log('deleted');

    addL((oldList) => {
      return oldList.filter((arrElements, index) => {
        return index !== id; 
      })
    })
  };


  return (
    <React.Fragment>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>TODO List</h1>
          <br />
          <input type="text" placeholder="Add a name" onChange={itemEvents} value={add}/>
          <button onClick={addList}> + </button>
          <ol>
              {list.map((itemVal, index) => {
                return <ToDoList
                key={index} 
                id={index} 
                text={itemVal}
                onSelect={deleteItems}
                />
        })}
        </ol>
        </div>
      </div>
    </React.Fragment>

  )
}
export default App;