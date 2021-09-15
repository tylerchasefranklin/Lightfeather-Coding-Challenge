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
                 console.log(supervisorLastName);
                 // console.log(supervisorFirstName);
                 var toAppend = '';
                 toAppend += '<option>'+supervisorFirstName + ' ' + supervisorLastName+'</option>';
                 $('#supervisor').append(toAppend);
               });
               // var toAppend = '';
               // $.each(response.results, function(i,o){
               //   toAppend += '<option>'+o.id+'</option>';
               // });

               // $('#supervisor').append(toAppend);
           },
           error: function (xhr, status) {
               alert("error");
           }
       });


});
