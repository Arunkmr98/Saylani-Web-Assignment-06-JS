// Assignment 21-25

//A refers to Assignment and t referes to tasks

function A21_t1() {

    let fname = prompt("Enter your first name: ");
    let lname = prompt("Enter your last name: ");

    letfullName = fname + "\t" + lname;

    alert("Hello\t" + fullName);


}


function A21_t2() {

    let mobile = prompt("Enter your favorite mobile model: ");

    document.write("My Favorite phone is:\t" + mobile + "<br>" + "Length of String is:" + mobile.length);

}


function A21_t3() {

    let str = "Pakistani";

    document.write("String:\t" + str + "<br>" + "Index of n is:" + str.indexOf('n'));
}


function A21_t4() {

    let str = "Hello World";

    document.write("String:\t" + str + "<br>" + "Last Index of n is:" + str.lastIndexOf('l'));
}



function A21_t5() {

    let str = "Pakistani";

    document.write("String:\t" + str + "<br>" + "Char at index 3 is:\t" + str[3]);
}



function A21_t6() {

    let fname = prompt("Enter your first name: ");
    let lname = prompt("Enter your last name: ");

    let fullName = fname.concat("\t" + lname);

    alert("Hello\t" + fullName);

}



function A21_t7() {

    let City = "Hyderabad";
    document.write("City:\t" + City + "<br>" + "After Replacement:\t" + City.replace("Hyder", "Islam"));

}


function A21_t8() {

    let message = "Ali and Sami are best friends.They play cricket and football together ";
    document.write(message.split("and").join("&"));

}


function A21_t9() {

    let value = "472";

    document.write("Value:" + value + "<br> Type:" + typeof(value) + "<br> value:" + parseInt(value) + "<br>" + "Type of value:" + typeof(parseInt(value)));



}




function A21_t10() {

    let input = prompt("Enter any String:");

    document.write("Before Casting:" + input + "<br>");
    document.write("After Casting" + input.toUpperCase());


}


function A21_t11() {

    let sentence = prompt("Enter any string to convert it into title case:");
    document.write("User Input:\t" + sentence);
    sentence = sentence.toLowerCase().split(" ");

    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }

    document.write("Title Case:\t" + sentence.join(" "));


}




function A21_t12() {

    let num = 35.36;
    document.write("Before Removing Dot Operator and converting to string:\t" + num);
    num = num.toString();
    document.write("After Converting and removing dot operator:\t" + num.replace(".", ""));

}



function A21_t13() {

    let username = prompt("Enter username:");

    if (username.includes("@") || username.includes("!") || username.includes(".") || username.includes(",")) {
        alert("Please Enter Valid Username");
    }
}




function A21_t14() {

    let Snacks = ["cake", "apple pie", "cookie", "chips", "patties"];

    let searchWord = prompt("Welcome to ABC Bakery! What do you want to order?");
    searchWord = searchWord.toLowerCase();


    if (Snacks.indexOf(searchWord) == -1) {
        alert(searchWord + " is not available in our Bakery");
    } else {
        document.write("you have searched for " + searchWord + "<br>" +
            "it is available at index:" + Snacks.indexOf(searchWord));

    }


}

function A21_t16() {
    let str = "University of Karachi";
    str = str.split("");
    for (let index = 0; index < str.length; index++) {
        document.write(str[index] + "<br>");
    }
}


function A21_t17() {
    let str = prompt("Enter Any String:");

    document.write("User input:" + str + "<br>" + "Last Character of input:" + str[str.length - 1]);
}


function A21_t18() {
    let str = "The quick brown fox jumps over the lazy dog";
    str = str.split(" ");
    let res = str.filter((v) => (v === "the")).length;
    document.write(res);

}

//Assignment 21-25----------------completed-------------// Assignment 21-25


// Assignment 26-30 starts--------------------------//



function A26_t1() {

    let value = parseFloat(prompt("Enter any positive decimal number"));

    if (value < 0) {
        alert("Enter Positive decimal only");

    } else {

        document.write("Number: " + value + "<br>");
        document.write("Round off value:" + Math.round(value) + "<br>");

        document.write("Floor value:" + Math.floor(value) + "<br>");
        document.write("ceil value:" + Math.ceil(value) + "<br>");


    }
}





function A26_t2() {

    let value = parseFloat(prompt("Enter any positive decimal number"));

    if (value > 0) {
        alert("Enter negative decimal only");

    } else {

        document.write("Number: " + value + "<br>");
        document.write("Round off value:" + Math.round(value) + "<br>");

        document.write("Floor value:" + Math.floor(value) + "<br>");
        document.write("ceil value:" + Math.ceil(value) + "<br>");


    }
}




function A26_t3() {

    let value = parseFloat(prompt("Enter any Number"));



    document.write("Number: " + value + "<br>");
    document.write("Absolute value:" + Math.abs(value) + "<br>");

}



function A26_t4() {
    document.write("Random Value of Dice: <br>".bold());

    let dice = [1, 2, 3, 4, , 5, 6];
    randomDice = dice[Math.floor(Math.random() * dice.length)];
    document.write("Random Dice value:" + randomDice + "<br>");
    randomDice = dice[Math.floor(Math.random() * dice.length)];
    document.write("Random Dice value:" + randomDice + "<br>");

}




function A26_t5() {
    document.write("Random Coin Value <br>".bold());

    let dice = ["Heads", "Tails"];
    randomDice = dice[Math.floor(Math.random() * dice.length)];
    document.write("Random Coin value:" + randomDice + "<br>");
    randomDice = dice[Math.floor(Math.random() * dice.length)];
    document.write("Random Coin value:" + randomDice + "<br>");

}



function A26_t6() {

    let values = [];

    // fill empty array with 1-100 
    for (let index = 1; index <= 100; index++) {
        values.push(index);
    }
    // seleting random values from filled array
    let randomValue = values[Math.floor(Math.random() * values.length)];
    document.write("Random Value between 1-100 is:" + randomValue);

}


function A26_t7() {

    let weight = parseFloat(prompt("Enter your weight in Kilograms"));

    document.write("The weight of user is\t" + weight + "Kilograms");

}


function A26_t8() {

    let values = 8;
    let guessNum = parseInt(prompt("Enter a Number between 1-10 "));


    if (guessNum == value) {
        alert("Congratulations!");
    } else {

        alert("Sorry Wrong Guess!");
    }
}

//--------------Assignment 26-30 ends here-------------------
// Assignment---------------31-34 starts here----------------



function A31_t1() {

    let today = new Date();
    document.write(today);
}



function A31_t2() {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date();
    let monthName = months[d.getMonth()];
    document.write("Current month is: \t" + monthName);

}


function A31_t3() {

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let d = new Date();
    let day = days[d.getMonth()];
    alert("Today is:" + day.slice(0, 3));

}





function A31_t4() {

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let d = new Date();
    let day = days[d.getMonth()];

    if (day == "Sat" || day == "Sun" || day == "sat" || day == "sun") {
        alert("It's Fun Day");
    }
}



function A31_t5() {
    let d = new Date();
    let day = d.getDate();



    if (day < 16) {
        alert("First Fifteen Days of month");
    } else if (day >= 16) {
        alert("Last Fifteen Days of month");
    }
}

function A31_t6() {
    let date = new Date();
    let Endyear = date.getFullYear();
    let Endmonth = date.getMonth();
    let Eday = date.getDate();
    let SYear = 1970;

    let yearDiff = Endyear - SYear;
    let totalDays = yearDiff * 365;
    let totalHours = totalDays * 86400;
    document.write(totalHours / 8.64);

}

function A31_t7() {
    let hours = new Date().getHours();
    hours = (hours + 24 - 2) % 24;
    let mid = "";
    if (hours == 0) {
        hours = 12;
        mid = "Am"
        alert(mid);
    } else if (hours > 12) {
        hours = hours % 12;
        mid = 'Pm';
        alert(mid);
    }

}


function A31_t8() {
    let date = new Date(new Date().getFullYear(), 11, 31)
    document.write("Last Date of this year is:\t" + date);

}



function A31_t9() {

    let date = new Date(2015, 6, 1);

    let currentDate = new Date();
    document.write(currentDate.getFullYear() - date.getFullYear() + "\t years has been passed");

}

function A31_t11() {

    let date = new Date();

    date.getHours() + 1;
    document.write("Current Date is:\t" + date);


}


function A31_t12() {

    let date = new Date();
    let backYears = new Date(date.getFullYear() - 100, date.getMonth(), date.getDay());
    document.write("Current Date is:\t" + date + "<br>" + "100 years back, it was \t" + backYears);
}

function A31_t13() {
    let age = parseInt(prompt("Enter your age:"));
    currentDate = new Date();
    document.write("your age is:" + age + "<br>" + "your birth year is:" + (currentDate.getFullYear() - age));
}



function A31_t14() {


    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date();
    let monthName = months[d.getMonth()];


    let dt = new Date();
    let custName = prompt("Enter Customer Name:");
    let units = parseInt(prompt("Enter Customer's Units Consumption:"));
    let chargesPerUnit = parseFloat(prompt("Enter Charges Per Unit"));
    document.write("K-Electric Bill".bold() + "<br>");
    document.write("Customer Name:" + custName + "<br>");

    document.write("Month:" + monthName + "<br>");



    document.write("Unit Consumption:" + units + "<br>");
    document.write("Charges per Unit:" + chargesPerUnit + "<br> <br>");
    document.write("Net Amount Payable (within due date):\t" + (units * chargesPerUnit) + "<br>");
    document.write("Late payment Surcharge:\t" + 350 + "<br>");
    document.write("Gross Amount Payable (After Due date):\t" + ((units * chargesPerUnit) + 350) + "<br>");


}


//--------------------Assignment31-34 ends here------------------------




function A35_t1() {
    let dt = new Date();
    document.write(dt);
}


function A35_t2(fname, lname) {
    alert("Hello " + fname + lname);

}



function A35_t3(num1, num2) {

    return num1 + num2;

}



function A35_t4(num1, num2, operator) {

    if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;


    } else if (operator == "*") {
        return num1 * num2;
    } else if (operator == "/") {


        return num1 / num2;
    }
}


function A35_t5(num) {

    return num * num;

}



function A35_t6(num) {
    return (num != 1) ? n * A35_t6(num - 1) : 1;
}


function A35_t7(startNum, endNum) {

    for (let index = startNum; index <= endNum; index++) {


        document.write(index + "<br>");
    }

}




function A35_t8() {
    let hyp;

    function A35_tt8(base, perpendicular) {

        return (base * base) + (perpendicular * perpendicular);

    }

    hyp = A35_tt8(2, 3);
    hyp = Math.sqrt(hyp);
    document.write(hyp);
}


function A35_t9(height, width) {

    return (height * width);

}
A35_t9(10, 2); // passing as value
A35_t9(height = 12, width = 10); // passing as variable

function A35_t10(str) {

    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}


function A35_t11(str) {
    str = str.toLowerCase();
    let res = [];
    const arrOfWords = str.split(" ");

    const arrOfWordsCased = [];

    for (let i = 0; i < arrOfWords.length; i++) {
        const char = arrOfWords[i].split("");
        char[0] = char[0].toUpperCase();

        arrOfWordsCased.push(char.join(""));
    }
    return arrOfWordsCased.join(" ");

}


function A35_t12(str) {
    let words = str.split(' ');
    let maxLength = 0;
    let findWord;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            findWord = words[i];

        }
    }
    return findWord;
}


function A35_t13(str, letter) {

    let count = str.replace(/[^letter]/g, "").length;
    document.write(count + "times this letter appeared in " + str);

}



function A35_14a(radius) {

    return 2 * (Math.PI * radius);

}


function A35_14b(radius) {

    return (Math.PI * (radius * radius));

}