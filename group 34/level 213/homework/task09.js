const { chatEmitter } = require('./homework');

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