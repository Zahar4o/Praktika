function solve(input) {

    let index = 0;
    let command = input(index);
    index++;

    while (command !== "Stop") {

        console.log(command); 
        command = input[index];
        index++;
    }
 



 
}
solve(["1","2","Stop"]);