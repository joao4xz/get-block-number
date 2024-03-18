# Get Block Number

## Description

This application is a simple React-based HUD (Heads-Up Display) that connects to an Ethereum blockchain network and displays the current block number in real-time. It also allows users to connect their Ethereum wallet to the application and refresh the displayed block number.

## Technologies Used

- **Frontend**: React with Typescript and TailwindCSS
- **Blockchain Interaction**: Ethers.js
- **Ethereum Provider**: Browser-based Ethereum provider (e.g., MetaMask)

## Getting Started

### Prerequisites

- Node.js and npm installed on your system.
- An Ethereum wallet extension (e.g., MetaMask) installed in your browser.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/joao4xz/get-block-number.git
   ```

2. Navigate to the project directory:

   ```bash
   cd get-block-number
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Execution

1. Start the development server:

   ```
   npm run dev
   ```

## Usage

- When you open the application in your browser, you will see a "Connect Wallet" button. Click on it to connect your Ethereum wallet.
- Once connected, the button will change to "Refresh block number". Clicking this button will fetch and display the current block number from the Ethereum blockchain.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
