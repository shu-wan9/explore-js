let o = Object.create(null)

Object.defineProperty(o, 'x', {
  value: 'x'
})
console.log(Object.getOwnPropertyDescriptor(o, 'x'))
Object.defineProperty(o, 'y', {
  configurable: true,
  value: 'y'
})
console.log(Object.getOwnPropertyDescriptor(o, 'y'))
Object.defineProperty(o, 'y', {
  value: 'y1'
})
console.log(Object.getOwnPropertyDescriptor(o, 'y'))
