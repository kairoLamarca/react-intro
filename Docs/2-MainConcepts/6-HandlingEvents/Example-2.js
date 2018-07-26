//HTML
<a href="#" onclick="console.log('The link was clicked.'); return false">
    Click me
</a>

//React
function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
      </a>
    );
}