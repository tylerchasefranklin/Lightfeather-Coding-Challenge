$(document).ready(function(){



  $.ajax({

           url: "https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/supervisors",
           method: 'GET',
           mode: 'cors',
           headers: { 'Content-Type': 'application/json'},
           crossDomain: true,
           dataType: "json",
           success: function (response) {
               console.log('success');
               console.log(response.results);
               $.each(response.results, function(supervisors, supervisor){
                 var supervisorFirstName = supervisor.name.first;
                 var supervisorLastName = supervisor.name.last;
                 var toAppend = '';
                 toAppend += '<option>'+supervisorFirstName + ' ' + supervisorLastName+'</option>';
                 $('#supervisor').append(toAppend);
               });

           },
           error: function (xhr, status) {
               alert("error");
           }
       });


});
