import React from 'react';

type Props = {
	addTodo: (text: string) => void;
};

interface ComponentState {
	inputValue: string;
}

type State = Readonly<ComponentState>;
  
export class TodoAppInput extends React.Component<Props, State> {
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

	handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
		event.preventDefault();

		this.setState({ inputValue: event.currentTarget.value })
	};

	render() {
		const { inputValue } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					className="input"
					value={inputValue}
					onChange={this.handleChange}
				/>
			</form>
		);
	}
}