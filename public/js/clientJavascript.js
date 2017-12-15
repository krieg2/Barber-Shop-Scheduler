$(document).ready( function(){
    console.log("Page ready!");


    $("a[href='#bookingModal']").on("click", function(event) {
    	var busId = $(this).data("id");

    	$.ajax({
          url: "/api/employee/business/"+busId,
          method: "GET"
        }).done(function(response){

            console.log(response);

        });

    });

});

console.log("Client Javascript loaded!")
