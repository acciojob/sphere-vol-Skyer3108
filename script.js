function volume_sphere() {
    //Write your code here

	 event.preventDefault();
    
    // Retrieve the radius value from the input field
    const radiusInput = document.getElementById('radius').value;
    const radius = parseFloat(radiusInput);

    // Validate the input
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
        return;
    }

    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    
    // Display the result, rounded to four decimal places
    document.getElementById('volume').value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
