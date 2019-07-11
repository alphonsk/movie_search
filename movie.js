
$('#input').keyup(function(){
    searchTitle = $(this).val();
        if (searchTitle.length > 3) {
        search(searchTitle);
        document.getElementById('feature').innerHTML = ' ';
    }
})

function search(searchTitle) {
    $.ajax({
        type: 'GET',
        url: 'http://www.omdbapi.com/?apikey=4896ff0a',
        data: {
        t: searchTitle
    },
    success: function(response) {
        if (response.Response === 'False') {
            $('#results').html('<p id="none">No Results</p>');
            $('#poster').html('');
        } else {
            console.log(response);
             
            $('#poster').html('<img src="' + response.Poster + '" style="width:100%"/>');
            $('#title').html('<div>Title: ' + response.Title + '</div>');
            $('#year').html('<div>Year: ' + response.Year + '</div>');
            $('#gene').html('<div>Genre: ' + response.Genre + '</div>');
            $('#rate').html('<div>Rating: ' + response.Ratings[0].Value + '</div>');
            $('#plot').html('<div>Plot: ' + response.Plot+ '</div>');
            }
        }
    })
}



function getLet(){
    var arr=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var num = Math.floor((Math.random() * 26) + 1);
    var x =arr[num];
    search(x);
 
 }
 
 
 