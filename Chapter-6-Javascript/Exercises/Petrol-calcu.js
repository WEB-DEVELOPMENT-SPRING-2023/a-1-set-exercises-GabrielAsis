function calc(){
    var liters=
    document.getElementById('liters').value;

    var cost=
    document.getElementById('cost').value;

    let result=
    liters*cost;

    document.getElementById('result').innerHTML="Your total cost is:" + result;
}