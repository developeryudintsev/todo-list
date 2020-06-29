import React from "react";

export type TaskType={
    id:number,
    title:string,
    isDone:boolean

}

type PropsType={
    title:string,
    task:Array<TaskType>
}

export function Todolist(props:PropsType) {
    return (
        <div>
            <div><h3>{props.title}</h3></div>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={props.task[2].isDone}/><span>HTML&CSS</span></li>
                <li><input type="checkbox" checked={true}/><span>JS</span></li>
                <li><input type="checkbox" checked={false}/><span>REACT</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Commpleted</button>
            </div>
        </div>
    )
}

export default Todolist;









//++__+_+_+-+-=-\-=\==-=\-=-=-\=-\=-\-\=-\=-\-==-===++++++++++++++++++++________________--------++++++++++++++===================
//
// import React from "react";
//
// export type TaskType = {
//     id: number,
//     title: string,
//     isDone: boolean
// }
//
// type PropsType = {
//     title: string,
//     task: Array<TaskType>
// }
//
// export function Todolist(props:PropsType ) {
//     return (
//         <div>
//             <div><h3>{props.title}</h3></div>
//             {/*<div><h3>{props.task[0].isDone}</h3></div>*/}
//             <div>
//                 <input/>
//                 <button>+</button>
//             </div>
//             <ul>
//                 <li><input type="checkbox" checked={props.task[1].isDone}/><span>HTML&CSS</span></li>
//                 <li><input type="checkbox" checked={true}/><span>JS</span></li>
//                 <li><input type="checkbox" checked={false}/><span>REACT</span></li>
//             </ul>
//             <div>
//                 <button>All</button>
//                 <button>Active</button>
//                 <button>Commpleted</button>
//             </div>
//         </div>
//     )
// }
//
