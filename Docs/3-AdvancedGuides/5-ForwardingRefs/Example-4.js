class FancyButton extends React.Component {
    focus() {
        // ...
    }

    // ...
}

// Rather than exporting FancyButton, we export LogProps.
// It will render a FancyButton though.
export default logProps(FancyButton);