export function removeFields<T extends object>(obj: T, fieldsToRemove: (keyof T)[]): Partial<T> {
    const newObj = { ...obj };
  
    fieldsToRemove.forEach((field) => {
      delete newObj[field];
    });
  
    return newObj;
}

