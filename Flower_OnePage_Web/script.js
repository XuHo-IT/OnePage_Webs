function buynow(){
    let phone=prompt("please enter phone number");
    
    if (phone.length!=0 && parseInt(phone)==phone){
        alert("We will call you after 1 min")
    }
    else{
        alert("Please enter phone number again")
        return buynow();
    }
}