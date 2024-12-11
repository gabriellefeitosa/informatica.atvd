document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const images = document.querySelectorAll(".carousel-image");
  const totalImages = images.length;

  // Função para mostrar a imagem ativa
  function showImage(index) {
      images.forEach((image, i) => {
          if (i === index) {
              image.classList.add("active");
          } else {
              image.classList.remove("active");
          }
      });
  }

  // Função para ir para a imagem anterior
  function prevImage() {
      currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
      showImage(currentIndex);
  }

  // Função para ir para a imagem seguinte
  function nextImage() {
      currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
      showImage(currentIndex);
  }

  // Event listeners para os botões
  document.getElementById("prev").addEventListener("click", prevImage);
  document.getElementById("next").addEventListener("click", nextImage);

  // Exibir a primeira imagem
  showImage(currentIndex);
});
document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll('.carousel'); 

  carousels.forEach((carousel) => {
      let currentIndex = 0;
      const images = carousel.querySelectorAll(".carousel-image");
      const totalImages = images.length;

      function showImage(index) {
          images.forEach((image, i) => {
              if (i === index) {
                  image.classList.add("active");
              } else {
                  image.classList.remove("active");
              }
          });
      }

      function prevImage() {
          currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
          showImage(currentIndex);
      }

      function nextImage() {
          currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
          showImage(currentIndex);
      }

      // Control buttons
      carousel.querySelector(".prev").addEventListener("click", prevImage);
      carousel.querySelector(".next").addEventListener("click", nextImage);

      // Exibir a primeira imagem
      showImage(currentIndex);
  });
});
