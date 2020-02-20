class MobileOperator {
  constructor(options) {
    this.database = null;
    this.init();
  }
  
  init(){
    if(this.database === null){
	  let data = require('./os/os_families');
	}
    this.#indexedDb(data)
  }
  
  /**
   * create index hash array by data
   * @param data
   */
  #indexedDb(data){
  
  }
  
  /**
   * detect operator by phone
   * @param {string} phone
   * @return {*|null}
   */
  detect(phone){
    if(!phone){
      return null;
	}
  }
  
}
module.exports = MobileOperator;