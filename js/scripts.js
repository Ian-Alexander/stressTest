$(document).ready(function(){
  $("form#stress_test").submit(function(event){
    event.preventDefault();
    $("#daily-signs").show();
    $("input:checkbox[name=daily-signs]:checked").each(function(){
      var dailySignsMode = $(this).val();
      $('#daily-signs').append(dailySignsMode + "<br>");
    });
    $("#physiological-signs").show();
    $("input:checkbox[name=physiological-signs]:checked").each(function(){
      var physiologicalSignsMode = $(this).val();
      $('#physiological-signs').append(physiologicalSignsMode + "<br>");
    });
    $('#stress_test').hide();
  });
});
