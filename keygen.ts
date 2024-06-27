import { Keypair } from "@solana/web3.js";

//Generate a new keypair
let kp = Keypair.generate()
if(kp){
    console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`)
    console.log(`Solana Wallet Secret Key: ${kp.secretKey}]`);
}

