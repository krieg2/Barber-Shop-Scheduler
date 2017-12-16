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

    function refreshAffiliations(userId){

        $.ajax({
          url: "/api/employee/business/user/"+userId,
          method: "GET"
        }).done(function(response){

            //console.log(response);
            $("#affiliations").empty();
            for(var i=0; i < response.length; i++){

                // List item with business name and description.
                var busName = $("<dt>");
                busName.addClass("list-group-item business-name");
                var description = $("<dd>");
                description.addClass("list-group-item");
                var span = $("<span>");
                span.addClass("business-description");
                // Photo link.
                var img = $("<img>");
                img.attr("src", response[i].Business.photo);
                img.addClass("business-photo");
                // Populate text data from the server response.
                busName.text(response[i].Business.business_name);
                span.text(decodeURIComponent(response[i].Business.description));
                // Remove item X icon.
                var x = $("<i>");
                x.data("id", response[i].id);
                x.addClass("fa fa-window-close-o");
                x.css("aria-hidden", "true");

                description.append(img);
                description.append(span);
                busName.append(x);
                $("#affiliations").append(busName);
                $("#affiliations").append(description);
            }

        });
    }

    $("#affiliations").on("click", "i", function(event){

        var rowId = $(this).data("id");

        $.ajax({
          url: "/api/employee/"+rowId,
          type: "DELETE"
        }).done(function(response){
            //console.log(response);
            refreshAffiliations($("#userId").val());
        });
    });

    $("a[href='#profileModal']").on("click", function(event) {

        $.ajax({
          url: "/auth/user/",
          method: "GET"
        }).done(function(response){

            $("#userId").val(response.id);

            refreshAffiliations(response.id);
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
            //console.log(response);
            refreshAffiliations($("#userId").val());
        });

    });

    $("#addBus").submit(function(event) {

        event.preventDefault();

        var data = {
          business_name: $("#businessName").val(),
          description: $("#businessDescription").val(),
          photo: $("#photoUrl").val(),
        };
        $.ajax({
          url: "/api/business/",
          method: "POST",
          data: data
        }).done(function(response){
            //console.log(response);
            $("#businessName").val("");
            $("#businessDescription").val("");
            $("#photoUrl").val("");
            refreshBusinessList();
        });

    });

    $("#schedule").submit(function(event) {

        event.preventDefault();

        $.ajax({
          url: "/api/user/employee",
          method: "GET"
        }).done(function(response1){
            var id = response1.id;
            var schedule = $("#schedule").serializeArray();
            schedule.push({name: "EmployeeId", value: id});
            $.ajax({
              url: "/api/schedule",
              method: "POST",
              data: schedule
            }).done(function(response2){
                //console.log(response2);
            });
            
        });

    });

});

console.log("Dashboard Javascript loaded!")