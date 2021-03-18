$(document).ready(function(){

    class CurrCrdHole{
      constructor(course, card1Hole, card2Hole, card3Hole,  card4Hole)
      {
        this.course = course;
        this.card1Hole = card1Hole;
        this.card2Hole = card2Hole;
        this.card3Hole = card3Hole;
        this.card4Hole = card4Hole;
    
      }
    }
    
    class Player {
        constructor(name, plyId, teamId, round, week, cardPositionId, handicap, 
                          strks1, strks2, strks3, strks4, strks5, strks6, strks7, strks8, strks9,
                          hcp1, hcp2, hcp3, hcp4, hcp5, hcp6, hcp7, hcp8, hcp9,
                          pnt1, pnt2, pnt3, pnt4, pnt5, pnt6, pnt7, pnt8, pnt9) 
          {
          this.name = name;
          this.plyId = plyId;
          this.teamId = teamId;
          this.round = round;
          this.week = week;
          this.cardPositionId = cardPositionId;
          this.handicap = handicap;
          this.strks1 = strks1;  this.strks2 = strks2;  this.strks3 = strks3; this.strks4 = strks4; this.strks5 = strks5; this.strks6 = strks6; this.strks7 = strks7; this.strks8 = strks8; this.strks9 = strks9;
          this.hcp1 = hcp1;  this.hcp2 = hcp2;  this.hcp3 = hcp3; this.hcp4 = hcp4; this.hcp5 = hcp5; this.hcp6 = hcp6; this.hcp7 = hcp7; this.hcp8 = hcp8; this.hcp9 = hcp9;
          this.pnt1 = pnt1;  this.pnt2 = pnt2;  this.pnt3 = pnt3; this.pnt4 = pnt4; this.pnt5 = pnt5; this.pnt6 = pnt6; this.pnt7 = pnt7; this.pnt8 = pnt8; this.pnt9 = pnt9;
        }
      
        grossScore(){
    
    
       
          return (this.strks1 + this.strks2 + this.strks3 + 
                  this.strks4 + this.strks5 + this.strks6 +  
                  this.strks7 + this.strks8 + this.strks9) ;
        }
        netScore() {
          
          return this.grossScore() - this.handicap;
        }
    
        totalPts(){
          return (this.pnt1 + this.pnt2 + this.pnt3 + 
                  this.pnt4 + this.pnt5 + this.pnt6 +  
                  this.pnt7 + this.pnt8 + this.pnt9) ;
        }
    
      }
    
      
    class scrCard {
        constructor(cardId, cardName, frntBck,  hdcp1, hdcp2, hdcp3, hdcp4, hdcp5, hdcp6, hdcp7, hdcp8, hdcp9,
                              hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9,
                              par1, par2, par3, par4, par5, par6, par7, par8, par9,
                              yrds1, yrds2, yrds3, yrds4, yrds5, yrds6, yrds7, yrds8, yrds9){
            this.cardId = cardId;  this.cardName   = cardName; this.frntBck = frntBck;
            this.hdcp1 = hdcp1; this.hdcp2 = hdcp2; this.hdcp3 = hdcp3; this.hdcp4 = hdcp4; 
            this.hdcp5 = hdcp5; this.hdcp6 = hdcp6; this.hdcp7 = hdcp7; this.hdcp8 = hdcp8; this.hdcp9 = hdcp9;
            this.hole1 = hole1; this.hole2 = hole2; this.hole3 = hole3; this.hole4 = hole4; 
            this.hole5 = hole5; this.hole6 = hole6; this.hole7 = hole7; this.hole8 = hole8; this.hole9 = hole9;
            this.par1 = par1; this.par2 = par2; this.par3 = par3; this.par4 = par4; 
            this.par5 = par5; this.par6 = par6; this.par7 = par7; this.par8 = par8; this.par9 = par9;
            this.yrds1 = yrds1; this.yrds2 = yrds2; this.yrds3 = yrds3; this.yrds4 = yrds4; 
            this.yrds5 = yrds5; this.yrds6 = yrds6; this.yrds7 = yrds7; this.yrds8 = yrds8; this.yrds9 = yrds9;
        }
    
    
    }
    
    wkCurrCrdHole = new CurrCrdHole(1,1,2,3,4);
    
    card1 = new scrCard(1, "SplitRock","F", 5, 17, 1,  3, 11, 7, 9,  13, 15, 10,11,12,13,14,15,16,17,18,4,4,5,3,5,4,3,4,4,320,100,450,250,600,322,354,401,396 );
    
    card2 = new scrCard(1, "SplitRock","B", 5, 17, 1,  3, 11, 7, 9,  13, 15, 10,11,12,13,14,15,16,17,18,4,4,5,3,5,4,3,4,4,320,100,450,250,600,322,354,401,396 );
    
    
    // player Records
    {
    playerC1P1 = new Player("George1", 1,  1, 1, 1, 1,  9,  4, 4, 4, 4, 4, 4, 4, 4, 4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    playerC1P2 = new Player("Ford1",   2,  1, 1, 1, 2,  18, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    playerC1P3 = new Player("Bob1",    3,  2, 1, 1, 3,  10, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    playerC1P4 = new Player("Chevy1",  4,  2, 1, 1, 4,  9,  4, 4, 4, 4, 4, 4, 4, 4, 4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    playerC2P1 = new Player("George2", 5,  3, 1, 1, 5,  8,  4, 4, 4, 4, 4, 4, 4, 4, 4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    playerC2P2 = new Player("Ford2",   6,  3, 1, 1, 6,  7,  4, 4, 4, 4, 4, 4, 4, 4, 4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    playerC2P3 = new Player("Bob2",    7,  4, 1, 1, 7,  9,  3, 3, 3, 3, 3, 3, 3, 3, 3, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    playerC2P4 = new Player("Chevy2",  8,  4, 1, 1, 8,  18, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    playerC3P1 = new Player("George3", 9,  5, 1, 1, 9,  10, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    playerC3P2 = new Player("Ford3",   10, 5, 1, 1, 10, 9,  4, 4, 4, 4, 4, 4, 4, 4, 4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    playerC3P3 = new Player("Bob3",    11, 6, 1, 1, 11, 8,  4, 4, 4, 4, 4, 4, 4, 4, 4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    playerC3P4 = new Player("Chevy3",  12, 6, 1, 1, 12, 7,  4, 4, 4, 4, 4, 4, 4, 4, 4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    playerC4P1 = new Player("George4", 13, 7, 1, 1, 13, 9,  4, 4, 4, 4, 4, 4, 4, 4, 4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    playerC4P2 = new Player("Ford4",   14, 7, 1, 1, 14, 3,  4, 4, 4, 4, 4, 4, 4, 4, 4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    playerC4P3 = new Player("Bob4",    15, 8, 1, 1, 15, 15, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    playerC4P4 = new Player("Chevy4",  16, 8, 1, 1, 16, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    }
    
    
    })