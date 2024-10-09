function customRender(reactElement, container) {
    // Create a DOM element using the type of the reactElement
    const domElement = document.createElement(reactElement.type);
    
    // Loop through the props and set attributes on the DOM element
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Check if children is a string or an array of elements
    if (typeof reactElement.children === 'string') {
        // If it's a string, just set the innerHTML directly
        domElement.innerHTML = reactElement.children;
    } else if (Array.isArray(reactElement.children)) {
        // If it's an array, recursively render each child
        reactElement.children.forEach(child => customRender(child, domElement));
    }

    // Append the created DOM element to the container
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
