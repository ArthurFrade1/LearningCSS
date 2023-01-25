var imagem=document.getElementById("image")
        var fundo=document.getElementById("corpo")
        var horario=document.getElementById("horario")
        var data=new Date()
        var hora=Number(data.getHours())
        horario.innerHTML=`Agora são ${hora} horas`
       
        if(hora>=5 && hora<12){
            imagem.style.background="url(dia.jpg) "
            fundo.style.background="rgb(185, 189, 126)"
            
        }
        if(hora>=12 && hora<19){
            imagem.style.background="url(tarde.jpg) "
            fundo.style.background="rgb(90, 95, 20)"
        }
        if(hora>=19 || hora<5){
            fundo.style.background="rgb(55, 55, 82)"
            imagem.style.background="url(noite.jpg) cover"
        }