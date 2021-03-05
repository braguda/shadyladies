$(document).ready(() => {
    console.log("ready");

    var shadyLadies = ["Nene Leakes", "Phaedra Parks", "Lisa Rinna", "RuPaul", "Teresa Guidice"];


    function findGif() {
        let query = $(this).attr("data-name");
        console.log(query);
        $.ajax({
            method:"GET",
            url: "https://api.giphy.com/v1/gifs/random?&api_key=WouyfNTS0D04NWzgkUKJnoxBXnR0cOwc&tag=" + query,
        }).then(function (response) {
            let results = response.data;
            console.log(results.images.fixed_height.url);
            let gif = $("<img>").attr("src", results.images.fixed_height.url )
            gif.addClass("gifs");
            $("#gif-display").prepend(gif);
        });
    };

    function generateButtons() {
        $("#header").empty();
        for (let i = 0; i < shadyLadies.length; i++){
            let ladyBtn = $("<button>");
            ladyBtn.text(shadyLadies[i]);
            ladyBtn.addClass("btn");
            ladyBtn.addClass("btn-dark");
            ladyBtn.attr("id", "gifBtn");
            ladyBtn.attr("data-name", shadyLadies[i]);
            $("#header").append(ladyBtn);
        }
    }
    
    $("#renderBtn").click((event) => {
        event.preventDefault();
        let input = $("#moreWives").val().trim().replace(/\s+/g, '');
        console.log(input);
        shadyLadies.push(input);
        console.log(shadyLadies);
        generateButtons();
    });

    $(document).on("click", "#gifBtn", findGif);


    $("#clearBtn").click(function() {
        empty(gif-display);
    });

    generateButtons();

});