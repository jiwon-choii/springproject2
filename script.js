 // Get all bottle caps
 const bottleCaps = document.querySelectorAll('.bottleCap');

 // Add click event listener to each bottle cap
 bottleCaps.forEach(cap => {
   cap.addEventListener('click', () => {
     // Set the new image source
     cap.querySelector('img').src = 'img/new.png';
   });
 });

