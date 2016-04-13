var names; //Call Varible Name
send(5000) //Call the function send
ash() // Call the function ash
function send(x) { //x is a placeholder for the number in perentaces *Cant spell*
	var timeout = setTimeout(hi, x) //x does not need to be defind and shows up here for the wait
}
function ash() {
	names = "Ash"; 
	console.log(names); //Logs name in the console
}
function hi() {
	names = "Hi"; //Note Ash is cleared from names if we wanted to keep it, it would be names += "Hi"
	console.log(names); //Logs name in the console
}
