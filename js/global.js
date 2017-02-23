
// Global variable to track current file name.
var currentFile = "";

function playAudio(e) {

    test();

    // Check for audio element support.
    if (window.HTMLAudioElement) {
        try {
            // Cambiar Src del input a ejecutar
            jQuery('#src-audio').val('audios/'+ e +'.mp3');

            var eAudio = document.getElementById('eAudio');//Etiqueta audio o engine
            var btn = document.getElementById('play');//boton play
            var audioURL = document.getElementById('src-audio');//src del input

            /*
            console.log('e: '+ e);
            console.log('eAudio: ' + eAudio);
            console.log('audioURL: '+ audioURL);
            */

            //Skip loading if current file hasn't changed.
            if (audioURL.value !== currentFile) {
                eAudio.src = audioURL.value;
                currentFile = audioURL.value;                       
            }

            // Tests the paused attribute and set state. 
            if (eAudio.paused) {
                eAudio.play();
                //btn.textContent = "Pause";
            }
            else {
                eAudio.pause();
                //btn.textContent = "Play";
            }
        }
        catch (e) {
            // Fail silently but show in F12 developer tools console
             if(window.console && console.error("Error:" + e));
        }
    }
}

// Para el sonido que se esté reproduciendo y lo revovina a 0
function stopAudio(){
    var eAudio = document.getElementById('eAudio');//Etiqueta audio o engine
    eAudio.pause();
    eAudio.currentTime = 0;
    terminando();
}

// Restart the audio file to the beginning.
function repeatAudio() {
     // Check for audio element support.
    if (window.HTMLAudioElement) {
        try {
            var eAudio = document.getElementById('eAudio');
            eAudio.currentTime = 0;
        }
        catch (e) {
            // Fail silently but show in F12 developer tools console
             if(window.console && console.error("Error:" + e));
       }
    }
}

//Aquí estamos pendientes de cuando empieze a tocar
function test(e){

    var mySound = document.getElementById('eAudio');//Etiqueta audio o engine

    mySound.addEventListener('play', function () {
        console.log('Inicio el audio');
    }, false);

    //Y aquí detectamos cuando termine
    mySound.addEventListener('ended', function () {
        console.log('Termino el audio');
        jQuery('.btn').removeClass('active');
    }, false);
}

function sonando(e){    
    jQuery(e).addClass('active');
    console.log(e);
}
function terminando(){
    jQuery('.btn').removeClass('active');
}

jQuery(window).ready(function(){
    jQuery('.btn').click(function(){
        if( jQuery(this).hasClass('active') ){
            terminando();
        }else {
            terminando();
            sonando( jQuery(this) );            
        }
    });
});
