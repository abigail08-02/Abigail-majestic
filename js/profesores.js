$(document).ready(function () {

    $("#conten-crear").hide();

    $("#btnCrear").click(function () {
        $("#conten-crear").show("fast");
        $("#btnCrear").hide();
    })
    $("#btnCancelarCrear").click(function () {
        $("#conten-crear").hide("fast");
        $("#btnCrear").show();
    })

    $(".editarRow").click(function () {
        $("#conten-editar").show("fast");

        f = $(this).parent().parent();

        var a = f.find(".nombre").text()
        $("#staticEmailEdit").val(a);
      
        var b = f.find(".sexo").text()
        $("#inputSexoEdit").val(b);
    })

    $("#frmCrear").submit(function () {
       a = $("#staticEmail").val();
       b = $("#inputSexo").val();

       $("table tbody").append(`
            <tr>
                <th>4</th>
                <td>${a}</td>
                <td>${b}</td>
                <td>
                    <a href="#" class="eliminarRow">Eliminar</a>
                </td>
            </tr>
       
        `);
      
       $("#respuesta").html("Tu email es " + a + "");

       event.preventDefault();
    })


    $(".eliminarRow").click(function () {
        $(this).parent().parent().remove();
    })


})