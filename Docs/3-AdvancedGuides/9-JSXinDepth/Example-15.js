<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>

<div>
  {showHeader && <Header />}
  <Content />
</div>

<div>
  {props.messages.length &&
    <MessageList messages={props.messages} />
  }
</div>

<div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div>

<div>
  My JavaScript variable is {String(myVariable)}.
</div>