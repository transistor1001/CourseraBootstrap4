$(document).ready(function () {
  $("#mycarousel").carousel({ interval: 2000 });
  $("#btncarousel").on("click", function () {
    if ($("#btncarousel").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel("pause");
      $("#btncarousel").children("span").removeClass("fa-pause");
      $("#btncarousel").children("span").addClass("fa-play");
    } else if ($("#btncarousel").children("span").hasClass("fa-play")) {
      $("#mycarousel").carousel("cycle");
      $("#btncarousel").children("span").removeClass("fa-play");
      $("#btncarousel").children("span").addClass("fa-pause");
    }
  });
});

$(document).ready(function () {
  $("#btnLogin").on("click", function () {
    $("#loginModal").modal();
  });
});

$(document).ready(function () {
  $("#btnReserve").on("click", function () {
    $("#reserveModal").modal();
  });
});
