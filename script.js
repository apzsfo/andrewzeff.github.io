let i = 0;
    let j = 0;
    let k = 0;
    let p1 = 'I am a rising junior at UCLA pursuing a B.S. in Computer Science.';
    let p2 = 'I am currently seeking a software engineering internship for the summer of 2020.';
    let p3 = 'Explore this site to see my background, job experience, project experience, and general interests.';
		var speed = 50;

  const typeWriter3 = () =>{
  if (k < p3.length) {
     document.getElementById("rph").innerHTML += p3.charAt(k);
        k++;
        setTimeout(typeWriter3, 60);
  }
};
    
const typeWriter2 = (typeWriter3) =>{
  if (j < p2.length) {
    document.getElementById("tph").innerHTML += p2.charAt(j);
    j++;
    setTimeout(()=>{typeWriter2(typeWriter3);}, 60);
  }
  if(j == p2.length)
  	typeWriter3();
};
    
const typeWriter = (typeWriter2) =>{
  if (i < p1.length) {
    document.getElementById("fph").innerHTML += p1.charAt(i);
    console.log(i);
    i++;
    setTimeout(()=>{typeWriter(typeWriter2);}, 60);
  }
  if(i == p1.length) {
   	typeWriter2(typeWriter3); 
  }
};


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

