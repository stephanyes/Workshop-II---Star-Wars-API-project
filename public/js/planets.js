$(document).ready(function () {
var planetsParse;
    function call(link) {
      $.ajax({

        url: link,
        method: "GET",
        success: function (data) {
          var planet = data.results;
          var planets1 = JSON.stringify(planet);
          localStorage.setItem('planets', planets1);


          console.log("algo");

        },
        fail: function (error) {
          console.log('Error: ', error);
        }

      });
    }


    if (localStorage.getItem('planets')) {
      var planets1 = JSON.parse(localStorage.getItem('planets'));

      for (var i = 0; i < planets1.length; i++) {
        var tableBody = document.getElementById('tableBody');

        var tr = document.createElement('tr');
        tableBody.append(tr);

        var tdN = document.createElement('td');
        tdN.textContent = i + 1;
        tr.append(tdN);

        var namePlanet = document.createElement('td');
        namePlanet.textContent = planets1[i].name;
        tr.append(namePlanet);

        var climate = document.createElement('td');
        climate.textContent = planets1[i].climate;
        tr.append(climate);

        var gravity = document.createElement('td');
        gravity.textContent = planets1[i].gravity;
        tr.append(gravity);

        var population = document.createElement('td');
        population.textContent = planets1[i].population;
        tr.append(population);

        var button = document.createElement('button');
        button.className = 'btn btn-danger';
        button.textContent = 'Delete';
        tr.append(button);

      }
    } else {
      call("https://swapi.co/api/planets/");
    }
    $('button').click(function(){

      var id = $(this).data('id');
      var planetParse = JSON.parse(localStorage.getItem('planets'));

      var planets = planetParse.filter(function (planetParse) {
          return planetParse.name !== id;
      });

      planets.splice(id,1);


      var planetsErase = JSON.stringify(planets);
      localStorage.setItem('planets', planetsErase);
      $(this).parentsUntil('tbody').fadeOut(500, function () {
        $(this).remove();
        location.reload();
      });


  });
});

    if (localStorage.getItem('planets') === '[]'){
        localStorage.removeItem('planets');
        var button3 = document.getElementById('button3');
        button3.classList.remove('d-none');
        button3.classList.add('d-block');
        button3.onclick = reset;
        function reset(){
          location.reload();
      }
  }
