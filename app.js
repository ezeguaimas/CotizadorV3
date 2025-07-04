function calcular() {
  const aporte1 = parseFloat(document.getElementById("aporte1").value) || 0;
  const aporte2 = parseFloat(document.getElementById("aporte2").value) || 0;
  const aporte3 = parseFloat(document.getElementById("aporte3").value) || 0;
  const aporte4 = parseFloat(document.getElementById("aporte4").value) || 0;
  let adultos = document.getElementById("adultos").value.trim();
  let menores = document.getElementById("menores").value.trim();

  // Valores de los planes
  const basicAdulto = 23000 //22600 //21900 //20500 //20000 //16760 //16370 //15940 //15400 //14780 //13030 //11980 //10790 //9810 //8920 //7760
  const basicMenor = 23000 //22600 //21900 //20500 //20000 //16760 //16370 //15940 //15400 //14780 //13030 //11980 //10790 //9810 //8920 //7760
  const corpAdulto = 32100 //31600 //30700 //28700 //28000 //25140 //24550 //23900 //23090 //22160 //19540 //17960 //16180 //14710 //13370 //11630 //10110 //9070 //8170 //7640 //5700 //4550 //4140; //3310; //2760;
  const corpMenor = 32100 //31600 //30700 //28700 //28000 //25140 //24550 //23900 //23090 //22160 //19540 //17960 //16180 //14710 //13370 //11630 //10110 //9070 //8170 //7640 //5700 //4550 //4140; //3310; //2760;
  const mgAdulto = 45900 //45200 //43900 //41000 //40000 //33190 //32410 //31560 //30490 //29260 //25800 //23710 //21360 //19420 //17650 //15350 //0 //11970 //10780 //10080
  const mgMenor = 45900 //45200 //43900 //41000 //40000 //33190 //32410 //31560 //30490 //29260 //25800 //23710 //21360 //19420 //17650 //15350 //0 //11970 //10780 //10080
  const vipAdulto = 64900 //63600 //61800 //57700 //55000 //41260 //40290 //39230 //37900 //36370 //32070 //29470 //26550 //24140 //21940 //19080 //16590 //14880 //13410 //12540 //9330 //8580 //7800; //6240; //5200;
  const vipMenor = 64900 //63600 //61800 //57700 //55000 //41260 //40290 //39230 //37900 //36370 //32070 //29470 //26550 //24140 //21940 //19080 //16590 //14880 //13410 //12540 //9330 //8580 //7800; //4680; //3900;

  let sueldoBruto = (aporte1 + aporte2 + aporte3 + aporte4) / 0.03;

  const montoMaximo =  3385490.05 //3335458.18 //3245240.49 //3128545.73 //2989160.00 //2841525.42 //2767090.68 //2674292.72 //2567238.86 //2359712.22 //2081258.67 //1874838.91 //1471616.10 //1157112.83 //957320.12 //776478.32; //642142.18;

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
  const basicDif = aporteTotal - (basicAdulto * adultos + basicMenor * menores);
  const corpDif = aporteTotal - (corpAdulto * adultos + corpMenor * menores);
  const mgDif = aporteTotal - (mgAdulto * adultos + mgMenor * menores);
  const vipDif = aporteTotal - (vipAdulto * adultos + vipMenor * menores);
  let renderBasic = 0;
  let renderCorp = 0;
  let renderMg = 0;
  let renderVip = 0;

  if (basicDif > 0) {
    renderBasic = "No Paga Diferencia";
  } else {
    renderBasic = Math.abs(basicDif);
  }

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
  document.getElementById("dif_basic").textContent =
    typeof renderBasic === "number" ? renderBasic.toFixed(2) : renderBasic;
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
  document.getElementById("dif_basic").textContent = "";
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
