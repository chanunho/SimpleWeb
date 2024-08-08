function searchF() {
  document.body.style.height = 'auto';
  document.querySelector(".mainright").innerHTML = "";
  var searchtext = document.querySelector(".search_text").value;
  document.querySelector(".search_text").value = "";
  searchtext = searchtext.toLowerCase().trim();
  fetch('travel_recommendation.json')
    .then(response => response.json())
    .then(data => {
      const jsondata = data;
      if (searchtext == "beach" ||  searchtext == "beaches") {
        jsondata["beaches"].forEach(function (item) {
          document.querySelector(".mainright").innerHTML += '<div class="result"><img src="' + item["imageUrl"] + '"> <h1>'+item["name"]+'</h1><p>'+item["description"]+'</p></div>';
        });
      } else if (searchtext == "temple" ||  searchtext == "temples") {
        jsondata["temples"].forEach(function (item) {
          document.querySelector(".mainright").innerHTML += '<div class="result"><img src="' + item["imageUrl"] + '"> <h1>'+item["name"]+'</h1><p>'+item["description"]+'</p></div>';
        });
      } else if (searchtext == "country" ||  searchtext == "countries") {
        jsondata["countries"].forEach(function (items) {
          items["cities"].forEach(function (item) {
            document.querySelector(".mainright").innerHTML += '<div class="result"><img src="' + item["imageUrl"] + '"> <h1>'+item["name"]+'</h1><p>'+item["description"]+'</p></div>';
          });
        });
      } else {
        document.querySelector(".mainright").innerHTML += '<p class="no_search"> No Reseult </p>';
      }
    })
}


function resetF() {
  document.querySelector(".mainright").innerHTML = "";
}

function submitF() {
  document.querySelector(".name").value = "";
  document.querySelector(".email").value = "";
  document.querySelector(".message").value = "";
}

