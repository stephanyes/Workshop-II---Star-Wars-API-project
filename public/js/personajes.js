$(document).ready(function() {
var personajesParse;

function call(link){
      $.ajax({

        url: link,
        method: "GET",
        success: function( data ) {
          var name = data.results;
          var personajes = JSON.stringify(name);
          localStorage.setItem('personajes', personajes);


        },
        fail: function( error ) {
          console.log( 'Error: ' , error );
        }

      });
    }

    if(localStorage.getItem('personajes')){
       personajesParse = JSON.parse(localStorage.getItem('personajes'));

       for ( var i = 0; i < personajesParse.length; i++){

        var tableBody = document.getElementById('tableBody');

        var tr = document.createElement('tr');
        tableBody.append(tr);

        var tdN = document.createElement('td');
        tdN.textContent = i + 1;
        tr.append(tdN);

        var tdName = document.createElement('td');
        tdName.textContent = personajesParse[i].name;
        tr.append(tdName);

        var tdGender = document.createElement('td');
        tdGender.textContent = personajesParse[i].gender;
        tr.append(tdGender);

        var tdHeight = document.createElement('td');
        tdHeight.textContent = personajesParse[i].height + " cm";
        tr.append(tdHeight);

        var button = document.createElement('button');
        button.className = 'btn btn-danger';
        button.textContent = "Delete";
        tr.append(button);

        button.dataset.id = i;
      }

    } else {

      call("https://swapi.co/api/people/");
    }




    $('button').click(function(){

      var id = $(this).data('id');
      var charactersParse = JSON.parse(localStorage.getItem('personajes'));

      var characters = charactersParse.filter(function (charactersParse) {
          return charactersParse.name !== id;
      });

      characters.splice(id,1);


      var charactersErase = JSON.stringify(characters);
      localStorage.setItem('personajes', charactersErase);
      $(this).parentsUntil('tbody').fadeOut(500, function () {
        $(this).remove();
        location.reload();
      });


  });
});

    if (localStorage.getItem('personajes') === '[]'){
        localStorage.removeItem('personajes');
        var button3 = document.getElementById('button3');
        button3.classList.remove('d-none');
        button3.classList.add('d-block');
        button3.onclick = reset;
        function reset(){
          location.reload();
      }
  }
