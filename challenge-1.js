function wrapping( gifts ){

    const giftWrapped = gifts.map( gift =>{
        const asterisc = '*';
        const giftLenght = gift.length + 2 ;
        
        return asterisc.repeat(giftLenght) + '\n' + asterisc + gift + asterisc + '\n' + asterisc.repeat(giftLenght);
    })
    return giftWrapped;
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
