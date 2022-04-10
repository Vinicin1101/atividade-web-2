const checkbox = document.querySelector('#check');
const playlist = document.querySelector('#playlist-content');

// Verificar a checkbox e mostrar ou esconder a playlist
checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        playlist.style.display = 'block';

        playlist.innerHTML = '<iframe src="https://open.spotify.com/embed/playlist/1ymewIu4fenTFyMxgofOV7" width="400" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><div class="spin-dual-ring"></div>';
    } else {
        playlist.style.display = 'none';
        playlist.innerHTML = '';
    }

    // removendo o spin e descendo a página
    document.querySelector('spin-dual-ring').remove();
    window.scrollTo(0, document.body.scrollHeight);

});