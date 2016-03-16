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

function disableButton(button) {
  // var button = document.getElementsByClassName("actions");
  // button.lastElementChild.disabled = 'true';
  // submitButton.form.submit();
  $(button).prop("disabled", true);
  $(button).closest("form").submit();
};
$(function bindSubmitClick() {
  $("input[type=submit]").on("click", disableButton);
};
$(bindSubmitClick);

function hideRow() {
    // var row = document.getElementsByClassName("row");
    // row[row.length - 1].style.visibility = "hidden";
    var row = $(event.target).closest(".row")
    row.css("display", "none")
};

function showLastRow() {
  var row = $(event.target).closest(".row")
  row.css("visibility", "block");
};

// Delete Last Row
function deleteLastRow() {
  // var row = document.getElementsByClassName("row");
  // // var row = event.target.parentNode.parentNode;
  // row.style.display = "none";
  // var check_box = row.lastElementChild.lastElementChild;
  // checkbox.selected;
  var row = $(event.target).closest(".row")
  row.css("display", "none")
  var checkbox = $(event.target).siblings().last();
  checkbox.prop("checked", true);
}

// Display Grade
function displayGrade(displayType) {
  // var associations = document.getElementbyId("associations");
  var associations = $("#associations");
  var last_section = associations.lastElementChild;
  if (displayType) {
    last_section.css("display", "block");
    var clicked = "True"
} else {
    last_section.css("display", "none");
  }
}

// Hide The Last Row
function hideLastRow() {
  // if ($("#associations").length > 0){
  displayGrade(false);
  }
}

$(hideLastRow);


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
});

// Change the speed to whatever you want
// Personally i think 1000 is too much
// Try 800 or below, it seems not too much but it will make a difference
