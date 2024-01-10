document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.button');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var profile = this.parentElement;
            var moreInfo = profile.querySelector('.more-info');

            if (moreInfo) {
                moreInfo.remove();
            } else {
                var newMoreInfo = document.createElement('div');
                newMoreInfo.classList.add('more-info');
                newMoreInfo.textContent = 'There is no further information regarding this profile';
                profile.appendChild(newMoreInfo);
            }
        });
    });
});