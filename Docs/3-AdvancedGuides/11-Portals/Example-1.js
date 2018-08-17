ReactDOM.createPortal(child, container)

render() {
    // React mounts a new div and renders the children into it
    return (
        <div>
            {this.props.children}
        </div>
    );
}

render() {
    // React does *not* create a new div. It renders the children into `domNode`.
    // `domNode` is any valid DOM node, regardless of its location in the DOM.
    return ReactDOM.createPortal(
        this.props.children,
        domNode
    );
}