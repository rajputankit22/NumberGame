var balance = 1000;
document.getElementById("main").innerHTML= balance;
function check() {
    // alert("start");
    balance -= 100;
    document.getElementById("main").innerHTML= balance;
    if(balance < 100) {
        alert("Game Over!");
        return ;
    }
    var numList = [];
    numList[0] = _.random(0, 9);
    numList[1] = _.random(0, 9);
    numList[2] = _.random(0, 9);
    console.log(numList);
    // sort array
    var ascending = _.sortBy(numList);
    var match = ascending[0];
    console.log(ascending);
    console.log(match);


    // function for even
    function evenFunction(ascending) {
        for (var ind=0; ind < ascending.length; ind++) {
            if (ascending[ind]%2 !== 0) {
                return false;
            }
        }
        console.log("even");
        return true;
    }

    // function for odd
    function oddFunction(ascending) {
        for (var ind=0; ind < ascending.length; ind++) {
            if (ascending[ind]%2 === 0) {
                return false;
            }
        }
        console.log("odd");
        return true;
    }

    // function for same number
    function sameFunction(ascending) {
        for (var ind=0; ind < ascending.length; ind++) {
            if (ascending[ind] !== match) {
                return false;
            }
        }
        console.log("same");
        return true;
    }

    // function for sequence
    function seqFunction(ascending){
        if((ascending[1]-ascending[0])==1  && (ascending[2]-ascending[1])==1) {
            console.log("seq");
            return true;
        }
        return false;
    }

    // checking
    if (sameFunction(ascending)) {
        balance += 1000;
        document.getElementById("main").innerHTML= balance;
        document.getElementById("numbers").innerHTML= numList;
        document.getElementById("msg").innerHTML= "You have won ₹1000 as all Numbers are same.";
    }else if (seqFunction(ascending)) {
        balance += 800;
        document.getElementById("main").innerHTML= balance;
        document.getElementById("numbers").innerHTML= numList;
        document.getElementById("msg").innerHTML= "You have won ₹800 as all Numbers are in sequence.";
    } else if (evenFunction(ascending)) {
        balance += 300;
        document.getElementById("main").innerHTML= balance;
        document.getElementById("numbers").innerHTML= numList;
        document.getElementById("msg").innerHTML= "You have won ₹300 as all Numbers are even.";
    }else if (oddFunction(ascending)) {
        balance += 300;
        document.getElementById("main").innerHTML= balance;
        document.getElementById("numbers").innerHTML= numList;
        document.getElementById("msg").innerHTML= "You have won ₹300 as all Numbers are odd.";
    } else {
        document.getElementById("numbers").innerHTML= numList;
        document.getElementById("msg").innerHTML= "You were not lucky this time.";
    }
    console.log(balance);

}
