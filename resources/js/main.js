var openContact = document.getElementById('openContact');

var hideContact = document.getElementsByClassName('hideContact');

var heroWrapper = document.getElementById('heroWrapper');

var aboutSection = document.getElementById('aboutSection');

var servicesSection = document.getElementById('servicesSection');

var downloadSection = document.getElementById('downloadSection');

var contactSection = document.getElementById('contactSection');

openContact.addEventListener('click', revealContactSection);

function revealContactSection() {
	contactSection.style.display = 'block';
	heroWrapper.style.display = 'none';
	aboutSection.style.display = 'none';
	servicesSection.style.display = 'none';
	downloadSection.style.display = 'none';
}



function concealContactSection() {
	contactSection.style.display = 'none';
	heroWrapper.style.display = 'block';
	aboutSection.style.display = 'block';
	servicesSection.style.display = 'block';
	downloadSection.style.display = 'block';
}

for(var i = 0; i < hideContact.length; i ++){
    hideContact[i].addEventListener('click', concealContactSection);
}


/*--------------------------------------------------------------------------*/
/*------------- Code for Opening & Closing Modal ---------------------------*/
/*--------------------------------------------------------------------------*/

var modalWrapper = document.getElementById('modalWrapper');

var openBtn = document.getElementById('openBtn');

openBtn.addEventListener('click', revealModal);

function revealModal() {
	modalWrapper.style.display = 'flex';
}


var closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', concealModal);

function concealModal() {
	modalWrapper.style.display = 'none';
}

/*--------------------------------------------------------------------------*/
/*------------- Code for Opening & Closing Modal ---------------------------*/
/*--------------------------------------------------------------------------*/

