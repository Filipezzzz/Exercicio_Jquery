var corpoTarefa = document.querySelector("#corpo-da-tarefa");
var botao = document.querySelector("#adicionando-tarefas")



    $(document).ready(function(){
        $(".container form").on('submit', function(e){
            e.preventDefault();
            const Nomes = $('#nomes').val();
            const novoItem = $('<li></li>').appendTo(corpoTarefa);
            $(`<li>${Nomes}</li>`).appendTo(novoItem).click(() => $(event.target).css('text-decoration', 'line-through'));


        })

    })
