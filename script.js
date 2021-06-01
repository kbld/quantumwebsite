function sizechildren() {
	document.getElementById('children-box').style.width = "100%";
    document.getElementById('textchildren').style.display = "block";
    document.getElementById('children-box2').style.display = "none";
    document.getElementById('children-box3').style.display = "none";
    document.getElementById('text-name-simu').style.display = "none";
    document.getElementById('children-box-atos').style.display = "none";
  
}



function sizechildren32() {
    document.getElementById('text-name-simu').style.display = "none";
    document.getElementById('children-box-ibm').style.display = "none";
  
}

function sizechildren2() {
	document.getElementById('children-box2').style.width = "100%";
    document.getElementById('textchildren2').style.display = "block";
    document.getElementById('children-box').style.display = "none";
    document.getElementById('children-box3').style.display = "none";
    document.getElementById('text-name-simu').style.display = "none";
    document.getElementById('children-box-microsoft').style.display = "none";
}

function sizechildren3() {
	document.getElementById('children-box3').style.width = "100%";
    document.getElementById('textchildren3').style.display = "block";
    document.getElementById('children-box').style.display = "none";
    document.getElementById('children-box2').style.display = "none";
    document.getElementById('text-name-simu').style.display = "none";
    document.getElementById('children-box-ibm').style.display = "none";
}


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: false

});

sr.reveal('.children-box',{delay: 100}); 
sr.reveal('.children-box2',{delay: 400}); 
sr.reveal('.children-box3',{delay: 600}); 

/*===== SCROLL REVEAL ANIMATION =====*/


