

function receber(num){

  let number =  document.getElementById('resulter').innerHTML;
      document.getElementById('resulter').innerHTML = number+num;

}

function apagar(){
    document.getElementById('resulter').innerHTML= '';
}

function apagarOne(){
    let resulter = document.getElementById('resulter').innerHTML;
       document.getElementById('resulter').innerHTML = resulter.substring(0, resulter.length -1)
}

function calcular(){
    let resulter = document.getElementById('resulter').innerHTML;
      if(resulter){
        document.getElementById('resulter').innerHTML = eval(resulter);
      }
      else{
        alert("Porfavor Digite alguma coisa!!")
      }
}