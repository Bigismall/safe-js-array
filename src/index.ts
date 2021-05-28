const translateProperty = (target: SafeArray, index: keyof any): number | null => {
  const propertyAsNumber: number = Number(index);
  const isPositive = propertyAsNumber >= 0;
  const translatedProperty: number = target.length - Math.abs(propertyAsNumber);

  //return null for out of range (array length) indexes
  if (translatedProperty < 0) {
    return null;
  }
  //return null for out of range (array length) indexes - edge case for positive numbers
  if (propertyAsNumber === target.length) {
    return null;
  }

  if (0 === translatedProperty || translatedProperty === target.length) {
    return 0;
  }

  return isPositive ? propertyAsNumber : translatedProperty;
};

const safeIndex = (target: SafeArray, index: keyof any): number | null => {
  if (null == index) {
    return null;
  }
  const numericKey = Math.round(Number(index));

  if (Number.isNaN(numericKey)) {
    return null;
  }

  return translateProperty(target, numericKey);
};

export class SafeArray extends Array {
  constructor(...args: any[]) {
    super(...args);

    return new Proxy(this, {
      get(target, prop, ...args) {
        const translatedProp = safeIndex(target, prop);
        return null == translatedProp ? null : Reflect.get(target, translatedProp, ...args); //If constructor returns an object it becomes to be instance
      },
    });
  }
}
