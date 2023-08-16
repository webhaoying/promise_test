/*
 * @Description: 
 * @Author: zhanghao
 * @Date: 2023-08-16 18:41:10
 * @LastEditTime: 2023-08-16 18:41:31
 * @LastEditors: zhanghao
 */
const test = (resolve, reject) => {
  // aaa
  resolve('请求成功了');
  console.log("resolve 之后", resolve);
  // Promise.reject("请求失败了");
  console.log("reject 之后", reject);
  // throw new Error("直接报错");
};
const promiseTest = () => new Promise(test);
promiseTest()
  .then(
    (value) => {
      // aaa
      return value
      console.log("value is", value);
    },
    (error) => {
      console.log("error in 2 is", error);
      throw error;
    }
  )
  .catch((error) => {
    console.log("错误 is", error); //未打印，发生穿透
  })
  .then((value) => {
    console.log(111, value);
  })
  .then((value) => {
    console.log(222, value);
  })
  .finally((data) => {
    console.log("data in finally is", data);
  });
const testAsync = (async function () {
  const res = await promiseTest()
    .then((val) => {
      console.log(9999, val);
    })
    .catch((error) => {
      console.log(777, error);
    });
  console.log("res is", res);
})();
