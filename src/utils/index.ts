export function getBy<T, U extends keyof T>(data: T[], key: U, value: T[U]) {
  return data.find(item => item[key] === value);
}

type Opactity = 0 | .25 | .5| .75 | 1

export function hexToRgbA(hex:string, opacity: Opactity): string{
  let c:any;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c= hex.substring(1).split('');
      if(c.length === 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      return 'rgba('+[(c >> 16)&255, (c >> 8)&255, c & 255].join(',')+`,${opacity})`;
  }
  throw new Error('Bad Hex');
}