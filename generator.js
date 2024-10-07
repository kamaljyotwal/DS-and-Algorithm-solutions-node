function* hellos(){
    console.log('hello')
    yield 'something'
}
const g = hellos()
console.log(g.next().value)
