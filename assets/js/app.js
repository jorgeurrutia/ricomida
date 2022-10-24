var boton_enviarCorreo = $('#enviarCorreo');
var ingredientes = $('#ingredientes');
var preparacion = $('#preparacion');
var card_title = $('.card-title');
var card_text = $(".card-text");

boton_enviarCorreo.click(function(){
    alert("El correo fue enviado correctamente...");
});

ingredientes.on("dblclick", function(){
    if(ingredientes.attr('class').includes("alerta")){
        ingredientes.removeClass("alerta");
    }
    else{
        ingredientes.addClass("alerta");
    }
});

preparacion.on("dblclick", function(){
    if(preparacion.attr('class').includes("alerta")){
        preparacion.removeClass("alerta");
    }
    else{
        preparacion.addClass("alerta");
    }
});

card_title.click(function(){
    card_text.toggle("slow");
});