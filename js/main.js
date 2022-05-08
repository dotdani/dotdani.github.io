document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button');
    button.addEventListener('click', function () {
        const m = 'bWFpbHRvOjYxODZjOWRkbUBtb3ptYWlsLmNvbQ==';
        location.href = atob(m);
    });
    button.classList.add('visible');
});