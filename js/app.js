const simple = ["cyan", "yellow", "pink", "lightblue","grey","orange","red", "rosybrown", "royalblue", "saddlebrown", "seagreen", "seashell", "beige", "black", "cadetblue", "chocolate", "blue", "bisque", "burlywood", "skyblue","snow","tan","steelblue" ];

document.querySelector('.btn').addEventListener('click', function() {
    // get random number based on the "simple" array above
    const simpleColor = RandomNumber();
    document.body.style.backgroundColor = simple[simpleColor];
    document.getElementById("color_value").innerHTML = simple[simpleColor];
});

function RandomNumber() {
    return Math.floor(Math.random() * simple.length);
}
