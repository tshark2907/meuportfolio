let botoesSkill = document.querySelectorAll('.button');

botoesSkill.forEach(botao => {
  botao.addEventListener('click', function() {
    const idBotao = this.id;

    if (idBotao === 'button_1' || idBotao === 'button_2') {
      const track = document.querySelector('#skilltrack_1');
      if(idBotao === 'button_1'){
        track.style = 'transform:translateX(-50px);'
      }
      if(idBotao === 'button_2'){
        track.style = 'transform:translateX(50px);'
      }
    } else if (idBotao === 'button_3' || idBotao === 'button_4') {
      alert('skilltrack_2');
    } else if (idBotao === 'button_5' || idBotao === 'button_6') {
      alert('skilltrack_3');
    } else if (idBotao === 'button_7' || idBotao === 'button_8') {
      alert('skilltrack_4');
    }
  });
});
