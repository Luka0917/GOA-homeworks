// Basic Array Methods

    // Array length --- გამოაქვს სიის სიგრძე

        // 1
        const names = ["Luka", "Toko", "Andria"];
        console.log(names.length);

        // 2
        function numbers(num1, num2, num3){
            console.log(numbers.length)
        }
        const number1 = new numbers(1, 2, 3);

        // 3
        const cars = ["BMW", "Mercedes", "Audi"];
        console.log(cars.length);


    // Array toString() --- სიას აქცევს სტრინგად

        // 1
        const bool = [true, false];
        console.log(bool.toString());

        // 2
        const numbers1 = [1, 2, 3];
        console.log(numbers1.toString());

        // 3
        const numbers2 = [12, 34, 56];
        console.log(numbers2.toString());


    // Array at() --- ეძებს კონკრეტულ ელემენტს სიაში index-ის გამოყენებით
        
        // 1
        const programmingLanguages = ["Python", "JavaScript", "C++"];
        console.log(programmingLanguages.at(0));

        // 2
        const phones = ["Samsung", "Iphone", "Xiaomi"];
        console.log(phones.at(1));

        // 3
        const schoolSubjects = ["Math", "English", "Science"];
        console.log(schoolSubjects.at(2));

    // Array join() --- აერთებს სიის ელემენტებს ერთად

        // 1
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        console.log(fruits.join("---"));

        // 2
        const numbers3 = [67, 98, 2];
        console.log(numbers3.join("*"));

        // 3
        const names1 = ["Gio", "Saba", "Erekle"];
        console.log(names1.join("<>"));

    // Array pop() --- აგდებს სიის ბოლო ელემენტს

        // 1
        const vegetables = ["Broccoli", "Pepper", "Garlic"];
        console.log(vegetables.pop());

        // 2
        const numbers4 = [67, 98, 2];
        console.log(numbers4.pop());

        // 3
        const programmingLanguages1 = ["Python", "JavaScript", "C++"];
        console.log(programmingLanguages1.pop());

    // Array push() --- ამატებს სიას ახალ ელემენტს

        // 1
        const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
        fruits1.push("Kiwi");

        // 2
        const phones1 = ["Samsung", "Iphone", "Xiaomi"];
        phones1.push("Nokia");

        // 3
        const numbers5 = [67, 98, 2];
        numbers5.push(45);

    // Array shift() --- აგდებს სიის პირველ ელემენტს

        // 1
        const numbers6 = [56, 34, 21];
        numbers6.shift();

        // 2
        const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
        fruits2.shift();

        // 3
        const names2 = ["Luka", "Andria", "Erekle"];
        names2.shift();

    // Array unshift() --- ამატებს ელემენტს სიის პირველ ადგილას

        // 1
        const cars1 = ["Ford", "Dodge", "Ferrari"];
        cars1.unshift("Lamborghini");

        // 2
        const numbers7 = [56, 34, 21];
        numbers7.unshift(92);

        // 3
        const programmingLanguages3 = ["C#", "java", "PHP"];
        programmingLanguages3.unshift("JavaScript");

    // Array delete() --- შლის ელემენტს მითითებულ index-ზე

        // 1
        const programmingLanguages4 = ["Swift", "Ruby", "TypeScript"];
        delete programmingLanguages4[0];

        // 2
        const phones2 = ["Samsung", "Iphone", "Xiaomi"];
        delete phones2[1];

        // 3
        const schoolSubjects1 = ["Math", "English", "Science"];
        delete phones2[2];
    
    // Array concat() --- აერთებს სიესბს ერთად

        // 1
        const cars2 = ["Porsche", "Honda", "Subaru"];
        const cars3 = ["Chevrolet", "Mazda", "Aston Martin"];
        console.log(cars2.concat(cars3));

        // 2
        const names3 = ["Luka", "Toko", "Andria"];
        const names4 = ["Gio", "Saba", "Erekle"];
        console.log(names3.concat(names4));

        // 3
        const programmingLanguages5 = ["C#", "java", "PHP"];
        const programmingLanguages6 = ["Swift", "Ruby", "TypeScript"];
        const programmingLanguages7 = ["SQL", "Scala", "Perl"];
        console.log(programmingLanguages5.concat(programmingLanguages6, programmingLanguages7));

// Array Find and Search Methods

    // Array indexOf() --- გამოაქვს მითითებული ელემენტის მისამართი

        // 1
        const fruits3 = ["Apple", "Orange", "Mango"];
        console.log(fruits3.indexOf("Apple"));

        // 2
        const fruits4 = ["Apple", "Orange", "Mango"];
        console.log(fruits4.indexOf("Orange"));

        // 3
        const fruits5 = ["Apple", "Orange", "Mango"];
        console.log(fruits5.indexOf("Mango"));

    // Array lastIndexOf() --- lastIndexOf()-ი იგივეა რაც indexOf() მაგრამ ის ბოლოდან მოყვება სიას და ისე გამოაქვს მითითებული ელემენტის მისამართი

        // 1
        const fruits6 = ["Apple", "Orange", "Apple", "Mango"];
        console.log(fruits6.lastIndexOf("Apple"));

        // 2
        const vegetables1 = ["Broccoli", "Pepper", "Garlic", "Pepper"];
        console.log(vegetables1.lastIndexOf("Pepper"));

        // 3
        const programmingLanguages8 = ["Python", "JavaScript", "Python", "C++"];
        console.log(programmingLanguages8.lastIndexOf("Python"));

    // Array includes() --- ამოწმებს არის თუ არა კონკრეტული ელემენტი სიაში

        // 1
        const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
        fruits7.includes("Mango"); // true

        // 2
        const cars4 = ["Jaguar", "Bugatti", "Maserati"];
        cars4.includes("BMW"); // false

        // 3
        const phones3 = ["Huawei", "realme", "OnePlus"];
        phones3.includes("Huawei"); // true

// Array Sort Methods

    // Array sort() --- ალაგებს სიას

        // 1
        const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
        fruits.sort();

        // 2
        const numbers8 = [1, 45, 34, 22];
        numbers8.sort();

        // 3
        const vegetables2 = ["Broccoli", "Pepper", "Garlic", "Pepper"];
        vegetables2.sort();

    // Array reverse() --- გამოაქვს სია საპირისპირო მიმდევრობით

        // 1
        const numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        numbers9.reverse();

        // 2
        const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
        fruits9.reverse();

        // 3
        const names5 = ["Luka", "Ilia", "Nika"];
        names5.reverse();