import Web3 from 'web3'

const web3 = new Web3('wss://mainnet.infura.io/ws/v3/b3866b1857994f17b06df9cd3d915610')


const event = web3.eth.subscribe('logs',{
    address:'0x3301ee63fb29f863f2333bd4466acb46cd8323e6'
})

event.on('data',(data)=>{
    if(data.topics[2]=='0x000000000000000000000000b2cd775b6f63fc1bc7f6146309c13699bd38a06d'){
        console.log(data)
    }
})


