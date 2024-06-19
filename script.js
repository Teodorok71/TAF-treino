// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
gender = process.argv[2]; // Genero 
height = process.argv[3]; // Altura
barReps = process.argv[4]; // Repetições com barra
barSeconds = process.argv[5]; // Tempo das repetições com barra 
abs = process.argv[6]; // Abdominais
runDistance = process.argv[7]; // Distância da corrida
runTime = process.argv[8]; // Tempo da corrida
swimDistance = process.argv[9]; // Distância da natação
swimTime = process.argv[10]; // Tempo da natação
diveTime = process.argv[11]; // Tempo de mergulho

passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**

if(gender === "male"){ //Testa o genero do candidato 
    if(height >= 1,70){ // testa a altura do candido
        if(barReps >= 6 || barSeconds >= 15){ // testa a quantidade de repetições em barra e a duração
            if(abs >= 41){ // testa a quantidade de abdominais feitos
                if((runDistance >= 3000 && runTime <= 720) || (runDistance>= 5000 && runTime<= 1200)){ // testa a quantidade de km corridos em minitos (km viraram 'metros' e minutos viraram 'segundos')
                    if((swimDistance >= 100 && swimTime <= 60) || (diveTime <=30)){ // a distância percorrida em metros dentro de 1 minuto ou no máximo 30 segundos de mergulho
                        passed = true;
                    }

                
                }
            }
        }
    
    }
    
}




if(gender === "female"){ //Testa o genero do candidato
    if(height >= 1,60){ // testa a altura do candido
        if(barReps >= 5 || barSeconds >= 12){ // testa a quantidade de repetições em barra e a duração
            if(abs >= 41){ // testa a quantidade de abdominais feitos
                if(runDistance >= 4000 && runTime <= 900 || runDistance>= 6000 && runTime<= 1320){ // testa a quantidade de km corridos em minitos (km viraram 'metros' e minutos viraram 'segundos')
                    if((swimDistance >= 100 && swimTime <= 60) || (diveTime <=30)){ // a distância percorrida em metros dentro de 1 minuto ou no máximo 30 segundos de mergulho
                        passed = true;
                    }

                
                }
            }
        }
    
    }
    
}

/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
