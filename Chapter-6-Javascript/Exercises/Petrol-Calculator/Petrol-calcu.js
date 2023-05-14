function calc(){ // a functino name calc(). will be activated by the button on the html page
    var liters= //setting a variable named 'liters'
    document.getElementById('liters').value; //this will be the value of the variable above and gathers data from the input using ids

    var cost=//setting a variable named 'cost'
    document.getElementById('cost').value; //this will be the value of the variable above and gathers data from the input using ids

    let result= //setting a new variable named 'result'
    liters*cost //this will use the 2 previous varibles and multiply them giving the value of the variable 'result'

    document.getElementById('total').innerHTML="Your total cost is: "; //prints out the desired sentence onto the html page
   
    document.getElementById('result').innerHTML= + result; //prints out the result variable onto the html page

}
