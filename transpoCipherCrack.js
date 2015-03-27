/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var sentence = "Wbth lal voe htat oy voe wxbirtn vfzbqt wagye C poh aeovsn vojgan";
var wordLens = countLen(sentence);
var s_stripWhite = stripWhite(sentence);
var grams = {
  'th': 1,'eee':-5,'he':1,'ing':5,'the':5,'and':5
}

function countLen(str){
  var count = 0;
  var lens = [];
  var newStr = '';
  for(var i=0;i<str.length;i++){
    if(str[i] == ' '){
      lens.push(count);
      count = 0;
    }else{
      count++;
    }
  }
  return lens;
}

function stripWhite(str){
  str = str.split(' ');
  return str.join('');
}

function shuffle(arr){
  var counter = arr.length, temp, index;
  
  while(counter>0){
    index = Math.floor(Math.random()*counter);
    counter--;
    temp = arr[counter];
    arr[counter]=arr[index];
    arr[index]=temp;
  }
  return arr;
}

function randArr(upperBound){
  var arr = [];
  var len = Math.floor(Math.random()*upperBound);
  for(var i=0;i<len;i++){
    arr.push(i);
  }
  return arr;
}

function sort(arr, number){
      for(var i=0;i<arr.length;i++){
        if(arr[i] == number){
          return i;
        }
      }
    }

function rearrange(str, key){
  var newStr = new String;
  str = str.split('');
  var len = key.length;
  while(str.length>0){
    if(str.length<len){
      var padding = len - str.length;
      for(var n=0;n<padding;n++){
        str.push('*');
      }
    }
    var temp = str.slice(0,len);
    str = str.slice(len);
    for(var i=0;i<len;i++){
      var index = sort(key, i);
      if(temp[index]=='*'){
        continue;
      }else{
        newStr += temp[index];
      }
    }
  }
  
  return newStr;
}

function fitTest(str){
  var total = 0;
  for(var i=0;i<str.length;i++){
    var bi = str.slice(i, i+1);
    var tri = str.slice(i, i+2);
    if(bi in grams || tri in grams){
      total += grams[bi] || grams[tri];
    }
  }
  return total;
}

function evalution(numOfChildren, str){
  var output = new Array();
  function Child(key, fitness){
    this.key = key
    this.fitness = fitness;
  };
  for(var i=0;i<numOfChildren;i++){
    var key = shuffle(randArr(str.length));
    var fitness = fitTest(rearrange(str, key));
    var outCome = new Child(key, fitness);
    output.push(outCome);
  }
  return output;
}

//var arr = [ 0, 1, 4, 5, 2, 6, 3 ]; //shuffle(randArr(10));
//var s = "WbllthavottehaoyexvowbinfrtvzbwgqtayeoaCpheonovsvjgan";
console.log(evalution(10, s_stripWhite));

//console.log(s_stripWhite);
//console.log(rearrange(s_stripWhite, arr));

