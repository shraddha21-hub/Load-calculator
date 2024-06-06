// Load Calculator JS
$(document).ready(function () {
	$(".accordion_title").click(function () {
	  $(this).toggleClass("active").next(".accordion_body").slideToggle().parent().siblings().find(".accordion_body").slideUp().prev().removeClass("active");
  });
});

  function increaseValue() {
	var value = parseInt(document.getElementById('number').value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
	var value = parseInt(document.getElementById('number').value, 10);
	value = isNaN(value) ? 0 : value;
	value < 1 ? value = 1 : '';
	value--;
	document.getElementById('number').value = value;
  }
  // End Load Calculator JS
