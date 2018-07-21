$("#exploreBtn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#navDiv").offset().top
    }, 2000);
});
$("#aboutNavBtn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#navDiv").offset().top
    }, 2000);
});
$("#portfolioNavBtn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#portfolioNav").offset().top
    }, 2000);
});
$("#contactNavBtn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contactNav").offset().top
    }, 2000);
});