// 1. dom 요소 가져오기
// 2. 확인버튼 처리
// - 랜덤수 생성 (초기화 되기 전까지 1번만 생성)
// - 텍스트 박스 숫자와 비교 : 크면 -> 다운, 같으면 성공, 작으면 업
// 3. 성공하면 텍스트 박스를 숨기고 버튼 글자 변경
// 4. 초기화 - 이미지는 what, 텍스트 상자 보이고 버튼 이름 확인, 랜덤 변수 생성
document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img');
    const txt1 = document.querySelector('#input-field');
    const btok = document.querySelector('#confirm-button');

    let nFlag = true; // 번호 생성 가능 여부
    let n = 0; // random number

    img.setAttribute('src', './img/start.png');
    txt1.style.display = 'none';
    btok.textContent = 'Start';

    const initGame = () => {
        img.setAttribute('src', './img/start.png');
        txt1.style.display = 'none';
        btok.textContent = 'Start';
    }

    const startGame = () => {
        n = Math.floor(Math.random() * 100) + 1;
        img.setAttribute('src', './img/what.png');
        txt1.style.display = 'inline-block';
        txt1.value = null;
        btok.textContent = '확인';
        console.log(n);
        nFlag = false;
    }

    btok.addEventListener('click', (e) => {
        e.preventDefault();

        if (btok.textContent == '초기화') {
            initGame();
            return;
        }

        if (nFlag) {
            startGame();
        }
        else {
            if (txt1.value == '') {
                alert('No value!');
                txt1.focus();
            }
            else {
                let userNum = parseInt(txt1.value);

                if (n > userNum) {
                    img.setAttribute('src', './img/up.png');
                }
                else if (n < userNum) {
                    img.setAttribute('src', './img/down.png');
                }
                else {
                    img.setAttribute('src', './img/good.png');
                    txt1.style.display = 'none';
                    btok.textContent = '초기화';
                    nFlag = true;
                }
            }
        }
    })

})