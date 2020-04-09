function getSonarUrl()
{
    return SONARR_IP + ":" + SONARR_PORT;
}

function getRadarrUrl()
{
    return RADARR_IP + ":" + RADARR_PORT;
}

function search(searchTerms)
{
    var encodedSearchTerms = encodeURIComponent(searchTerms);

    $.getJSON(getRadarrUrl() + "/api/movie/lookup?term=" + encodedSearchTerms + "&apikey=" + RADARR_API_KEY, function(result){
        $.each(result, function(i, movie){
            console.log(movie);
        });
      });
}