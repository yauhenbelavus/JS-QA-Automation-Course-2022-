// JavaScript - ОДНОПОТОЧНЫЙ ЯЗЫК
// Event loop
// function readFile(fileName, func) {
//   console.log('внутри А')
//   func()
// }
// function b() {
//   // свои вычисления
//   console.log('файл прочитан')
// }

// readFile('./index.js', function(cb) {
//   console.log('файл прочитан')
//   cb()
// })

// синхронный код || асинхронный код
// callstack, Web API's, callback queue
// Promise - fullfiled / rejected

// const readFile = new Promise((resolve, reject) => {
//   console.log('промис выполняется')
//   let error = "qweqwewq"
//   if(!error) {
//     resolve(true)
//   } else {
//     reject(true)
//   }
// });

// readFile
//   .then((result) => {
//     console.log('промис выполнен успешно', result)
//     return 10
//   })
//   .then(res => {
//     console.log('опять успешно', res)
//   })
//   .then(res => {
//     console.log("и ещё раз успешно")
//   })
//   .catch((err) => {
//     console.log(err)
//   })
//   .finally(() => {
//     console.log("finally")
//   })


// fetch
// запрос на сервер! - setTimeout
// async/await
// let userList = []
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((res) => res.json())
//   .then(res => {
//     userList = res
//   })

async function getUserList() {
  // let userList = []
  let res = await fetch('https://jsonplaceholder.typicode.com/users')
  res = await res.json()
  return res
}

async function a() {
  let res = await getUserList()
  res + 20 - 10
}

a()
