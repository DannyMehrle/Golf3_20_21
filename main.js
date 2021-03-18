function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  
  $(document).ready(function () {


    $(".links").click(function (e) {
      $(".sectionsHide").slideUp(900).delay(900);
      var htmlString = $(this).html();
      var tempSection = "section";
  
      var jMatch = htmlString.slice(0, 5);
  
      if(jMatch == "Match"){
        var showSelection = "#" + tempSection + jMatch;
      }
      else {
        var showSelection = "#" + tempSection + htmlString;
        $(".headMatch").text(``);
      }
      
      $(showSelection).slideDown(900);
    
      if (htmlString == "Match1") {
        cCard = 1;
        $(".headMatch").text(`Match ${cCard}  `);
      }
      if (htmlString == "Match2") {
        cCard = 2;
        $(".headMatch").text(`Match ${cCard}  `);
      }
      if (htmlString == "Match3") {
        cCard = 3;
        $(".headMatch").text(`Match ${cCard}  `);
      }
      if (htmlString == "Match4") {
        cCard = 4;
        $(".headMatch").text(`Match ${cCard}  `);
      }
    });
  
  
    // used to entering strokes 
    {
      $(".strkHoleTm1").click(function (e) {
        currPlyrStrksId = $(this).attr('id');
        $(` #${holdcurrPlyrStrksId} `).removeClass("editHole")
          .addClass("team1Css");
        holdcurrPlyrStrksId = currPlyrStrksId;
        $(` #${currPlyrStrksId} `).addClass("editHole");
  
      });
      $(".strkHoleTm2").click(function (e) {
        currPlyrStrksId = $(this).attr('id');
        $(` #${holdcurrPlyrStrksId} `).removeClass("editHole")
          .addClass("team1Css");
        holdcurrPlyrStrksId = currPlyrStrksId;
        $(` #${currPlyrStrksId} `).addClass("editHole");
  
      }); 
      
  {
  
        $("#number1").click(function (e) {
          if (currPlyrStrksId == "") {
            return
          }
          $(` #${currPlyrStrksId} `).text(1);
        });
  
        $("#number2").click(function (e) {
          if (currPlyrStrksId == "") {
            return
          }
          $(` #${currPlyrStrksId} `).text(2);
        });
  
        $("#number3").click(function (e) {
          if (currPlyrStrksId == "") {
            return
          }
          $(` #${currPlyrStrksId} `).text(3);
        });
  
        $("#number4").click(function (e) {
          if (currPlyrStrksId == "") {
            return
          }
          $(` #${currPlyrStrksId} `).text(4);
        });
  
        $("#number5").click(function (e) {
          if (currPlyrStrksId == "") {
            return
          }
          $(` #${currPlyrStrksId} `).text(5);
        });
  
  
  
        $("#number6").click(function (e) {
          if (currPlyrStrksId == "") {
            return
          }
          $(` #${currPlyrStrksId} `).text(6);
        });
  
  
  
        $("#number7").click(function (e) {
          if (currPlyrStrksId == "") {
            return
          }
          $(` #${currPlyrStrksId} `).text(7);
  
        });
  
        $("#number8").click(function (e) {
          if (currPlyrStrksId == "") {
            return
          }
          $(` #${currPlyrStrksId} `).text(8);
  
        });
  
        $("#number9").click(function (e) {
        
          if (currPlyrStrksId == "") {
            return
          }
          $(` #${currPlyrStrksId} `).text(9);
  
        });
  
        $("#numberMinus").click(function (e) {
          let temp = $(` #${currPlyrStrksId} `).html();
          if (currPlyrStrksId == "") {
            return
          }
          if (!(temp < 2)) {
            temp--;
            $(` #${currPlyrStrksId} `).text(temp);
  
          };
        });
  
        $("#numberPlus").click(function (e) {
          let temp = $(` #${currPlyrStrksId} `).html();
          if (currPlyrStrksId == "") {
            return
          }
          if (!(temp > 9)) {
            temp++;
            $(` #${currPlyrStrksId} `).text(temp);
  
          };
        });
  }
  
      $(".gItemCrd, team1Css").click(function (e) {
        if (currPlyrStrksId == "") {
          return
        }
        $(` #${currPlyrStrksId} `).removeClass("editHole");
        currPlyrStrksId = "";
      });
  
    }
  
  
  
    function loadCard(c, p, h) {
      console.log(c);
      for (p = 1; p < 5; p++) {
        $(`#htmlC${c}P${p}Nm`).text(eval(` playerC${c}P${p}.name `));
        $(`#htmlC${c}P${p}H1`).text(eval(` playerC${c}P${p}.h${h}`));
        $(`#htmlC${c}P${p}H2`).text(eval(` playerC${c}P${p}h${h}`));
        $(`#htmlC${c}P${p}H3`).text(eval(` playerC${c}P${p}h${h}`));
        $(`#htmlC${c}P${p}H4`).text(eval(` playerC${c}P${p}h${h}`));
        $(`#htmlC${c}P${p}H5`).text(eval(` playerC${c}P${p}h${h}`));
        $(`#htmlC${c}P${p}H6`).text(eval(` playerC${c}P${p}h${h}`));
        $(`#htmlC${c}P${p}H7`).text(eval(` playerC${c}P${p}h${h}`));
        $(`#htmlC${c}P${p}H8`).text(eval(` playerC${c}P${p}h${h}`));
        $(`#htmlC${c}P${p}H9`).text(eval(` playerC${c}P${p}h${h}`));
        $(`#htmlC${c}P${p}Gross`).text(eval(` playerC${c}P${p}.grossScore() `));
        $(`#htmlC${c}P${p}Hncp`).text(eval(` playerC${c}P${p}.handicap`));
        $(`#htmlC${c}P${p}Net`).text(eval(` playerC${c}P${p}.netScore() `));
  
      }
    }
  
  
  
  
  // toogle hole groups of 3
  {
    function hide1_3() {
      $(".hide1_3").toggle(1000);
    }
  
    function hide4_6() {
      $(".hide4_6").toggle(1000);
    }
  
    function hide7_9() {
      $(".hide7_9").toggle(1000);
    }
  }
  
  
  });