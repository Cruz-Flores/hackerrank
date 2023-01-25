function timeConversion(s: string) {
  const hours = s.slice(0, 8);
  const parts = hours.split(':');
  const partOfDay = s.slice(8);
  let militarHour: string | number = +parts[0];
  if (partOfDay === 'PM' && militarHour !== 12) {
    militarHour = militarHour + 12;
  }
  if (partOfDay === 'AM' && militarHour < 10) {
    militarHour = `0${militarHour}`;
  }
  if (partOfDay === 'AM' && militarHour === 12) {
    militarHour = '00';
  }

  return `${militarHour}:${parts[1]}:${parts[2]}`;
}

function processData(s: string) {
  const daytime = s.slice(s.length - 2);
  let hh: string | number = parseInt(s.slice(0, 2), 10);
  let base = s.slice(2, s.length - 2);
  if (daytime === 'PM' && hh !== 12) {
    hh += 12;
    hh = hh === 24 ? 0 : hh;
  } else if (daytime === 'AM' && hh === 12) {
    hh = 0;
  }
  hh = '' + hh;
  if (hh.length === 1) {
    hh = '0' + hh;
  }
  base = hh + base;

  return base;
}
