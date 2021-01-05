const child = document.querySelector('.child');
const cb = function(entrees, observe) {
  entrees.forEach(entry => {
    if(entry.isIntersecting) {
      console.log('inview');
      // observe.unobserve(entry.target);
      entry.target.classList.add('inview');

    } else {
      console.log('out view');
      entry.target.classList.remove('inview');

    }
  });
}
  // alert('intersecting');
const options  = {
  root: null,
  rootMargin: "-200px 0px 0px 0px",
  threshold: 1
};
const io = new IntersectionObserver(cb,options);
io.observe(child);