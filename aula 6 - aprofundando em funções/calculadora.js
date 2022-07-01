function calculadora() {
    const operacao = Number(prompt('Escolha uma operação: \n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão-Real (/) \n 5 - Divisão-Inteira (%) \n 6 - Potenciação(**)'));  

    if(!operacao || operacao >= 7) {
        alert('Erro - operação inválida!')
        calculadora()
    } else {

        let num1 = Number(prompt('Insira o primeiro valor:'));
        let num2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if(!num1 || !num2) {
            alert('Erro - parâmetros inválidos!')
            calculadora()
        } else {
            function soma() {
                resultado = num1 + num2;   
                alert(`${num1} + ${num2} = ${resultado}`);
                novaOperacao();
            }
    
            function subtracao() {
                resultado = num1 - num2;   
                alert(`${num1} - ${num2} = ${resultado}`); 
                novaOperacao();
            }
    
            function multiplicacao() {
                resultado = num1 * num2;   
                alert(`${num1} * ${num2} = ${resultado}`); 
                novaOperacao();
            }
    
            function divisaoReal() {
                resultado = num1 / num2;   
                alert(`${num1} / ${num2} = ${resultado}`);
                novaOperacao();
            }
    
            function divisaoInteira() {
                resultado = num1 % num2 ;  
                alert(`O resto da divisão entre ${num1} e ${num2} é igual a ${resultado}`); 
                novaOperacao();
            }
    
            function potenciacao() {
                resultado = num1 ** num2 ;  
                alert(`${num1} elevado a ${num2}ª é igual a ${resultado}`); 
                novaOperacao();
            }
    
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação? \n 1 - Sim \n 2 - Não');
            
                if(opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite um valor válido!')
                    novaOperacao();
                }
            }
        }

        //verificador de operação
        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;     
        }
    }
}

calculadora();