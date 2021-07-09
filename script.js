

function grwothInfo() {
  document.getElementById("growthBox").style.display = "block";
  document.getElementById("growthBtn").style.display = "none";
}
function growthHide() {
  document.getElementById("growthBox").style.display = "none";
  document.getElementById("growthBtn").style.display = "block";
}



// Filter box

// var a = 1;
// function show_hide() {
//   console.log(a);
//   if (a == 1) {
//     document.getElementById("filterdetail").style.display = "block";
//     return a = 0;
//   }
//   else {
//     document.getElementById("filterdetail").style.display = "none";
//     return a = 1;
//   }
// }


// Forecast and growth rate Show/Hide
var b = 1;
function growth_hide() {
  
  if (b == 1) {
    document.getElementById("growthShow").style.display = "block";
    document.getElementById("ForecastHide").style.display = "none";
    document.getElementById("growthcc").style.display = "none";
    document.getElementById("forecastcc").style.display = "block";
    return b = 0;
  }
  else {
    document.getElementById("growthShow").style.display = "none";
    document.getElementById("ForecastHide").style.display = "block";
    document.getElementById("growthcc").style.display = "block";
    document.getElementById("forecastcc").style.display = "none";
    return b = 1;
  }
}


// growth value show
// Indicators
$(document).ready(function () {
  $(document).on('change', '.getIndicators input', function (e) {
    var $this = $(this),
      value = $this.val();
    var value_array = $('.getIndicators input').filter(':checked').map(function () {
      return this.value;
    }).get();

    $('#showValue').html(value_array.join());
    console.log(value_array.join());
    document.getElementById("showValue").innerHTML = '';
    for (let i = 0; i < value_array.length; i++) {
      document.getElementById("showValue").innerHTML += `<p>${value_array[i]}</p>`;
      console.log(value_array[i]);
    }
  });
});

// Housing
$(document).ready(function () {

  $(document).on('change', '.getHousing input', function (e) {
    var $this = $(this),
      value = $this.val();
    var value_array = $('.getHousing input').filter(':checked').map(function () {
      return this.value;
    }).get();

    $('#showValue').html(value_array.join());
    console.log(value_array.join());
    document.getElementById("showValue").innerHTML = '';
    for (let i = 0; i < value_array.length; i++) {
      document.getElementById("showValue").innerHTML += `<p>${value_array[i]}</p>`;
      console.log(value_array[i]);
    }
  });
});
// Risk
$(document).ready(function () {

  $(document).on('change', '.getRisk input', function (e) {
    var $this = $(this),
      value = $this.val();
    var value_array = $('.getRisk input').filter(':checked').map(function () {
      return this.value;
    }).get();

    $('#showValue').html(value_array.join());
    console.log(value_array.join());
    document.getElementById("showValue").innerHTML = '';
    for (let i = 0; i < value_array.length; i++) {
      document.getElementById("showValue").innerHTML += `<p>${value_array[i]}</p>`;
      console.log(value_array[i]);
    }
  });
});
// Community
$(document).ready(function () {

  $(document).on('change', '.getCommunity input', function (e) {
    var $this = $(this),
      value = $this.val();
    var value_array = $('.getCommunity input').filter(':checked').map(function () {
      return this.value;
    }).get();

    $('#showValue').html(value_array.join());
    console.log(value_array.join());
    document.getElementById("showValue").innerHTML = '';
    for (let i = 0; i < value_array.length; i++) {
      document.getElementById("showValue").innerHTML += `<p>${value_array[i]}</p>`;
      console.log(value_array[i]);
    }
  });
});

// Enrollments
$(document).ready(function () {

  $(document).on('change', '.getEnroll input', function (e) {
    var $this = $(this),
      value = $this.val();
    var value_array = $('.getEnroll input').filter(':checked').map(function () {
      return this.value;
    }).get();

    $('#showValue').html(value_array.join());
    console.log(value_array.join());
    document.getElementById("showValue").innerHTML = '';
    for (let i = 0; i < value_array.length; i++) {
      document.getElementById("showValue").innerHTML += `<p>${value_array[i]}</p>`;
      console.log(value_array[i]);
    }
  });
});

// Sidebar report
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
 // document.getElementById("positionSet").style.marginLeft = "30%";
  document.getElementById("mainnn").style.marginLeft = "373px";
  document.getElementById("openArrow").style.display = "none";
  document.getElementById("closeArrow").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
 // document.getElementById("positionSet").style.marginLeft = "50%";
  document.getElementById("mainnn").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("openArrow").style.display = "block";
  document.getElementById("closeArrow").style.display = "none";

}




// Side LIne chart

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["jun 2020", "jul 2020", "Aug 2020", "Sep 2020", "Oct 2020", "Nov 2020"],
    datasets: [{
      label: "Median Income",
      data: [
        { "x": 3, "y": 1, "r": 5 },
        { "x": 6, "y": 7, "r": 4 },
        { "x": 8, "y": 10, "r": 6 },
        { "x": 12, "y": 19, "r": 3 },
        { "x": 14, "y": 12, "r": 7 },
        { "x": 10, "y": 18, "r": 5 },
        { "x": 16, "y": 25, "r": 2 },
        //{"x":8,"y":5,"r":100}
      ],
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: 'red',
      fill: false,
      pointRadius: 5,
      pointHoverRadius: 10,
    }]
  },

  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          showLines: true
        }
      }]
    }
  }
});



var ctx1 = document.getElementById("myChartTwo");
var myChart = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ["jun 2020", "jul 2020", "Aug 2020", "Sep 2020", "Oct 2020", "Nov 2020"],
    datasets: [{
      label: "Median Income",
      data: [
        { "x": 3, "y": 1, "r": 5 },
        { "x": 6, "y": 7, "r": 4 },
        { "x": 8, "y": 10, "r": 6 },
        { "x": 12, "y": 19, "r": 3 },
        { "x": 14, "y": 12, "r": 7 },
        { "x": 10, "y": 18, "r": 5 },
        { "x": 16, "y": 25, "r": 2 },
        //{"x":8,"y":5,"r":100}
      ],
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: 'red',
      fill: false,
      pointRadius: 5,
      pointHoverRadius: 10,
    }]
  },

  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          showLines: true
        }
      }]
    }
  }
});

// Bottom Navbar opup
function footerShow(id) {
  let allid = ['indicators', 'housing','community','enroll','risk']
  document.getElementById(id).classList.toggle("show");
  for (let i = 0; i < allid.length; i++) {
    if (allid[i] !== id) {
      document.getElementById(allid[i]).classList.remove("show");
      console.log(allid[i]);
    }
  }
}


// boundaries function
function boundaries() {
  document.getElementById("boundaries").classList.toggle("show");
}

// Filter 
function filterShow() {
  document.getElementById("filterdetail").classList.toggle("show");
}

// checkbox uncheck after refresh
$(document).ready(function () {
  $(':checkbox:checked').prop('checked', false);
});
