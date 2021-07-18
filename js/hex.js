
const hex=["A", "B", "C", "D", "E", "F", 0,1,2,3,4,5,6,7,8,9,]

document.querySelector('.btn').addEventListener('click', function rotate (){
    let hexColor = "#";
    for(i=0; i<6; i++){
        hexColor += hex[RandomNumber()];
    }
    document.getElementById("color_value").innerHTML= hexColor;
    document.body.style.backgroundColor = hexColor;
})
function RandomNumber(){
    return Math.floor(Math.random()* hex.length) 
}