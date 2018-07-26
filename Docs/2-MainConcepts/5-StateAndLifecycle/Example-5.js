// Wrong
this.state.comment = 'Hello';

// Correct
this.setState({ comment: 'Hello' });

//The only place where you can assign this.state is the constructor.