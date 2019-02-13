import React from 'react';

interface todoUnit {
  text: string;
  isCompleted: boolean;
}

interface TodoParameters {
	todo: todoUnit;
	index: number;
	completeTodo: (index: number) => void;
	removeTodo: (index: number) => void;
}

export const RenderTodo = ({ todo, index, completeTodo, removeTodo }: TodoParameters) => {
	return (
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
		>
			{todo.text}
			<div>
				<button onClick={() => completeTodo(index)}>Complete</button>
				<button onClick={() => removeTodo(index)}>x</button>
			</div>
		</div>
	);
}