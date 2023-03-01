
document.getElementById('datos').onclick = function () {
    document.getElementById("generalContent").innerHTML = "Nuevo texto que reemplaza al original";
}

document.getElementById('estudios').onclick = function () {
    document.getElementById("generalContent").innerHTML = "Desarrollo de Software, I.S. Carena";
}

document.getElementById('experiencia').onclick = function () {
    document.getElementById("generalContent").innerHTML = "11 años de diseño gráfico";
}

document.getElementById("tester").addEventListener('click', function () {
    document.getElementById("generalContent").innerHTML = "Desde octubre de 2021 me desempeño como QA tester trainee en IncluIt";
});

document.getElementById("web").addEventListener('click', function () {
    document.getElementById("generalContent").innerHTML = "Quisiera desarrollarme en profundidad como diseñadora web. Este es mi primer intento.";
});