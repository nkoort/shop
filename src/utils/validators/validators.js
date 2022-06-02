export const requiredField = (value) => {
    if (value) {
        return undefined;
    }
    return 'обязательно к заполнению';   
}



export const minLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) {
        return `max length ${maxLength} symbol`;
    }
    return undefined;   
}




//////////////////////////////////////////////////////  \/

export const minLength = (value) => {
   if (value && value.length < 6) {
      return 'Минимум 6 символов'
   }
   return undefined;
};

export const reqField = (value) => {
   if (value) {
      return undefined
   }
   return 'Обязательно к заполнению'
};