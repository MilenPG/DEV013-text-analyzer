import analyzer from './analyzer.js';
console.log(analyzer)
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const reload = document.getElementById("reset-button").addEventListener("click", function() {
location.reload();
});