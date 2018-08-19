class Greeting extends React.Component {
    // ...
}

Greeting.defaultProps = {
    name: 'Mary'
};

//Without ES6
var Greeting = createReactClass({
    getDefaultProps: function () {
        return {
            name: 'Mary'
        };
    },

    // ...

});