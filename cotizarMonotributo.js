function cotizarMonotributo(logoDataURL) {
  const aporte1 = parseFloat(document.getElementById("aporte1").value) || 0;
  const aporte2 = parseFloat(document.getElementById("aporte2").value) || 0;
  const aporte3 = parseFloat(document.getElementById("aporte3").value) || 0;
  const aporte4 = parseFloat(document.getElementById("aporte4").value) || 0;
  const adultos = document.getElementById("adultos").value;
  const menores = document.getElementById("menores").value;
  const nombre = document.getElementById("nombre").value.toUpperCase();

  // Valores de los planes
const basicAdulto = 32390 //28560 //26250 
const basicMenor = 32390 //28560 //26250
const corpAdulto = 46150 //40700 //37410
const corpMenor = 46150 //40700 //37410
const mgAdulto = 53530 //47200 //43380
const mgMenor = 53530 //47200 //43380
const vipAdulto = 60950 //53750 //49400
const vipMenor = 60950 //53750 //49400

  const dif_basic = ((Number(adultos) * basicAdulto) + (Number(menores) * basicMenor))
  const dif_corp = ((Number(adultos) * corpAdulto) + (Number(menores) * corpMenor))
  const dif_mg = ((Number(adultos) * mgAdulto) + (Number(menores) * mgMenor))
  const dif_vip = ((Number(adultos) * vipAdulto) + (Number(menores) * vipMenor))

  const fecha = new Date();
  const anio = fecha.getFullYear();
  const mes = fecha.getMonth() + 1;
  const dia = fecha.getDate();

  const fechaActual = `${dia.toString().padStart(2, "0")}-${mes
    .toString()
    .padStart(2, "0")}-${anio}`;

  const docDefinition = {
    content: [
      {
        margin: [10, 10, 20, 10],
        layout: {
          defaultBorder: false,
          paddingTop: function () {
            return 10;
          },
        },
        table: {
          widths: ["*"],
          body: [
            [
              {
                stack: [
                  {
                    image: logoDataURL,
                    alignment: "center",
                    width: 250,
                  },
                  {
                    text: "Fecha: " + fechaActual,
                    alignment: "right",
                    margin: [10, 20, 10, 30],
                    fontSize: 16,
                  },
                  {
                    text: "COTIZACIÓN MONOTRIBUTO",
                    style: "header",
                    fontSize: 24,
                    decoration: "underline",
                    bold: true,
                  },
                  {
                    stack: [
                      { text: "Nombre:", fontSize: 14 },
                      { text: nombre, fontSize: 22, bold: true },
                    ],
                    style: "subheader",
                    margin: [10, 20, 10, 30],
                  },
                  {
                    text: "PLAN: BÁSICO",
                    style: "subheader",
                    margin: [10, 10, 10, 10],
                    fontSize: 14,
                    bold: true,
                  },
                  {
                    text: "Importe $: " + dif_basic,
                    margin: [20, 0],
                    fontSize: 14,
                    bold: true,
                  },
                  {
                    text:
                      "Observaciones: Ingresan " +
                      adultos +
                      " Adultos, " +
                      menores +
                      " menor/es.",
                    margin: [40, 10],
                    fontSize: 12,
                  },

                  {
                    text: "PLAN: CORPORATIVO",
                    style: "subheader",
                    margin: [10, 20, 10, 10],
                    fontSize: 14,
                    bold: true,
                  },
                  {
                    text: "Importe $: " + dif_corp,
                    margin: [20, 0],
                    fontSize: 14,
                    bold: true,
                  },
                  {
                    text:
                      "Observaciones: Ingresan " +
                      adultos +
                      " Adultos, " +
                      menores +
                      " menor/es.",
                    margin: [40, 10],
                    fontSize: 12,
                  },
                  {
                    text: "PLAN: MG",
                    style: "subheader",
                    margin: [10, 20, 10, 10],
                    fontSize: 14,
                    bold: true,
                  },
                  {
                    text: "Importe $: " + dif_mg,
                    margin: [20, 0],
                    fontSize: 14,
                    bold: true,
                  },
                  {
                    text:
                      "Observaciones: Ingresan " +
                      adultos +
                      " Adultos, " +
                      menores +
                      " menor/es.",
                    margin: [40, 10],
                    fontSize: 12,
                  },
                  {
                    text: "PLAN: VIP",
                    style: "subheader",
                    margin: [10, 20, 10, 10],
                    fontSize: 14,
                    bold: true,
                  },
                  {
                    text: "Importe $: " + dif_vip,
                    margin: [20, 0],
                    fontSize: 14,
                    bold: true,
                  },
                  {
                    text:
                      "Observaciones: Ingresan " +
                      adultos +
                      " Adultos, " +
                      menores +
                      " menor/es.",
                    margin: [40, 10],
                    fontSize: 12,
                  },
                  {
                    text: "Los precios están sujetos a cambios y/o modificaciones por parte de la Superintendencia de Servicios de Salud de la Nación.",
                    style: "footer",
                    margin: [10, 60, 10, 20],
                    fontSize: 12,
                    bold: true,
                    decoration: "underline",
                    alignment: "justify",
                    color: "#840000",
                  },
                ],
              },
            ],
          ],
        },
      },
    ],
    styles: {
      header: {
        bold: true,
        alignment: "center",
        margin: [10, 10],
      },
      subheader: {
        bold: true,
        margin: [0, 10],
      },
      footer: {
        fontSize: 10,
        italic: true,
        alignment: "justify",
      },
    },
    pageMargins: [40, 40, 20, 40],
  };

  pdfMake.createPdf(docDefinition).download("cotizacion_" + nombre + ".pdf");
}

const botonCotizarMonotributo = document.getElementById("botonCotizarMonotributo");
botonCotizarMonotributo.addEventListener("click", function () {
  const logoURL = "Img/mgLogo.png";

  fetch(logoURL)
    .then((response) => response.blob())
    .then((blob) => {
      const reader = new FileReader();
      reader.onloadend = function () {
        const logoDataURL = reader.result;
        cotizarMonotributo(logoDataURL);
      };
      reader.readAsDataURL(blob);
    })
    .catch((error) => {
      console.error("Error al cargar la imagen:", error);
    });
});
