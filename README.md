# Solana Airdrop Project

## Final Project Completion

**Transaction Link:** [3jfyU1d37fYcKtgq7Vbyj6qGJGpULQU6KVCguBMbsEYKHuPv4ZcyyJbrg9jKGAtrVRpa1b8tnT6F78kxC5qf4vAz](https://explorer.solana.com/tx/3jfyU1d37fYcKtgq7Vbyj6qGJGpULQU6KVCguBMbsEYKHuPv4ZcyyJbrg9jKGAtrVRpa1b8tnT6F78kxC5qf4vAz?cluster=devnet)

This link verifies the successful completion of the final project on the Solana devnet.

## Project Overview

This project involves interacting with the Solana blockchain using various scripts written in TypeScript. Below is a brief explanation of each file in this project and instructions on how to run them.

### Files and Their Functions

1. **airdrop.ts**: 
   - This script airdrops SOL tokens to the specified wallet address.
   - **How to run**: 
     ```sh
     ts-node airdrop.ts
     ```

2. **keygen.ts**: 
   - This script generates a new keypair and saves it to a file.
   - **How to run**: 
     ```sh
     ts-node keygen.ts
     ```

3. **transfer.ts**: 
   - This script transfers SOL tokens from one wallet to another.
   - **How to run**: 
     ```sh
     ts-node transfer.ts
     ```

4. **enroll.ts**: 
   - This script interacts with a predefined Solana program to mark the completion of prerequisites.
   - **How to run**: 
     ```sh
     ts-node enroll.ts
     ```

### Prerequisites

- Install Node.js and npm from [Node.js official website](https://nodejs.org/).
- Install TypeScript and ts-node globally:
  ```sh
  npm install -g typescript ts-node
