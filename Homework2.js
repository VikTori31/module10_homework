let x;
if ( typeof x === "number" ){
  console.log( 'х - число' )
}else if ( typeof x === "string" ){
  console.log( 'x - строка' )
}else if ( typeof x === "boolean" ){
  console.log( 'х - логическое значение')
} else {
  console.log( 'Тип х не определен')
}
