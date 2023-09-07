let colors = [
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#800080", // Purple
    "#008000", // Dark Green
    "#000080", // Navy
    "#FFA500", // Orange
  ];

let button=document.getElementById('btn')
button.addEventListener("click",function(){
 let random_num=(Math.floor(Math.random()*colors.length));
 console.log(random_num)
 document.body.style.backgroundColor=colors[random_num];
});