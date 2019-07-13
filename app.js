


console.log("loaded");

function fetchArticle(title, numRec, startDate, endDate) {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + title + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=kf3LdZzliGfOZUbXq8FBBxIx4pmPjK5P"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (var i = 0; i < numRec; i++) {
            console.log(response.response.docs[i].pub_date);

            var newLink = $(`<h2> #${i + 1} ${response.response.docs[i].headline.main}</h2><small>${response.response.docs[i].byline.original}</small>`);
            // var articleURL = response.response.docs[i].web_url;
            // newLink.attr("href", articleURL);
            // newLink.text(response.response.docs[i].headline.main);
            console.log(newLink);
            $("#articles").append(newLink);

        }

    });
}
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