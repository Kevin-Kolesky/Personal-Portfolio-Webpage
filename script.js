document.addEventListener('DOMContentLoaded', function() {
    // Define the list of divs along with their background colors
    var divList = [
      { id: 'product', color: 'linear-gradient(to left, #0f9b0f, #000000)'}, 
      { id: 'photo', color: 'linear-gradient(to left, #3c3c3c, #ff9700)'}, 
      { id: 'RSVP', color: 'linear-gradient(90deg, rgba(2,59,60,1) 0%, rgba(105,208,197,1) 100%)'}, 
      { id: 'tech', color: 'linear-gradient(90deg, rgba(146,208,237,1) 0%, rgba(14,38,73,1) 100%)'}, 
      { id: 'tribute', color: 'linear-gradient(90deg, rgba(32,49,69,1)  26%, rgba(90,109,130,1)  100%)'}, 
      { id: 'survey', color: 'linear-gradient(90deg, rgba(35,35,126,1) 0%,  rgba(27,27,50,1) 100%)'}  
    ];
  
    // Function to change the body background color with transition
  function changeBackgroundColorWithTransition(color) {
    document.body.classList.remove('no-transition'); // Ensure transition is enabled
    document.body.style.background = color; // Change body background color
  }

  // Function to change the body background color instantly (without transition)
  function changeBackgroundColorInstantly(color) {
    document.body.classList.add('no-transition'); // Disable transition for instant change
    document.body.style.background = color; // Change body background color
    // Delay to ensure transition class is applied before removing it
    setTimeout(function() {
      document.body.classList.remove('no-transition');
    }, 10);
  }

  // Function to handle mouseover event (with event delegation)
  function handleMouseOver(event) {
    var targetId = event.target.closest('.frame-Container').id; // Get closest ancestor with class .frame-Container and its id
    var item = divList.find(function(div) {
      return div.id === targetId;
    });
    if (item) {
      changeBackgroundColorWithTransition(item.color); // Change body background color with transition
    }
  }

  // Function to handle mouseout event
  function handleMouseOut() {
    changeBackgroundColorInstantly(''); // Revert body background color to default instantly
  }

  // Selecting the parent div with class .framesContainer
  var parentDiv = document.querySelector('.framesContainer');

  // Check if the parentDiv is found
  if (parentDiv) {
    // Adding event listeners to the parent div for event delegation
    parentDiv.addEventListener('mouseover', handleMouseOver);
    parentDiv.addEventListener('mouseout', handleMouseOut);
  } else {
    console.error("Element with class '.framesContainer' not found.");
  }
});
  