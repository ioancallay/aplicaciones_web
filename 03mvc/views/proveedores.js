$().ready(() => {
  cargaTabla();
});

var cargaTabla = () => {
  $.get(
    "../controllers/proveedores.controller.php?op=getProveedores",
    (listProveedores) => {
      var html = "";
      console.log(listProveedores);
      listProveedores = JSON.parse(listProveedores);
      console.log(listProveedores);
      $.each(listProveedores, (index, proveedor) => {
        html += `<tr>
                  <td>${index + 1}</td>
                  <td>${proveedor.Nombre_Empresa}</td>
                  <td>${proveedor.Direccion}</td>
                  <td>${proveedor.Telefono}</td>
                  <td><button class="btn btn-sm btn-primary">Editar</button>
                  <button class="btn btn-sm btn-danger">Eliminar</button></td>
                  </tr>
                  `;
      });
      $("#tableProveedores").html(html);
    }
  );
};
