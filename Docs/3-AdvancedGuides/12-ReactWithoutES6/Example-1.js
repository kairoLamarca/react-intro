class Greeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

//Without ES6
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
    render: function () {
        return <h1>Hello, {this.props.name}</h1>;
    }
});