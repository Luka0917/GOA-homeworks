function getNames(arr) {
    let names = [];
    for (let i = 0; i < arr.length; i++) {
      names.push(arr[i].name);
    }
    return names;
  }
  
  const people = [
    {name: "Luka", age: 16},
    {name: "Tornike", age: 14},
    {name: "Andria", age: 9}
  ];
  
  console.log(getNames(people));