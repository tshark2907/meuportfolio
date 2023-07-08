let botoesSkill = document.querySelectorAll('.button');
let perfil = document.querySelector('.profile_pic');
let frame = document.querySelector('.profile_frame');
let linkedinMini = document.querySelector('.linkedin_goto');
let containerSize = 100;
let positions = [0, 0, 0, 0];

frame.addEventListener('mouseenter', () => {
perfil.style.display = 'none';
linkedinMini.style.display = 'inline-block';
})

frame.addEventListener('mouseleave', () => {
  perfil.style.display = 'inline';
  linkedinMini.style.display = 'none';
  })

botoesSkill.forEach(botao => {
  botao.addEventListener('click', function() {
    const idBotao = this.id;

    if (idBotao === 'button_1' || idBotao === 'button_2') {
      const track = document.querySelector('#skilltrack_1');
      if (idBotao === 'button_2') {
        if (positions[0] > -(containerSize * (track.childElementCount * 2))) {
          positions[0] -= containerSize;
          track.style.transform = `translateX(${positions[0]}px)`;
        }
      }
      if (idBotao === 'button_1') {
        if (positions[0] < 0) {
          positions[0] += containerSize;
          track.style.transform = `translateX(${positions[0]}px)`;
        }
      }
    } else if (idBotao === 'button_3' || idBotao === 'button_4') {
      const track = document.querySelector('#skilltrack_2');
      if (idBotao === 'button_4') {
        if (positions[1] > -(containerSize * (track.childElementCount - 3))) {
          positions[1] -= containerSize;
          track.style.transform = `translateX(${positions[1]}px)`;
        }
      }
      if (idBotao === 'button_3') {
        if (positions[1] < 0) {
          positions[1] += containerSize;
          track.style.transform = `translateX(${positions[1]}px)`;
        }
      }
    } else if (idBotao === 'button_5' || idBotao === 'button_6') {
      const track = document.querySelector('#skilltrack_3');
      if (idBotao === 'button_6') {
        if (positions[2] > -(containerSize * (track.childElementCount - 3))) {
          positions[2] -= containerSize;
          track.style.transform = `translateX(${positions[2]}px)`;
        }
      }
      if (idBotao === 'button_5') {
        if (positions[2] < 0) {
          positions[2] += containerSize;
          track.style.transform = `translateX(${positions[2]}px)`;
        }
      }
    } else if (idBotao === 'button_7' || idBotao === 'button_8') {
      const track = document.querySelector('#skilltrack_4');
      if (idBotao === 'button_8') {
        if (positions[3] > -(containerSize * (track.childElementCount - 3))) {
          positions[3] -= containerSize;
          track.style.transform = `translateX(${positions[3]}px)`;
        }
      }
      if (idBotao === 'button_7') {
        if (positions[3] < 0) {
          positions[3] += containerSize;
          track.style.transform = `translateX(${positions[3]}px)`;
        }
      }
    }
  });
});
