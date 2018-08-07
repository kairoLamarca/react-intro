class App extends React.Component {
    render() {
        return (
            <Provider value={{ something: 'something' }}>
                <Toolbar />
            </Provider>
        );
    }
}