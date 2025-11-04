//& Node.js-ში os მოდული არის ჩაშენებული მოდული, რომელიც გაძლევს საშუალებას მიიღო ინფორმაცია ოპერაციული სისტემის შესახებ — მაგალითად, მეხსიერება, პლატფორმა, CPU, hostname და სხვა.


const os = require('node:os');

//^ os.type() არის Node.js-ის os მოდულის ფუნქცია, რომელიც აბრუნებს ოპერაციული სისტემის ტიპს — ანუ რომელი სისტემაა გაშვებული: Windows, Linux, macOS და ა.შ.
console.log(`Operating System: ${os.type()}`);

//^ os.arch() არის Node.js-ის ჩაშენებული ფუნქცია, რომელიც აბრუნებს ოპერაციული სისტემის პროცესორის არქიტექტურას, ანუ CPU-ს ტიპს.
console.log(os.arch());

//^ os.platform() არის Node.js-ის ჩაშენებული ფუნქცია, რომელიც აბრუნებს პლატფორმის სახელს, ანუ რომელი ოპერაციული სისტემა იყენებს Node.js-ს.
console.log(os.platform()); 

//^ os.hostname() არის Node.js-ის os მოდულის ფუნქცია, რომელიც აბრუნებს კომპიუტერის ან მოწყობილობის სახელს, ანუ “hostname”. 
console.log(os.hostname());

//^ os.totalmem() არის Node.js-ის os მოდულის ფუნქცია, რომელიც აბრუნებს სისტემის მთლიანი ოპერატიული მეხსიერების (RAM) რაოდენობას ბაიტებში (bytes).
const total = os.totalmem() / 1024 / 1024 / 1024
const free = os.freemem() / 1024 / 1024 / 1024
console.log(`Total Memory: ${total.toFixed(2)}GB`);
console.log(`Free Memory: ${free.toFixed(2)}GB`); 
console.log(`Used Memory: ${(total - free).toFixed(2)}GB`);


//& path არის Node.js-ის ჩაშენებული (built-in) მოდული, რომელიც გამოიყენება ფაილებისა და დირექტორიების (folders) გზებთან (paths) სამუშაოდ.


const path = require('node:path');

//^ path.basename() არის Node.js-ის path მოდულის ფუნქცია, რომელიც აბრუნებს ფაილის სახელწოდებას, ანუ გზის ბოლო ნაწილს (ბოლო სეგმენტს).
console.log(path.basename('./GOA programming projects/group 34/level 219/homework/homework.cjs'));

//^ path.extname() არის Node.js-ის path მოდულის ფუნქცია, რომელიც აბრუნებს ფაილის გაფართოებას (extension) — ანუ ბოლო ნაწილს, რომელიც იწყება .-ით.
console.log(path.extname('homework.cjs'));

//^ path.join() არის Node.js-ის path მოდულის ფუნქცია, რომელიც ერთჯერადად აერთიანებს რამდენიმე გზის ნაწილს ერთ სწორად ფორმატირებულ path-ად.
console.log(path.join('GOA programming projects', 'group 34', 'level 219', 'homework', 'homework.cjs'));

//^ path.resolve() არის Node.js-ის path მოდულის ფუნქცია, რომელიც ქმნის აბსოლუტურ (absolute) გზას ორი ან მეტი ნაწილიდან.
console.log(path.resolve('group 34', 'level 219', 'homework', 'homework.cjs'));