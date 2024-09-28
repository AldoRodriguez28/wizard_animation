function copyToClipBoard(valueAttr) {
  let valueInput = $(`[attr='${valueAttr}']`).val();

  navigator.clipboard.writeText(valueInput).then(
    () => {
      if (valueInput) {
        // Alerta para notificar al usuario
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Copiado!",
          text: "Copiado al portapapeles: " + valueInput,
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error!",
          text: "el campo no tiene valor portapapeles  vació",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
    () => {
      alert("No se pudo copiar al portapapeles");
    }
  );
}
