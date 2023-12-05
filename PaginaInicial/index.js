//buscar os elementos HTML
//Selecionar todas as tags div.slide
const slides = document.querySelectorAll('.slide');
//buscar btn prev
const prev = document.querySelector('#prev');
//buscar btn next 
const next = document.querySelector('#next');

// Configuração do autoplay
const auto = false; 
// Tempo de transição
const intervaloTransicao = 2000;
// Tempo para exibição
let slideIntervalo;

// Eventos 
next.addEventListener('click', (e) => {
    nextSlide(); //chama a função

    if (auto) {
        clearInterval(slideIntervalo);
        slideIntervalo = setInterval(nextSlide, intervaloTransicao)
    }
});

prev.addEventListener('click', (e) => {
    prevSlide();

    if (auto) {
        clearInterval(slideIntervalo);
        slideIntervalo = setInterval(nextSlide, intervaloTransicao)
    }
});

function nextSlide(){
    //localizar o elemento que detém da classe .atual
     const atual = document.querySelector('.atual');
     // Removendo a classe do elemnto
     atual.classList.remove('atual');

     if(atual.nextElementSibling){
        atual.nextElementSibling.classList.add('atual');
    }
    else {
        slides[0].classList.add('atual');
    }

    setTimeout(
        () => atual.classList.remove('atual')
    );
};

function prevSlide(){
    //localizar o elemento que detém da classe .atual
     const atual = document.querySelector('.atual');
     // Removendo a classe do elemnto
     atual.classList.remove('atual');

     if(atual.previousElementSibling){
        atual.previousElementSibling.classList.add('atual');
    }
    else {
        slides[slides.length-1].classList.add('atual');
    }

    setTimeout(
        () => atual.classList.remove('atual')
    );

}
if(auto){
    setInterval(nextSlide, intervaloTransicao);
}