const checkbox = document.querySelector('#check');
const playlist = document.querySelector('#playlist-content');

// Verificar a checkbox e mostrar ou esconder a playlist
checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    playlist.style.display = 'block';
    playlist.innerHTML = '<iframe src="https://open.spotify.com/embed/playlist/1ymewIu4fenTFyMxgofOV7" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><div class="spin-dual-ring"></div>';


    // block scroll in all elements
    document.body.style.overflow = 'hidden';

  } else {
    playlist.style.display = 'none';
    playlist.innerHTML = '';
  }

  // removendo o spin e descendo a página
  setTimeout((arg) => {
    window.onload = (ev) => {
      const spin = document.querySelector('.spin-dual-ring');
      spin.style.display = 'none';
      window.scrollTo(0, 0);
    };
  }, 6000);

});

const img = document.querySelector('.profile_pic');
const btnClose = document.querySelector('.close_pic');

// configurando o popup da imagem de perfil
function showProfile() {

  const div = document.querySelector('div.picture');

  // condição de ativação do popup
  if (div.classList.contains("active")) {
    div.classList.remove("active");

    // desativando o botao de fechar
    btnClose.style.display = 'none';
  } else {
    div.classList.add("active");

    // ativando o botao de fechar
    btnClose.style.display = 'block';
    btnClose.style.position = 'absolute';

    // posicionamento calculado com base na tela e na imagem
    btnClose.style.left = `calc(50% + 120px)`;
    btnClose.style.top = `calc(50% - 150px)`;
    btnClose.style.zIndex = '10000';
  }
}

// eventos de ativação ou desativação do popup
img.addEventListener("click", showProfile);
btnClose.addEventListener("click", showProfile);
