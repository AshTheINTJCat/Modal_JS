'use strict';

const showModalButton = document.querySelectorAll('.show-modal'); //this shows only the first
const overlayHidden = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const modalHidden = document.querySelector('.modal');

console.log(showModalButton); //now an array with querySelectorAll
console.log(overlayHidden);
console.log(closeModalButton);
console.log(modalHidden);

//querySelector -- Returns the first element that is a descendant of node that matches selectors.
// /querySelectorAll - Returns all element descendants of node that match selectors.
//querySelectorAll works like an array

//print the values of the modal array

//func to open modal
const openModalBtn = function () {
  //in html file #L 14 you can remove hidden, or via js you can do it using classlist
  modalHidden.classList.remove('hidden');
  overlayHidden.classList.remove('hidden'); //overlay blurs the background
};

//refactoring code- reuse func to close modal

const closeModalBtn = function () {
  modalHidden.classList.add('hidden');
  overlayHidden.classList.add('hidden');
};

//open modal ---
for (let i = 0; i < showModalButton.length; i++) {
  console.log(showModalButton[i].textContent);
  console.log(showModalButton[i].textContent + ' Button clicked!!');
  showModalButton[i].addEventListener('click', openModalBtn);
}

//enable the button close on modal, respoond when the close button is clicked
closeModalButton.addEventListener('click', closeModalBtn);

//overlay -- when u click anywhere in the background , it should close
//enable the button close on modal, respoond when the close button is clicked
overlayHidden.addEventListener('click', closeModalBtn);

// we are using closeModalBtn instead of closeModalBtn() because only when click closeModalBtn should be called
//if closeModalBtn() is used, this is called first

//pressing esc key is also an event
//waiting for esc key event all over the document

document.addEventListener('keydown', function (event) {
  console.log(window.event.key + ' Key was pressed..');
  //event is passed as a param to the func
  console.log(event);
  console.log(event.key);

  //now we know which key is pressed
  //so if esc key is pressed, we need to close the modal
  //close the modal only if the modal is visible .. ie it doesnt have hidden
  if (event.key === 'Escape' && !modalHidden.classList.contains('hidden')) {
    console.log('Now user has pressed escape key.. will close the modal');
    closeModalBtn(); //calling the closeModalBtn func
  }
});
