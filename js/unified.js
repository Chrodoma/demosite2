﻿var id1;
function createcomment() {
    var d = new Date();
    var jsonObj = {
        "taskid": $("#taskid1").val(),
        "timestamp": d.getFullYear() + '-02-' + d.getDate() + 'T' + d.getHours() + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2),
        "user": {
            "id": $("#username").val(),
            "first": "Volumnia",
            "last": "Dedlock",
            "title": "",
            "role": "admin",
            "email": "volumnia.dedlock@example.com",
            "type": "user"
        },
        "comment": $("#comment").val(),
        "status": $('input[name="approve"]:checked').val()
    }
    //console.log(d.getFullYear() + '-02-' + d.getDate() + 'T' + d.getHours() + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2);
    $.ajax({
        type: "POST",
        // url: "http://uksearchdev:8080/viewpoint-services/v1/community/comments",
        url: "http://localhost:8080/viewpoint-services/v1/community/comments",
        contentType: "application/json",
        data: JSON.stringify(jsonObj),
        dataType: 'json'
    })
		.done(function (data) {
		    $('#c1').removeClass("alert-danger");
		    $("#c1").html("Comment Added").addClass("alert alert-success").show();
		    id1 = data.data.id;
		    console.log(id1);
		    $("#commentid").val(id1);
		    listcomment();
		})
		.error(function (msg) {
		    $('#c1').removeClass("alert-success");
		    $("#c1").html(msg.responseText).addClass("alert alert-danger").show();
		    console.log("something went wrong");
		    console.log(msg);
		});


}

function getcomment() {

    $.ajax({
        type: "GET",
        //url: "http://uksearchdev:8080/viewpoint-services/v1/community/comments/" + $("#commentid").val(),
        url: "http://localhost:8080/viewpoint-services/v1/community/comments/" + $("#commentid").val(),
        contentType: "application/json",
        dataType: 'json'
    })
		.done(function (data) {
		    $('#name').html("Comment : " + data.data.comment + "<br>").addClass("alert alert-success").show();
		    $('#name').append("Name : " + data.data.user.first + " " + data.data.user.last + "<br>").addClass("alert alert-success").show();
		    $('#name').append("Time Stamp : " + data.data.timestamp + "<br>").addClass("alert alert-success").show();
		    $('#name').append("Status : " + data.data.status + "<br>").addClass("alert alert-success").show();

		})
		.error(function (msg) {
		    $('#name').removeClass("alert-success");
		    $("#name").html(msg.responseText).addClass("alert alert-danger").show();
		    console.log("something went wrong");
		    console.log(msg);
		});


}


function updatecomment() {
    var d = new Date();
    var jsonObj = {
        "id": id1,
        "taskid": "5e1d005e-9d58-11e3-8d05-425861b86ab6",
        "timestamp": d.getFullYear() + '-02-' + d.getDate() + 'T' + d.getHours() + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2),
        "user": {
            "id": "vo001de",
            "first": "Volumnia",
            "last": "Dedlock",
            "title": "",
            "role": "admin",
            "email": "volumnia.dedlock@example.com",
            "type": "user"
        },
        "comment": $("#comment").val(),
        "status": $('input[name="approve"]:checked').val()
    }
    //console.log(d.getFullYear() + '-02-' + d.getDate() + 'T' + d.getHours() + ':' + ('0' + d.getMinutes() ).slice(-2) + ':' +  ('0' + d.getSeconds()).slice(-2);
    $.ajax({
        type: "PUT",
        //url: "http://uksearchdev:8080/viewpoint-services/v1/community/comments/" + id1,
        url: "http://localhost:8080/viewpoint-services/v1/community/comments/" + id1,
        contentType: "application/json",
        data: JSON.stringify(jsonObj),
        dataType: 'json'
    })
		.done(function (data) {
		    $('#c1').removeClass("alert-danger");
		    $("#c1").html("Comment Updated").addClass("alert alert-success").show();
		    id1 = data.data.id;
		    console.log(id1);
		})
		.error(function (msg) {
		    $('#c1').removeClass("alert-success");
		    $("#c1").html(msg.responseText).addClass("alert alert-danger").show();
		    console.log("something went wrong");
		    console.log(msg);
		});


}

function listunifiedtask() {

    $.ajax({
        type: "GET",
        //url: "http://uksearchdev:8080/viewpoint-services/v1/EngageOne/unified/tasks?userId=user1",
        url: "http://localhost:8080/viewpoint-services/v1/EngageOne/unified/tasks?userId=user1",
        contentType: "application/json",
        dataType: 'json'
    })
		.done(function (foo) {
		    $('#tasklist').html(foo).addClass("alert alert-success").show();
		    console.log(foo);
		    console.log(foo.data);
		    var type;
		    $.each(foo.data.tasks, function (i, task) {
		        $('#tasklist').append('<li><a href="#" id="' + task.uriToGetTaskDetails + '" class="list-group-item"><span>Task Description : </span>' + task.description + ' Type :' + task.type + '</a></li>');
		    });

		    $(".list-group-item").click(function (event) {
		        gettaskdetails(event.target.id);
		    });

		})
		.error(function (msg) {
		    $('#tasklist').removeClass("alert-success");
		    $("#tasklist").html(msg.responseText).addClass("alert alert-danger").show();
		    console.log("something went wrong");
		    console.log(msg);
		});


}


function gettaskdetails(uriToGetTaskDetails) {
    $.ajax({
        type: "GET",
        url: uriToGetTaskDetails,
        crossDomain: true,
        dataType: 'json'

    })
		.done(function (dataCommingFromServer) {
		    $('#taskdetails').removeClass("alert-danger");
		    $.each($.parseJSON(dataCommingFromServer), function (k, v) {
		        $("#taskdetails").append(k + ' : ' + v + "<br>");
		    });
           
		    $('#taskid2').html(dataCommingFromServer.data.id);
		    $('#taskname1').html(dataCommingFromServer.data.externalId);
		    $('#userdiv').html("Created By:" + dataCommingFromServer.data.createdBy);
		})
		.error(function (msg) {
		    $('#taskdetails').removeClass("alert-success");
		    $('#taskdetails').html(msg.responseText).addClass("alert alert-danger").show();
		    //alert(msg.responseText)
		})
}