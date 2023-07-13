function examPrep(input)   {


 let  eaterBreadCount = Number(input[0]);
 let eggShells = Number(input[1]);
 let  cookies = Number(input[2]);

 let easterBreadPrice = eaterBreadCount * 3.20;  
 let eggSPrice = eggShells * 4.35;
 let cookiesPrice = cookies * 5.40;
 let paintPrice = eggShells * 12 * 0.15;


 let totalPrice = easterBreadPrice + eggSPrice + cookiesPrice + paintPrice;


 console.log(totalPrice.toFixed(2));



}examPrep (["3","2","2"]);
                                                                        
    
