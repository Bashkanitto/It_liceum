

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});



const square = document.querySelector('.block');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        square.classList.add('transition');
        return;
    });
  });


  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('animation-show');
      }
      else{
        change.target.classlist.remove('animation-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observe = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
