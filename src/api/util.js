export function uuid() {
   let s = [];
   const hexDigits = "0123456789abcdef";
   for (let i = 0; i < 36; i++) {
       s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
   }
   s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
   s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
   let uuid = s.join("");
   return uuid;
}
// 四位随机数
export function randomNum(){
   let t='';
   for(let i = 0; i < 4; i++) {
       t+=Math.floor(Math.random() * 10);
   }
   return parseInt(t);
}
