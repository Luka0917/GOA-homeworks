const cardNumbers = ['1234567812345678', '8765432187654321', '1122334455667788'];
const maskedCards = cardNumbers.map(card => {
    const last4Digits = card.slice(-4);
    const masked = '*'.repeat(card.length - 4);
    return masked + last4Digits;
});
console.log(maskedCards);