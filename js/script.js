const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

var acc =document.getElementsByClassName("accordion");
var i;
   
  for(i = 0; i < acc.length; i++)
  {
    acc[i].addEventListener("click", function
    (){
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var pannel = this.nextElementSibling;

        if(pannel.style.display === "block"){
            pannel.style.display = "none";
        }
        else{
            pannel.style.display = "block";
        }
    });
  }

$(document).ready(function(){
    $('.buttons').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.diet .box').show(400);
        }
        else{
            $('.diet .box').not('.' + filter).hide(200);
            $('.diet .box').filter('.' + filter).show(400);
        }
    });
});

/* YOGA PART */
ScrollReveal().reveal(".hero_card", {
    ...scrollRevealOption,
    interval: 500,
});

/* CLASSES PART */
ScrollReveal().reveal(".classes_image", {
    duration: 1000,
    interval: 500,
});

