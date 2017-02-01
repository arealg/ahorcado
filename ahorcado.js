
var array_guess = [];
var word = ['pierna', 'brazo', 'pie', 'ojo', 'hombro', 'espalda',
            'tobillo', 'rodilla', 'mano', 'dedo', 'pelo'];



function numero_al_azar(minimo,maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

var b = 0;
function contador(){
  b = b + 1;
}

var n = numero_al_azar(0, 10);
var array_w = [];
function playHangman() {
  contador();
  var underscore;
  array_w = word[n].split('');

  if (b == 1){
    var indice;
    for (indice in array_w){
      array_guess.push('_');
    }
    underscore = array_guess.join(' ');
    document.getElementById("word_guess").innerHTML = underscore;
    document.getElementById("notice").innerHTML = '';
  }
}

var i = 1;
var finish = false;
var acertada = 0;
function box() {
    var word_box, text, ganar;
    var image = document.getElementById('myImage');
    var in_array = false;


    return{

      esLetra: function(word_box){

        if (word_box.length == 1){
          array_w.forEach(function (item, index, array) {
            if (!finish){
              if (item == word_box){
                array_guess[index] = word_box;
                in_array = true;
            }
          }else{
            in_array = true;
          }
          });
          text = array_guess.join(' ');
          document.getElementById("word_guess").innerHTML = text;
          palabra = array_guess.join('');
          var es_palabra = box();
          es_palabra.esPalabra(palabra);
        }
      },

      esPalabra: function(word_box){
        if (word_box == word[n]) {
          acertada += 1;
          document.getElementById('acertada').innerHTML = 'Victories: ' + acertada;
          in_array = true;
          document.getElementById("word_guess").innerHTML = word_box;
          document.getElementById('notice').innerHTML = 'WINNER';
        }
      },

      esFallo: function(){
        if (!in_array){
          if (i <= 5){
            image.src = 'h' + i.toString() + '.jpg';
            i = i + 1;
          }else{
            finish = true;
            image.src = 'h6.jpg';
            document.getElementById("notice").innerHTML = 'GAME OVER';
            i = 1;
          }
        }
    
      }
    }
  }

function writeBox(){
  var write = box();
  word_box = document.getElementById("word").value;

  write.esLetra(word_box);
  write.esPalabra(word_box);
  write.esFallo();
  document.getElementById('word').value = '';

}

function playAgain(){
    var again_play, indice;
    var x = numero_al_azar(0, 10);
    array_guess = [];
    var image = document.getElementById('myImage');
    document.getElementById('word').value = '';
    var indice;
    array_w = word[x].split('');
    for (indice in array_w){
      array_guess[indice] = '_';
    }
    again_play = array_guess.join(' ');
    image.src = 'h0.jpg';
    i = 1;
    n = x;
    finish = false;
    document.getElementById("word_guess").innerHTML = again_play;
    document.getElementById("notice").innerHTML = '';
}
