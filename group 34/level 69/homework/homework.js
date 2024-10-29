// Exercise Set 1: Basics (Array Length, toString, at, join, pop, push)

    // 1
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
    console.log(fruits.length);

    // 2
    console.log(fruits.toString());

    // 3
    console.log(fruits.at(1));

    // 4
    console.log(fruits.join("-"));

    // 5
    fruits.push("Watermelon");
    fruits.pop();

// Exercise Set 2: Modify Array (shift, unshift, delete, concat)

    // 1
    const cars = ["BMW", "Mercedes", "Audi", "Ferrari", "Lamborghini"];
    cars.shift();

    // 2
    cars.unshift("BMW");
    console.log(cars.length);

    // 3
    delete cars[1];
    console.log(cars);

    // 4
    const cars1 = ["Honda", "Jaguar", "Maserati"];
    console.log(cars.concat(cars1));

// Exercise Set 3: Searching (indexOf, lastIndexOf, includes)

    // 1
    const programmingLanguages = ["Python", "JavaScript", "C++", "C#", "java"];
    console.log(programmingLanguages.indexOf("Python"));

    // 2
    console.log(programmingLanguages.lastIndexOf("Python"));

    // 3
    console.log(programmingLanguages.includes("HTML"));

    // 4
    console.log(programmingLanguages.indexOf("CSS"));

    // 5
    console.log(programmingLanguages.includes("python"));

// Exercise Set 4: Sorting and Reversing (sort, reverse)

    // 1
    const names = ["Luka", "Toko", "Andria", "Nika", "Gio"];
    console.log(names.sort());

    // 2
    const numbers = [23, 4, 1, 67, 999, 73];
    console.log(numbers.sort());

    // 3
    let sortedNums = numbers.sort();
    console.log(sortedNums.reverse());

// Exercise Set 5: Combined Operations

    // 1
    const numbers1 = [22, 3, 0, 66, 998];
    numbers1.sort();
    numbers1.push(5);
    console.log(numbers1);

    // 2
    const numbers2 = [6, 7, 8, 9, 10];
    const numbers3 = [1, 2, 3, 4, 5];
    const concatedNumbers = numbers2.concat(numbers3);
    console.log(concatedNumbers.sort());

    // 3
    const numbers4 = [14, 58, 92, 36];
    numbers4.push(2, 45, 57);
    console.log(numbers1.reverse());

    // 4
    const numbers5 = [97, 64, 31, 25];
    numbers5.splice(numbers5.indexOf(3), 1);
    console.log(numbers5);

    // 5
    const strings = ["Hello", "World", "My", "Name", "Is", "Luka"];
    let joinedStrings = strings.join(" ");
    let splitedStrings = joinedStrings.split(" ");
    console.log(splitedStrings.includes("World"));