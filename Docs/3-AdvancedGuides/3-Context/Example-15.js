const ThemeContext = React.createContext('light');

function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {theme => <button className={theme} {...props} />}
        </ThemeContext.Consumer>
    );
}