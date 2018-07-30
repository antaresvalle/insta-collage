  function handleDragEnter() {
      console.log('hovering');
      this.classList.add('hovering');
  }

  function handleDragEnd() {
    console.log('leave');
    this.classList.add('drag-end');
}

  function handleDrop(e) {
      var data = e.dataTransfer.getData("text/plain");
      var itemToTransfer = document.getElementById(data);
      itemToTransfer.style.opacity = '1';
      console.log(e.currentTarget);
      e.currentTarget.appendChild(itemToTransfer); // currentTarget tiene el elemento
    //   if (e.target.tagName !== 'IMG') {
    //     e.currentTarget.appendChild(itemToTransfer);
    //   }  
  }

  function handleDragOver (e) {
    if(e.preventDefault) e.preventDefault();
			return false;
  }

  function handleDragStart(e) {
    this.style.opacity = '0.4';

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', e.target.id);
  }
  
  var cols = document.querySelectorAll('.img-fluid');

  [].forEach.call(cols, function(col) {    
    col.addEventListener('dragstart', handleDragStart, false);

  });

  var colsDropZone = document.querySelectorAll('.cols-drop');

  [].forEach.call(colsDropZone, function(col) {    
    col.addEventListener('dragenter', handleDragEnter, false);
    col.addEventListener('drop', handleDrop, false);
    col.addEventListener('dragover', handleDragOver, false);
    col.addEventListener('dragend', handleDragEnd, false);
  });
