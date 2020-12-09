var inp = document.getElementsByName('r1');

var inp21 = document.getElementsByName('r21');
var inp22 = document.getElementsByName('r22');

var inp31 = document.getElementsByName('r31');
var inp32 = document.getElementsByName('r32');

var inp41 = document.getElementsByName('r41');
var inp42 = document.getElementsByName('r42');
var inp43 = document.getElementsByName('r43');
var inp44 = document.getElementsByName('r44');
var inp45 = document.getElementsByName('r45');

var div21 = document.getElementById('d21');
var div22 = document.getElementById('d22');

var div31 = document.getElementById('d31');
var div32 = document.getElementById('d32');

var div41 = document.getElementById('d41');
var div42 = document.getElementById('d42');
var div43 = document.getElementById('d43');
var div44 = document.getElementById('d44');
var div45 = document.getElementById('d45');

var div51 = document.getElementById('d51');
var div52 = document.getElementById('d52');
var div53 = document.getElementById('d53');
var div54 = document.getElementById('d54');
var div55 = document.getElementById('d55');
var div56 = document.getElementById('d56');
var div57 = document.getElementById('d57');
var div58 = document.getElementById('d58');
var div59 = document.getElementById('d59');

var div61 = document.getElementById('d61');
var div62 = document.getElementById('d62');
var div63 = document.getElementById('d63');
var div64 = document.getElementById('d64');
var div65 = document.getElementById('d65');
var div66 = document.getElementById('d66');

var div71 = document.getElementById('d71');
var div72 = document.getElementById('d72');
var div73 = document.getElementById('d73');
var div74 = document.getElementById('d74');
var div75 = document.getElementById('d75');
var div76 = document.getElementById('d76');
var div77 = document.getElementById('d77');
var div78 = document.getElementById('d78');
var div79 = document.getElementById('d79');

function none2div(){
    div21.style.display='none';
    div22.style.display='none';
}

function none3div(){
    div31.style.display='none';
    div32.style.display='none';
}

function none4div(){
    div41.style.display='none';
    div42.style.display='none';
    div43.style.display='none';
    div44.style.display='none';
    div45.style.display='none';
}

function none5div(){
    div51.style.display='none';
    div52.style.display='none';
    div53.style.display='none';
    div54.style.display='none';
    div55.style.display='none';
    div56.style.display='none';
    div57.style.display='none';
    div58.style.display='none';
    div59.style.display='none';
}

function none6div(){
    div61.style.display='none';
    div62.style.display='none';
    div63.style.display='none';
    div64.style.display='none';
    div65.style.display='none';
}

function none7div(){
    div71.style.display='none';
    div72.style.display='none';
    div73.style.display='none';
    div74.style.display='none';
    div75.style.display='none';
    div76.style.display='none';
    div77.style.display='none';
    div78.style.display='none';
    div79.style.display='none';
}

//Вид машины
function check1()
{
    for (var i = 0; i < inp.length; i++) {        
        if (inp[i].type == "radio" && inp[i].checked) 
        {            
            if (inp[i].value == 1) {
                div21.style.display='inline'; 
                div22.style.display='none';
                none3div();
                none4div();
                none5div();
                none6div();
                var e = inp[i].value;
            }
            else if (inp[i].value == 2){
                div22.style.display='inline';
                div21.style.display='none';
                none3div();
                none4div();
                none5div();
                none6div();
                var e = inp[i].value;
            }

        }
    }
    return e;

}

//Вид топлива легковой
function check21()
{
    div22.style.display='none';
    none3div();
    none4div();
    none5div();
    none6div();
    for(var i = 0; i <inp21.length; i++){
        if (inp21[i].type == "radio" && inp21[i].checked){
            div31.style.display='inline'; 
            var e = inp21[i].value;
        }
    }
    return e;
}

//Вид топлива грузовой
function check22()
{
    div21.style.display='none';
    none3div();
    none4div();
    none5div();
    none6div();
    for(var i = 0; i <inp22.length; i++){
        if (inp22[i].type == "radio" && inp22[i].checked){
            if (inp22[i].value == 1){
                div32.style.display='inline';
                var e = inp22[i].value;   
            }            
        }
    }
    return e;
}

//Назначение при выборе бензина или дизеля у легковой
function check31()
{
    div32.style.display='none';
    none4div();
    none5div();
    none6div();
    for(var i = 0; i <inp31.length; i++){
        if (inp31[i].type == "radio" && inp31[i].checked){
            if (inp31[i].value == 1){
                div41.style.display='inline';  
                var e = inp31[i].value; 
            }
            else if(inp31[i].value == 2){
                    div42.style.display='inline';
                    var e = inp31[i].value; 
                }
                else if(inp31[i].value == 3){
                        div43.style.display='inline'; 
                        var e = inp31[i].value; 
                    }
                    else if(inp31[i].value == 4){
                        div44.style.display='inline';
                        var e = inp31[i].value; 
                    }                    
        } 
    }
    return e;
}


//Назначение при выборе дизеля у грузовой
function check32()
{
    div31.style.display='none';
    none4div();
    none5div();
    none6div();
    for(var i = 0; i <inp32.length; i++){
        if (inp32[i].type == "radio" && inp32[i].checked){
            if (inp32[i].value == 1){
                div45.style.display='inline'; 
                var e = inp32[i].value;  
            }
        }
    }
    return e;
}

//  Вид кузова легковой для личного пользования
function check41()
{
    div42.style.display='none';
    for(var i = 0; i <inp41.length; i++){
        if (inp41[i].type == "radio" && inp41[i].checked){
            if (inp41[i].value == 1){
                if (check21()==1)
                {
                    none7div();
                    div51.style.display='inline';
                    div52.style.display='none';
                    div53.style.display='none';
                    div54.style.display='none';
                    div55.style.display='none';
                    div56.style.display='none';
                    div57.style.display='none';
                    div58.style.display='none';
                    div59.style.display='none';
                    var e = inp41[i].value;
                }
                else{
                    none7div();
                    none5div();
                    div71.style.display='inline';
                    div72.style.display='none';
                    div73.style.display='none';
                    div74.style.display='none';
                    div75.style.display='none';
                    div76.style.display='none';
                    div77.style.display='none';
                    div78.style.display='none';
                    div79.style.display='none';
                    var e = inp41[i].value;
                }
            }
            else if(inp41[i].value == 2){
                if (check21()==1)
                {
                    none7div();
                    div51.style.display='none';
                    div52.style.display='inline';
                    div53.style.display='none';
                    div54.style.display='none';
                    div55.style.display='none';
                    div56.style.display='none';
                    div57.style.display='none';
                    div58.style.display='none';
                    div59.style.display='none';
                    var e = inp41[i].value;
                }
                else{
                    none7div();
                    none5div();
                    div71.style.display='none';
                    div72.style.display='inline';
                    div73.style.display='none';
                    div74.style.display='none';
                    div75.style.display='none';
                    div76.style.display='none';
                    div77.style.display='none';
                    div78.style.display='none';
                    div79.style.display='none';
                    var e = inp41[i].value;
                }
            }
            else if (inp41[i].value == 3){
                if(check21()==1)
                {
                    none7div();
                    div51.style.display='none';
                    div52.style.display='none';
                    div53.style.display='inline';
                    div54.style.display='none';
                    div55.style.display='none';
                    div56.style.display='none';
                    div57.style.display='none';
                    div58.style.display='none';
                    div59.style.display='none';
                    var e = inp41[i].value;
                }
                else {
                    none7div();
                    none5div();
                    div71.style.display='none';
                    div72.style.display='none';
                    div73.style.display='inline';
                    div74.style.display='none';
                    div75.style.display='none';
                    div76.style.display='none';
                    div77.style.display='none';
                    div78.style.display='none';
                    div79.style.display='none';
                    var e = inp41[i].value;
                }
            }
            else if (inp41[i].value == 4){
                if (check21()==1){
                    none7div();
                    div51.style.display='none';
                    div52.style.display='none';
                    div53.style.display='none';
                    div54.style.display='inline';
                    div55.style.display='none';
                    div56.style.display='none';
                    div57.style.display='none';
                    div58.style.display='none';
                    div59.style.display='none';
                    var e = inp41[i].value;
                }
                else{
                    none7div();
                    none5div();
                    div71.style.display='none';
                    div72.style.display='none';
                    div73.style.display='none';
                    div74.style.display='inline';
                    div75.style.display='none';
                    div76.style.display='none';
                    div77.style.display='none';
                    div78.style.display='none';
                    div79.style.display='none';
                    var e = inp41[i].value;
                }
            }
            else if (inp41[i].value == 5){
                if (check21()==1){
                    none7div();
                    div51.style.display='none';
                    div52.style.display='none';
                    div53.style.display='none';
                    div54.style.display='none';
                    div55.style.display='inline';
                    div56.style.display='none';
                    div57.style.display='none';
                    div58.style.display='none';
                    div59.style.display='none';
                    var e = inp41[i].value;
                }
                else {
                    none7div();
                    none5div();
                    div71.style.display='none';
                    div72.style.display='none';
                    div73.style.display='none';
                    div74.style.display='none';
                    div75.style.display='inline';
                    div76.style.display='none';
                    div77.style.display='none';
                    div78.style.display='none';
                    div79.style.display='none';
                    var e = inp41[i].value;
                }
            }
            else if (inp41[i].value == 6){
                if (check21()==1){
                none7div();
                div51.style.display='none';
                div52.style.display='none';
                div53.style.display='none';
                div54.style.display='none';
                div55.style.display='none';
                div56.style.display='inline';
                div57.style.display='none';
                div58.style.display='none';
                div59.style.display='none';
                var e = inp41[i].value;
                }
                else {
                    none7div();
                    none5div();
                    div71.style.display='none';
                    div72.style.display='none';
                    div73.style.display='none';
                    div74.style.display='none';
                    div75.style.display='none';
                    div76.style.display='inline';
                    div77.style.display='none';
                    div78.style.display='none';
                    div79.style.display='none';
                    var e = inp41[i].value;
                }
            }
            else if (inp41[i].value == 7){
                if (check21()==1){
                none7div();
                    div51.style.display='none';
                    div52.style.display='none';
                    div53.style.display='none';
                    div54.style.display='none';
                    div55.style.display='none';
                    div56.style.display='none';
                    div57.style.display='inline';
                    div58.style.display='none';
                    div59.style.display='none';
                    var e = inp41[i].value;
                }
                else {
                    none7div();
                    none5div();
                    div71.style.display='none';
                    div72.style.display='none';
                    div73.style.display='none';
                    div74.style.display='none';
                    div75.style.display='none';
                    div76.style.display='none';
                    div77.style.display='inline';
                    div78.style.display='none';
                    div79.style.display='none';
                    var e = inp41[i].value;
                }
            }
            else if (inp41[i].value == 8){
                if (check21()==1){
                none7div();
                div51.style.display='none';
                div52.style.display='none';
                div53.style.display='none';
                div54.style.display='none';
                div55.style.display='none';
                div56.style.display='none';
                div57.style.display='none';
                div58.style.display='inline';
                div59.style.display='none';
                var e = inp41[i].value;
                }
                else{
                    none7div();
                    none5div();
                    div71.style.display='none';
                    div72.style.display='none';
                    div73.style.display='none';
                    div74.style.display='none';
                    div75.style.display='none';
                    div76.style.display='none';
                    div77.style.display='none';
                    div78.style.display='inline';
                    div79.style.display='none';
                    var e = inp41[i].value;
                }
            }
            else if (inp41[i].value == 8){
                if (check21()==1){
                    none7div();
                    div51.style.display='none';
                    div52.style.display='none';
                    div53.style.display='none';
                    div54.style.display='none';
                    div55.style.display='none';
                    div56.style.display='none';
                    div57.style.display='none';
                    div58.style.display='none';
                    div59.style.display='inline';
                    var e = inp41[i].value;
                }
                else {
                    none7div();
                    none5div();
                    div71.style.display='none';
                    div72.style.display='none';
                    div73.style.display='none';
                    div74.style.display='none';
                    div75.style.display='none';
                    div76.style.display='none';
                    div77.style.display='none';
                    div78.style.display='none';
                    div79.style.display='inline';
                    var e = inp41[i].value;
                }
            }            
        }
    }
    return e;
}

// Вид кузова легковой для перевозки людей
function check42()
{
    div41.style.display='none';
    for(var i = 0; i <inp42.length; i++){
        if (inp42[i].type == "radio" && inp42[i].checked){
            if (inp42[i].value == 1){
                if (check21()==1){
                    none7div();
                    div51.style.display='inline';
                    div52.style.display='none';
                    div53.style.display='none';
                    div54.style.display='none';
                    div55.style.display='none';                
                    div58.style.display='none';
                    div59.style.display='none';
                    var e = inp42[i].value; 
                }
                else {
                    none7div();
                    none5div();
                    div71.style.display='inline';
                    div72.style.display='none';
                    div73.style.display='none';
                    div74.style.display='none';
                    div75.style.display='none';                
                    div78.style.display='none';
                    div79.style.display='none';
                    var e = inp42[i].value; 
                }

            }
            else if(inp42[i].value == 2){
                if (check21()==1){
                    none7div();
                    div51.style.display='none';
                    div52.style.display='inline';
                    div53.style.display='none';
                    div54.style.display='none';
                    div55.style.display='none';
                    div58.style.display='none';
                    div59.style.display='none';
                    var e = inp42[i].value; 
                }
                else{
                    none7div();
                    none5div();
                    div71.style.display='none';
                    div72.style.display='inline';
                    div73.style.display='none';
                    div74.style.display='none';
                    div75.style.display='none';                
                    div78.style.display='none';
                    div79.style.display='none';
                    var e = inp42[i].value; 
                } 
            }
            else if(inp42[i].value == 3){
                if (check21()==1){
                    none7div();
                    div51.style.display='none';
                    div52.style.display='none';
                    div53.style.display='inline';
                    div54.style.display='none';
                    div55.style.display='none';
                    div58.style.display='none';
                    div59.style.display='none';
                    var e = inp42[i].value; 
                }
                else {
                    none7div();
                    none5div();
                    div71.style.display='none';
                    div72.style.display='none';
                    div73.style.display='inline';
                    div74.style.display='none';
                    div75.style.display='none';                
                    div78.style.display='none';
                    div79.style.display='none';
                    var e = inp42[i].value; 
                } 
            }
            else if(inp42[i].value == 4){
                if (check21()==1){
                    none7div();
                    div51.style.display='none';
                    div52.style.display='none';
                    div53.style.display='none';
                    div54.style.display='inline';
                    div55.style.display='none';                
                    div58.style.display='none';
                    div59.style.display='none';
                    var e = inp42[i].value;  
                }
                else {
                    none7div();
                    none5div();
                    div71.style.display='none';
                    div72.style.display='none';
                    div73.style.display='none';
                    div74.style.display='inline';
                    div75.style.display='none';                
                    div78.style.display='none';
                    div79.style.display='none';
                    var e = inp42[i].value; 
                }
            }
            else if(inp42[i].value == 5){
                if (check21()==1){
                    none7div();
                    div51.style.display='none';
                    div52.style.display='none';
                    div53.style.display='none';
                    div54.style.display='none';
                    div55.style.display='inline';                
                    div58.style.display='none';
                    div59.style.display='none';
                    var e = inp42[i].value; 
                } 
                else {
                    none7div();
                    none5div();
                    div71.style.display='none';
                    div72.style.display='none';
                    div73.style.display='none';
                    div74.style.display='none';
                    div75.style.display='inline';                
                    div78.style.display='none';
                    div79.style.display='none';
                    var e = inp42[i].value; 
                }
            }
            else if(inp42[i].value == 6){
                if (check21()==1){
                    none7div();
                    div51.style.display='none';
                    div52.style.display='none';
                    div53.style.display='none';
                    div54.style.display='none';
                    div55.style.display='none';                
                    div58.style.display='inline';
                    div59.style.display='none';
                    var e = inp42[i].value; 
                }
                else{
                    none7div();
                    none5div();
                    div71.style.display='none';
                    div72.style.display='none';
                    div73.style.display='none';
                    div74.style.display='none';
                    div75.style.display='none';                
                    div78.style.display='inline';
                    div79.style.display='none';
                    var e = inp42[i].value; 
                }

            }
            else if(inp42[i].value == 7){
                if (check21()==1){
                    none7div();
                    div51.style.display='none';
                    div52.style.display='none';
                    div53.style.display='none';
                    div54.style.display='none';
                    div55.style.display='none';                
                    div58.style.display='none';
                    div59.style.display='inline';
                    var e = inp42[i].value;  
                }
                else {
                    none7div();
                    none5div();
                    div71.style.display='none';
                    div72.style.display='none';
                    div73.style.display='none';
                    div74.style.display='none';
                    div75.style.display='none';                
                    div78.style.display='none';
                    div79.style.display='inline';
                    var e = inp42[i].value; 
                }
            }            
        }
    }
    return e;
}

// Вид кузова легковой для перевозки грузов
function check43()
{
    div41.style.display='none';
    for(var i = 0; i <inp43.length; i++){
        if (inp43[i].type == "radio" && inp43[i].checked){
            if (inp43[i].value == 1){ 
                if (check21()==1)
                {
                    none7div();              
                    div52.style.display='inline';
                    div57.style.display='none';                
                    div59.style.display='none';   
                    var e = inp43[i].value;
                }
                else {
                    none7div();
                    none5div();              
                    div72.style.display='inline';
                    div77.style.display='none';                
                    div79.style.display='none';   
                    var e = inp43[i].value;
                }
            }
            else if(inp43[i].value == 2) {
                if (check21()==1)
                {
                    none7div();  
                    div52.style.display='none';
                    div57.style.display='inline';                
                    div59.style.display='none'; 
                    var e = inp43[i].value;
                }
                else {
                    none7div();
                    none5div();              
                    div72.style.display='none';
                    div77.style.display='inline';                
                    div79.style.display='none';   
                    var e = inp43[i].value;
                }
            }
            else if(inp43[i].value == 3) {
                if (check21()==1)
                {
                    none7div();
                    div52.style.display='none';
                    div57.style.display='none';                
                    div59.style.display='inline'; 
                    var e = inp43[i].value;
                }
                else{
                    none7div();
                    none5div();              
                    div72.style.display='none';
                    div77.style.display='none';                
                    div79.style.display='inline';   
                    var e = inp43[i].value;
                }
            }            
        }
    }
    return e;
}

// Вид кузова легковой универсальный
function check44()
{
    div41.style.display='none';
    for(var i = 0; i <inp44.length; i++){
        if (inp44[i].type == "radio" && inp44[i].checked){
            if (inp44[i].value == 1){
                if (check21()==1)
                {
                    none7div();
                    div52.style.display='inline'; 
                    div59.style.display='none'; 
                    var e = inp44[i].value;
                }
                else {
                    none7div();
                    none5div();
                    div72.style.display='inline'; 
                    div79.style.display='none'; 
                    var e = inp44[i].value;
                }
            }
            else if(inp44[i].value == 2){
                if (check21()==1)
                {
                    none7div();
                    div52.style.display='none'; 
                    div59.style.display='inline'; 
                    var e = inp44[i].value;
                }
                else{
                    none7div();
                    none5div();
                    div72.style.display='none'; 
                    div79.style.display='inline'; 
                    var e = inp44[i].value;
                }
            }            
        }
    }
    return e;
}

// Вид кузова грузового автомобиля
function check45()
{
    div41.style.display='none';
    for(var i = 0; i <inp45.length; i++){
        if (inp45[i].type == "radio" && inp45[i].checked){
            if (inp45[i].value == 1){
                div61.style.display='inline'; 
                div62.style.display='none';   
                div63.style.display='none';   
                div64.style.display='none';   
                div65.style.display='none';
                var e = inp42[i].value; 
            }
            else if(inp45[i].value == 2){
                div61.style.display='none'; 
                div62.style.display='inline';   
                div63.style.display='none';   
                div64.style.display='none';   
                div65.style.display='none'; 
                var e = inp42[i].value;
            }
            else if(inp45[i].value == 3){
                div61.style.display='none'; 
                div62.style.display='none';   
                div63.style.display='inline';   
                div64.style.display='none';   
                div65.style.display='none'; 
                var e = inp42[i].value;
            }
            else if(inp45[i].value == 4){
                div61.style.display='none'; 
                div62.style.display='none';   
                div63.style.display='none';   
                div64.style.display='inline';   
                div65.style.display='none';  
                var e = inp42[i].value; 
            }
            else if(inp45[i].value == 5){
                div61.style.display='none'; 
                div62.style.display='none';   
                div63.style.display='none';   
                div64.style.display='none';   
                div65.style.display='inline'; 
                var e = inp42[i].value;
            }           
        }
    }
    return e;
}

