
const cards = document.querySelectorAll(".notshow");
const observer = new IntersectionObserver((entries) => {
  console.log(entries)
entries.forEach((entry)=>{
  entry.target.classList.toggle("show", entry.isIntersecting)
}, {
  threshold: 1,
  
})



  });

cards.forEach(card =>{
observer.observe(card);

})


