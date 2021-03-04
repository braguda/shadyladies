$(document).ready(() => {
    console.log("ready");

    var shadyLadies = ["Nene Leakes", "Phaedra Parks", "Lisa Rinna", "RuPaul", "Teresa Guidice"];

    function generateButtons() {
        $("#header").empty();
        for (let i = 0; i < shadyLadies.length; i++){
            let ladyBtn = $("<button>");
            ladyBtn.text(shadyLadies[i]);
            ladyBtn.addClass("btn");
            ladyBtn.addClass("btn-dark");
            ladyBtn.attr("data-name", shadyLadies[i]);
            $("#header").append(ladyBtn);
        }
    }

    generateButtons();
    
    $("#renderBtn").click((event) => {
        event.preventDefault();
        console.log("clicked");
    });

});