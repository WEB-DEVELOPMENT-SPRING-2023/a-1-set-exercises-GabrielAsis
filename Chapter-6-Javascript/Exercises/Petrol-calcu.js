function calc(){
    var liters=
    document.getElementById('liters').value;

    var cost=
    document.getElementById('cost').value;

    let result=
    liters*cost;

    document.getElementById('total').innerHTML="Your total cost is: ";
   
    document.getElementById('result').innerHTML= + result;

}
