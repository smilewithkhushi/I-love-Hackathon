import {
    Brain,
    Globe,
    Heart,
    TreePine,
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
        title: "Decentralized Finance",
        icon: DollarSign,
        color: 'bg-blue-500',
        gradient: 'from-blue-500 to-cyan-500',
        description: 'Create financial solutions using decentralized technologies. Explore opportunities in lending, borrowing, and trading.',
        topics: ['Lending Protocols', 'Automated Market Makers', 'Yield Farming', 'Stablecoins']
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
        id: 1,
        title: 'AI & Machine Learning',
        icon: Brain,
        color: 'bg-purple-500',
        gradient: 'from-purple-500 to-blue-500',
        description: 'Build innovative solutions using artificial intelligence and machine learning algorithms. Focus on real-world applications that can make a difference.',
        topics: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Neural Networks']
    },
    {
        id: 2,
        title: 'Sustainability',
        icon: TreePine,
        color: 'bg-green-500',
        gradient: 'from-green-500 to-emerald-500',
        description: 'Create solutions for environmental challenges. Focus on renewable energy, waste reduction, and sustainable practices.',
        topics: ['Clean Energy', 'Waste Management', 'Carbon Footprint', 'Smart Cities']
    },
    {
        id: 3,
        title: 'Healthcare Tech',
        icon: Heart,
        color: 'bg-red-500',
        gradient: 'from-red-500 to-pink-500',
        description: 'Develop innovative healthcare solutions using technology. Address medical challenges and improve patient care.',
        topics: ['Telemedicine', 'Health Monitoring', 'Medical Data Analysis', 'Patient Care']
    },
    {
        id: 4,
        title: 'Cybersecurity',
        icon: ShieldCheck,
        color: 'bg-blue-500',
        gradient: 'from-blue-500 to-cyan-500',
        description: 'Build solutions for digital security and privacy. Protect data and systems from cyber threats.',
        topics: ['Network Security', 'Data Privacy', 'Blockchain', 'Authentication']
    }
];


export default themes;