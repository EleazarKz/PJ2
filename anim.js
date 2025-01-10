// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I wanna be your vacuum cleaner", time: 13 },
  { text: "Breathing in your dust", time: 16 },
  { text: "I wanna be your Ford Cortina", time: 20 },
  { text: "I will never rust", time: 23 },
  { text: "If you like your coffee hot", time: 27 },
  { text: "Let me be your coffee pot", time: 33 },
  { text: "You call the shots, babe", time: 36 },
  { text: "I just wanna be yours", time: 39 },
  { text: "Secrets I have held in my heart, Are harder to hide than I thought, Maybe I just wanna be yours", time: 43 },
  { text: "I wanna be yours, I wanna be yours", time: 49 },
  { text: "Wanna be yours  Wanna be yours  Wanna be yours", time: 53 },
  { text: "Wanna be yours  Wanna be yours  Wanna be yours  Wanna be yours", time: 57 },
  { text: "Let me be the portable heater That you'll get cold without", time: 61 },
  { text: "I wanna be your setting lotion ", time: 66 },
  { text: "Hold your hair in deep devotion", time: 70 },
  { text: "At least as deep as the Pacific Ocean", time: 74 },
  { text: "Now I wanna be yours", time: 78 },
  { text: "Secrets I have held in my heart, Are harder to hide than I thought, Maybe I just wanna be yours", time: 83 },
  { text: "I wanna be yours, I wanna be yours", time: 89 },
  { text: "Wanna be yours  Wanna be yours  Wanna be yours", time: 93 },
  { text: "I wanna be your vacuum cleaner", time: 97 },
  { text: "Breathing in your dust", time: 100 },
  { text: "I wanna be your Ford Cortina", time: 104 },
  { text: "I will never rust", time: 108 },
  { text: "I just wanna be yours", time: 112 },
  { text: "I just wanna be yours", time: 115 },
  { text: "I just wanna be yours", time: 118 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
