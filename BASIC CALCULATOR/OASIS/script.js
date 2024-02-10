let outputScreen = document.getElementById("output-Screen");

function display(num){
    outputScreen.value += num;
}
function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value)
    }
    catch(err)
    {
        alert("Invalid")
    }
}
function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);

}

function calculateSquareRoot() {
        try {
            outputScreen.value = Math.sqrt(eval(outputScreen.value)).toString();

        } catch (error) {
            alert("Invalid")
        }
    }
