
const addBlock = document.querySelector('#add-block');
const deleteBlock = document.querySelector('#delete-block');
const block1 = document.querySelector('.block1');
const block = document.querySelector('.block');
const CSSVariables = [
    {name: '--block-width', property:'100px'},
    {name: '--block-height', property:'100px'},
    {name: '--distance', property:'10px'},
    {name: '--block1-backgrounColor', property:'purple'},
    {name: '--block1-border-radius', property:'50%'}
];
let i = 0;


addBlock.addEventListener('click', () => {
    add();
    i++;
});
deleteBlock.addEventListener('click', () => {
    console.log(i)
    window.localStorage.removeItem(`${i}`);

    i--;
});


function add(){
    localStorage.setItem(`${i}`, 'true');
    var newDiv = document.createElement("div");
    newDiv.className = "block1";
    block.appendChild(newDiv);
    CSSVariables.forEach(element =>{
        newDiv.style.setProperty(element.name,element.property);
    });
}


window.onload = () =>{
    add();
    i++
    add();
    i++
    add();
    
    return ;
};