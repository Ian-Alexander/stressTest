var stressors =function (input){

}
$(document).ready(function(){
  $("form#stress_test").submit(function(event){
    event.preventDefault();
    var stress = [];
    $("input:checkbox[name=daily-signs]:checked").each(function(){
      var stressInput = $(this).val();
      stress.push(stressInput);

    //   var dailySignsMode = $(this).val();
    //   console.log(dailySignsMode)
    //     if (dailySignsMode >= 5) {
    //       alert("you are very stressed");
    //   } else {
    //       alert ("you are not very stressed")
    // }
  });
  console.log(stress);
    // $("#physiological-signs").show();
    // $("input:checkbox[name=physiological-signs]:checked").each(function(){
    //   var physiologicalSignsMode = $(this).val();
    //   $('#physiological-signs').append(physiologicalSignsMode + "<br>");
    // });
    $('#stress_test').hide();
  });
});
