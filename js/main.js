// fouryellow.com js

function goTo(page){
    document.body.className = page;
}

goTo(window.location.hash.slice(1));