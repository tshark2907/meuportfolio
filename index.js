let botoesSkill = document.querySelectorAll('.button');

botoesSkill.forEach(botao => {
  botao.addEventListener('click', function() {
    const idBotao = this.id;

    if (idBotao === 'button_1' || idBotao === 'button_2') {
      const track = document.querySelector('#skilltrack_1');
      if(idBotao === 'button_1'){
        track.style.transform = 'translateX(55px)';
      }
      if(idBotao === 'button_2'){
        track.style.transform = 'translateX(-55px)';
      }
    } else if (idBotao === 'button_3' || idBotao === 'button_4') {
      const track = document.querySelector('#skilltrack_2');
      if(idBotao === 'button_3'){
        track.style.transform = 'translateX(55px)';
      }
      if(idBotao === 'button_4'){
        track.style.transform = 'translateX(-55px)';
      }
    } else if (idBotao === 'button_5' || idBotao === 'button_6') {
      const track = document.querySelector('#skilltrack_3');
      if(idBotao === 'button_5'){
        track.style.transform = 'translateX(55px)';
      }
      if(idBotao === 'button_6'){
        track.style.transform = 'translateX(-55px)';
      }
    } else if (idBotao === 'button_7' || idBotao === 'button_8') {
      const track = document.querySelector('#skilltrack_4');
      if(idBotao === 'button_7'){
        track.style.transform = 'translateX(55px)';
      }
      if(idBotao === 'button_8'){
        track.style.transform = 'translateX(-55px)';
      }
    }
  });
});
