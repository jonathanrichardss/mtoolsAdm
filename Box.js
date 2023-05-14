import Aluno from "./Aluno";

class Box extends Aluno {


    show() {
        new Box();

        const div = document.createElement('div');
        const input = document.createElement('input');
        div.style.width('400px');
        div.style.height('400px');
        div.style.color('#21212A');

        input.style.width('120px');
        input.style.height('30px');
        input.style.backgroundColor('purple');
        div.appendChild(input);

        var root = document.getRootNode();
        root.appendChild(div);
    }
}

export default Box;


