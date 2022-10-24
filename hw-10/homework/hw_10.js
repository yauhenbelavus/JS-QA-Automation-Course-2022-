var sendPost = new Promise(function (resolve, reject) {
    console.log("");
    var error = '';
    if (error) {
        reject(error);
    }
    else {
        resolve(true);
    }
});
sendPost
    .then(function (post_15) {
    console.log("a", post_15);
})
    .then(function (post_23) {
    console.log("пост #23 загрузился", post_23);
})
    .then(function (post_7) {
    console.log("пост #7 загрузился", post_7);
})
    .then(function (post_3) {
    console.log("пост #3 загрузился", post_3);
});
sendPost["catch"](function () {
    console.log("ошибка");
});
