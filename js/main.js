// fouryellow.com js

function goTo(page){
    document.body.className = page;
}
document.body.className = window.location.hash.slice(1) + " initial";
setTimeout(()=> {
    goTo(window.location.hash.slice(1));
}, 200);