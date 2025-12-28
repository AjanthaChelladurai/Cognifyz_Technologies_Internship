
function getRandomColor() {
  
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const button = document.getElementById('colorChangeBtn');


button.addEventListener('click', function() {
    
   
    const newColor = getRandomColor();
    
   
    document.body.style.backgroundColor = newColor;

    
    console.log(`Background color changed to: ${newColor}`);
});


console.log('Script loaded. Ready for button clicks!');