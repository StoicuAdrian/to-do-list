import './App.css';
import ToDoInput from './Components/ToDoInput';
import ToDo from './Components/ToDo'


function App() {
  return (
    <div className='todo-app'>
      <ToDoInput />
      <ToDo />
    </div>
  );
}

export default App;
