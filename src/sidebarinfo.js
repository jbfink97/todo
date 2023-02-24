export default function sidebarInfo(divName, text){
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid');
    const newDivPic = document.createElement('div');
    newDivPic.textContent = 'pic';
    const newDivText = document.createElement('div');
    newDivText.textContent = text;
    newDiv.appendChild(newDivPic);
    newDiv.appendChild(newDivText);
    return newDiv;
}