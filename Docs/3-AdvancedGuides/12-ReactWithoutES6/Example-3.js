class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: props.initialCount };
    }
    // ...
}

//Without ES6
var Counter = createReactClass({
    getInitialState: function () {
        return { count: this.props.initialCount };
    },
    // ...
});