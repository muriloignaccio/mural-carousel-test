const cards = document.querySelectorAll(".card");
const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");

let index = 0;
    btnRight.onclick = () => {
        index++;
        let calc = index * -100 + "%";
        for(let i = 0; i<cards.length;i++) {
            cards[i].style.transform = `translateX(${calc})`;
        }
    };
    // btnLeft.onclick = () => {
    //     index--;
    //     let calc = index * -100 + "%";
    //     for(let i = 0; i<cards.length;i++) {
    //         cards[i].style.transform = `translateX(${calc})`;
    // }
    // // clicar botao
    // o post desliza para a esquerda
    //o post da direita desliza pra esquerda



console.log(cards);