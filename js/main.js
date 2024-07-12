const shareButtons = document.querySelectorAll('.share-button');   
const popup = document.querySelector('.popup'); 

for(let i = 0; i < shareButtons.length; i++) {
    shareButtons[i].addEventListener('click', () => {
        if(popup.classList.value == "popup") {
            popup.classList.value = "popup slide-top";
        } else {
            popup.classList.toggle('slide-top');
            popup.classList.toggle('slide-bottom');
        }
    });
}