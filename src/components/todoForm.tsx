import React from 'react';

type Props = {
	addTodo: (text: string) => void;
};

interface ComponentState {
	inputValue: string;
}

type State = Readonly<ComponentState>;
  
export class TodoForm extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { inputValue: "" };
	}

	handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		const { inputValue } = this.state;
		const { addTodo } = this.props;

		event.preventDefault();

		if (!inputValue) return;

		addTodo(inputValue);
		
		this.setState({inputValue: ""});
	};

	render() {
		const { inputValue } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					className="input"
					value={inputValue}
					onChange={e => this.setState({ inputValue: e.target.value })}
				/>
			</form>
		);
	}
}