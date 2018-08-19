class SayHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: 'Hello!' };
        // This line is important!
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert(this.state.message);
    }

    render() {
        // Because `this.handleClick` is bound, we can use it as an event handler.
        return (
            <button onClick={this.handleClick}>
                Say hello
        </button>
        );
    }
}

//With createReactClass
var SayHello = createReactClass({
    getInitialState: function () {
        return { message: 'Hello!' };
    },

    handleClick: function () {
        alert(this.state.message);
    },

    render: function () {
        return (
            <button onClick={this.handleClick}>
                Say hello
        </button>
        );
    }
});