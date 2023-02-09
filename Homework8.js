let cities = new Map([
    [ "city", "big" ],
    [ "town", "middle" ],
    [ "village","small" ],
  ]
  );
  for (let name of cities.keys()){
    console.log( name ); 
  }
  for (let pair of cities){
    console.log( `Ключ - ${pair[0]}, значение - ${pair[1]}`);
  }