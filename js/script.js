'use strict'

//audios
const acertou = document.getElementById('acertou')
const errou = document.getElementById('erro')
  const botoff = document.getElementById('botoff')
function Ac(){
  acertou.play()
  botoff.style.backgroundColor = 'green'
}
function Er(){
  errou.play()
}
function Mc(){
  window.alert('Acertou ou errou assim que joga')
}
