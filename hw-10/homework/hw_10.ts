
let sendPost = new Promise((resolve, reject) => {
    console.log("")
    let error = ''
    if(error) {
        reject(error);
    } else {
        resolve(true);
    }
});


sendPost
.then((post_15) => { 
  console.log("a", post_15);
})
.then((post_23) => { 
    console.log("пост #23 загрузился", post_23);
})
.then((post_7) => { 
    console.log("пост #7 загрузился", post_7);
})
.then((post_3) => { 
    console.log("пост #3 загрузился", post_3);
})
sendPost
.catch(() => {
  console.log("ошибка");
});
