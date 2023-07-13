function examPrep(input) {

    let firstResult = input[0];
    let secondResult = input[1];
    let thirdResult = input[2];

      let wins = 0;
      let draws =0;
      let loses = 0;

      let ourTeamFirstResult = Number(firstResult[0]);
      let enemyTeamFirstResult = Number(firstResult[2]);

      if(ourTeamFirstResult > enemyTeamFirstResult) {
        wins++; 

      }else if(ourTeamFirstResult < enemyTeamFirstResult  ) {
        loses++;


      }else {
        draws++;

      }

      


      if(ourTeamFirstResult > enemyTeamFirstResult) {
        wins++; 

      }else if(ourTeamFirstResult < enemyTeamFirstResult  ) {
        loses++;


      }else {
        draws++;
      
      console.log(ourTeamFirstResult);





}
examPrep(["3:1","0:2","0;0"]);  