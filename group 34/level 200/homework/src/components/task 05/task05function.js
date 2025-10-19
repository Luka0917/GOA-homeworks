const data = [
    {product: 'Apple iPhone 15', price: 999},
    {product: 'Samsung Galaxy S23', price: 849},
    {product: 'Google Pixel 8', price: 699},
    {product: 'OnePlus 11', price: 749},
    {product: 'Sony Xperia 5 V', price: 899}
];

export function getInitialData(){
    return data;
};

export function addTocart(setChosenProducts, setTotalPrice, index){
    setChosenProducts(prev => [...prev, data[index]]);
    setTotalPrice(prev => prev + data[index].price);
};

export function removeFromCart(setChosenProducts, setTotalPrice, index){
    setChosenProducts(prevChosen => {
        const updatedCart = prevChosen.filter((_, i) => i !== index);
        const removedItem = prevChosen[index];
        if(removedItem){
            setTotalPrice(prevTotal => {
                const newTotal = prevTotal - removedItem.price;
                return newTotal < 0 ? 0 : newTotal;
            });
        };
        return updatedCart;
    });
};