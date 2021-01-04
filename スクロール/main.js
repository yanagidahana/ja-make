const child = document.querySelector('.child');
const cb = function(entrees, observe) {
  entrees.forEach(entry => {
    if(entry.isIntersecting) {
      console.log('inview');
      // observe.unobserve(entry.target);

    } else {
      console.log('out view');

    }
  });
}
  // alert('intersecting');

const io = new IntersectionObserver(cb);
io.observe(child);