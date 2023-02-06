let numb = prompt ( 'Введите значение' ) ;
let value = + numb ;
if ( Number.isNaN( value ) ) {
  console.log ( 'Упс, кажется, вы ошиблись' )
} else {
  if ( typeof value === "number"){
  if ( value % 2 !== 0){
    console.log ( 'Нечетное число' )
  } else {
    console.log ( 'Четное число' )
  }
}else{
  console.log( 'Упс, кажется, вы ошиблись' )
  }
}
