


console.log("loaded");


$("#search").on('click', function (blah) {
    blah.preventDefault();

    let searchTerm = $("#searchTerm").val();
    let numOfRec = $("#numOfRec").val();
    let startYear = $("#startYear").val();
    let endYear = $("#endYear").val();
    console.log("search clicked");
    console.log(searchTerm);
    console.log(numOfRec);
    console.log(startYear);
    console.log(endYear);
    fetchArticles(searchTerm, numOfRec, startYear, endYear);
});

$("#clear").on('click', function (blah) {
    blah.preventDefault();
    console.log("clear clicked");
});