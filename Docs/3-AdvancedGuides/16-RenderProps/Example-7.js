<Mouse children={mouse => (
    <p>The mouse position is {mouse.x}, {mouse.y}</p>
)} />

<Mouse>
  {mouse => (
    <p>The mouse position is {mouse.x}, {mouse.y}</p>
  )}
</Mouse>

Mouse.propTypes = {
    children: PropTypes.func.isRequired
  };