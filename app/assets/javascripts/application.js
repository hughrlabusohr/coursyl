// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .
function disableSubmitButton() {
  $(event.target).prop("disabled", true);
  $(event.target).closest("form").submit();
}

function bindSubmitClick() {
  $("input[type=submit]").on("click", disableSubmitButton);
}

$(bindSubmitClick);

function deleteLastRow() {
  var row = $(event.target).closest(".row");
  row.css("display", "none");
  var checkbox = $(event.target).siblings().last();
  checkbox.prop("checked", true);
}

// Display Grade
function displayGrade(displayType) {
  var associations = $("#associations");
  var last_section = associations.children().last();
    if (displayType) {
      last_section.css("display", "block");
  } else {
      last_section.css("display", "none");
    }
}


// Hide The Last Row
function hideLastRow() {
  displayGrade(false);
}

$(hideLastRow);

// Smooth Scroll
$('.smoothScroll').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000); // The number here represents the speed of the scroll in milliseconds
      return false;
    }
  }
});

$(function calendar() {
    $('#datetimepicker6').datetimepicker();
    $('#datetimepicker7').datetimepicker({
        useCurrent: false //Important! See issue #1075
    });
    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });
});
