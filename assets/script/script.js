const checkbox = document.querySelector('#check');
const playlist = document.querySelector('#playlist-content');

// Verificar a checkbox e mostrar ou esconder a playlist
checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    playlist.style.display = 'block';
    playlist.innerHTML = '<iframe src="https://open.spotify.com/embed/playlist/1ymewIu4fenTFyMxgofOV7" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><div class="spin-dual-ring"></div>';

    escurecer();
  } else {
    playlist.style.display = 'none';
    playlist.innerHTML = '';

    escurecer();
  }

  // removendo o spin e descendo a página
  setTimeout((arg) => {
    document.querySelector('.spin-dual-ring').remove();
  }, 6000)
  window.scrollTo(0, document.body.scrollHeight);

});

const img = document.querySelector('.profile_pic');

img.addEventListener("click", (arg) => {
  
  const div = document.querySelector('div.picture')
  if(div.classList.contains("active")){
    div.classList.remove("active");
  }else{
    div.classList.add("active");
  }
})
