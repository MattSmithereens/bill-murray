$(document).ready(function() {
  $("form#buttons").submit(function(){
    var answer1 = parseInt($("input:radio[name=q1]:checked").val());
    var answer2 = parseInt($("input:radio[name=q2]:checked").val());
    var answer3 = parseInt($("input:radio[name=q3]:checked").val());
    var answer4 = parseInt($("input:radio[name=q4]:checked").val());
    var answer5 = parseInt($("input:radio[name=q5]:checked").val());
    var result = (answer1+answer2+answer3+answer4+answer5)
    console.log(result);

    if (result >= 4) {
      alert("caddy");
      // show("img/caddy.jpeg")
    } else if (result < 4 && => 8)
      alert("zissou");{
    } else if (result < 8 && => 12)
      alert("groundhog"); {

    }

    event.preventDefault();

  });
});
