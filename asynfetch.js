async function todotitle(tododata){
    const data1= await fetch(tododata)
    let data2=await data1.json()
    console.log(data2)
    data2=data2.map(dotitle => dotitle.title)
    console.log(data2)
}
todotitle('https://jsonplaceholder.typicode.com/todos')
