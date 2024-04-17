import logo from './logo.svg';
import './App.css';
import CreateToDo from './pages/CreateToDo';
import ToDoList from './pages/ToDoList';

function App() {
  return (
    <div className="App">
     <CreateToDo/>
     <ToDoList/>
    </div>
  );
}

export default App;
