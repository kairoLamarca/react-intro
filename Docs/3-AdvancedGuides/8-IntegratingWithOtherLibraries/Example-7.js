$('#container').html('<button id="btn">Say Hello</button>');
$('#btn').click(function () {
    alert('Hello!');
});

//---------------

function Button() {
    return <button id="btn">Say Hello</button>;
}

ReactDOM.render(
    <Button />,
    document.getElementById('container'),
    function () {
        $('#btn').click(function () {
            alert('Hello!');
        });
    }
);