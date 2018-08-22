class MouseTracker extends React.Component {
    // Defined as an instance method, `this.renderTheCat` always
    // refers to *same* function when we use it in render
    renderTheCat(mouse) {
        return <Cat mouse={mouse} />;
    }

    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={this.renderTheCat} />
            </div>
        );
    }
}