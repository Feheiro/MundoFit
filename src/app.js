var countdown = 10;

function updateCountdown() {
    document.getElementById('countdown').textContent = `Redirecionando em ${countdown} segundos...`;
}
function countdownRedirect() {
    updateCountdown();
    var countdownInterval = setInterval(function () {
        countdown--;

        updateCountdown();

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            window.location.href = 'https://pay.kiwify.com.br/F81amaa?afid=qP0wEwlK';
        }
    }, 1000);
}


window.onload = countdownRedirect;