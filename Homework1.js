let a = prompt('Введите значение');
let b = +a;
if ( Number.isNaN(b) ) {
  console.log ( 'Упс, кажется, вы ошиблись' )
}else{
  if ( typeof b === "number"){
  if ( b % 2 !== 0){
    console.log ( 'Нечетное число' )
  } else {
    console.log ( 'Четное число' )
  }
}else{
  console.log( 'Упс, кажется, вы ошиблись' )
  }
}
