import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {

    let task1: Array<TaskType> = [
        {id: 1, title: 'JS', isDone: false},
        {id: 2, title: 'HTML', isDone: true},
        {id: 3, title: 'TS', isDone: true}
    ]

    let task2: Array<TaskType> = [
        {id: 1, title: 'JS', isDone: true},
        {id: 2, title: 'HTML', isDone: true},
        {id: 3, title: 'TS', isDone: true}
    ]
    return (
        <div className="App">
            <Todolist title={'Whot to lern'} task={task1}/>
            <Todolist title={'lern TS'} task={task2}/>
        </div>
    );
}

export default App;


//=-=-+_+_+_=-=\-=-+_+++++++++++++++++----------------_______________________================================_________-==-=-=-----=\---
// import React from 'react';
// import './App.css';
// import {TaskType, Todolist} from "./Todolist";
//
// function App() {
//     let tasks1:Array<TaskType>=[
//         {id:1,title:'CSS',isDone:true},
//         {id:2,title:'JS',isDone:true},
//         {id:3,title:'REACT',isDone:false},
//     ]
//
//     let tasks2:Array<TaskType>=[
//         {id:1,title:'CSS2',isDone:true},
//         {id:2,title:'JS2',isDone:false},
//         {id:3,title:'REACT2',isDone:true},
//     ]
//
//     return (
//         <div className="App">
//             <Todolist title={'What to learn'} task={tasks1}/>
//             <Todolist title={'Movies'} task={tasks2}/>
//         </div>
//     );
// }
//
// export default App;