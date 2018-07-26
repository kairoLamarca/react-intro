// Wrong
this.setState({
    counter: this.state.counter + this.props.increment,
});

// Correct
this.setState((prevState, props) => ({
    counter: prevState.counter + props.increment
}));