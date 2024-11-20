import {
    Globe,
    ShieldCheck,
    LuggageIcon,
    DollarSign,
    Building2Icon
} from 'lucide-react';

const themes = [
    {
        id: 5,
        title: 'Web3 and Blockchain',
        icon: Globe,
        color: 'bg-yellow-500',
        gradient: 'from-yellow-500 to-amber-500',
        description: 'Create decentralized applications using blockchain technology. Explore the potential of Web3 and build innovative solutions.',
        topics: ['Smart Contracts', 'Decentralized Finance', 'NFTs', 'Blockchain Interoperability']
    },
    {
        id: 6,
        title: "Real World Assets",
        icon: Building2Icon,
        color: 'bg-indigo-500',
        gradient: 'from-indigo-500 to-purple-500',
        description: 'Build solutions for real-world assets and industries. Explore opportunities in finance, real estate, and supply chain.',
        topics: ['Asset Tokenization', 'Supply Chain Tracking', 'Real Estate', 'Digital Identity']
    },
    {
        id: 7,
        title: "Banking and Finance (BFSI)",
        icon: DollarSign,
        color: 'bg-blue-500',
        gradient: 'from-blue-500 to-cyan-500',
        description: 'Create financial solutions using decentralized technologies. Explore opportunities in lending, borrowing, and trading.',
        topics: ['Lending Protocols', 'Automated Market Makers', 'Yield Farming', 'Stablecoins', "DeFi", "CeFi"]
    },
    {
        id: 8,
        title: "Travel",
        icon: LuggageIcon,
        color: 'bg-green-500',
        gradient: 'from-green-500 to-emerald-500',
        description: 'Build solutions for the travel industry through web3 innovation. Explore opportunities in tourism, transportation, and hospitality.',
        topics: ['Flight Booking', 'Hotel Reservations', 'Travel Insurance', 'Sustainable Tourism']
    },
    {
        id: 9,
        title: "Gaming",
        icon: ShieldCheck,
        color: 'bg-red-500',
        gradient: 'from-red-500 to-rose-500',
        description: 'Create games using blockchain technology. Explore the potential of play-to-earn and decentralized gaming.',
        topics: ['NFT Gaming', 'Play-to-Earn', 'GameFi', 'Decentralized Virtual Worlds']
    },
];


export default themes;