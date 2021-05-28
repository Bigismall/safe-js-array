# Safe Array class

Allow using negative indexes in JavaScript/TypeScript Arrays

## Example 

```javascript

 const sampleSafeArray = new SafeArray(0, 1, 2, 3, 4, 5);
  //or 
 // const sampleSafeArray = new SafeArray(...[0, 1, 2, 3, 4, 5]);

 sampleSafeArray[-6]   //0
 sampleSafeArray[-5]   //1
 sampleSafeArray[-4]   //2

 sampleSafeArray[0]   //0
 sampleSafeArray[1]   //1
 sampleSafeArray[2]   //2

```

See `test` directory for more detailed explanations
