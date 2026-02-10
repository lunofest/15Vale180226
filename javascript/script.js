// ---------------MUSICA Y LIGHTBOX------------------

(function () {
    const initMusic = () => {
        const playPauseBtn = document.getElementById("playPauseBtn");
        const playPauseIcon = document.getElementById("playPauseIcon");
        const lightbox = document.getElementById('lightbox');
        const enterWithMusicBtn = document.getElementById('enterWithMusic');
        const enterWithoutMusicBtn = document.getElementById('enterWithoutMusic');

        if (!playPauseBtn || !lightbox || !enterWithMusicBtn) return;

        // Evitar reinicialización si el script se carga múltiples veces
        if (window.musicInitialized) return;
        window.musicInitialized = true;

        const music = new Audio('assets/musica.mp3');
        music.loop = true;

        // Bloquear scroll mientras el lightbox está activo
        document.body.style.overflow = 'hidden';

        function closeLightbox() {
            lightbox.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        enterWithMusicBtn.addEventListener('click', () => {
            music.play().then(() => {
                playPauseIcon.classList.replace("fa-play", "fa-pause");
            }).catch(error => console.log("Error al reproducir:", error));
            closeLightbox();
        });

        if (enterWithoutMusicBtn) {
            enterWithoutMusicBtn.addEventListener('click', () => {
                closeLightbox();
            });
        }

        playPauseBtn.addEventListener("click", () => {
            if (music.paused) {
                music.play();
                playPauseIcon.classList.replace("fa-play", "fa-pause");
            } else {
                music.pause();
                playPauseIcon.classList.replace("fa-pause", "fa-play");
            }
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMusic);
    } else {
        initMusic();
    }
})();



// -----------TEMPORIZADOR----------------


// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Configura aquí la fecha y hora objetivo en el formato deseado
    const fechaObjetivo = new Date("february 18, 2026 19:30:00").getTime();

    function updateTimer() {
        const ahora = new Date().getTime();
        const tiempoRestante = fechaObjetivo - ahora;

        if (tiempoRestante <= 0) {
            document.querySelector('.temporizador__mensaje').textContent = "¡Ya llegó el gran día!";
            clearInterval(intervaloTemporizador);
            return;
        }

        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        // Actualiza los valores del temporizador
        document.querySelectorAll('.temporizador__valor').forEach((elemento, indice) => {
            elemento.textContent = [dias, horas, minutos, segundos][indice].toString().padStart(2, '0');
        });
    }

    updateTimer(); // Actualiza el temporizador inicialmente
    const intervaloTemporizador = setInterval(updateTimer, 1000); // Actualiza cada segundo
});




// ----------------- fotos -----------------------

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 4,
        depth: 3,
        modifier: 50,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000, // Time between slides in milliseconds (e.g., 3 seconds)
        disableOnInteraction: false, // Set to true to stop autoplay on user interaction (e.g., dragging)
    },
    loop: true, // Enable infinite loop
});



// --------------CONFIRMAR ASISTENCIA------------------


document.getElementById('confirmar-asistencia').addEventListener('click', function () {
    const nombre = document.getElementById('name').value.trim();
    const asistencia = document.querySelector('input[name="asistencia"]:checked');

    if (!nombre) {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    if (!asistencia) {
        alert('Por favor, selecciona si asistirás o no.');
        return;
    }

    const mensaje = `Hola, mi nombre es ${nombre}, quiero confirmar que ${asistencia.value}.`;
    const numeroWhatsApp = '543624826095';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
});


// --------------PLAYLIST------------------


function enviarWhatsApp() {
    var nombre = document.getElementById("nombre").value;
    var recomendacion = document.getElementById("recomendacion").value;
    var url = '543624826095';

    if (nombre.trim() === "" || recomendacion.trim() === "") {
        alert("Por favor, completa ambos campos.");
        return;
    }

    var mensaje = `Hola, mi nombre es ${nombre} y mi tema recomendado es ${recomendacion}`;
    var whatsappUrl = `https://wa.me/${url}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, "_blank");
}



// --------------------------------gift---------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('mostrarBoton');
    const textoDesplegable = document.getElementById('textoDesplegable');

    boton.addEventListener('click', function () {
        textoDesplegable.classList.toggle('mostrar');
    });
});


function copyText() {
    var aliasText = document.getElementById('alias').innerText; // Obtener el texto del alias
    var tempInput = document.createElement('input');
    tempInput.value = aliasText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Mostrar el mensaje de "¡Copiado!"
    var copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';
    setTimeout(function () {
        copyMessage.style.display = 'none';
    }, 1500); // Ocultar el mensaje después de 1.5 segundos
}



function copyCbuText() {
    const aliasText = document.getElementById('cbuAlias').textContent;
    const copyMessage = document.getElementById('copyCbuMessage');

    const textarea = document.createElement('textarea');
    textarea.value = aliasText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    copyMessage.style.display = 'block';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 2000);
}
