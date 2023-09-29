var resultadosDiv = document.createElement("div");
resultadosDiv.id = "resultados";

function generarFormulario() {
  var formulario = document.getElementById("formulario");
  var cantidad = document.getElementById("cantidad").value;

  // Validacion para que la cantidad de alumnos no sea negativa o cero
  if (cantidad <= 0) {
    alert("La cantidad de alumnos debe ser un número positivo mayor a cero.");
    return;
  }

  formulario.innerHTML = "";

  for (var i = 1; i <= cantidad; i++) {
    var label = document.createElement("label");
    label.textContent = "👩‍💻 Ingrese el peso del alumno " + i + ": ";
    var input = document.createElement("input");
    input.type = "number";
    input.name = "peso";
    formulario.appendChild(label);
    formulario.appendChild(input);
  }

  var estadisticasButton = document.createElement("button");
  estadisticasButton.textContent = "Mostrar Estadísticas";
  estadisticasButton.onclick = mostrarEstadisticas;
  formulario.appendChild(estadisticasButton);
}

function mostrarEstadisticas() {
  var pesosInputs = document.getElementsByName("peso");
  var pesos = [];

  for (var i = 0; i < pesosInputs.length; i++) {
    var peso = parseInt(pesosInputs[i].value);

    // Validar que se ingrese peso
    if (isNaN(peso) || peso <= 0) {
      alert("Por favor, ingrese el peso para todos los alumnos.");
      return;
    }

    pesos.push(peso);
  }

  // Validar que el formulario no este vacio
  if (pesos.length === 0) {
    alert("Por favor, complete el formulario antes de enviarlo.");
    return;
  }

  var menosDe40 = 0;
  var entre40y50 = 0;
  var masDe50yMenosDe60 = 0;
  var masDe60 = 0;

  for (var i = 0; i < pesos.length; i++) {
    if (pesos[i] < 40) {
      menosDe40++;
    } else if (pesos[i] >= 40 && pesos[i] <= 50) {
      entre40y50++;
    } else if (pesos[i] > 50 && pesos[i] < 60) {
      masDe50yMenosDe60++;
    } else if (pesos[i] >= 60) {
      masDe60++;
    }
  }

  if (!resultadosDiv.parentNode) {
    var formulario = document.getElementById("formulario");
    formulario.appendChild(resultadosDiv);
  }

  resultadosDiv.innerHTML = `
    <h2>Estadísticas de Pesos</h2>
    <p>Alumnos de menos de 40 Kg: ${menosDe40}</p>
    <p>Alumnos entre 40 y 50 Kg: ${entre40y50}</p>
    <p>Alumnos de más de 50 y menos de 60 Kg: ${masDe50yMenosDe60}</p>
    <p>Alumnos de más o igual a 60 Kg: ${masDe60}</p>
  `;
}

function limpiarFormulario() {
  var formulario = document.getElementById("formulario");
  formulario.innerHTML = "";
  resultadosDiv.innerHTML = "";
  document.getElementById("cantidad").value = "";
}
