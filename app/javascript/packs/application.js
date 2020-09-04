// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("turbolinks").start();
require("partial_replacement");
require("howler");
require("slim-scroller");
require("../utility/async-render");
require("../utility/infinite-scrolling-page");

import "../utility/trubolink-patch";

import GoogleAnalytic from "../utility/analytic";
global.GoogleAnalytic = GoogleAnalytic;

require("service-worker-companion");

import "controllers";

$(document).on("turbolinks:load", function() {
  $("body").tooltip({
    selector: ".has-tooltip"
  });

  $("body").popover({
    selector: '[data-toggle="popover"]'
  });

  $(document).on("click", "[data-dismiss=dropdown]", e => {
    e.preventDefault();
    let target = $(e.target).closest(".dropdown-menu");

    setTimeout(function() {
      target.dropdown("toggle");
    }, 250);
  });
});

document.addEventListener("turbolinks:request-start", function(event) {
  var xhr = event.data.xhr;
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
});

$(document).on("click", ".dropdown-menu", function(e) {
  // don't close dropdown on click, within
  e.stopPropagation();
});

require("../stylesheets/application.scss");

// page fonts
require.context("../fonts/quran_fonts", true);
require.context("../images", true);

$(document).ready(function() {
  $("#search").on("click", function(e) {
    $(".expand-collapse").addClass("sb-search-open");
    e.stopPropagation();
    console.log("open");
  });
  $(document).on("click", function(e) {
    if (
      $(e.target).is("#search") === false &&
      $(".form-control").val().length == 0
    ) {
      $(".expand-collapse").removeClass("sb-search-open");
      console.log("close");
    }
  });
  $(".form-control-submit").click(function(e) {
    $(".form-control").each(function() {
      if ($(".form-control").val().length == 0) {
        e.preventDefault();
        $(this).css("border", "2px solid red");
      }
    });
  });
});
