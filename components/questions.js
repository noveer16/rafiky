const questionsBank = [
  {
    question: "What does LTV stand for in Clynto's loan mechanics?",
    options: ['Loan-to-Value', 'Long-Term Value', 'Liquidity-to-Volume', 'Leverage-to-Value'],
    correctAnswer: 'Loan-to-Value',
    explanation:
      'LTV, or Loan-to-Value, is the ratio of the loan amount to the collateral value, calculated as (Total Loan Amount / Collateral Value) * 100.',
  },
  {
    question: 'What is the quorum requirement for governance proposals in Clynto?',
    options: ['5%', '10%', '15%', '20%'],
    correctAnswer: '10%',
    explanation:
      'A governance proposal requires at least 10% of the total voting power to participate for it to be valid.',
  },
  {
    question: 'What is the purpose of Nectar points in Clynto?',
    options: [
      'To pay transaction fees',
      'To earn rewards for participation',
      'To vote in governance',
      'To stake for higher yields',
    ],
    correctAnswer: 'To earn rewards for participation',
    explanation:
      'Nectar points are rewards earned for participating in activities like testing, voting, or referring users, which can be redeemed for benefits on the mainnet.',
  },
  {
    question: 'Which blockchain networks does Clynto currently support?',
    options: [
      'Solana and Ethereum (Base)',
      'Bitcoin and Ethereum',
      'Binance Smart Chain and Solana',
      'Polkadot and Avalanche',
    ],
    correctAnswer: 'Solana and Ethereum (Base)',
    explanation:
      'Clynto operates on Solana for high throughput and Ethereum (Base) for security and EVM compatibility.',
  },
  {
    question: "What happens if a loan's LTV ratio exceeds 90% in Clynto?",
    options: [
      'The loan is automatically repaid',
      'The collateral is partially liquidated',
      'The borrower receives a warning',
      'The loan is instantly liquidated',
    ],
    correctAnswer: 'The loan is instantly liquidated',
    explanation:
      'If the LTV ratio reaches or exceeds 90%, the loan qualifies for instant liquidation to protect lenders.',
  },
  {
    question: 'What is the name of the platform?',
    options: ['GetYourGuide', 'Viator', 'Rafiky', 'Expedia'],
    correctAnswer: 'Rafiky',
    explanation: 'Rafiky is the name of the AI-powered tourism marketplace for Egypt.',
  },
  {
    question: 'What does the platform primarily offer?',
    options: ['Hotel booking', 'Local experiences and tours', 'Flight search', 'Car rentals'],
    correctAnswer: 'Local experiences and tours',
    explanation: 'Rafiky connects travelers with authentic local experiences and tours in Egypt.',
  },
  {
    question: 'What is the native token of the platform?',
    options: ['ETH', 'BTC', 'CLY', 'USDC'],
    correctAnswer: 'CLY',
    explanation: 'The native token of Clynto is CLY, used for governance and staking.',
  },
  {
    question: 'What is the current version of the platform?',
    options: ['Mainnet', 'Testnet', 'Beta', 'Alpha'],
    correctAnswer: 'Testnet',
    explanation: 'The platform is currently in the testnet phase, allowing risk-free testing.',
  },
  {
    question: 'Who is the target audience for the platform?',
    options: [
      'Institutional investors',
      'Retail investors',
      'Crypto enthusiasts',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation:
      'Clynto targets institutional investors, retail investors, and crypto enthusiasts.',
  },
  {
    question: 'How can users connect to the platform?',
    options: [
      'Through a web browser',
      'Through a mobile app',
      'Both a and b',
      'Through a command-line interface',
    ],
    correctAnswer: 'Through a web browser',
    explanation: 'Users can connect to Clynto via a web browser at app.clynto.com.',
  },
  {
    question: 'What wallets are compatible with the platform?',
    options: ['MetaMask', 'Phantom', 'Both a and b', 'None of the above'],
    correctAnswer: 'Both a and b',
    explanation: 'Clynto supports MetaMask for Ethereum (Base) and Phantom for Solana.',
  },
  {
    question: 'What is the first step to start using the platform?',
    options: ['Connect a wallet', 'Create an account', 'Deposit funds', 'Read the documentation'],
    correctAnswer: 'Connect a wallet',
    explanation: 'The first step is to connect a compatible wallet like MetaMask or Phantom.',
  },
  {
    question: 'What is the purpose of the testnet?',
    options: [
      'To test new features',
      'To allow users to practice without real funds',
      'To gather community feedback',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation:
      'The testnet allows testing features, practicing without real funds, and gathering feedback.',
  },
  {
    question: 'How can users earn Nectar points on the testnet?',
    options: [
      'By participating in activities like testing and voting',
      'By staking CLY tokens',
      'By referring new users',
      'By completing quizzes',
    ],
    correctAnswer: 'By participating in activities like testing and voting',
    explanation:
      'Users earn Nectar points by participating in testnet activities like testing and voting.',
  },
  {
    question: 'What does APR stand for in the context of loans?',
    options: [
      'Annual Percentage Rate',
      'Actual Payment Rate',
      'Average Profit Ratio',
      'Adjusted Price Ratio',
    ],
    correctAnswer: 'Annual Percentage Rate',
    explanation: 'APR stands for Annual Percentage Rate, the yearly interest rate on loans.',
  },
  {
    question: 'How is the interest rate determined for loans?',
    options: [
      "By the platform's algorithm based on supply and demand",
      'By community governance votes',
      "By the borrower's credit score",
      "By the lender's preference",
    ],
    correctAnswer: 'By community governance votes',
    explanation: 'Interest rates are determined by community votes in Clynto.',
  },
  {
    question: 'What is the LTV ratio?',
    options: [
      'The ratio of the loan amount to the collateral value',
      'The ratio of the interest rate to the loan amount',
      "The ratio of the borrower's credit score to the loan amount",
      "The ratio of the platform's total loans to total collateral",
    ],
    correctAnswer: 'The ratio of the loan amount to the collateral value',
    explanation:
      'LTV is the ratio of the loan amount to the collateral value, calculated as (Loan Amount / Collateral Value) * 100.',
  },
  {
    question: 'What happens if the LTV ratio exceeds the threshold?',
    options: [
      'The loan is liquidated',
      'The borrower is given a warning',
      'The interest rate increases',
      'The collateral is adjusted',
    ],
    correctAnswer: 'The loan is liquidated',
    explanation: 'If LTV exceeds 90%, the loan is liquidated to protect lenders.',
  },
  {
    question: 'Can users borrow against NFTs as collateral?',
    options: ['Yes', 'No', 'Only certain types of NFTs', 'Planned for future updates'],
    correctAnswer: 'Yes',
    explanation: 'Clynto allows users to borrow against NFTs as collateral.',
  },
  {
    question: 'How does the community influence the platform?',
    options: [
      'Through voting on governance proposals',
      'Through social media feedback',
      'Through direct communication with the team',
      'Through bug bounties',
    ],
    correctAnswer: 'Through voting on governance proposals',
    explanation: 'Community influence is through voting on governance proposals with CLY tokens.',
  },
  {
    question: 'What is the quorum required for a governance vote to be valid?',
    options: [
      '5% of total voting power',
      '10% of total voting power',
      '15% of total voting power',
      '20% of total voting power',
    ],
    correctAnswer: '10% of total voting power',
    explanation: 'A governance vote requires at least 10% of total voting power to be valid.',
  },
  {
    question: 'How often are governance votes held?',
    options: ['Weekly', 'Monthly', 'As needed', 'Annually'],
    correctAnswer: 'Weekly',
    explanation: 'Governance votes in Clynto are held weekly, based on community activity.',
  },
  {
    question: 'What can community members vote on?',
    options: ['Interest rates', 'LTV thresholds', 'Platform upgrades', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation:
      'Community members can vote on interest rates, LTV thresholds, and platform upgrades.',
  },
  {
    question: 'What is the role of CLY tokens in governance?',
    options: [
      'One CLY token equals one vote',
      'Voting power based on the amount of CLY staked',
      'Only holders of a certain amount can vote',
      'Voting is open to all users, regardless of CLY holdings',
    ],
    correctAnswer: 'One CLY token equals one vote',
    explanation: 'Each CLY token grants one vote in governance, ensuring proportional influence.',
  },
  {
    question: 'What is the total supply of CLY tokens?',
    options: ['100 million', '1 billion', '50 million', 'Unlimited'],
    correctAnswer: '100 million',
    explanation: "The total supply of CLY tokens is 100 million, as per Clynto's tokenomics.",
  },
  {
    question: 'How are new CLY tokens created?',
    options: [
      'Through mining rewards',
      'Through initial coin offering',
      'Through team allocation',
      'Through community airdrops',
    ],
    correctAnswer: 'Through team allocation',
    explanation:
      'New CLY tokens are created through team allocation and community distribution, as per tokenomics.',
  },
  {
    question: 'What is the purpose of Nectar points?',
    options: [
      'To reward user participation',
      'To pay for transaction fees',
      'To stake for higher yields',
      'To vote in governance',
    ],
    correctAnswer: 'To reward user participation',
    explanation: 'Nectar points reward user participation in activities like testing and voting.',
  },
  {
    question: 'How can users redeem Nectar points?',
    options: [
      'For CLY tokens',
      'For fee reductions',
      'For exclusive platform features',
      'All of the above',
    ],
    correctAnswer: 'For fee reductions',
    explanation: 'Nectar points can be redeemed for fee reductions on the platform.',
  },
  {
    question: 'What measures are in place to ensure smart contract security?',
    options: [
      'Regular auditing by third-party firms',
      'Multi-signature wallets for critical operations',
      'Bug bounty programs',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation:
      'Clynto ensures smart contract security through audits, multi-signature wallets, and bug bounties.',
  },
  {
    question: 'How does the platform handle user funds?',
    options: [
      'Funds are held in a centralized wallet',
      'Funds are locked in smart contracts',
      "Funds are managed by the platform's team",
      "Funds are stored in user's own wallets",
    ],
    correctAnswer: 'Funds are locked in smart contracts',
    explanation: 'User funds are locked in smart contracts, ensuring decentralized control.',
  },
  {
    question: 'What is the role of oracles in the platform?',
    options: [
      'To provide real-time price data for collateral assets',
      'To validate transactions',
      'To manage user funds',
      'To handle governance votes',
    ],
    correctAnswer: 'To provide real-time price data for collateral assets',
    explanation:
      'Oracles provide real-time price data for collateral assets, ensuring accurate valuations.',
  },
  {
    question: 'What happens in case of a security breach?',
    options: [
      'The platform has a contingency plan',
      'Users are notified immediately',
      'Funds are insured',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation:
      'Clynto has contingency plans, notifies users, and insures funds in case of breaches.',
  },
  {
    question: 'Is the platform compliant with regulatory standards?',
    options: [
      'Yes, it adheres to all relevant regulations',
      'No, it operates in a regulatory gray area',
      "It's working towards compliance",
      'Compliance is not applicable to decentralized platforms',
    ],
    correctAnswer: "It's working towards compliance",
    explanation: 'Clynto is working towards compliance with relevant regulations.',
  },
  {
    question: 'How can users engage with the community?',
    options: [
      'Through Discord',
      'Through Twitter',
      "Through the platform's forum",
      'All of the above',
    ],
    correctAnswer: 'Through Discord',
    explanation:
      'Users can engage with the community primarily through Discord for discussions and feedback.',
  },
  {
    question: 'What is the purpose of the Discord server?',
    options: [
      'To discuss platform features and issues',
      'To participate in governance discussions',
      'To get support and help',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation: 'Discord serves for discussing features, governance, and getting support.',
  },
  {
    question: "How can users contribute to the platform's development?",
    options: [
      'By submitting code contributions',
      'By providing feedback and suggestions',
      'By participating in testnet testing',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation: 'Users can contribute through code, feedback, and testnet participation.',
  },
  {
    question: "What is the platform's approach to transparency?",
    options: [
      'Open-source code',
      'Regular updates and announcements',
      'Community-driven decision making',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation:
      'Clynto ensures transparency through open-source code, updates, and community decisions.',
  },
  {
    question: 'How does the platform handle user privacy?',
    options: [
      'By using encryption for sensitive data',
      'By adhering to privacy laws and regulations',
      'By not collecting personal information',
      'All of the above',
    ],
    correctAnswer: 'By using encryption for sensitive data',
    explanation: 'Clynto handles user privacy by using encryption for sensitive data.',
  },
  {
    question: 'When is the mainnet expected to launch?',
    options: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'],
    correctAnswer: 'Q1 2025',
    explanation: 'The mainnet is scheduled for launch in Q1 2025, pending testnet success.',
  },
  {
    question: 'What new features are planned for the next update?',
    options: [
      'Support for more blockchain networks',
      'Integration with external wallets',
      'Advanced analytics and reporting',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation: 'Planned features include more networks, wallet integrations, and analytics.',
  },
  {
    question: 'Is there a mobile app in development?',
    options: [
      'Yes, expected to launch in 2025',
      'No, the platform is web-only',
      'In planning stages',
      'Released already',
    ],
    correctAnswer: 'Yes, expected to launch in 2025',
    explanation: 'A mobile app is in development, expected to launch in 2025.',
  },
  {
    question: "What is the platform's long-term vision?",
    options: [
      'To become the leading decentralized lending platform',
      'To expand into other DeFi sectors',
      'To foster a decentralized financial ecosystem',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation:
      "Clynto's vision is to lead in lending, expand DeFi sectors, and foster a decentralized ecosystem.",
  },
  {
    question: 'How does the platform plan to handle scalability?',
    options: [
      'By using layer-2 solutions',
      'By optimizing smart contract performance',
      'By migrating to more scalable blockchain networks',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation:
      'Clynto plans to handle scalability with layer-2, optimized contracts, and scalable networks.',
  },
]

export default questionsBank
