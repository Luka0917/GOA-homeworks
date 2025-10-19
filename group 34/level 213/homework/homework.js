//* node.js არის JS-ის run time-ი, იგი გვთავაზობს რომ JS-ის გავუშვათ ბრაუზერის გარეთ


//* dependencies-ის აუცილებელია და რაც მითითებულია ის აუცილებლად უნდა გადმოვწეროთ, წინააღმდეგ შემთხვევაში კოდი არ გაეშვება
//* decdependencies-ი არ არის აუცილებელი, კოდი მის გარეშეც გაეშვება


//* npm --- node package manager, package-ი არის რაღაც კოკრეტული კოდი, რომელსაც დეველოპერები ქმნიან და საშვალებას გვაძლევს რომ ეს package-ი გამოვიყენოთ ჩვენ პროგრამაში
//* npm-ით შეგვიძლია package-ი გადმოვწეროთ, დავააბდეითოთ და წავშალოთ
//* npm-ი არის რაღაც ხელსაწყოების მარკეტი


//* მოდული არის ფაილი, რომელიც შეიცავს კოდს (ფუნქციებს, ცვლადებს და ა.შ.),
//* და გამოიყენება კოდის ორგანიზებისა და გადამტანობისთვის.


//* მოდულების ექსპორტი და იმპორტი საშუალებას გვაძლევს გავაზიაროთ კოდი სხვადასხვა ფაილებს შორის.
//* CommonJS სისტემაში გამოიყენება module.exports და require.
//* ES Modules სისტემაში გამოიყენება export და import.


//* require არის CommonJS მოდულების სისტემის ნაწილი (ძირითადად Node.js-ში),
//* ხოლო import/export არის ES Modules სისტემის ნაწილი (თანამედროვე სტანდარტი).
//* require მუშაობს სინქრონულად, import კი ასინქრონულად.
//* CommonJS იყენებს module.exports-ს, ხოლო ES Modules იყენებს export-სა და import-ს.


const EventEmitter = require('events');

const chatEmitter = new EventEmitter();

let members = [];
let history = [];

chatEmitter.on('join', newMember => {
    members.push(newMember);
    console.log(`"${newMember}" Joined The Chat!`);
});

chatEmitter.on('leave', member => {
    if(members.includes(member)){
        members = members.filter(el => el !== member);
        console.log(`${member} left the chat!`);
    }else{
        console.log(`${member} is not in this chat!`);
    };
});

chatEmitter.on('message', (member, text) => {
    if(members.includes(member)){
        history.push({member: member, message: text});
        console.log(`${member}: ${text}`);
    }else{
        console.log('You are not the member of this chat!');
    };
});

chatEmitter.on('members', () => {
    console.log('Members:');
    members.map((el, i) => console.log(`Member #${i+1}: ${el}`));
});

chatEmitter.on('history', () => {
    console.log('History:')
    history.map(el => console.log(`${el.member}: ${el.message}`)); 
});

chatEmitter.emit('join', 'L(u)k@');
chatEmitter.emit('join', 'LunaStar');
chatEmitter.emit('join', 'PixelKnight');
chatEmitter.emit('join', 'EchoBlade');
chatEmitter.emit('join', 'NeonFox');
chatEmitter.emit('join', 'CyberWave');
chatEmitter.emit('join', 'AquaShade');
chatEmitter.emit('join', 'BlazeRunner');
chatEmitter.emit('join', 'MysticByte');
chatEmitter.emit('join', 'ShadowPulse');
chatEmitter.emit('join', 'FrostNova');

chatEmitter.emit('members');
chatEmitter.emit('leave', 'FrostNova');
chatEmitter.emit('members');

chatEmitter.emit('message', 'L(u)k@', "Hey guys! How was your day?");
chatEmitter.emit('message', 'AquaShade', "Pretty good! Just finished some work and relaxing now.");
chatEmitter.emit('message', 'ShadowPulse', "Sounds nice! I went out for a walk earlier, it was really refreshing.");
chatEmitter.emit('history');


module.exports = { chatEmitter };


const houseEmitter = new EventEmitter();

let isDoorOpen = false;
let isWindowOpen = false;
let isLightOn = false;

function getInfo(){
    console.log(`is door opened: ${isDoorOpen}`);
    console.log(`is window opened: ${isWindowOpen}`);
    console.log(`is light on: ${isLightOn}`);
};

houseEmitter.on('openDoor', () => {
    isDoorOpen = true;
    console.log('Door opened!');
    getInfo();
});
houseEmitter.on('closeDoor', () => {
    isDoorOpen = false;
    console.log('Door closed!');
    getInfo();
});

houseEmitter.on('openWindow', () => {
    isWindowOpen = true;
    console.log('Window opened!');
    getInfo();
});
houseEmitter.on('closeWindow', () => {
    isWindowOpen = false;
    console.log('Window closed!');
    getInfo();
});

houseEmitter.on('lightOn', () => {
    isLightOn = true;
    console.log('Lights are on!');
    getInfo();
});
houseEmitter.on('lightOff', () => {
    isLightOn = false;
    console.log('Lights are off!');
    getInfo();
});

houseEmitter.emit('openDoor');
houseEmitter.emit('closeDoor');
houseEmitter.emit('openWindow');
houseEmitter.emit('closeWindow');
houseEmitter.emit('lightOn');
houseEmitter.emit('lightOff');