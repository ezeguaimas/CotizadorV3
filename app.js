function calcular() {
  const aporte1 = parseFloat(document.getElementById("aporte1").value) || 0;
  const aporte2 = parseFloat(document.getElementById("aporte2").value) || 0;
  const aporte3 = parseFloat(document.getElementById("aporte3").value) || 0;
  const aporte4 = parseFloat(document.getElementById("aporte4").value) || 0;
  let adultos = document.getElementById("adultos").value.trim();
  let menores = document.getElementById("menores").value.trim();

  // Valores de los planes
  const corpAdulto = 10110 //9070 //8170 //7640 //5700 //4550 //4140; //3310; //2760;
  const corpMenor = 10110 //9070 //8170 //7640 //5700 //4550 //4140; //3310; //2760;
  const mgAdulto = 0 //11970 //10780 //10080
  const mgMenor = 0 //11970 //10780 //10080
  const vipAdulto = 16590 //14880 //13410 //12540 //9330 //8580 //7800; //6240; //5200;
  const vipMenor = 16590 //14880 //13410 //12540 //9330 //8580 //7800; //4680; //3900;

  let sueldoBruto = (aporte1 + aporte2 + aporte3 + aporte4) / 0.03;

  const montoMaximo = 957320.12 //776478.32; //642142.18;

  if (sueldoBruto > montoMaximo) {
    sueldoBruto = montoMaximo;
  }

  if (menores === "") {
    menores = 0;
  }

  if (adultos === "") {
    const mensajeError = document.getElementById("mensaje-error");
    mensajeError.textContent = "Ingrese valores para adultos y menores";
    setTimeout(function () {
      mensajeError.textContent = "";
    }, 3000);
    return;
  }

  const aporteOS = sueldoBruto * 0.0765;

  const aporteTotal = aporteOS;
  const corpDif = aporteTotal - (corpAdulto * adultos + corpMenor * menores);
  const mgDif = aporteTotal - (mgAdulto * adultos + mgMenor * menores);
  const vipDif = aporteTotal - (vipAdulto * adultos + vipMenor * menores);
  let renderCorp = 0;
  let renderMg = 0;
  let renderVip = 0;

  if (corpDif > 0) {
    renderCorp = "No Paga Diferencia";
  } else {
    renderCorp = Math.abs(corpDif);
  }

  if (mgDif > 0) {
    renderMg = "No Paga Diferencia";
  } else {
    renderMg = Math.abs(mgDif);
  }

  if (vipDif > 0) {
    renderVip = "No Paga Diferencia";
  } else {
    renderVip = Math.abs(vipDif);
  }

  // Mostramos los resultados en el HTML
  document.getElementById("sueldo_bruto").textContent = sueldoBruto.toFixed(2);
  document.getElementById("aporte_os").textContent = aporteOS.toFixed(2);
  document.getElementById("aporte_total").textContent = aporteTotal.toFixed(2);
  document.getElementById("dif_corp").textContent =
    typeof renderCorp === "number" ? renderCorp.toFixed(2) : renderCorp;
  document.getElementById("dif_mg").textContent =
    typeof renderMg === "number" ? renderMg.toFixed(2) : renderMg;
  document.getElementById("dif_vip").textContent =
    typeof renderVip === "number" ? renderVip.toFixed(2) : renderVip;

  mostrarResultados();
}

function mostrarResultados() {
  document.getElementById("resultados").style.display = "block";
}

function ocultarResultados() {
  document.getElementById("resultados").style.display = "none";
}

const borrarBtn = document.getElementById("borrar");
borrarBtn.addEventListener("click", function () {
  document.getElementById("aporte1").value = "";
  document.getElementById("aporte2").value = "";
  document.getElementById("aporte3").value = "";
  document.getElementById("aporte4").value = "";
  document.getElementById("adultos").value = "";
  document.getElementById("menores").value = "";
  document.getElementById("sueldo_bruto").textContent = "";
  document.getElementById("aporte_os").textContent = "";
  document.getElementById("aporte_total").textContent = "";
  document.getElementById("dif_corp").textContent = "";
  document.getElementById("dif_mg").textContent = "";
  document.getElementById("dif_vip").textContent = "";
  calcular();
  ocultarResultados();
});
const botonCalcular = document.getElementById("botonCalcular");
botonCalcular.addEventListener("click", calcular);

const darkModeSwitch = document.getElementById("darkModeSwitch");
const themeStylesheet = document.getElementById("themeStylesheet");
const themeTransitionElement = document.getElementById(
  "themeTransitionElement"
);

darkModeSwitch.addEventListener("change", function () {
  if (this.checked) {
    themeTransitionElement.style.opacity = "1";
    setTimeout(() => {
      themeStylesheet.href = "modoOscuro.css";
      themeTransitionElement.style.opacity = "0";
    }, 300);
  } else {
    themeTransitionElement.style.opacity = "1";
    setTimeout(() => {
      themeStylesheet.href = "modoClaro.css";
      themeTransitionElement.style.opacity = "0";
    }, 300);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Obtener elementos del DOM
  let inputTelefono = document.getElementById("whatsapp");
  let btnEnviar = document.getElementById("botonWhatsapp");

  // Agregar un evento click al botón
  btnEnviar.addEventListener("click", function () {
    // Obtener el valor del campo de entrada
    let telefono = inputTelefono.value;

    // Validar que el campo no esté vacío
    if (telefono.trim() !== "") {
      // Construir la URL de WhatsApp con el número de teléfono
      let urlWhatsapp = "https://api.whatsapp.com/send?phone=549" + telefono;

      // Abrir la URL en una nueva pestaña
      window.open(urlWhatsapp, "_blank");
    } else {
      alert("Por favor, ingresa un número de teléfono válido.");
    }
  });
});
