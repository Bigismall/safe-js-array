import { SafeArray } from '../src';

describe('from negative to positive indexes', () => {
  const sampleSafeArray = new SafeArray(0, 1, 2, 3, 4, 5);

  it('should return NULL for index out of the range (-7) ', () => {
    expect(sampleSafeArray[-7]).toBeNull();
  });
  it('should return 0 for negative index in the range (-6) ', () => {
    expect(sampleSafeArray[-6]).toEqual(0);
  });
  it('should return 1 for negative index in the range (-5) ', () => {
    expect(sampleSafeArray[-5]).toEqual(1);
  });
  it('should return 2 for negative index in the range (-4) ', () => {
    expect(sampleSafeArray[-4]).toEqual(2);
  });
  it('should return 3 for negative index in the range (-3) ', () => {
    expect(sampleSafeArray[-3]).toEqual(3);
  });
  it('should return 4 for negative index in the range (-3) ', () => {
    expect(sampleSafeArray[-2]).toEqual(4);
  });
  it('should return 5 for negative index in the range (-1) ', () => {
    expect(sampleSafeArray[-1]).toEqual(5);
  });
  it('should return 0 for ZERO index (0) ', () => {
    expect(sampleSafeArray[0]).toEqual(0);
  });
  it('should return 1 for positive index in the range (1) ', () => {
    expect(sampleSafeArray[1]).toEqual(1);
  });
  it('should return 2 for positive index in the range (2) ', () => {
    expect(sampleSafeArray[2]).toEqual(2);
  });
  it('should return 3 for positive index in the range (3) ', () => {
    expect(sampleSafeArray[3]).toEqual(3);
  });
  it('should return 4 for positive index in the range (4) ', () => {
    expect(sampleSafeArray[4]).toEqual(4);
  });
  it('should return 5 for positive index in the range (5) ', () => {
    expect(sampleSafeArray[5]).toEqual(5);
  });
  it('should return NULL for positive out of the range (6) ', () => {
    expect(sampleSafeArray[6]).toBeNull();
  });
  it('should return NULL for positive out of the range (7) ', () => {
    expect(sampleSafeArray[7]).toBeNull();
  });
});

describe('Non numeric indexes', () => {
  const sampleSafeArray = new SafeArray(...[0, 1, 2, 3, 4, 5]);

  it('should return NULL value for string indexes', () => {
    expect(sampleSafeArray['abc' as any]).toBeNull();
  });
  it('should return value from array for empty array as index', () => {
    expect(sampleSafeArray[[] as any]).toEqual(0);
  });
  it('should return value from array for array with single element  as index', () => {
    expect(sampleSafeArray[[2] as any]).toEqual(2);
  });

  it('should return NULL value  for array with more a one element  as index', () => {
    expect(sampleSafeArray[[2, 3] as any]).toBeNull();
  });

  it('should return value from array for string that evaluates (with Number constructor) to  positive number and is in range ', () => {
    expect(sampleSafeArray['1' as any]).toEqual(1);
  });
  it('should return value from array for string that evaluates (with Number constructor) to  negative number and is in range ', () => {
    expect(sampleSafeArray['-1' as any]).toEqual(5);
  });
});
