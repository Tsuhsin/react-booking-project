import React, { useState, useEffect } from 'react';
import { Draggable, DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Task from './Task';

const TodoList = () => {
  interface TodoList {
    id: number;
    task: string;
    completed: boolean;
  }
  const localData = localStorage.getItem('todoList');
  const [ todoList, setTodoList ] = useState<TodoList[]>(localData !== null ? JSON.parse(localData) : []);
  
  const addTodo = () => {
    const input = (document.getElementById('todoInput') as HTMLInputElement);
    setTodoList([
      ...(todoList !== undefined ? todoList : []),
      {
        id: Date.now(),
        task: input.value,
        completed: false,
      }
    ]);
    input.value = '';
  };

  const toggleComplete = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const newTodoList = todoList?.map((todo) => {
      if(todo.id === Number(id)) {
        todo.completed = event.target.checked;
      }
      return todo;
    });
    setTodoList([ ...newTodoList as TodoList[] ]);
  }

  const updateTodo = (id: number, updtedTask: string) => {
    const newTodoList = todoList?.map((todo) => {
      if(todo.id === id) {
        todo.task = updtedTask;
      }
      return todo;
    });
    setTodoList([ ...newTodoList as TodoList[] ]);
  };

  const removeTodo = (id: number) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const removeAllTodo = () => {
    setTodoList([]);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  const notCompletedTodoList = () => {
    return todoList.filter(todo => todo.completed !== true)
  }

  // 監聽 todoList 發生變化時， 將更新後的資料存進 localStorage 裡
  useEffect(() => {
    window.localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const onDragEnd = (event: DropResult) => {
    const { source, destination } = event;
    if (!destination) {
      return;
    }
    // 拷貝新的items (來自state)
    let newItems = [...todoList];
    // splice(start, deleteCount, item )
    // 從source.index剪下被拖曳的元素
    const [remove] = newItems.splice(source.index, 1);
    //在destination.index位置貼上被拖曳的元素
    newItems.splice(destination.index, 0, remove);
    // 設定新的 items
    setTodoList(newItems);
  };

  return (
    <div className=' mt-10 md:mt-20 max-w-md mx-auto font-Poppins tracking-wide md:bg-violet-100 p-6 rounded-lg md:shadow-center-lg shadow-violet-300/50'>
      <div className=' mb-4 text-violet-700 tracking-wider'>// React TodoList //</div>
      {/* input */}
      <div className=' flex justify-between border-2 border-violet-500 rounded-md box-border'>
        <input id="todoInput" type="text" onKeyDown={handleKeyDown} className=' bg-transparent pl-2 outline-none w-full' placeholder='Something TODO' />
        <div onClick={addTodo} className=' w-9 h-8 flex justify-center items-center bg-violet-500 text-white'>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
      {/* TodoList */}
      <ul className=' mt-4 ml-2 select-none'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="drop-id">
          {(provided) => (
            <div 
              {...provided.droppableProps} 
              ref={provided.innerRef} 
              className=' select-none'
            >
              {todoList.map((item, i) => (
                <div key={item.id}>
                  <Draggable 
                    draggableId={String(item.id)} 
                    index={i} 
                    key={item.id}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Task
                          key = { item.id }
                          todo = { item }
                          toggleComplete = { toggleComplete }
                          remove = { removeTodo }
                          update = { updateTodo }
                        />
                      </div>
                    )}
                  </Draggable>
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      </ul>
      {/* clear button */}
      <div className=' flex pt-4 justify-between items-center'>
        <div>目前有<span className=' font-semibold text-violet-600 px-1'>{ notCompletedTodoList().length }</span>個事項待完成</div>
        <button onClick={removeAllTodo} className=' btn-primary'>Clear</button>
      </div>
    </div>
  )
}

export default TodoList