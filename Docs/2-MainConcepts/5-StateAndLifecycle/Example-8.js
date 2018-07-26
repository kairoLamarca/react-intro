<h2>It is {this.state.date.toLocaleTimeString()}.</h2>

<FormattedDate date={this.state.date} />

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}