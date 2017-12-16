$(document).ready( function(){
    console.log("Page ready!");

    $("a[href='#bookingModal']").on("click", function(event) {
    	var busId = $(this).data("id");
        $("#appointments").empty();

    	$.ajax({
          url: "/api/employee/business/"+busId,
          method: "GET"
        }).done(function(response){

            console.log(response);
            var day = moment().format("dddd").toLowerCase();
            if(response.length > 0){
                var row = $("<div>");
                row.addClass("row");
                for(var i=0; i<response.length; i++){

                    if(response[i].Schedule){
                        var first = response[i].User.first_name;
                        var last = response[i].User.last_name;

                        var start = response[i].Schedule[day+"_in"];
                        var end = response[i].Schedule[day+"_out"];

                        var startF = moment(start, "hh:mm A");
                        var endF = moment(end, "hh:mm A");
                        var nextTime = startF;

                        var div = $("<div>"); 
                        var ul = $("<ul>");
                        ul.css("list-style-type", "none");
                        
                        div.text(first+" "+last);
                        div.addClass("col");

                        while( endF.diff(nextTime, "seconds") >= 0 ){
                            var li = $("<li>");
                            li.css("margin", "10px");
                            li.html("<button type='button' class='btn btn-info'><span class='badge badge-light'>" +
                                    nextTime.format("hh:mm A") + "</span></button>");
                            ul.append(li);
                            nextTime = nextTime.add(30, "minutes");
                        }

                        div.append(ul);
                        row.append(div)
                    }
                }
                $("#appointments").append(row);
            }

        });
    	
    });

});

console.log("Client Javascript loaded!")
