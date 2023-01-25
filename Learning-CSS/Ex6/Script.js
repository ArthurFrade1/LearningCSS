
var ano=(new Date()).getFullYear()
var masc=document.getElementById('homi')
var fem=document.getElementById('muie')
var ver=document.getElementById('verifica')
var fundo=document.getElementById('imagem')
var fala=document.getElementById('fala')
masc.addEventListener('click', mascClick)
fem.addEventListener('click', femClick)
ver.addEventListener('click', verClick)
var H, F
var idade
function homem(){
    fala.innerHTML=`Detectamos um homem de ${idade} anos`
    if(idade<12)//criança
        fundo.style.background="url(crianca.jpg)"
    if(idade>=12 && idade<18)//adolesccente
        fundo.style.background="url(adolescente.jpg)"
    
}
function mulher(){
    alert("muie")
}

function mascClick(){
    H=true
    F=false
}
function femClick(){
    H=false
    F=true
}
function verClick(){
    var nascimento=Number(document.getElementById('inp').value)
     idade= ano-nascimento
    
    if(H)
        homem()
    if(F)
        mulher()
}
