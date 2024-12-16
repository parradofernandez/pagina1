$(document). ready(function(){
    $('.image').click(function(){
        $(this).toggleClass('selected');
    });

    $('#validate-btn').click(function() {
        let correctSelections=0;
        let incorrectSelections=0;

        $('.image.selected').each(function(){
            if($(this).data('type')==='cactus'){
                correctSelections++;
            }
            else{
                incorrectSelections++;
            }
        })
        console.log("Correctas:" + correctSelections);
        console.log("Incorreectas:" + incorrectSelections);

        const totalCactus=$('.image[data-type="cactus"]').length;

        if(correctSelections===totalCactus && incorrectSelections===0){
            $('#result').text('¡Correcto! Seleccionaste los cactus');
            $('#result').css('color','green');
        }else{
            $('#result').text('Incorrecto, Selecciona solo cactus');
            $('#result').css('color','red');
        }
    });
});
