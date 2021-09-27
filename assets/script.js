var currentDate = document.getElementById('currentDay');
var dateFormat = 'dddd, MMMM Do';
currentDate.textContent = moment().format(dateFormat);

var saveBtn = $(".saveBtn");

function colorBackG() {
    var time = moment().hours();
    
    $(".ts").each(function() {
        var hour = parseInt($(this).attr("id"));
        
        
        if (hour === time) {
            $(this).addClass("present");
        } 
        else if (hour < time) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else {
            $(this).addClass("future");
        }
        console.log('time',time)
        console.log('hour',hour)
    })
    
    
};



saveBtn.on("click", function() {

    var hr = $(this).siblings(".time").text();

    var item = $(this).siblings(".planner").val();

    localStorage.setItem(hr, item);

});


function getData(){
    $(".time").each(function(){

        var currentHour = $(this).text();
        console.log("currentHour"+ currentHour);

        var currentItem = localStorage.getItem(currentHour);
       

        if(currentItem !== true){
            $(this).siblings(".planner").val(currentItem);
        }

    });
}


colorBackG();


getData();

