//landing//

function changePic() {
  document.getElementById("profilePic").
  src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/594589/adrian.webp";
}

function normalPic() {
  document.getElementById("profilePic") .
  src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/594589/adrian.webp";
}

//portfolio//
 
var string = "It always seems impossible until it's done― Nelson Mandela"; /*  text  goes here */
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',70); /* speed */

}
frameLooper();
  //clock//
  function clock(){
    var time = new Date();
  
     days = ["Sunday","Monday","Tuesday","Wednesday","Thursday",
     "Friday","Saturday","Sunday"]; 
     day = days[time.getDay()];
     date = time.getDate();
    months = ["January","February","March","April","May",
     "June","July","August","September","October","November","December"];
    month = months[time.getMonth()];
    year = time.getFullYear();
    hours = time.getHours();
    minute = time.getMinutes();
    time= document.getElementById("clock");
    time.textContent = `${day} ${date} ${month}, ${year}.
     Time: ${hours}:${minute}`;
    setTimeout(Tanggal, 10000);
    }
    clock();

    // search button//
    $("button#Search").on("click",() => {
      alert("You clicked GO button");
    });
    

