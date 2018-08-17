handleClick() {
    this.setState(prevState => ({
        words: prevState.words.concat(['marklar'])
    }));
}


handleClick() {
    this.setState(prevState => ({
        words: [...prevState.words, 'marklar'],
    }));
};

function updateColorMap(colormap) {
    colormap.right = 'blue';
}

function updateColorMap(colormap) {
    return Object.assign({}, colormap, { right: 'blue' });
}

function updateColorMap(colormap) {
    return { ...colormap, right: 'blue' };
}