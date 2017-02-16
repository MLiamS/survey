$(function(){
  $("#formInfo").submit(function(){
    event.preventDefault();
    var name = $("#name").val();
    var food = $("#food").val();
    var band = $("input:radio[name=band]:checked").val();
    var color = $("#color").val();
    var date = $("#birthday").val();
    console.log(name,date,food,band,color);
    $("#output1").text(name);
    $("#output2").text(band);
    $("#output3").text(food);
    $("#output4").text(color);
    $("#output5").text(date);
    $(".output span:nth-child(5)").css("background-color", color);
  });


});
