function sizechildren() {
	document.getElementById('children-box').style.width = "100%";
    document.getElementById('textchildren').style.display = "block";
    document.getElementById('children-box2').style.display = "none";
    document.getElementById('children-box3').style.display = "none";
    document.getElementById('text-name-simu').style.display = "none";
    document.getElementById('children-box-atos').style.display = "none";
    document.getElementById('children-box').style.backgroundColor = 'green' ; 
  
};

function sizechildren32() {
    document.getElementById('text-name-simu').style.display = "none";
    document.getElementById('children-box-ibm').style.display = "none";
  
};


function sizechildren2() {
	document.getElementById('children-box2').style.width = "100%";
    document.getElementById('textchildren2').style.display = "block";
    document.getElementById('children-box').style.display = "none";
    document.getElementById('children-box3').style.display = "none";
    document.getElementById('text-name-simu').style.display = "none";
    document.getElementById('children-box-microsoft').style.display = "none";
    


    
};












function sizechildren3() {
	document.getElementById('children-box3').style.width = "100%";
    document.getElementById('children-box').style.display = "none";
    document.getElementById('children-box2').style.display = "none";
    document.getElementById('text-name-simu').style.display = "none";
    document.getElementById('children-box-ibm').style.display = "none";
    document.getElementById('text-name-simu').style.visibility = "none";
 
};


function moretext1() {

    document.getElementById('moretext1').style.display = "block";

    
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: false

});

sr.reveal('.children-box',{delay: 100, reset: false}); 
sr.reveal('.children-box2',{delay: 400, reset: false}); 
sr.reveal('.children-box3',{delay: 600, reset: false}); 

sr.reveal('.box3sousbox',{delay: 200, reset: false}); 
sr.reveal('.box4sousbox',{delay: 200, reset: false}); 
sr.reveal('.box5sousbox',{delay: 200, reset: false}); 
sr.reveal('.box6sousbox',{delay: 200, reset: false}); 

/*===== SCROLL REVEAL ANIMATION =====*/



function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "En savoir plus";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Fermer";
      moreText.style.display = "inline";
    }
  }

  function myFunction1() {
    var dots1 = document.getElementById("dots1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("myBtn1");
  
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText1.innerHTML = "En savoir plus";
      moreText1.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText1.innerHTML = "Fermer";
      moreText1.style.display = "inline";
    }
  }

  function myFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText2.innerHTML = "En savoir plus";
      moreText2.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText2.innerHTML = "Fermer";
      moreText2.style.display = "inline";
    }
  }


  function myFunction3() {
    var dots3 = document.getElementById("dots3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("myBtn3");
  
    if (dots3.style.display === "none") {
      dots3.style.display = "inline";
      btnText3.innerHTML = "En savoir plus";
      moreText3.style.display = "none";
    } else {
      dots3.style.display = "none";
      btnText3.innerHTML = "Fermer";
      moreText3.style.display = "inline";
    }
  }







  

