function akanName () {
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var date = document.getElementById (date).value;
    var male = document.getElementById(male).checked;
    var female = document.getElementById(female).checked;
    var century = parseInt(year.slice(o,2));
    var year = parseInt(year.slice(2,4));
    var month = parseInt(month);
    var date = parseInt(date);
    var day =  ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date )%7
    if (male === true) {
        alert("Your Akan name is ")
    } else (female === true) {
        alert("Your Akan name is ")
    }