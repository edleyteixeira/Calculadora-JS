var value = ''
var tela2 = '' 
var total = ''
const simbols = ['/', '*', '-', '+', ',']


function calc(alg){
    value = value.concat(alg);
    if (simbols.includes(alg)) {
        if (value.length <= 1) {
            if (alg == '-') {
                
            }else{
                console.log(' = 1')
                value = '' 
            }
        }else{

            if (simbols.includes(value[value.length -1])) {
                if (simbols.includes(value[value.length -2])) {
                    value = value.slice(0, -1)
                }
            }
        }
    }
    document.getElementById('tela1').innerHTML = value
    return (value)
}

function zerar(){
    value = ''
    document.getElementById('tela1').innerHTML = '0'
    document.getElementById('tela2').innerHTML = ''
    
}

function calcular(){
    if (value != 0) {
        
    
    exp = value.replace(',', '.')
    total = eval(exp)
    document.getElementById('tela1').innerHTML = total
    document.getElementById('tela2').innerHTML = exp
    value = String(total)
    
    return 
}}