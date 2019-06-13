var createtwitbutton = document.getElementById('fans-of-the-message');
var modal = document.getElementsByClassName('hidden');
var closeButton = document.getElementsByClassName('modal-close-button');
var acceptButton = document.getElementsByClassName('modal-accept-button');
var cancelButton = document.getElementsByClassName('modal-cancel-button');
var searchButton = document.getElementById('navbar-search-button');

var openModal = function () {
    for (var i = 0; i < modal.length; i++) {
        modal[i].style.display = "block";
    }
}

var closeModal = function () {
    for (var i = 0; i < modal.length; i++) {
        modal[i].style.display = "none";
    }
    resetModal();
}

createtwitbutton.addEventListener('click', function () {
    console.log('Create twit Button clicked!');
    openModal();
});

closeButton[0].addEventListener('click', function () {
    console.log('close twit Button clicked!');
    closeModal();
});

cancelButton[0].addEventListener('click', function () {
    console.log('cancel twit Button clicked!');
    closeModal();
});

var TextInput = document.getElementById('twit-text-input');
var authorInput = document.getElementById('twit-attribution-input');
var twitmain = document.getElementsByClassName('twit-container');

var resetModal = function () {
    TextInput.value = "";
    authorInput.value = "";
}

var checkBlank = function () {
    if (TextInput.value === "") {
        alert('text connot be blank');
        return false;
    }
    else if (authorInput.value == "") {
        alert('author connot be blank');
        return false;
    }
    else return true;
}

function generateNewTwit(twitinput, twitauthor) {
    var newtwit = document.createElement('ariticle');
    newtwit.classList.add('twit');

    var newtwiticon = document.createElement('div');
    newtwiticon.classList.add('twit-icon');

    var newtwitfas = document.createElement('i');
    newtwitfas.classList.add('fas');
    newtwitfas.classList.add('fa-bullhorn');

    var newtwitcontent = document.createElement('div');
    newtwitcontent.classList.add('twit-content');

    var newtwittext = document.createElement('p');
    newtwittext.classList.add('twit-text');

    var newtwitauthor = document.createElement('p');
    newtwitauthor.classList.add('twit-author');

    var newtwitsharp = document.createElement('a');
    newtwitsharp.href = '#';

    var newinput = document.createTextNode(twitinput);
    var newauthor = document.createTextNode(twitauthor);

    newtwittext.appendChild(newinput);
    newtwitsharp.appendChild(newauthor);

    newtwiticon.appendChild(newtwitfas);
    newtwitauthor.appendChild(newtwitsharp);
    newtwitcontent.appendChild(newtwittext);
    newtwitcontent.appendChild(newtwitauthor);
    newtwit.appendChild(newtwiticon);
    newtwit.appendChild(newtwitcontent);
    twitmain[0].appendChild(newtwit);

    return newtwit;
}

acceptButton[0].addEventListener('click', function () {
    if (checkBlank()) {
        generateNewTwit(TextInput.value, authorInput.value);
        closeModal();
    }
    else {
        alert();
    }
});