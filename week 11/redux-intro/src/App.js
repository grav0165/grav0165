import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {

  const allData = useSelector(store => store);
  const justDrac = useSelector(store => store.dracula)
  const justCount = useSelector(store => store.count);
  const elements = useSelector(store => store.elements);
  const [newElement, setNewElement] = useState();

  const dispatch = useDispatch();

  const handleAddElement = () => {
    dispatch({
      type: 'ADD_ELEMENT',
      payload: newElement,
    })
  }

  const handleEmpty = () => {
    dispatch({
      type: 'EMPTY',
    })
  }

  const handleClick = () => {
    console.log('Clicked!')

    dispatch({type: 'INCREMENT_COUNT'})
  }

  const handleDown = () => {
    console.log('Reddit downvote moment')
    dispatch({type: 'DECREMENT_COUNT'})
  }

  const handleElementInput = (event) => {
    // Save the input into local state
    setNewElement(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder='New Element' onChange={handleElementInput}/><button onClick={handleAddElement}>Add Element⚛️</button>
        {elements.map( element => {
          return <p>{element}</p>
        })}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <pre>{JSON.stringify(allData)}</pre>
        <p>{justDrac}</p>
        <p>{justCount}</p>
        <button onClick={handleClick}>INCREASE THE COUNT!!!</button>
        <button onClick={handleDown}>DECREASE THE COUNT!!!</button>
        
        <button onClick={handleEmpty}>Get rid of elements</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
