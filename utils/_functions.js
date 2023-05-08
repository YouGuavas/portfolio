const create = (elementType) => {
    if (typeof document !== 'undefined') {
        const newElement = document.createElement(elementType);
        return newElement;
    }
    return;
}

export {
    create
};