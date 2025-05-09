function generarPDF(logoDataURL, qrDataURL) {
  const adultos = document.getElementById("adultos").value;
  const menores = document.getElementById("menores").value;
  const nombre = document.getElementById("nombre").value.toUpperCase();
  const dif_basic = document.getElementById("dif_basic").innerText;
  const dif_corp = document.getElementById("dif_corp").innerText;
  const dif_mg = document.getElementById("dif_mg").innerText;
  const dif_vip = document.getElementById("dif_vip").innerText;

  const fecha = new Date();
  const anio = fecha.getFullYear();
  const mes = fecha.getMonth() + 1;
  const dia = fecha.getDate();

  const fechaActual = `${dia.toString().padStart(2, "0")}-${mes
    .toString()
    .padStart(2, "0")}-${anio}`;

  const docDefinition = {
    content: [
      // Imagen QR en la esquina superior derecha
      {
        image: qrDataURL,
        width: 75, // ~3 cm
        absolutePosition: { x: 30, y: 30 }, // Ajustar si es necesario
      },
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
                    text: "COTIZACIÓN",
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
                    text: "Diferencia a Pagar $: " + dif_basic,
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
                    text: "Diferencia a Pagar $: " + dif_corp,
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
                    text: "Diferencia a Pagar $: " + dif_mg,
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
                    text: "Diferencia a Pagar $: " + dif_vip,
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
                    text:
                      "Los precios están sujetos a cambios y/o modificaciones por parte de la Superintendencia de Servicios de Salud de la Nación.",
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

const botonGenerarPDF = document.getElementById("botonGenerarPDF");
botonGenerarPDF.addEventListener("click", function () {
  const logoURL = "Img/mgLogo.png";
  const qrURL = "Img/Qr1.png"; // Ruta del QR

  Promise.all([fetch(logoURL), fetch(qrURL)])
    .then(async ([logoRes, qrRes]) => {
      const logoBlob = await logoRes.blob();
      const qrBlob = await qrRes.blob();

      const logoReader = new FileReader();
      const qrReader = new FileReader();

      logoReader.onloadend = function () {
        const logoDataURL = logoReader.result;
        qrReader.onloadend = function () {
          const qrDataURL = qrReader.result;
          generarPDF(logoDataURL, qrDataURL);
        };
        qrReader.readAsDataURL(qrBlob);
      };

      logoReader.readAsDataURL(logoBlob);
    })
    .catch((error) => {
      console.error("Error al cargar imágenes:", error);
    });
});
