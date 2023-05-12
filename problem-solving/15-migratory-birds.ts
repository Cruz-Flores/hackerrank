//saber cuantas veces se repite un numero
//encontrar los numeros unicos
//contarlos
// de la cantidad de veces tomar los numeros maximos
// encontrar el numero mas pequeño
// imprimirlo

const sightings: number[] = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

function migratoryBirds(arr: number[]): number {
  const counting: Record<number, number> = {};
  let maxCount: number = 0;

  for (const sighting of arr) {
    if (counting[sighting]) {
      counting[sighting]++;
    } else {
      counting[sighting] = 1;
    }

    if (counting[sighting] > maxCount) {
      maxCount = counting[sighting];
    }
  }

  const maxSightings: Record<number, number> = {};
  Object.keys(counting).forEach((clave) => {
    const valor: number = counting[clave];

    if (valor === maxCount) {
      maxSightings[clave] = valor;
    }
  });

  const maxSightingsKeys = Object.keys(maxSightings);
  const maxSightingsKeysToNumbers = maxSightingsKeys.map((msk) => +msk);
  const minType = Math.min(...maxSightingsKeysToNumbers);
  return minType;
}

console.log(migratoryBirds(sightings));

//dados 5 contadores
