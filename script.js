let sendBut = document.querySelector('.send')
function sendButChange() {
    sendBut.innerHTML = "Отправка..."
    setTimeout(function() {
        window.location.href = 'https://arkinovgg.github.io/good/'
    }, 3*1000)
}

sendBut.addEventListener("click", sendButChange);