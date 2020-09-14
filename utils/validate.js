

/**
 * @param {String} srt
 * @returns {Boolean}
 */

export function isEmpty (str) {
  if (Object.prototype.toString.call(str) === "[object Undefined]") {
    return true;
  } else if (
    Object.prototype.toString.call(str) === "[object String]" ||
    Object.prototype.toString.call(str) === "[object Array]"
  ) {
    return str.length == 0 ? true : false;
  } else if (Object.prototype.toString.call(str) === "[object Object]") {
    return JSON.stringify(str) == "{}" ? true : false;
  } else if (Object.prototype.toString.call(str) === "[object Number]") {
    return false;
  } else {
    return true;
  }
};

/**
 * @param {String} srt
 * @returns {Boolean}
 */

// export function checkLogin () {
//   let Token = uni.getStorageSync('Token');
//   if (isEmpty(Token)) {
//     this.setSession(
//       "loginBackRouter",
//       JSON.stringify({
//         path: this.$route.path,
//         name: this.$route.name,
//       })
//     );
//     this.$router.replace({
//       name: "signin",
//     }); //去登录
//     return;
//   } else {
//     this.acT = Token;
//   }
// };