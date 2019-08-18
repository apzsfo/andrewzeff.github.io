	let i = 0;
    let p1 = 'I am a rising junior at UCLA pursuing a B.S. in Computer Science. I am currently seeking a software engineering internship for the summer of 2020. Explore this site to see my background, job experience, project experience, and general interests.';
		var speed = 30;
    
const typeWriter = () =>{
  if (i < p1.length) {
    document.getElementById("fph").innerHTML += p1.charAt(i);
    if(i === 65 || i === 146 || i === 244){
      document.getElementById("fph").innerHTML += "<br />";
      document.getElementById("fph").innerHTML += "<br />";
      document.getElementById("fph").innerHTML += "<br />";
    }
    i++;
    setTimeout(typeWriter, speed);
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
        scrollTop: $(this.hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
