import {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen, faBars } from '@fortawesome/free-solid-svg-icons';

interface TodoList {
  id: number;
  task: string;
  completed: boolean;
}

const Task = (prop: { 
    todo: TodoList, 
    remove: (id: number) => void, 
    update: (id: number, updtedTask: string) => void, 
    toggleComplete?: (event: React.ChangeEvent<HTMLInputElement>) => void
  }) => {
  const [ isEditing, setIsEditing ] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveTask = () => {
    const inputTodo = document.getElementById('edited') as HTMLInputElement;
    prop.update(prop.todo.id, inputTodo.value);
    toggleEdit();
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      saveTask();
    }
  };

  let result;

  if (isEditing) {
    result = (
      <div className=' flex items-center justify-between h-8'>
        <input id='edited' onKeyDown={ handleKeyDown } type="text" className=' bg-transparent border-b-2 border-violet-500 outline-none' defaultValue={prop.todo.task} />
        <button onClick={ saveTask }>Save</button>
      </div>
    );
  } else {
    result = (
      <div>
        <li className=' flex items-center justify-between h-9 cursor-default'>
          <div>
            <input 
              type="checkbox" 
              defaultChecked={ prop.todo.completed }
              onChange={prop.toggleComplete}
              id={ prop.todo.id.toString() } 
              className=' form-checkbox mr-3 w-6 h-6 bg-transparent border-[1.5px] border-violet-500 text-violet-500 focus:ring-0 focus:ring-offset-0 rounded-full cursor-pointer peer' 
            />
            <label htmlFor={ prop.todo.id.toString() } className=' peer-checked:line-through peer-checked:text-gray-500 cursor-pointer'>
              { prop.todo.task }
            </label>
          </div>
          <div className=' flex gap-4'>
            <button onClick={ toggleEdit }>
              <FontAwesomeIcon icon={faPen} className=' text-violet-500' />
            </button>
            <button id={prop.todo.id.toString()} onClick={ e => prop.remove(Number(e.currentTarget.id)) }>
              <FontAwesomeIcon icon={faTrash} className=' text-violet-500' />
            </button>
            <button>
              <FontAwesomeIcon icon={faBars} className=' text-violet-500 cursor-grab' />
            </button>
          </div>
        </li>
      </div>
    );
  }

  return result;
}

export default Task