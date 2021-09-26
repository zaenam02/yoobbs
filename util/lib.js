const lib = {
  deepCopy(obj) {
    if(obj === null || typeof obj == "object"){
      return obj;
    }
    const result = Array.isArray(obj) ? [] : {};
    for(const key of Object.keys(obj)){
      result[key] = lib.deepCopy(obj[key]);
    }
  },
  async modelCall(fn, ...args){
    try {
      const result = await fn(...args);
      return result;
    } catch(e) {
      console.trace(e);
      return {err : e.message}
    }  
  }
}

// modelCall : async (fn, ...args) => {
// 	try {
// 		const result = await fn(...args);
// 		return result;
// 	} catch(e) {
// 		console.trace(e);
// 		return {err : e.message}
// 	}
// }

module.exports = lib;