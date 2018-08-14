//JSX
<MyButton color="blue" shadowSize={2}>
    Click Me
</MyButton>

//React
React.createElement(
MyButton,
{ color: 'blue', shadowSize: 2 },
'Click Me'
)

//JSX
< div className = "sidebar" />

//React
React.createElement(
    'div',
    { className: 'sidebar' },
    null
)