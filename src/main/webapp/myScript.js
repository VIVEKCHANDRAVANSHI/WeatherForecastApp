 	var weatherIcon = document.getElementById("weather-icon");
	
	var val = document.getElementById("wc").value;
	  switch (val) {
      case 'Clouds':
          	weatherIcon.src = "Images/cloudy.png";
         	break;
      case 'Clear':
			weatherIcon.src = "Images/sun.png";
            break;
      case 'Rain':
			weatherIcon.src = "Images/rainy.png";
            break;
      case 'Mist':
			weatherIcon.src = "Images/mist.png";
            break;
      case 'Snow':
			weatherIcon.src = "Images/snow.png";
            break;
      case 'Haze':
			weatherIcon.src = "Images/haze.png";
	        break;
  }