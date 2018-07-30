const handleDragEnter = (e) => {
    console.log('hovering');
    e.target.classList.add('hovering');
}

const handleDrop = (e) => {
    let data = e.dataTransfer.getData("text/plain");
    let itemToTransfer = document.getElementById(data);

    let newImage = document.createElement('img');
    newImage.classList.add('dragable');
    newImage.src = itemToTransfer.src;
    console.log(newImage);
    if (e.currentTarget.childNodes.length == 1) { // currentTarget gives us the parent of the element that triggers the event
        e.currentTarget.removeChild(e.currentTarget.childNodes[0]);
        e.currentTarget.appendChild(newImage);
    } else {
        e.currentTarget.appendChild(newImage); 
    }

    e.target.classList.add('drag-end');
}

const handleDragOver = (e) => {
    if (e.preventDefault) e.preventDefault();
    return false;
}

const handleDragStart = (e) => {
    e.target.style.opacity = '0.4';

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', e.target.id);
}

let cols = document.querySelectorAll('.img-fluid');

[].forEach.call(cols, function (col) {
    col.addEventListener('dragstart', handleDragStart, false);
});

let colsDropZone = document.querySelectorAll('.cols-drop');

[].forEach.call(colsDropZone, function (col) {
    col.addEventListener('dragenter', handleDragEnter, false);
    col.addEventListener('drop', handleDrop, false);
    col.addEventListener('dragover', handleDragOver, false);
});
