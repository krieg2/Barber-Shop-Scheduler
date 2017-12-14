$(document).ready(function () {
    console.log("Page ready!");
    // creates the table
    $.get("/api/appointment/employee/:id", function (data) {

        console.log(data);


        // for (i = 0; i < data.length; i++) {
        //     if (data.id == barberID){
        //         console.log("Match!");

                
        //     };

            // for (i = 0; i < data.Appointments.length; i++) {

            //     barberId = data.Appointments[i].EmployeeId;
            //     barber = data.id: [barberId]
            //     haircutPriceId = data.Appointments[i].ServiceId;
            //     clientFN = data.Appointments[i].;
            //     clientLN = ;


            //     var tableRow = $("<tr>");
            //     var haircutNumber = $("<td>").append(stringify(number));
            //     var clientFirstName = $("<td>").append(data.Appointments.firstName);
            //     var clientLasttName = $("<td>").append(data.Appointments.lastName);
            //     var rating = $("<td>").append(data.Appointments.rating);
            //     var feedback = $("<td>").append(data.Appointments.rating);

            //     tableRow.append(haircutNumber);
            //     tableRow.append(clientFirstName);
            //     tableRow.append(clientLasttName);
            //     tableRow.append(rating);
            //     tableRow.append(feedback);
            //     $("#appointmentsTableBody").append(tableRow);
            // }
        // };

    });



});

console.log("Dashboard Javascript loaded!")