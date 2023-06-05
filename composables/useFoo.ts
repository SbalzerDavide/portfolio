const localeFn = (
  localeName: string,
  localeSurname: string,
  localeyear?: number
) =>{
  return `${localeName} - ${localeSurname} - ${localeyear}`;
}

/**
 * 
 * @param name input name
 * @param surname input surname
 * @param year input year
 * @returns return all three input separeted with '-'
 */
export const useFoo = (
  name: string,
  surname: string,
  year?: number
) => localeFn(name, surname, year)


