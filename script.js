// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change Text Content
    const textChangerBtn = document.getElementById('text-changer');
    const changeableText = document.getElementById('changeable-text');
    
    textChangerBtn.addEventListener('click', function() {
        changeableText.textContent = 'The text has been changed successfully!';
        changeableText.classList.add('highlight');
    });

    // 2. Modify CSS Styles
    const styleChangerBtn = document.getElementById('style-changer');
    const styleDemo = document.getElementById('style-demo');
    
    styleChangerBtn.addEventListener('click', function() {
        styleDemo.style.backgroundColor = '#4CAF50';
        styleDemo.style.color = 'white';
        styleDemo.style.padding = '20px';
        styleDemo.textContent = 'Styles have been modified!';
    });

    // 3. Add/Remove Elements
    const addElementBtn = document.getElementById('add-element');
    const removeElementBtn = document.getElementById('remove-element');
    const elementContainer = document.getElementById('element-container');
    let counter = 1;
    
    addElementBtn.addEventListener('click', function() {
        const newElement = document.createElement('p');
        newElement.textContent = `New element ${counter++}`;
        elementContainer.appendChild(newElement);
    });
    
    removeElementBtn.addEventListener('click', function() {
        if (elementContainer.children.length > 1) {
            elementContainer.removeChild(elementContainer.lastChild);
        }
    });

    // Bonus: Change heading on mouseover
    const heading = document.getElementById('main-heading');
    heading.addEventListener('mouseover', function() {
        heading.textContent = 'Interactive DOM Demo';
    });
    
    heading.addEventListener('mouseout', function() {
        heading.textContent = 'DOM Manipulation Demo';
    });
});
