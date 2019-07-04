$(document).ready(function(){
  $("form#stress_test").submit(function(event){
    event.preventDefault();
    // $("#daily-signs").show();
    $("input:checkbox[name=daily-signs]:checked").each(function(){
      var dailySignsMode = parseInt($(this).val());
        if (dailySignsMode >= 6) {
          alert("you are very stressed");
      } else (dailySignsMode <=5)
          alert ("you are not very stressed")
    });

    // $("#physiological-signs").show();
    // $("input:checkbox[name=physiological-signs]:checked").each(function(){
    //   var physiologicalSignsMode = $(this).val();
    //   $('#physiological-signs').append(physiologicalSignsMode + "<br>");
    // });
    $('#stress_test').hide();
  });
});
