class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: { something: 'something' },
        };
    }

    render() {
        return (
            <Provider value={this.state.value}>
                <Toolbar />
            </Provider>
        );
    }
}