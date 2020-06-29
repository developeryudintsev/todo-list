import React, {KeyboardEvent, ChangeEvent, useState} from "react";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

type PropsType = {
    title: string,
    tasks: TaskType[],
    resultTasks: (id: string) => void;
    changeFilter: (value: string) => void;
    addTask: (title: string) => void
}


export function Todolist(props: PropsType) {
    let [title, setTitle] = useState();

    const OnNewTitleChangeHander = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onKeyPressHander = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            setTitle(props.addTask(title));
            setTitle('')
        }
    }
    const addTasks = () => {
        props.addTask(title);
        setTitle('')
    }
    const onAllClickHeander = () => {
        props.changeFilter('all')
    }
    const onActiveClickHeander = () => {
        props.changeFilter('active')
    }
    const onCompletedClickHeander = () => {
        props.changeFilter('completed')
    }

    return (
        <div>
            <div><h3>{props.title}</h3></div>
            <div>
                <input value={title} onChange={OnNewTitleChangeHander} onKeyPress={onKeyPressHander}/>
                <button onClick={addTasks}>+
                </button>
            </div>
            <ul>
                {
                    props.tasks.map((element) =>{
                        const onRemoveHandler=()=>{props.resultTasks(element.id)}


                        return <li key={element.id}>
                            {/*<button onClick={()=>console.log(element.id)}>X</button>*/}
                            <button onClick={onRemoveHandler}>X</button>
                            <input type="checkbox"
                                   checked={element.isDone}/>
                            <span>{element.title}</span>
                        </li>
                    }
                   )
                }
            </ul>
            <div>
                <button onClick={onAllClickHeander}>All</button>
                <button onClick={onActiveClickHeander}>Active</button>
                <button onClick={onCompletedClickHeander}>Completed</button>
            </div>
        </div>
    )
}