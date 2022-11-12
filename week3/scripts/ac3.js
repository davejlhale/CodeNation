const paletteColours =['#333','red','blue','green','yellow','purple'];
const header=document.getElementById('color-accent');


const colorInput = document.getElementById('color-input-text');
const colorChangeBtn = document.getElementById('color-change-button');
const colorPalette = document.getElementsByClassName('color-palette');

const cpSquares = document.getElementsByClassName('cp-square');

console.log(cpSquares);

const setHeaderColor = (col) =>{
    console.log(`changing to ${col}`)
    header.style.color = col;
}
for (let i=0;i<cpSquares.length;i++) {
    console.log(cpSquares[1])
    cpSquares[i].style.backgroundColor=paletteColours[i];


    cpSquares[i].addEventListener('click', function(event){
        console.log(event)
        console.log(i)
        setHeaderColor(paletteColours[i]);
        console.log(`clicked ${paletteColours[i]}`)
    })
}

colorChangeBtn.addEventListener('click',  function(event) {
    setHeaderColor(colorInput.value);

})

