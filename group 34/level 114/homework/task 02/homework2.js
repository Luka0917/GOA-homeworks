class StudentPoints{
    constructor(points){
      if(points < 0 || points > 100){
        throw new Error("Invalid points value. Points should be between 0 and 100.");
      };
      this._points = points;
    };
  
    get mark(){
      if(this._points > 90 && this._points <= 100){
        return "A";
      }else if(this._points > 80 && this._points <= 90){
        return "B";
      }else if(this._points > 70 && this._points <= 80){
        return "C";
      }else if(this._points > 60 && this._points <= 70){
        return "D";
      }else{
        return "F";
      };
    };
  
    set mark(newMark){
      if(newMark >= 0 && newMark <= 100){
        this._points = newMark;
      }else{
        throw new Error("Invalid points value. Points should be between 0 and 100.");
      };
    };
};
console.log(new StudentPoints(77).mark);