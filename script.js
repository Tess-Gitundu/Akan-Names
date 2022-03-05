function hello(){
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById ("day").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var century = parseInt(year.slice(0,2));
    var year = parseInt(year.slice(2,4));
    var month = parseInt(month);
    var day = parseInt(day);
    var weekDay =  Math.ceil(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day )%7);
    
    if (day<0 || day>31 || day=="") {
        alert("Invalid day");
    } else if (month<0 || month>12 || month=="" || month==2 && day>29) {
        alert("Invalid month");
    } else if (year<=0 || year=="") {
        alert ("Invalid year.");
    }

    if (male===true) {
        if (weekDay === 1) {
            alert("Your Akan name is: "+ maleNames[0]);
        } else if (weekDay === 2) {
            alert("Your Akan name is: "+ maleNames[1]);
        } else if (weekDay === 3) {
            alert("Your Akan name is: "+ maleNames[2]);
        }else if (weekDay === 4) {
            alert("Your Akan name is: "+ maleNames[3]);
        }else if (weekDay === 5) {
            alert("Your Akan name is: "+ maleNames[4]);
        }else if (weekDay === 6) {
            alert("Your Akan name is: "+ maleNames[5]);
        }else if (weekDay === 7) {
            alert("Your Akan name is: "+ maleNames[6]);
        }
    } else if (female===true) {
        if (weekDay === 1) {
            alert("Your Akan name is: "+ femaleNames[0]);
        } else if (weekDay === 2) {
            alert("Your Akan name is: "+ femaleNames[1]);
        } else if (weekDay === 3) {
            alert("Your Akan name is: "+ femaleNames[2]);
        }else if (weekDay === 4) {
            alert("Your Akan name is: "+ femaleNames[3]);
        }else if (weekDay === 5) {
            alert("Your Akan name is: "+ femaleNames[4]);
        }else if (weekDay === 6) {
            alert("Your Akan name is: "+ femaleNames[5]);
        }else if (weekDay === 7) {
            alert("Your Akan name is: "+ femaleNames[6]);
        }
    } 
}
