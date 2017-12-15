$(document).ready(function () {
    console.log("Page ready!");

    function refreshBusinessList(){

        $.ajax({
          url: "/api/business/",
          method: "GET"
        }).done(function(response){
            //console.log(response);
            $("#business").empty();
            for(var i=0; i < response.length; i++){
                var item = $("<option>");
                item.text(response[i].business_name);
                item.val(response[i].id);
                $("#business").append(item);
            }
        });
    }

    $("a[href='#profileModal']").on("click", function(event) {

        $.ajax({
          url: "/auth/user/",
          method: "GET"
        }).done(function(response){
            //console.log(response);
            $("#userId").val(response.id);
        });

        refreshBusinessList();
    });

    $("#addEm").submit(function(event) {

        event.preventDefault();

        var data = {
          BusinessId: $("#business").val(),
          UserId: $("#userId").val()
        };
        $.ajax({
          url: "/api/employee/",
          method: "POST",
          data: data
        }).done(function(response){
            console.log(response);
        });

    });

    $("#addBus").submit(function(event) {

        event.preventDefault();

        var data = {
          business_name: $("#businessName").val(),
        };
        $.ajax({
          url: "/api/business/",
          method: "POST",
          data: data
        }).done(function(response){
            //console.log(response);
            $("#businessName").val("");
            refreshBusinessList();
        });

    });
// creates the table
    // $.get("/api/appoiment/user/:id", function (data) {


    //     number = 1;

    //     for (i = 0; i < data.Appointments.length; i++) {

    //         barberId = data.Appointments[i].EmployeeId;
    //         haircutPriceId = data.Appointments[i].ServiceId;
    //         clientFN = data.Appointments[i].;
    //         clientLN = ;
    

    //         var tableRow = $("<tr>");
    //         var haircutNumber = $("<td>").append(stringify(number));
    //         var clientFirstName = $("<td>").append(data.Appointments.firstName);
    //         var clientLasttName = $("<td>").append(data.Appointments.lastName);
    //         var rating = $("<td>").append(data.Appointments.rating);
    //         var feedback = $("<td>").append(data.Appointments.rating);

    //         tableRow.append(haircutNumber);
    //         tableRow.append(clientFirstName);
    //         tableRow.append(clientLasttName);
    //         tableRow.append(rating);
    //         tableRow.append(feedback);
    //         $("#appointmentsTableBody").append(tableRow);
    //     }

    // })


});

console.log("Dashboard Javascript loaded!")


