function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");
  if (recommendation.value != null && recommendation.value.trim() !== "") {

    console.log("New recommendation added");
    showPopup(true, "Thanks for leaving your recommendation"); // Call showPopup with the message

    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>“</span>" + recommendation.value + "<span>”</span>";
    document.getElementById("all_recommendations").appendChild(element); 
    

    recommendation.value = "";
  }
}


function showPopup(bool, message) {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');

  if (bool) {
    popupMessage.textContent = message; // Set the message
    popup.style.visibility = 'visible';
  } else {
    popup.style.visibility = 'hidden';
  }
}


function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");
  if (recommendation.value != null && recommendation.value.trim() !== "") {
    console.log("New recommendation added");
    showPopup(true, "Thanks for leaving your recommendation"); // Activate popup with message

    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "<span>“</span>" + recommendation.value + "<span>”</span>";
    document.getElementById("all_recommendations").appendChild(element); 
    
    recommendation.value = "";
  }
}


