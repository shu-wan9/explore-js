console.log('Array.length', Array.length)
Object.defineProperty(Array, 'length', {
  value: 2
})
console.log('Array.length', Array.length)
