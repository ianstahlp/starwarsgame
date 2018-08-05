//character objects



$(document).ready(function() {

    var characters = [{
            health: 120,
            picture: "./images/luke.jpg",
            name: "Luke"
        },

        {
            health: 120,
            picture: "./images/obiwan.jpg",
            name: "Obi-Wan"
        },
        {
            health: 120,
            picture: "./images/vader.jpg",
            name: "Vader"
        },
        {
            health: 120,
            picture: "./images/yoda.jpg",
            name: "Yoda"
        }
    ];

    for (var i = 0; i < characters.length; i++) {

        var li = $("<li>");

        $(".character-slot").append(li);
        $(li).append(`<h1> ${characters[i].name}</h1>`);
        $(li).append(`<img src=${characters[i].picture} />`)
        $(li).append(`<p> ${characters[i].health}`);
        $("p").addClass("hp");
        console.log(characters[0].name)
    }

});