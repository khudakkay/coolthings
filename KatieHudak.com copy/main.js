$(document).ready(function() {
  // set state keys for checking to see if content is on screen
  var toggleState = {
    about: false,
    portfolio: false,
    contact: false,
    resume: false
  }
  //add event listeners to all the links
  $('#global ul li a').click(function(e){
    e.preventDefault();

    //set the url for the links with jquery "this"
   var url = $(this).attr('href');

   // create a link name to check the toggle state and then concat a css
   // class selector for adding css to the correct content
   var linkName = $(this).html().toLowerCase();
   var section = '#' +  linkName + 'Section';

   // check to see if the toggle state is false for the selected element
   //if it is false i call jquery .load on the url which grabs the corresponding
   // html content and then call jquery .animate to set the content 0px from the
   //left in 500 mili-seconds
   //then set the toggle state to true so the next click will hit the else
   // in the else i use animate to kick the content off the page 1500 px
   // from the left side in 500 mili-seconds
   //then set the toggle state to false so it can be clicked again later
   if(!toggleState[linkName]) {
    console.log('open');
    $(section).load(url).animate({'left': 0}, 500);
    toggleState[linkName] = true;
   } else {
    console.log('close')
    $(section).animate({'left': 1500}, 500, 'swing', function() {
      $(this).html('');
    })
    toggleState[linkName] = false;
   }
  });
});