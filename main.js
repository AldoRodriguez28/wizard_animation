let required_marca_2 = [
  {
    nombre: "link_facebook",
    value: /[A-Za-z0-9_]/,
  },
  {
    nombre: "email_facebook",
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  {
    nombre: "nombre_facebook",
    value: /[A-Za-z0-9_]/,
  },
  {
    nombre: "precio",
    value: /^(?:true|false)$/gim,
  },
];
let required_celular = [
  {
    nombre: "celular_negocio",
    value: /^[0-9\s]{10}$/,
  },
];
/* Url GBP */
let url_GBP = [
  {
    nombre: "url_GBP",
    value: /^(https?:\/\/)?(www\.)?[\w.-]+\.\w{2,}(\/\S*)?$/,
  },
];
/* Url GBP */

let url_pattern = [
  {
    nombre: "url",
    value: /^(https?:\/\/)?(www\.)?[\w.-]+\.\w{2,}(\/\S*)?$/,
  },
];
let required_negoicio_2 = [
  {
    nombre: "listaServicios",
    value: /[A-Za-z0-9_]/,
  },
  {
    nombre: "fileUpload",
    value: /[A-Za-z0-9_]/,
  },
  {
    nombre: "experiencia",
    value: /[0-9\s]/,
  },
  {
    nombre: "a_quien_dirigido",
    value: /[A-Za-z0-9_]/,
  },
  {
    nombre: "cobertura",
    value: /[A-Za-z0-9_]/,
  },
];
let required_negocio = [
  {
    nombre: "nombre_negocio",
    value: /[A-Za-z0-9_]/,
  },
  {
    nombre: "pais",
    value: /[A-Za-z0-9_]/,
  },
  {
    nombre: "telefono_publicar",
    value: /^[0-9\s]{10}$/,
  },
  {
    nombre: "negocio_email",
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  {
    nombre: "categoria",
    value: /[A-Za-z0-9_]/,
  },
];
let required_contacto = [
  {
    nombre: "name",
    value: /[A-Za-z0-9_]/,
  },
  {
    nombre: "email",
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  {
    nombre: "telefono",
    value: /^[0-9\s]{10}$/,
  },
  {
    nombre: "celular",
    value: /^[0-9\s]{10}$/,
  },
];

let modelo_ciudad ={
  "Aguascalientes": "Ags.",
  "Baja California": "B.C.",
  "Baja California Sur": "B.C.S.",
  "Campeche": "Camp.",
  "Ciudad de México": "CDMX",
  "Chiapas": "Chis.",
  "Chihuahua": "Chih.",
  "Coahuila de Zaragoza": "Coah.",
  "Colima": "Col.",
  "Durango": "Dgo.",
  "Estado de México": "Méx.",
  "Guanajuato": "Gto.",
  "Guerrero": "Gro.",
  "Hidalgo": "Hgo.",
  "Jalisco": "Jal.",
  "Michoacán": "Mich.",
  "Morelos": "Mor.",
  "Nayarit": "Nay.",
  "Nuevo Léon": "N.L.",
  "Oaxaca": "Oax.",
  "Puebla": "Pue.",
  "Querétaro": "Qro.",
  "Quintana Roo": "Q.R.",
  "San Luis Potosí": "S.L.P.",
  "Sinaloa": "Sin.",
  "Sonora": "Son.",
  "Tabasco": "Tab.",
  "Tamaulipas": "Tamps.",
  "Tlaxcala": "Tlax.",
  "Veracruz": "Ver.",
  "Yucatán": "Yuc.",
  "Zacatecas": "Zac."
}


FAG_FANPAGE = false;

function testheader(section) {
  let topContacto =
    document.getElementsByClassName("header_contacto")[0].offsetTop;
  let topNegocio =
    document.getElementsByClassName("header_negocio")[0].offsetTop;
  let topMarca = document.getElementsByClassName("header_marca")[0].offsetTop;
  switch (section) {
    case "contactos":
      $("[class*='header_']").removeClass("active");
      $(".header_contacto").addClass("active");
      $(".header_contacto_mobile").addClass("active");
      $(".tab-indicator")[0].style.top = topContacto.toString() + "px";
      $(".container_form").removeClass("active");
      $("#contacto").addClass("active");
      break;
    case "negocios":
      $("[class*='header_']").removeClass("active");
      $(".header_negocio").addClass("active");
      $(".header_negocio_mobile").addClass("active");
      $(".tab-indicator")[0].style.top = topNegocio.toString() + "px";
      $(".container_form").removeClass("active");
      $("#negocio").addClass("active");
      break;
    case "marca":
      $("[class*='header_']").removeClass("active");
      $(".header_marca").addClass("active");
      $(".header_marca_mobile").addClass("active");
      $(".tab-indicator")[0].style.top = topMarca.toString() + "px";
      $(".container_form").removeClass("active");
      $("#marca").addClass("active");
      break;
  }
}

function testSection(section) {
  let iamEntities = $("[id='iamEntities']").val() == "ocultar" ? true : false;

  let isValidate = [];
  let topContacto =
    document.getElementsByClassName("header_contacto")[0].offsetTop;
  let topNegocio =
    document.getElementsByClassName("header_negocio")[0].offsetTop;
  let topMarca = document.getElementsByClassName("header_marca")[0].offsetTop;
  let leftContacto = document.getElementsByClassName(
    "header_contacto_mobile"
  )[0].offsetLeft;
  let leftNegocio = document.getElementsByClassName("header_negocio_mobile")[0]
    .offsetLeft;
  let leftMarca = document.getElementsByClassName("header_marca_mobile")[0]
    .offsetLeft;

  switch (section) {
    case "contactos":
      isValidate = iamEntities
        ? []
        : validationField("contacto", required_contacto);
      if (!isValidate.length) {
        $(
          "[id='contacto'] input.input_wizard,[id='contacto'] select"
        ).removeClass("invalid");
        $("#contacto .invalid").removeClass("invalid");
        $("[class*='header_']").removeClass("active");
        $(".header_negocio").addClass("active");
        $(".header_negocio_mobile").addClass("active");
        $(".tab-indicator")[0].style.top = topNegocio.toString() + "px";
        $(".tab-indicator_mobile")[0].style.left =
          leftNegocio.toString() + "px";
        $(".container_form").removeClass("active");
        $("#negocio").addClass("active");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algunos campos son invalidos.",
          footer: errores(isValidate),
          confirmButtonColor: "#0084C0",
        });
        $(
          "[id='contacto'] input.input_wizard,[id='contacto'] select"
        ).removeClass("invalid");
        for (let item of isValidate) {
          $(".input_wizard[attr='" + item + "']").addClass(`invalid`);
        }
      }
      break;
    case "negocios":
      let city =$("[attr='city']").val();

      isValidate = iamEntities
        ? []
        : validationField("negocio", required_negocio);
      if (!isValidate.length) {
        $("#negocio .invalid").removeClass("invalid");
        $(".container_form").removeClass("active");
        $("#negocio_2").addClass("active");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algunos campos son invalidos.",
          footer: errores(isValidate),
          confirmButtonColor: "#0084C0",
        });
        $(
          "[id='negocio'] input.input_wizard,[id='negocio'] select"
        ).removeClass("invalid");
        for (let item of isValidate) {
          if (item == "celular") {
            $(".input_wizard[attr='negocio_celular']").addClass(`invalid`);
          }
          if (item == "formatoDireccion") {
            let content_modal_direccion = modalDireccion();
            Swal.fire({
              icon: "error",
              title: "Oops...",
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: "Guardar",
              denyButtonText: `No guardar`,
              html: content_modal_direccion,
              confirmButtonColor: "#0084C0",
              didOpen: () => {
                let isCity = modelo_ciudad[city] ? modelo_ciudad[city]:null;
                selectCity(modelo_ciudad[city]);
              }
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                $("[attr='colony']").val($("[attr='colony_modal']").val()),
                  $("[attr='zipCode']").val($("[attr='zipCode_modal']").val()),
                  $("[attr='stateCode']").val(
                    $("[attr='stateCode_modal']").val()
                  ),
                  $("[attr='city']").val($("[attr='city_modal']").val()),
                  $("#addressInfoLocalityId").val(
                    $("[attr='localityId_modal']").val()
                  ),
                  $("[attr='street']").val($("[attr='street_modal']").val()),
                  $("[attr='number']").val($("[attr='number_modal']").val()),
                  $("#addressInfoCountry").val(
                    $("[attr='country_modal']").val()
                  ),
                  Swal.fire("Saved!", "", "success");
              } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
              }
            });
            $(
              ".input_wizard[attr='" + item + "'], select[attr='" + item + "']"
            ).addClass(`invalid`);
          }
        }
      }
      break;
    case "negocios_2.0":
      isValidate = iamEntities
        ? []
        : validationField("contacto", required_contacto);
      if (!isValidate.length) {
        $("#negocio_2 .invalid").removeClass("invalid");
        $(".container_form").removeClass("active");
        $("#negocio_3").addClass("active");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algunos campos son invalidos.",
          footer: errores(isValidate),
          confirmButtonColor: "#0084C0",
        });
        $(
          "[id='negocio_2'] input.input_wizard,[id='negocio_2'] select,[id='negocio_2'] textarea#listaServicios,[id='negocio_2'] textarea#a_quien_dirigido,.container_file,#pais"
        ).removeClass("invalid");
        for (let item of isValidate) {
          $(
            ".input_wizard[attr='" +
              item +
              "'], select[attr='" +
              item +
              "'], textarea[attr='" +
              item +
              "'],div[attr='" +
              item +
              "']"
          ).addClass(`invalid`);
          if (item == "fileUpload") {
            $(".container_file").addClass("invalid");
          }
        }
      }
      break;
    case "negocios_3.0":
      /* Url GBP */

      isValidate = iamEntities ? [] : validationField("negocio_3", url_GBP);
      if (!isValidate.length) {
        /* Url GBP */
          $("#url_GBP").removeClass("invalid");
        $("[class*='header_']").removeClass("active");
        $(".header_marca").addClass("active");
        $(".header_marca_mobile").addClass("active");
        $(".tab-indicator")[0].style.top = topMarca.toString() + "px";
        $(".tab-indicator_mobile")[0].style.left = leftMarca.toString() + "px";
        $(".container_form").removeClass("active");
        $("#marca").addClass("active");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algunos campos son invalidos.",
          footer: errores(isValidate),
          confirmButtonColor: "#0084C0",
        });
        $(
          "[id='contacto'] input.input_wizard,[id='contacto'] select"
        ).removeClass("invalid");
        for (let item of isValidate) {
          $(".input_wizard[attr='" + item + "']").addClass(`invalid`);
        }
      }
      /* Url GBP */

      break;
    case "marca_1.0":
      isValidate = iamEntities
        ? []
        : validationField("contacto", required_contacto);
      if (!isValidate.length) {
        $("#marca .invalid").removeClass("invalid");
        $(".container_form").removeClass("active");
        $("#negocio_3").addClass("active");
        $("[class*='header_']").removeClass("active");
        $(".header_marca").addClass("active");
        $(".header_marca_mobile").addClass("active");
        $(".tab-indicator")[0].style.top = topMarca.toString() + "px";
        $(".tab-indicator_mobile")[0].style.left = leftMarca.toString() + "px";
        $(".container_form").removeClass("active");
        $("#marca_2").addClass("active");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algunos campos son invalidos.",
          footer: errores(isValidate),
          confirmButtonColor: "#0084C0",
        });
        $(
          "[id='marca_2'] input.input_wizard , .check_container input"
        ).removeClass("invalid");
        for (let item of isValidate) {
          $(
            ".input_wizard[attr='" +
              item +
              "'], select[attr='" +
              item +
              "'], textarea[attr='" +
              item +
              "'],div[attr='" +
              item +
              "'],[id='marca_2'] .check_container input"
          ).addClass(`invalid`);
          if (item == "fileUpload") {
            $(".container_file").addClass("invalid");
          }
        }
      }

      break;
    case "marca_2":
      isValidate = iamEntities
        ? []
        : validationField("contacto", required_contacto);
      if (!isValidate.length) {
        $(
          "[id='marca_2'] input.input_wizard , .check_container input,[id='marca_2'] [attr='precio']"
        ).removeClass("invalid");
        Swal.fire({
          icon: "succes",
          title: "excelente...",
          text: "todos correcto.",
          confirmButtonColor: "#0084C0",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algunos campos son invalidos.",
          footer: errores(isValidate),
          confirmButtonColor: "#0084C0",
        });
        $(
          "[id='marca_2'] input.input_wizard , .check_container input,[id='marca_2'] [attr='precio']"
        ).removeClass("invalid");
        // $("[attr='precio']").remove('invalid');
        for (let item of isValidate) {
          $(
            ".input_wizard[attr='" +
              item +
              "'], select[attr='" +
              item +
              "'], textarea[attr='" +
              item +
              "'],div[attr='" +
              item +
              "']"
          ).addClass(`invalid`);
          if (item == "precio") {
            $("[attr='precio']").addClass("invalid");
          }
        }
      }
      break;
    default:
      $("[class*='header_']").removeClass("active");
      $(".header_contacto").addClass("active");
      $(".header_contacto_mobile").addClass("active");
      $(".tab-indicator")[0].style.top = topContacto.toString() + "px";
      $(".tab-indicator_mobile")[0].style.left = leftContacto.toString() + "px";

      $(".container_form").removeClass("active");
      $("#contacto").addClass("active");
      break;
  }
}

function testheadermobile(section) {
  let topContacto =
    document.getElementsByClassName("header_contacto")[0].offsetTop;
  let topNegocio =
    document.getElementsByClassName("header_negocio")[0].offsetTop;
  let topMarca = document.getElementsByClassName("header_marca")[0].offsetTop;

  let leftContacto = document.getElementsByClassName(
    "header_contacto_mobile"
  )[0].offsetLeft;
  let leftNegocio = document.getElementsByClassName("header_negocio_mobile")[0]
    .offsetLeft;
  let leftMarca = document.getElementsByClassName("header_marca_mobile")[0]
    .offsetLeft;
  switch (section) {
    case "contactos":
      $("[class*='header_']").removeClass("active");
      $(".header_contacto_mobile").addClass("active");
      $(".header_contacto").addClass("active");
      $(".tab-indicator")[0].style.top = topContacto.toString() + "px";
      $(".tab-indicator_mobile")[0].style.left = leftContacto.toString() + "px";
      $(".container_form").removeClass("active");
      $("#contacto").addClass("active");
      break;
    case "negocios":
      $("[class*='header_']").removeClass("active");
      $(".header_negocio_mobile").addClass("active");
      $(".header_negocio").addClass("active");
      $(".tab-indicator")[0].style.top = topNegocio.toString() + "px";
      $(".tab-indicator_mobile")[0].style.left = leftNegocio.toString() + "px";
      $(".container_form").removeClass("active");
      $("#negocio").addClass("active");
      break;
    case "marca":
      $("[class*='header_']").removeClass("active");
      $(".header_marca_mobile").addClass("active");
      $(".header_marca").addClass("active");
      $(".tab-indicator")[0].style.top = topMarca.toString() + "px";
      $(".tab-indicator_mobile")[0].style.left = leftMarca.toString() + "px";
      $(".container_form").removeClass("active");
      $("#marca").addClass("active");
      break;
    case "inicio":
      $("[class*='header_']").removeClass("active");
      $(".header_contacto").addClass("active");
      $(".tab-indicator_mobile")[0].style.left = `calc(20px + ${0 * 130}px)`;
      $(".container_form").removeClass("active");
      $("#contacto").addClass("active");
      break;
  }
}
function requestIA() {
  $(".container_form").removeClass("active");
  $("#fields_ia").addClass("active");
}
function testOffer() {
  if ($("#offercheckbox")[0].checked) {
    $("#cual").removeClass("nodisplay");
    $("#copy_cual").removeClass("nodisplay");
  } else {
    $("#cual").addClass("nodisplay");
    $("#copy_cual").addClass("nodisplay");
  }
}
function testCobertura(value) {
  if (value == "Local") {
    $("#donde_servicio").removeClass("nodisplay");
    $("#container_donde_servicio").removeClass("nodisplay");
  } else {
    $("#donde_servicio").addClass("nodisplay");
    $("#container_donde_servicio").addClass("nodisplay");
  }
}
function test24Hrs() {
  if ($("#24hrs")[0].checked) {
    $("#negocio_3 input[type='time']").attr("disabled", "disabled");
  } else {
    $("#negocio_3 input[type='time']").removeAttr("disabled");
  }
}
function validationField(section, schame_validation) {
  let errors = [];
  let arrayInputs = $(
    "[id=" +
      section +
      "] input.input_wizard,[id=" +
      section +
      "] select,[id=" +
      section +
      "] textarea[attr='listaServicios'],[id=" +
      section +
      "] textarea[attr='a_quien_dirigido'],[id=" +
      section +
      "] input[attr='fileUpload'],[id=" +
      section +
      "] input[attr='precio']"
  );
  schame_validation.forEach((item) => {
    for (let i = 0; i < arrayInputs.length; i++) {
      if (
        item.nombre === arrayInputs[i].attributes.attr.value &&
        !item.value.test(arrayInputs[i].value)
      ) {
        errors.push(arrayInputs[i].attributes.attr.value);
      }
    }
  });
  if (section == "marca") {
    for (let i = 0; i < arrayInputs.length; i++) {
      if (arrayInputs[i].value.length > 0) {
        if (!url_pattern[0].value.test(arrayInputs[i].value)) {
          errors.push(arrayInputs[i].attributes.attr.value);
        }
      }
    }
    console.log("marca_1.0", arrayInputs);
  }
  if (section == "negocio") {
    if ($("#negocio_celular").val().length > 0) {
      if (
        !required_negocio[2].value.test($("[attr='negocio_celular']").val())
      ) {
        errors.push("celular");
      }
    }
    if (required_negocio[0].nombre != "usuario") {
      if (!required_negoicio_2[0].value.test($("[attr='pais']").val())) {
        errors.push("pais");
      }
    }
  }
  if (section == "negocio_2") {
    if (
      $("#logoFileId").val().length > 0 ||
      $("[attr='fileUpload']").val().length > 0
    ) {
      errors = errors.filter((error) => error != "fileUpload");
    }
  }
  /* Url GBP */
  // if ($("#url_gbp").css("display") != "none") {
  //   if (section == "negocio_3") {
  //     if ($("[attr='url_GBP']").val().length === 0) {
  //       errors.push("url_GBP");
  //       console.log(errors);
  //     }
  //   }
  // } else {
  //   errors = [];
  // }
  /* Url GBP */

  if (
    $("[attr='donde_servicio']").css("display") != "none" &&
    $("[attr='rol']").val() == "ROLE_CAC-Product"
  ) {
    if (!required_negocio[0].value.test($("[attr='donde_servicio']").val())) {
      errors.push("donde_servicio");
    }
  }

  errors = [...new Set(errors)];
  //fanPage-validate
  if (section == "marca_2") {
    let precio_inputs = $(".check_container input").filter(":checked");
    if (precio_inputs.length > 0) {
      errors.forEach((item, index) => {
        item == "precio" ? errors.splice(index, 1) : "";
      });
    }
  }
  console.log(errors);
  //fanPage-validate
  return errors;
}
// function errores(errores){
//     let stringError='<b>Campos invalidos: </b>';
//     for (let i = 0; i < errores.length; i++) {
//         stringError = stringError+(i== 0 ? " ":", ")+((errores[i].includes('listaServicios')) ? 'Servicios':(errores[i].includes('fileUpload')) ? 'Logo':(errores[i].includes('experiencia')) ? 'Años de experiencia':(errores[i].includes('a_quien_dirigido')) ? 'A quien va dirigido':(errores[i].includes('cobertura')) ? 'Cobertura':(errores[i].includes('nombre_negocio')) ? 'Nombre del negocio':(errores[i].includes('telefono_publicar')) ? 'Telefono del negocio':(errores[i].includes('negocio_email')) ? 'Email del negocio':(errores[i].includes('categoria')) ? 'Categoria':(errores[i].includes('name')) ? 'Nombre del contacto':(errores[i].includes('email')) ? 'Email de contacto':(errores[i].includes('telefono')) ? 'Telefono de contacto':(errores[i].includes('celular')) ? 'Celular':(errores[i].includes('donde_servicio')) ? 'Ciudad de servicio':errores[i]);
//     }
//     return stringError;
// }

function errores(errores) {
  errores.push("formatoDireccion");
  const errorFieldMap = {
    listaServicios: "Servicios",
    fileUpload: "Logo",
    experiencia: "Años de experiencia",
    a_quien_dirigido: "A quien va dirigido",
    cobertura: "Cobertura",
    nombre_negocio: "Nombre del negocio",
    telefono_publicar: "Teléfono del negocio",
    negocio_email: "Email del negocio",
    categoria: "Categoría",
    name: "Nombre del contacto",
    email: "Email de contacto",
    telefono: "Teléfono de contacto",
    celular: "Celular",
    donde_servicio: "Ciudad de servicio",
    link_facebook: "Url facebook",
    link_twitter: "Url twitter",
    link_instagram: "Url instagram",
    link_youtube: "Url YouTube",
    formatoDireccion:
      "El formato de dirección no es valido por favor verifica que tu dirección tenga : código postal , numero de casa, calle , ciudad y  colonia ",
    link_linkedin: "Url LinkedIn",
    /* Url GBP */
    url_GBP: "Url de Google bussines profile",
    /* Url GBP */
  };
  let stringError = "<b>Campos invalidos: </b> ";
  for (let i = 0; i < errores.length; i++) {
    const error = errores[i];
    const field = errorFieldMap[error] || error;
    stringError += (i === 0 ? " " : ", ") + field;
  }
  return stringError;
}
function testFanPage(flag) {
  if (flag != "FANPAGE") {
    // $("#marca_2").addClass('nodisplay');
    // $("[attr='CAC_user']").addClass('nodisplay');
    $("#marca .container_buttons button#buttonIsFanPage").addClass("nodisplay");
    console.log("ocultando fanpage");
  } else {
    $("#marca button#buttonTerminar").addClass("nodisplay");
    console.log("mostrando fanpage");
    FAG_FANPAGE = true;
  }
}
function testRol(flag) {
  let emptyTest = true;
  let isFanPage = $("[id='productCode']").val() == "FANPAGE" ? true : false;
  let user_CAC = flag == "ROLE_CAC-Product" ? true : false;
  if (!user_CAC) {
    $(".ai_field").addClass("nodisplay");
  }

  if (isFanPage && user_CAC) {
    $("#marca button#buttonGuardar").addClass("nodisplay");
    $("#marca_2 button#buttonGuardar").addClass("nodisplay");
  } else if (!isFanPage && user_CAC) {
    $("#marca button#buttonIsFanPage").addClass("nodisplay");
    $("#marca button#buttonGuardar").addClass("nodisplay");
    $("#marca .container_footer p")[0].innerText = "1 / 1";
  } else if (isFanPage && !user_CAC) {
    required_contacto = [{ nombre: "usuario", value: emptyTest }];
    required_negocio = [{ nombre: "usuario", value: emptyTest }];
    required_negoicio_2 = [{ nombre: "usuario", value: emptyTest }];
    $("#marca button#buttonTerminar").addClass("nodisplay");
    $("#marca button#buttonGuardar").addClass("nodisplay");
    $("#marca_2 button#buttonTerminar").addClass("nodisplay");
  } else if (!isFanPage && !user_CAC) {
    required_contacto = [{ nombre: "usuario", value: emptyTest }];
    required_negocio = [{ nombre: "usuario", value: emptyTest }];
    required_negoicio_2 = [{ nombre: "usuario", value: emptyTest }];
    $("#marca button#buttonTerminar").addClass("nodisplay");
    $("#marca .container_footer p")[0].innerText = "1 / 1";
  } else if (iamEntities) {
  }
}

function getapi() {
  $("#loader").removeClass("nodisplay");
  $("#buttonGuardar").addClass("nodisplay");

  setTimeout(() => {
    hideSpinner();
  }, 3000);
}
function hideSpinner() {
  $("#loader").addClass("nodisplay");
  $("#buttonGuardar").removeClass("nodisplay");
}
function modalDireccion() {
  let dataAddress = {
    colony: $("[attr='colony']").val(),
    zipCode: $("[attr='zipCode']").val(),
    stateCode: $("[attr='stateCode']").val(),
    city: $("[attr='city']").val(),
    localityId: $("#addressInfoLocalityId").val(),
    street: $("[attr='street']").val(),
    number: $("[attr='number']").val(),
    country: $("#addressInfoCountry").val(),
  };
  console.log({ dataAddress });
          //<input type="" class="form-control" id="modal_addressInfoCity" placeholder="Ciudad" attr="city_modal" value="${dataAddress.city}" ${dataAddress.city ? "disabled" : ""}>
  let inputsDireccion = `
      <div class="row mb-3">
       <p>Faltan algunos campos de dirección por favor de ingresa los campos solicitados a continuación:</p>
      </div>

    <div class="form-floating mb-3">
        <input type="" class="form-control" id="modal_addressInfoLocalityName" placeholder="Colonia" attr="colony_modal" value="${
          dataAddress.colony
        }"  ${dataAddress.colony ? "disabled" : ""}>
        <label for="floatingInput">Colonia</label>
    </div>
    <div class="form-floating mb-3">
        <input type="" class="form-control" id="modal_addressInfoZipCode" placeholder="Código postal"  attr="zipCode_modal" value="${
          dataAddress.zipCode
        }" ${dataAddress.zipCode ? "disabled" : dataAddress.zipCode != "" ? "disabled": ""}>
        <label for="floatingInput">Código postal</label>
    </div>
   
    <div class="form-floating mb-3">
        <select id="modal_ciudad" class="form-select" aria-label="select para ciudad" attr="city_modal"  ${dataAddress.city ? "disabled" : ""}>
          <option selected>Selecciona una ciudad</option>
          <option value="Ags.">Aguascalientes</option>
          <option value="B.C.S.">Baja California Sur</option>
          <option value="B.C.">Baja California</option>
          <option value="Camp.">Campeche</option>
          <option value="CDMX">Ciudad de México</option>
          <option value="Chis.">Chiapas</option>
          <option value="Chih.">Chihuahua</option>
          <option value="Coah.">Coahuila</option>
          <option value="Col.">Colima</option>
          <option value="Dgo.">Durango</option>
          <option value="Méx.">Estado de Mexico</option>
          <option value="Gto.">Guanajuato</option>
          <option value="Gro.">Guerrero</option>
          <option value="Hgo.">Hidalgo</option>
          <option value="Jal.">Jalisco</option>
          <option value="Mich.">Michoacán</option>
          <option value="Mor.">Morelos</option>
          <option value="Nay.">Nayarit</option>
          <option value="N.L.">Nuevo León</option>
          <option value="Oax.">Oaxaca</option>
          <option value="Pue.">Puebla</option>
          <option value="Qro.">Querétaro</option>
          <option value="Q.R.">Quintana Roo</option>
          <option value="S.L.P.">San Luis Potosí</option>
          <option value="Sin.">Sinaloa</option>
          <option value="Son.">Sonora</option>
          <option value="Tab.">Tabasco</option>
          <option value="Tamps.">Tamaulipas</option>
          <option value="Tlax.">Tlaxcala</option>
          <option value="Ver.">Veracruz</option>
          <option value="Yuc.">Yucatán</option>
          <option value="Zac.">Zacatecas</option>
        </select>
        <label for="floatingInput">Ciudad</label>
    </div>
    <div class="form-floating mb-3">
        <input type="" class="form-control" id="modal_addressInfoLocalityId" placeholder="Municipio" attr="localityId_modal" value="${
          dataAddress.localityId
        }"  ${dataAddress.localityId ? "disabled" : ""}>
        <label for="floatingInput">Municipio</label>
    </div>
    <div class="form-floating mb-3">
        <input type="" class="form-control" id="modal_addressInfoStreet" placeholder="Calle" attr="street_modal" value="${
          dataAddress.street
        }"  ${dataAddress.street ? "disabled" : ""}>
        <label for="floatingInput">Calle</label>
    </div>
    <div class="form-floating mb-3">
        <input type="" class="form-control" id="modal_addressInfoNumExt" placeholder="Numero" attr="number_modal" value="${
          dataAddress.number
        }" ${dataAddress.number ? "disabled" : ""}>
        <label for="floatingInput">Numero</label>
    </div>
    <div class="form-floating mb-3">
        <input type="" class="form-control" id="modal_addressInfoCountry" placeholder="País" attr="country_modal" value="${
          dataAddress.country
        }" ${dataAddress.country ? "disabled" : ""}>
        <label for="floatingInput">País</label>
    </div>
    <script>
 
    </script>
    `;
  return inputsDireccion;
}
function selectCity(item){
  if(item){
    document.getElementById("modal_ciudad").value=item;
  }else{
    console.log("no city")
  }
}
/* Url GBP */
function testUrlGBP() {
  // Alternar la clase nodisplay para mostrar u ocultar el campo de entrada
  var urlInput = document.getElementById("url_gbp");
  urlInput.classList.toggle("nodisplay");
}
/* Url GBP */
