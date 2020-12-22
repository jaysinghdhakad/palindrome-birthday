var dob = document.querySelector("#textarea");
var button = document.querySelector("#button");
var output = document.querySelector("#output");
var outputD = document.querySelector("#output2");
function clickHandler() {
  var input = dob.value;
  var palindrome = true;
  if (input === "10/02/2001") {
    output.innerText = "you are bron on a palindrome date";
    palindrome = false;
  }
  if (input === "20/02/2002") {
    output.innerText = "you are bron on a palindrome date";
    palindrome = false;
  }
  if (input === "01/02/2010") {
    output.innerText = "you are bron on a palindrome date";
    palindrome = false;
  }
  if (input === "11/02/2011") {
    output.innerText = "you are bron on a palindrome date";
    palindrome = false;
  }
  if (input === "21/02/2012") {
    output.innerText = "you are bron on a palindrome date";
    palindrome = false;
  }
  if (input === "01/02/2020") {
    output.innerText = "you are bron on a palindrome date";
    palindrome = false;
  }

  var year = parseInt(input.substring(6, 10), 10);
  var month = parseInt(input.substring(3, 5), 10);
  var date = parseInt(input.substring(0, 2), 10);
  console.log(year);

  if (palindrome) {
    if (year < 2001) {
      output.innerText = "closest palindrome date is 10/02/2001";
      var yearPal = 2001;
      var monthPal = 02;
      var datePal = 10;
    }
    if (year === 2001) {
      if (month < 08) {
        output.innerText = "closest palindrome date is 10/02/2001";
        var yearPal = 2001;
        var monthPal = 02;
        var datePal = 10;
      }
      if (month === 08) {
        if (date <= 05) {
          output.innerText = "closest palindrome date is 10/02/2001";
          var yearPal = 2001;
          var monthPal = 02;
          var datePal = 10;
        } else {
          output.innerText = "closest palindrome date is 20/02/2002";
          var yearPal = 2002;
          var monthPal = 02;
          var datePal = 20;
        }
      } else {
        output.innerText = "closest palindrome date is 20/02/2002";
        var yearPal = 2002;
        var monthPal = 02;
        var datePal = 20;
      }
    }
    if (year < 2008 && year > 2001) {
      output.innerText = "closest palindrome date is 20/02/2002 ";
      var yearPal = 2002;
      var monthPal = 02;
      var datePal = 20;
    }
    if (year === 2008) {
      if (month === 01) {
        if (date <= 20) {
          output.innerText = "closest palindrome date is 20/02/2002";
          var yearPal = 2002;
          var monthPal = 02;
          var datePal = 20;
        } else {
          output.innerText = "closest palindrome date is 01/02/2010";
          var yearPal = 2010;
          var monthPal = 02;
          var datePal = 01;
        }
      } else {
        output.innerText = "closest palindrome date is 01/02/2010";
        var yearPal = 2010;
        var monthPal = 02;
        var datePal = 01;
      }
    }
    if (year < 2010 && year > 2008) {
      output.innerText = "closest palindrome date is 01/02/2010";
      var yearPal = 2010;
      var monthPal = 02;
      var datePal = 01;
    }
    if (year === 2010) {
      if (month === 1) {
        output.innerText = "closest palindrome date is 01/02/2010";
        var yearPal = 2010;
        var monthPal = 02;
        var datePal = 01;
      }
      if (month === 2) {
        if (date <= 5) {
          output.innerText = "closest palindrome date is 01/02/2010";
          var yearPal = 2010;
          var monthPal = 02;
          var datePal = 01;
        } else {
          output.innerText = "closest palindrome date is 11/02/2011";
          var yearPal = 2011;
          var monthPal = 02;
          var datePal = 11;
        }
      }
    }
    if (year === 2011) {
      if (month === 1) {
        output.innerText = "closest palindrome date is 11/02/2011";
        var yearPal = 2011;
        var monthPal = 02;
        var datePal = 11;
      }
      if (month === 2) {
        if (date <= 05) {
          output.innerText = "closest palindrome date is 11/02/2011";
          var yearPal = 2011;
          var monthPal = 02;
          var datePal = 11;
        } else {
          output.innerText = "closest palindrome date is 21/02/2012";
          var yearPal = 2012;
          var monthPal = 02;
          var datePal = 21;
        }
      } else {
        output.innerText = "closest palindrome date is 21/02/2012";
        var yearPal = 2012;
        var monthPal = 02;
        var datePal = 21;
      }
    }
    if (year < 2016 && year > 2011) {
      output.innerText = "closest palindrome date is 21/02/2012";
      var yearPal = 2012;
      var monthPal = 02;
      var datePal = 21;
    }
    if (year === 2016) {
      if (month === 1) {
        if (date <= 20) {
          output.innerText = "closest palindrome date is 21/02/2012";
          var yearPal = 2012;
          var monthPal = 02;
          var datePal = 21;
        } else {
          output.innerText = "closest palindrome date is 02/02/2020";
          var yearPal = 2020;
          var monthPal = 02;
          var datePal = 02;
        }
      } else {
        output.innerText = "closest palindrome date is 02/02/2020";
        var yearPal = 2020;
        var monthPal = 02;
        var datePal = 02;
      }
    }
    if (year > 2016) {
      output.innerText = "closest palindrome date is 02/02/2020";
      var yearPal = 2020;
      var monthPal = 02;
      var datePal = 02;
    }
    if (year > yearPal) {
      var days =
        (year - yearPal) * 365 + (month - monthPal) * 30 + (date - datePal);
    }
    if (year < yearPal) {
      var days =
        (yearPal - year) * 365 + (monthPal - month) * 30 + (datePal - date);
    }
    if (year === yearPal) {
      if (monthPal > month) {
        var days = (monthPal - month) * 30 + (datePal - date);
      }
      if (month > monthPal) {
        var days = (month - monthPal) * 30 + (date - datePal);
      }
      if (month === monthPal) {
        if (datePal > date) {
          var days = datePal - date;
        } else {
          var days = date - datePal;
        }
      }
    }
    outputD.innerText = "you missed it by " + days + " days ";
  }
}

button.addEventListener("click", clickHandler);
