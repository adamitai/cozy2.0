
$( document ).ready(function() {
    refresh();
    var url = "http://localhost:8888/api/agents";


    function update_agent(){
        $.getJSON( "http://localhost:8888/api/agents", function( data ) {
            var items = [];
            $.each( data, function( key, val ) {
                items.push( "<li id='" + key + "'>" + val + "</li>" );
            });

            $( "<ul/>", {
                "class": "my-new-list",
                html: items.join( "" )
            }).appendTo( "body" );
        });
        /*
        $.ajax({
            url: "http://localhost:8888/api/agents",
            type: "GET",
            dataType: 'jsonp',
            success: function (data) {
                alert(data);
            },
            done: function (data) {
                alert(data);
            },
            error: function(data){
                console.log("Error");
                console.log(data);
            }
        });*/
    }


    function refresh(){
        setTimeout(function () {
            update_agent();
            $("#time").text("!!!!");
            //$('#time').className = "notification-time";
            refresh();
        },4000);
    }


});