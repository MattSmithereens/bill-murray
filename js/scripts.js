$(document).ready(function() {
  $("form#buttons").submit(function(){
      event.preventDefault();
    var answer1 = parseInt($("input:radio[name=q1]:checked").val());
    var answer2 = parseInt($("input:radio[name=q2]:checked").val());
    var answer3 = parseInt($("input:radio[name=q3]:checked").val());
    var answer4 = parseInt($("input:radio[name=q4]:checked").val());
    var answer5 = parseInt($("input:radio[name=q5]:checked").val());
    var result = (answer1+answer2+answer3+answer4+answer5)
    console.log(result);

    if (result <= 5) {
      $("#caddy").show();
    } else if (result > 5 && result <= 10) {
      $("#zissou").show();
    } else if (result > 10 && result <= 15) {
      $("#groundhog").show();
    } else if (result > 15 && result <= 20){
      $("#ghost").show();
    } else {
      alert("you missed one!");
    }



  });
});

// (result < 12 && result => 16)
