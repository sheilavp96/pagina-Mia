const btnCta = document.querySelector('.cta');
const biografiaMia = document.querySelector('.hidden');
const container = document.querySelector('.conatiner');
const containerB = document.querySelector('.container_b');

//removemos hidden para que se visualice el texto
btnCta.addEventListener('click', function () {
    biografiaMia.classList.remove('hidden');
});

//añadimos hidden para que oculte el texto
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        console.log(e);
        //if: verificamos primero que NO TENGA LA CLASE HIDDEN, si es true se la añadimos,
        if (!biografiaMia.classList.contains('hidden')) {
            biografiaMia.classList.add('hidden');
        }
    }
});
