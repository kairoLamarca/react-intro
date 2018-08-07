const { Provider, Consumer } = React.createContext(defaultValue);

<Provider value={/* some value */}>

<Consumer>
  {value => /* render something based on the context value */}
</Consumer>