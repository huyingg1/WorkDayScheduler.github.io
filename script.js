$(function () {
  var htmlcode = "";
  for (var i = 0; i < 24; i++) {
    htmlcode += '<div id="hour-' + i + '" class="row time-block">';
    htmlcode +=
      '<div class="col-2 col-md-1 hour text-center py-3">' + i + "AM</div>";
    htmlcode +=
      '<textarea class="col-8 col-md-10 description" rows="3"></textarea>';
    htmlcode +=
      '<button class="btn saveBtn col-2 col-md-1" aria-label="' + i + '">';
    htmlcode += '<i class="fas fa-save" aria-hidden="true"></i>';
    htmlcode += "</button>";
    htmlcode += "</div>";
  }
  $("header").append(htmlcode);

  var now = dayjs().hour();

  $("#hour-" + now).addClass("present");
  for (var j = 0; j < now; j++) {
    $("#hour-" + j).addClass("past");
  }
  for (var k = 23; k > now; k--) {
    $("#hour-" + k).addClass("future");
  }

  //btn to save data into localstore
  $(".btn").click(function () {
    var index = $(this)[0].ariaLabel;
    var text = $("textarea").eq(index);
    var textcontent = text[0].value;
    localStorage.setItem("hour-" + index, JSON.stringify(textcontent));
  });
});
//function to display data from localstore
$(function () {
  for (p = 0; p < 24; p++) {
    currenthour = new Date().getHours();
    var keysaved = "hour-" + `${p}`;
    if (keysaved !== null) {
      $("header")
        .children()
        .eq(p + 2)
        .children("textarea")
        .html(JSON.parse(window.localStorage.getItem(`hour-${p}`)));
    } else {
      return;
    }
  }
});

//function for display current date on the nav bar
$(function () {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurthday",
    "Friday",
    "Saturday",
  ];

  var d = new Date();
  var mindex = d.getMonth();
  var mname = months[mindex];
  var dindex = d.getDate();
  var wdayindex = d.getDay();
  var dname = days[wdayindex];
  var yindex = d.getFullYear();
  $("#currentDay").html(`${dname}, ${dindex} ${mname} ${yindex}`);
});

//header text in center
$("header").addClass("text-center");
