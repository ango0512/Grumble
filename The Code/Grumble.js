//Script for Joining the Waitlist

//Variables
  var c = 1200;
  var t;
  var timer_is_on = 0;

//Customer's time
  function customer(name,time){
    this.name = name;
    this.time = time;
  }

//Countdown time function
  function timedCount() {
    c = c - 1;
    //We set the milliseconds to 100 so we can show the time count down faster- It is supposed to be 10,000 milliseconds.
    t = setTimeout(function(){ timedCount() }, 100);
    return c;
  }
//Update Table for 2 time
function update2(getNew){
  var lastTime = list42_1[list42_1.length-1].time;
  var curTime = timedCount();
  var timeChange = lastTime - curTime;
  var table = document.getElementById("table_for_two");

  for(var i=0;i < list42_1.length;i++){
    if (getNew === true && i === list42_1.length-1){
      continue;
    }else{
      list42_1[i].time = list42_1[i].time - timeChange;         
    }

    var cell = table.rows[i+1].cells[1];
    var cur_time = Math.round(list42_1[i].time/60);

    //Status of customers
      if (cur_time < -80){
        cell.innerHTML = "Done eating!";

      }
      else if (cur_time < -10){
        cell.innerHTML = "Seated";

      }
      else if (cur_time <= 0){
        cell.innerHTML = "Table is ready!";
      }
      else{
        cell.innerHTML = cur_time;
      }

    
  }
}

//Update Table for 3-4 time
function update4(getNew){
  var lastTime = list44_1[list44_1.length-1].time;
  var curTime = timedCount();
  var timeChange = lastTime - curTime;
  var table = document.getElementById("table_for_four");
  for(var i=0;i < list44_1.length;i++){
    if (getNew === true && i === list44_1.length-1){
      continue;
    }
    else{
      list44_1[i].time = list44_1[i].time - timeChange;         
    }
    var cell = table.rows[i+1].cells[1];
    var cur_time = Math.round(list44_1[i].time/60);
    if (cur_time < -80){
      cell.innerHTML = "Done eating!";

    }
    else if (cur_time < -10){
      cell.innerHTML = "Seated";

    }
    else if (cur_time <= 0){
      cell.innerHTML = "Table is ready!";
    }
    else{
      cell.innerHTML = cur_time;
    }
  }
}

//Lists of customers in table
var list42_1 = [new customer("Jessica",1100)];
var list44_1 = [new customer("Alicia",1150)];

//Join or add yourself to the waitlist
document.getElementById("add2").onclick = function(){
  //Variables
    var name = prompt("What's your name?");
    var party = parseInt(prompt("How many people are in your group?"));
    var newCustomer = new customer(name,1200);
    var table;
  if (party <= 2){
    table = document.getElementById("table_for_two");     
  }else if (party <=4){
    table = document.getElementById("table_for_four");
  }
  
  var len = table.rows.length;
  var row = table.insertRow(len);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name;
  if (party <= 2){
    list42_1.push(newCustomer);
    cell2.innerHTML= 20;
    update2(true);
  }
  else if (party <=4){
    list44_1.push(newCustomer);
    cell2.innerHTML= 20;
    update4(true);
  }
   /*want to update all the times */  

};
//Reprint/refresh the page
document.getElementById("refresh").onclick = function(){
  update2(false);
  update4(false);
}

//for the Hompage "try something new around you!" homepage
  $(document).ready(function () {
    $("#makeMeScrollable").smoothDivScroll({
      mousewheelScrolling: "allDirections",
      manualContinuousScrolling: true,
      autoScrollingMode: "onStart"
    });
  });