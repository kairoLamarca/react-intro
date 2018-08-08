class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    handleClick = () => {
        try {
            // Do something that could throw
        } catch (error) {
            this.setState({ error });
        }
    }

    render() {
        if (this.state.error) {
            return <h1>Caught an error.</h1>
        }
        return <div onClick={this.handleClick}>Click Me</div>
    }
}