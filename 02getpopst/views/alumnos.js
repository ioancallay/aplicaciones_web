$().ready(() => {
    cargaTabla();
  });
  
  var cargaTabla = () => {
    $.get("../controllers/alumnos.controller.php?op=getAlumnos", (listaAlumnos) => {
      var html = "";
      console.log(listaAlumnos);
      listaAlumnos = JSON.parse(listaAlumnos);
      console.log(listaAlumnos);
      $.each(listaAlumnos, (index, alumno) => {
        html += `<tr>
                  <td>${index + 1}</td>
                  <td>${alumno.Nombre}</td>
                  <td>${alumno.Apellido}</td>
                  <td>${alumno.Edad}</td>
                  <td><button class="btn btn-sm btn-primary">Editar</button> <button class="btn btn-sm btn-danger">Eliminar</button></td>
                  </tr>
                  `;
      });
      $("#dataAlumnos").html(html);
    });
  };