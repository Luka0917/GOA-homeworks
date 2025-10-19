//^ process.argv არის Node.js-ის სპეციალური ობიექტი, რომელიც შეიცავს მასივს (Array)
//^ მასივის თითოეული ელემენტი წარმოადგენს იმ არგუმენტებს, 
//^ რომლითაც გაშვებულია Node პროგრამა.

//& პირველი ელემენტი ყოველთვის არის Node.js-ის executable-ის გზა
//& მეორე ელემენტი ყოველთვის არის მიმდინარე js ფაილის სრული გზა
//& მესამე ელემენტიდან კი იწყება რეალური არგუმენტები, 
//& რომლებიც მომხმარებელმა გადასცა პროგრამას

//* მაგალითად, თუ გავუშვებთ ბრძანებით:
//* node homework.js hello world
//* მაშინ process.argv იქნება დაახლოებით ასეთი:
//* [
//*   'C:\\Program Files\\nodejs\\node.exe',  ← Node-ის გზა
//*   ''c:\\Users\\HP\\OneDrive\\Desktop\\GIThub\\GOA programming projects\\group 34\\level 215 🟥\\homework\\homework.js',  ← ფაილის გზა
//*   'hello',                ← მესამე არგუმენტი
//*   'world'                 ← მეოთხე არგუმენტი
//* ]

//? ამოვიღოთ მხოლოდ მესამე არგუმენტი (ანუ პირველი მომხმარებლის შეყვანილი):
const thirdArg = process.argv[2];
console.log(thirdArg);
console.log(process.argv);


console.log(process.pid);


const username = process.env.USER || process.env.USERNAME;
console.log(username);

//^ გარემოს ცვლადი არის გლობალური მნიშვნელობა, რომელიც ინახება სისტემაში
//^ და რომელსაც პროგრამები იყენებენ კონფიგურაციისთვის — მაგალითად,
//^ მომხმარებლის სახელი, ფაილების ბილიკები, სერვერის პორტი, API გასაღებები და სხვა.

//& .env ფაილი ჩვეულებრივ გამოიყენება პროექტის კონფიგურაციისთვის — 
//& მასში ინახება ისეთი ცვლადები, რომლებიც არ უნდა იყოს კოდში ჩაშენებული,
//& მაგალითად:
//& API_KEY=12345
//& DB_PASSWORD=secret
//& შემდეგ ასეთი ფაილი იტვირთება dotenv ბიბლიოთეკის მეშვეობით,
//& რათა process.env-ში ჩაიწეროს ეს მნიშვნელობები.

//* process.env.PATH აბრუნებს სტრიქონს, სადაც ჩამოთვლილია ყველა ის დირექტორია,
//* სადაც ოპერაციული სისტემა ეძებს პროგრამებს (executables).
//* მაგალითად:
//* "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
console.log(process.env.PATH);


const EventEmitter = require('events');
const message = new EventEmitter();

message.on('message', text => {
    console.log(`[NEW MESSAGE]: ${text}`);
});

message.emit('message', 'Hello, my name is Luka');

//^ event-ის emit-ით გამოძახებისას პირველ რიგში იწერება თვითონ event-ი და მის შემდეგ ნებისმიერი რამ არგუმენტად ითვლება
//& შეიძლება თუ არა .emit()-ში ერთზე მეტი არგუმენტის გადაცემა? --- კი :)

const program = new EventEmitter();
program.on('start', () => {
    console.log('Program started ✅');
});
program.on('messageText', text => {
    console.log(`Message: ${text}`);
})

program.emit('start');
program.emit('messageText', 'Hello, World!');


const system = new EventEmitter();
system.on('start', () => {
    console.log('System started');
});
system.on('data', num => {
    if(num % 2 == 0){
        console.log('Even');
    }else{
        console.log('Odd');
    };
});
system.on('end', () => {
    process.exit(0);
});

system.emit('start');
system.emit('data', 12);
system.emit('end');


//^ once()-ით ვქმნით event-ს როგორც on-ით, მაგრამ once()-ით შექმნილი event-ი მხოლოდ ერთხელ გაეშვება


const emitter = new EventEmitter();

emitter.on('ping', () => {
    console.log('ping? (on)');
});
emitter.once('pingOnce', () => {
    console.log('ping? (once)');
});

emitter.emit('ping');
emitter.emit('ping');
emitter.emit('ping');
emitter.emit('pingOnce');