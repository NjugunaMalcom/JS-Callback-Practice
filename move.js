function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom){
       
  let direction = null;
  let x = 100;
  let y = 250;
 
 setInterval(function(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1)
function move(direction, callback = null) {
  // Logic for moving the tree in the specified direction
  if (direction === 'left') {
    // Move the tree to the left
  } else if (direction === 'right') {
    // Move the tree to the right
  } else if (direction === 'up') {
    // Move the tree up
  } else if (direction === 'down') {
    // Move the tree down
  }
  // Check if a callback function is provided before calling it
  if (callback && typeof callback === 'function') {
    callback(); // Call the callback function if it is provided
  }
}

document.addEventListener('keydown', function(e){  
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
  move();
    
})

document.addEventListener('keyup', function(e){
    direction = null
    move();
   
})
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
}
