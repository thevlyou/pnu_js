document.addEventListener('DOMContentLoaded', () => {
    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');

    const bt1 = document.querySelector('#bt1');
    const bt2 = document.querySelector('#bt2');

    // 회문 확인
    bt1.addEventListener('click', (e) => {
        e.preventDefault();

        if (txt1.value != '') {
            let tm = '';
            let textOrigin = txt1.value.replaceAll(' ', '');
            tm = textOrigin.split('').reverse().join('');

            if (textOrigin == tm) {
                txt2.value = '회문입니다.';
            }
            else {
                txt2.value = '회문이 아닙니다.';
            }
        }
    })

    bt2.addEventListener('click', (e) => {
        e.preventDefault();

        if (txt1.value != '') {
            let sum = 0;
            
            for(let c of txt1.value) {
                if(!isNaN(c)) {
                    sum = sum + parseInt(c);
                }
            }

            txt2.value = sum;
        }
    })
})