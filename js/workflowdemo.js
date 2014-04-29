var id1 = "";
var id2 = "";
var id3 = "";
var id4 = "";
function createresolutionrule1() {

    var jsonObj = {
        //workflow ID needs to passed on from the previous panel
        "workflowId": guidresolver($("tr:eq( 1 ) td:eq( 0 ) ").html()),
        "associationTypeId": $("tr:eq( 1 ) td:eq( 1 ) input").val(),
        "associationType": $("td:eq( 2 )").html(),
        "percentage": $("tr:eq( 1 ) td:eq( 3 ) input").val()
    }

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/viewpoint-services/v1/community/resolution/rules",
        contentType: "application/json",
        data: JSON.stringify(jsonObj),
        dataType: 'json'
    })
		.done(function (data) {
		    $('#R1').removeClass("alert-danger");
		    $("#R1").html("Rule Created").addClass("alert alert-success").show();
		    $("#rule1").attr("disabled", true);
		    id1 = data.data.id;
		    console.log(id1);
		})
		.error(function (msg) {
		    $('#R1').removeClass("alert-success");
		    $("#R1").html(msg.responseText).addClass("alert alert-danger").show();
		});


}

function updateresolutionrule1() {

    var jsonObj = {
        //workflow ID needs to passed on from the previous panel
        "id": id1,
        "workflowId": guidresolver($("tr:eq( 1 ) td:eq( 0 )").html()),
        "associationTypeId": $("tr:eq( 1 ) td:eq( 1 ) input").val(),
        "associationType": $("td:eq( 2 )").html(),
        "percentage": $("tr:eq( 1 ) td:eq( 3 ) input").val()
    }

    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/viewpoint-services/v1/community/resolution/rules/"+id1,
        contentType: "application/json",
        data: JSON.stringify(jsonObj),
        dataType: 'json'
    })
		.done(function (data) {
		    $('#R1').removeClass("alert-danger");
		    $("#R1").html("Rule Updated").addClass("alert alert-success").show();
		    $("#rule1").attr("disabled", true);
		    console.log("data.data.id");
		    
		})
		.error(function (msg) {
		    $('#R1').removeClass("alert-success");
		    $("#R1").html(msg.responseText).addClass("alert alert-danger").show();
		});


}


function createresolutionrule2() {

    var jsonObj = {
        //workflow ID needs to passed on from the previous panel
        "workflowId": guidresolver($("tr:eq( 2 ) td:eq( 0 )").html()),
        "associationTypeId": $("tr:eq( 2 ) td:eq( 1 ) input").val(),
        "associationType": $("tr:eq( 2 ) td:eq( 2 )").html(),
        "percentage": $("tr:eq( 2 ) td:eq( 3 ) input").val()
    }

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/viewpoint-services/v1/community/resolution/rules",
        contentType: "application/json",
        data: JSON.stringify(jsonObj),
        dataType: 'json'
    })
		.done(function (data) {
		    $('#R2').removeClass("alert-danger");
		    $("#R2").html("Rule Created").addClass("alert alert-success").show();
		    $("#rule2").attr("disabled", true);
		    id2 = data.data.id;
		})
		.error(function (msg) {
		    $('#R2').removeClass("alert-success");
		    $("#R2").html(msg.responseText).addClass("alert alert-danger").show();
		});


}

function updateresolutionrule2() {

    var jsonObj = {
        //workflow ID needs to passed on from the previous panel
        "id": id2,
        "workflowId": guidresolver($("tr:eq( 2 ) td:eq( 0 ) ").html()),
        "associationTypeId": $("tr:eq( 2 ) td:eq( 1 ) input").val(),
        "associationType": $("tr:eq( 2 ) td:eq( 2 )").html(),
        "percentage": $("tr:eq( 2 ) td:eq( 3 ) input").val()
    }

    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/viewpoint-services/v1/community/resolution/rules/" + id2,
        contentType: "application/json",
        data: JSON.stringify(jsonObj),
        dataType: 'json'
    })
		.done(function (data) {
		    $('#R2').removeClass("alert-danger");
		    $("#R2").html("Rule Updated").addClass("alert alert-success").show();
		    $("#rule1").attr("disabled", true);
		    console.log("data.data.id");

		})
		.error(function (msg) {
		    $('#R2').removeClass("alert-success");
		    $("#R2").html(msg.responseText).addClass("alert alert-danger").show();
		});


}

function createresolutionrule3() {

    var jsonObj = {
        //workflow ID needs to passed on from the previous panel
        "workflowId": guidresolver($("tr:eq( 3 ) td:eq( 0 ) ").html()),
        "associationTypeId": $("tr:eq( 3 ) td:eq( 1 ) input").val(),
        "associationType": $("tr:eq( 3 ) td:eq( 2 )").html(),
        "percentage": $("tr:eq( 3 ) td:eq( 3 ) input").val()
    }

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/viewpoint-services/v1/community/resolution/rules",
        contentType: "application/json",
        data: JSON.stringify(jsonObj),
        dataType: 'json'
    })
		.done(function (data) {
		    $('#R3').removeClass("alert-danger");
		    $("#R3").html("Rule Created").addClass("alert alert-success").show();
		    $("#rule3").attr("disabled", true);
		    id3 = data.data.id;
		})
		.error(function (msg) {
		    $('#R3').removeClass("alert-success");
		    $("#R3").html(msg.responseText).addClass("alert alert-danger").show();
		});


}

function updateresolutionrule3() {

    var jsonObj = {
        //workflow ID needs to passed on from the previous panel
        "id": id3,
        "workflowId": guidresolver($("tr:eq( 3 ) td:eq( 0 )").html()),
        "associationTypeId": $("tr:eq( 3 ) td:eq( 1 ) input").val(),
        "associationType": $("tr:eq( 3 ) td:eq( 2 )").html(),
        "percentage": $("tr:eq( 3 ) td:eq( 3 ) input").val()
    }

    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/viewpoint-services/v1/community/resolution/rules/" + id3,
        contentType: "application/json",
        data: JSON.stringify(jsonObj),
        dataType: 'json'
    })
		.done(function (data) {
		    $('#R3').removeClass("alert-danger");
		    $("#R3").html("Rule Updated").addClass("alert alert-success").show();
		    $("#rule1").attr("disabled", true);
		    console.log(data.data.id);

		})
		.error(function (msg) {
		    $('#R3').removeClass("alert-success");
		    $("#R3").html(msg.responseText).addClass("alert alert-danger").show();
		});


}

function createresolutionrule4() {

    var jsonObj = {
        //workflow ID needs to passed on from the previous panel
        "workflowId": guidresolver($("tr:eq( 4 ) td:eq( 0 ) ").html()),
        "associationTypeId": $("tr:eq( 4 ) td:eq( 1 )").html(),
        "associationType": $("tr:eq( 4 ) td:eq( 2 )").html(),
        "percentage": $("tr:eq( 4 ) td:eq( 3 ) input").val()
    }

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/viewpoint-services/v1/community/resolution/rules",
        contentType: "application/json",
        data: JSON.stringify(jsonObj),
        dataType: 'json'
    })
		.done(function (data) {
		    $('#R4').removeClass("alert-danger");
		    $("#R4").html("Rule Created").addClass("alert alert-success").show();
		    $("#rule4").attr("disabled", true);
		    id4 = data.data.id;
		})
		.error(function (msg) {
		    $('#R4').removeClass("alert-success");
		    $("#R4").html(msg.responseText).addClass("alert alert-danger").show();
		});


}

function updateresolutionrule4() {

    var jsonObj = {
        //workflow ID needs to passed on from the previous panel
        "id": id4,
        "workflowId": guidresolver($("tr:eq( 4 ) td:eq( 0 )").html()),
        "associationTypeId": $("tr:eq( 4 ) td:eq( 1 )").html(),
        "associationType": $("tr:eq( 4 ) td:eq( 2 )").html(),
        "percentage": $("tr:eq( 4 ) td:eq( 3 ) input").val()
    }

    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/viewpoint-services/v1/community/resolution/rules/" + id4,
        contentType: "application/json",
        data: JSON.stringify(jsonObj),
        dataType: 'json'
    })
		.done(function (data) {
		    $('#R4').removeClass("alert-danger");
		    $("#R4").html("Rule Updated").addClass("alert alert-success").show();
		    $("#rule4").attr("disabled", true);
		    console.log(data.data.id);

		})
		.error(function (msg) {
		    $('#R4').removeClass("alert-success");
		    $("#R4").html(msg.responseText).addClass("alert alert-danger").show();
		});


}


function getworkflowforsubmitter() {
    var j = 0;
    var workid;
    for (var i = 0; i < $('#fre').val();i++) {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/viewpoint-services/v1/community/resolution?template=" + $('#temp').val() + "&submitter=" + $('#sub').val() + "&templateFolder=" + $("#tempfolder").val(),
            dataType: 'json',
            async: false
        })
		.done(function (data) {
		    $('#Wid').removeClass("alert-danger");
		    if (data.data.id.length > 0) {
		        j = j + 1;
		        workid = data.data.id;
		        console.log(data.data.id);
		    } else
		        console.log("Nothing executed");
		    $("#Wid").html("Workflow to be executed " + WorkflowIdresolver(workid) + " Was executed " + j + " Times when a template is submitted " + $('#fre').val() + " Times").addClass("alert alert-success").show();
		})
		.error(function (msg) {
		    $('#Wid').removeClass("alert-success");
		    $("#Wid").html(msg.responseText).addClass("alert alert-danger").show();
		});

   }
  
}

function WorkflowIdresolver(guid) {

    var workflowid; 
    
    switch (guid) {
        case "ecc0463e-a05e-4278-9a1d-f9857c2e44e6":
            workflowid=1;
            break;
        case "ecc0463e-a05e-4278-9a1d-f9857c2e44e7":
            workflowid=2;
            break;
        case "ecc0463e-a05e-4278-9a1d-f9857c2e44e8":
            workflowid = 3;
            break;
        case "ecc0463e-a05e-4278-9a1d-f9857c2e44e9":
            workflowid = 4;
            break;
        default:
            workflowid = 00;
    }

    return workflowid;
}


function guidresolver(workflowid) {

    var guid;

    switch (workflowid) {
        case "1":
            guid = "ecc0463e-a05e-4278-9a1d-f9857c2e44e6";
            break;
        case "2":
            guid = "ecc0463e-a05e-4278-9a1d-f9857c2e44e7";
            break;
        case "3":
            guid = "ecc0463e-a05e-4278-9a1d-f9857c2e44e8";
            break;
        case "4":
            guid = "ecc0463e-a05e-4278-9a1d-f9857c2e44e9";
            break;
        default:
            guid = 00;
    }

    return guid;
}








