import Web3 from 'web3'

const web3 = new Web3('wss://mainnet.infura.io/ws/v3/b3866b1857994f17b06df9cd3d915610')


const event = web3.eth.subscribe('logs',{
    address:'0x3301ee63fb29f863f2333bd4466acb46cd8323e6'
})

event.on('data',(data)=>{
    if(data.topics[2]=='0xB2Cd775b6F63Fc1Bc7F6146309C13699BD38A06D'){
        console.log(data)
    }
})


