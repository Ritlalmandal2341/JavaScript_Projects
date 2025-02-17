function changebackground(color) {
  document.body.style.backgroundColor = color;
}

const themeButton = document.getElementById('theme-button');
// document.getElementById(id).style.color = "#ff0000";
themeButton.addEventListener('click', () => {
    console.log(document.body.style.backgroundColor);
    // document.getElementById('main').style.color = "yellow";
  
  const currentColor = document.body.style.backgroundColor;
  if(!currentColor || currentColor == 'white') {
    changebackground('black');
    themeButton.innerText = 'Light Mode';
    document.getElementById('main').style.color = "white";
    
  } else {
    changebackground('white');
    themeButton.innerText = 'Dark mode';
    document.getElementById('main').style.color = "black";
  }
});
