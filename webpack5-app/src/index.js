import { hello } from './hello'
import './demo.txt'

document.write(hello())

setTimeout(() => {
  console.log(11)
})