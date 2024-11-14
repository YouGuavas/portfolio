const grabElement = (elementId) => {
	//Grab element by id if document exists
	if (typeof document !== 'undefined') {
		return document.getElementById(elementId);
	}
};

const create = (elementType) => {
	if (typeof document !== 'undefined') {
		const newElement = document.createElement(elementType);
		return newElement;
	}
	return;
};
const addToParent = (parent, child) => {
	//Append child element to parent element
	parent.append(child);
};
const clearElement = (element) => {
	if (element) {
		element.remove();
	}
};
const scrollTop = () => {
	//returns current scroll position
	if (typeof window !== 'undefined') {
		return window.scrollY;
	}
};

const handleScroll = () => {
	const container = document.getElementById('collapsible-header');
	const currentScroll = scrollTop();
	if (currentScroll > 50) {
		container.classList.remove('open');
		container.classList.add('collapse');
		if (container.classList.contains('open')) {
			setTimeout(() => {
				container.style.display = 'none';
			}, 200);
		}
	} else {
		container.style.display = 'flex';
		container.classList.remove('collapse');
		container.classList.add('open');
	}
};

export { create, grabElement, addToParent, clearElement, handleScroll };
