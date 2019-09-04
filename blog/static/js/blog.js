$("#main-nav a").on("click", function(){
   $("#main-nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
