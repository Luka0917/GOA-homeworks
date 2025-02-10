class Password{
    constructor(pass){
      this._pass = pass;
    };
    get passw(){
      let result = "";
      for(let i = 0; i < this._pass.length; i++){
        result += "*";
      };
      return result;
    };
    set passw(newPass){
      if(newPass.length <= 8){
        this._pass = newPass;
      }else{
        throw new Error("Password length must be 8 characters or less.");
      };
    };
};  