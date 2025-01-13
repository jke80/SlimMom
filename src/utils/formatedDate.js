export const dateToStr = currentDate => {
  if (!(currentDate instanceof Date)) {
    console.log('invalid type of date -', currentDate);
    return;
  }
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // месяцы нумеруются с 0
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${day}.${month}.${year}`;
};

export const strToDate = str => {
  const dateFormat = /^\d{2}.\d{2}.\d{4}$/;

  if (!dateFormat.test(str)) {
    console.log('invalid format - ', str);
    return;
  }

  const [day, month, year] = str.split('.');
  const dataObj = new Date(`${year}-${month}-${day}T00:00:00`);
  return dataObj;
};
