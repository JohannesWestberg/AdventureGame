var linkToHub = document.querySelector('.p-start');

if (linkToHub) {
    linkToHub.addEventListener('click', function() {
        var newPageURL = 'hub.html';
        window.location.href = newPageURL;
    });
}