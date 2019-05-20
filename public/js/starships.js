$(document).ready(function () {
var starshipsParse;

    function call(link) {
      $.ajax({

        url: link,
        method: "GET",
        success: function (data) {
          var starships = data.results;
          var starships1 = JSON.stringify(starships);
          localStorage.setItem('starships', starships1);


          console.log("algo");

        },
        fail: function (error) {
          console.log('Error: ', error);
        }

      });
    }


    if (localStorage.getItem('starships')) {
      var starships = JSON.parse(localStorage.getItem('starships'));

      for (var i = 0; i < starships.length; i++) {
        var tableBody = document.getElementById('tableBody');

        var tr = document.createElement('tr');
        tableBody.append(tr);

        var tdN = document.createElement('td');
        tdN.textContent = i + 1;
        tr.append(tdN);

        var nameStarship = document.createElement('td');
        nameStarship.textContent = starships[i].name;
        tr.append(nameStarship);

        var starshipClass = document.createElement('td');
        starshipClass.textContent = starships[i].starship_class;
        tr.append(starshipClass);

        var starshipCost = document.createElement('td');
        starshipCost.textContent = starships[i].cost_in_credits;
        tr.append(starshipCost);

        var mglt = document.createElement('td');
        mglt.textContent = starships[i].MGLT;
        tr.append(mglt);

        var button = document.createElement('button');
        button.className = 'btn btn-danger';
        button.textContent = 'Delete';
        tr.append(button);

      }
    } else {
      call("https://swapi.co/api/starships/");
    }

    $('button').click(function(){

      var id = $(this).data('id');
      var starshipParse = JSON.parse(localStorage.getItem('starships'));

      var starships = starshipParse.filter(function (starshipParse) {
          return starshipParse.name !== id;
      });

      starships.splice(id,1);


      var starshipsErase = JSON.stringify(starships);
      localStorage.setItem('starships', starshipsErase);
      $(this).parentsUntil('tbody').fadeOut(500, function () {
        $(this).remove();
        location.reload();
      });


  });
});

    if (localStorage.getItem('starships') === '[]'){
        localStorage.removeItem('starships');
        var button3 = document.getElementById('button3');
        button3.classList.remove('d-none');
        button3.classList.add('d-block');
        button3.onclick = reset;
        function reset(){
          location.reload();
      }
  }
