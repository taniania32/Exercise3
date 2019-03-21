$.getJSON('json/data.json', function (data){
let results = data.results;
let count = data.count;
let next = data.next;
let previous = data.previous;
$.each(results, function (i,data){
    results += '<tr>';
    results += '<td>'+ data.name +'</td>';
    results += '<td>'+data.rotation_period+'</td>';
    results += '<td>'+data.orbital_period+'</td>';
    results += '<td>'+data.diameter+'</td>';
    results += '<td>'+data.climate+'</td>';
    results += '<td>'+data.gravity+'</td>';
    results += '<td>'+data.terrain+'</td>';
    results += '<td>'+data.surface_water+'</td>';
    results += '<td>'+data.population+'</td>';
    results += '<td>'+data.residents+'</td>';
    results += '<td>'+data.films+'</td>';
    results += '<td>'+data.created+'</td>';
    results += '<td>'+data.edited+'</td>';
    results += '<td>'+data.url+'</td>';
    results += '</tr>';

});
$('#table1').append(results);
$('#jml').append('<div class="card-text">' + data.count +'</div>');
$('#next').append('<div class="card-text">' + data.next +'</div>');
$('#prev').append('<a class="card-text">' + data.previous +'</a>');

function sortByValue(results){
    var sortedArray = [];
    for(var i in results)
    {
        // Push each JSON Object entry in array by [value, key]
        sortedArray.push([results[i], i]);
    }
    return sortedArray.sort();
}

var sortedbyValueJSONArray = sortByValue(results);
console.table(sortedbyValueJSONArray);
});


