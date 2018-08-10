class Table extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <Columns />
                </tr>
            </table>
        );
    }
}

//Invalid
class Columns extends React.Component {
    render() {
        return (
            <div>
                <td>Hello</td>
                <td>World</td>
            </div>
        );
    }
}

//Result
<table>
    <tr>
        <div>
            <td>Hello</td>
            <td>World</td>
        </div>
    </tr>
</table>