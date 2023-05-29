// 1.顯示一個訊息：使用 Promise，在延遲 1 秒後，在控制台打印出 "Hello, world!"。

const practice1 = new Promise(function(res,rej){
    setTimeout(function(){
        res('Hello world!');
    },1000);
}).then((value)=>{
    console.log(value)
})


// 2.延遲執行：使用 async/await，創建一個函數，該函數將延遲 3 秒後返回一個 Promise。然後使用 await 來等待 Promise 完成，並在控制台打印出 "Delay complete!"。


    const Practice2 = async () => {
        await new Promise((resolve) => { 
            setTimeout(resolve, 3000) })
        return Promise.resolve();
    };

    async function getData(){
        try { //success
            await Practice2();
            console.log("Delay complete!");
        } 
        
        catch (err) {
            console.log("catch:", err);
        }
    };
    getData();



// 3.處理錯誤：創建一個 Promise，該 Promise resolve 或 reject。使用 async/await 在控制台打印出相應的訊息，如果 Promise 成功，則打印出 "Promise resolved!"，如果 Promise 失敗，則打印出 "Promise rejected!"。

const Practice3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved!!!!');
    }, 2000);
  });
  
  async function usePractice3(Name) {
    try {
      if (Name.length >= 3) {
        const result = await Practice3;
        console.log('Resolved:', result);
      } else {
        await Promise.reject('Promise rejected!!!!'); 
        // 使用 await 等待 rejected 狀態的 Promise
      }
    } catch (err) {
      console.log("Rejected:", err);
    }
  }
  
  usePractice3('Mike'); // Resolved: Promise resolved!!!!
  
// 4.順序執行多個 Promise：創建三個 Promise：Promise A 在 2 秒後 resolve，Promise B 在 1 秒後resolve，Promise C 在 3 秒後resolve。使用 Promise 和 async/await，在它們依次解析完成後，在控制台打印出 "All promises resolved!"

const promiseA = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve();
      }, 2000)
})

const promiseB = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve();
      }, 1000)
})

const promiseC = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve();
      }, 3000)
})


  async function fn () {

    const A = await promiseA.then(()=>{console.log('AAAAAAA')})
    const B = await promiseB.then(()=>{console.log('BBBBBBB')})
    const C = await promiseC.then(()=>{console.log('CCCCCCC')})
    console.log( "All promises resolved!");
  }
  fn();
