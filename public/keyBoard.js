
document.addEventListener("keydown", function (event) {

    buttonAnimation(event.key);

});

document.addEventListener('keydown', (e) => {
    if (e.code == 0x20) {
        e.key.classList.add("active");
        setTimeout(function () {
            e.key.classList.remove("active");
        }, 100);

    }
});

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("active");

    setTimeout(function () {
        activeButton.classList.remove("active");
    }, 100);


}







