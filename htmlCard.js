cCard = 0;
cPlyer = 0;
cHole = 0;
holdcurrPlyrStrksId = 0;
currPlyrStrksId = 0;


function displayHeadNavHole(cCard, cPlyer, cHole){
 cHole = 2;  
$(` #navHole `).append(`<div class="cssHoleNav ">
             <span><i class="arrowLeft"></i></span>
             <span>HOLE: </span>
            
             <span class="currHoleCss" id = "id_currHole${cHole}"> </span>
           
             <span>PAR:</span>
             <span id = "id_currHolePar${cHole}" class="currHoleCss">5</span>
             <span>HANDICAP:</span> 
             <span id = "id_currHoleHndcp${cHole}" class="currHoleCss">5</span>
            <span>YARDS: </span> 
            <span id = "id_currHoleYards${cHole}" class="currHoleCss">333</span>
            <span><i class="arrowRight"></i></span>
            </div>`);

$(".arrowLeft").addClass("fa fa-arrow-left" );    
$(".arrowLeft").addClass("leftArrow");   
$(".arrowRight").addClass("fa fa-arrow-right" );    
$(".arrowRight").addClass("rightArrow");



$(`#id_currHole${cHole}`).html(cHole);
}

function cardsPerHole(currCard){

    $(` #card `).append(`<div class="cssCardContainer ">
        <div class="gItemCrd  headerCss" >NAME</div>
        
        <div class="gItemCrd  headerCss" >PLAYER HANDICAP / HOLE</div>
        <div class="gItemCrd  headerCss" >STROKES</div>
        <div class="gItemCrd  headerCss" >POINTS</div>
        <div class="gItemCrd  headerCss" >GROSS</div>
        <div class="gItemCrd  headerCss" >PLAYER TOTAL HANDICAP</div>
        <div class="gItemCrd  headerCss" >NET</div>         
        <div class="gItemCrd  team1Css"                     id="nameP1">Harry</div>
       
        <div class="gItemCrd  team1Css"                     id="hdcpForHoleP1">0</div>
        <div class="          team1Css strkHoleTm1"         id="strksP1">5</div>
        <div class="gItemCrd  team1Css"                     id="pntsP1">.5</div>
        <div class="gItemCrd  team1Css"                     id="grossP1">0</div>
        <div class="gItemCrd  team1Css"                     id="totalHdcpP1">0</div>
        <div class="gItemCrd  team1Css"                     id="netP1">0</div>
        <div class="gItemCrd  team2Css"                     id="nameP2">George</div>
        
        <div class="gItemCrd  team2Css"                     id="hdcpForHoleP2">2</div>
        <div class="          team2Css strkHoleTm2"         id="strksP2">4</div>
        <div class="gItemCrd  team2Css"                     id="pntsP2">1</div>
        <div class="gItemCrd  team2Css"                     id="grossP2">0</div>
        <div class="gItemCrd  team2Css"                     id="totalHdcpP2">2</div>
        <div class="gItemCrd  team2Css"                     id="netP2">0</div>
        <div class="gItemCrd  team1Css"                     id="nameP3">Harry</div>
        
        <div class="gItemCrd  team1Css"                     id="hdcpForHoleP3">0</div>
        <div class="          team1Css strkHoleTm1"         id="strksP3">5</div>
        <div class="gItemCrd  team1Css"                     id="pntsP3">0</div>
        <div class="gItemCrd  team1Css"                     id="grossP3">0</div>
        <div class="gItemCrd  team1Css"                     id="totalHdcpP3">0</div>
        <div class="gItemCrd  team1Css"                     id="netP3">0</div>
        <div class="gItemCrd  team2Css"                     id="nameP4">Bobby franks</div>
        
        <div class="gItemCrd  team2Css"                     id="hdcpForHoleP4">0</div>
        <div class="          team2Css strkHoleTm2"         id="strksP4">6</div>
        <div class="gItemCrd  team2Css"                     id="pntsP4">1</div>
        <div class="gItemCrd  team2Css"                     id="grossP4">0</div>
        <div class="gItemCrd  team2Css"                     id="totalHdcpP4">0</div>
        <div class="gItemCrd  team2Css"                     id="netP4">0</div>


    </div>
    `);

}

function enterNumberHole(currCard){
    $(` #numbers`).append(`
        <div class="cssNumberPad ">
        <div id="number1"    class="one   enterScores">1</div>
        <div id="number2"    class="two   enterScores">2</div>
        <div id="number3"    class="three enterScores">3</div>
        <div id="number4"    class="four  enterScores">4</div>
        <div id="number5"    class="five  enterScores">5</div>
        <div id="number6"     class="six   enterScores">6</div>
        <div id="number7"    class="seven enterScores">7</div>
        <div id="number8"     class="eight enterScores">8</div>      
        <div id="number9"    class="nine  enterScores">9</div>
        <div id="numberPlus" class="plus  enterScores"><i class="fa fa-plus"></i></div>
        <div class="logoNumber enterScores"><img  src="scoreCard.jpg" alt="GOLF LOGO" width="35px" height="35px"> </div>
        <div id="numberMinus" class="minus enterScores"><i class="fa fa-minus"></i></div>

        `);    
}

function teamCard(currCard){
    $(` #teamPts `).append(`   
    <div class="grid-container-team-pts">
    <div class="logo hdScrCrd"><img src="shopping.png" alt="GOLF LOGO" width="40" height="40"></div>
    <div class="headerCss12  hdScrCrd"> A PLAYER POINTS</div>
    <div class="headerCss13  hdScrCrd"> B PLAYER POINTS</div>
    <div class="headerCss14  hdScrCrd"> TEAM POINTS</div>
    <div class="headerCss15  hdScrCrd">TOTAL TEAM POINTS</div>
    <div class="headerCss21  team1Css">TEAM 1</div>
    <div class="gItmTmPts22  team1Css" id="aPtsCard">1</div>
    <div class="gItmTmPts23  team1Css" id="bPtsCard">2</div>
    <div class="gItmTmPts24  team1Css" id=" team1PtsCard1">3</div>
    <div class="gItmTmPts25  team1Css" id=" team1TotalPtsCard1">4</div>
    <div class="headerCss31  team2Css">TEAM 2</div>
    <div class="gItmTmPts32  team2Css" id=" plyrATeam2TotalPtsCard1">5</div>
    <div class="gItmTmPts33  team2Css" id=" plyrBTeam2TotalPtsCard1">6</div>
    <div class="gItmTmPts34  team2Css" id=" team2PtsCard1">7</div>
    <div class="gItmTmPts35  team2Css" id=" team2TotalPtsCard1">8</div>
</div>
`); 

};

