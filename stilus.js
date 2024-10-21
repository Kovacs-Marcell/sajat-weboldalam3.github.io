document.addEventListener('DOMContentLoaded', function() {
    var toastContainer = document.getElementById('toast-container');
    var closeButton = document.getElementById('close-toast');

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            toastContainer.style.display = 'none';
        });
    }
});