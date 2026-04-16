export type PersonalityKey =
  | "boldExplorer"
  | "smoothOperator"
  | "cozyClassic"
  | "wildCard"
  | "brightIdealist"
  | "craftPurist";

export type CoffeeRecommendation = {
  name: string;
  description: string;
};

export type PersonalityProfile = {
  key: PersonalityKey;
  name: string;
  shortLabel: string;
  icon: string;
  image: string;
  accent: string;
  description: string;
  vibe: string;
  coffees: CoffeeRecommendation[];
};

export type QuizOption = {
  text: string;
  personality: PersonalityKey;
};

export type QuizQuestion = {
  id: number;
  prompt: string;
  imageUrl: string;
  imageAlt: string;
  options: QuizOption[];
};

export const personalityOrder: PersonalityKey[] = [
  "boldExplorer",
  "smoothOperator",
  "cozyClassic",
  "wildCard",
  "brightIdealist",
  "craftPurist",
];

export const personalityProfiles: Record<PersonalityKey, PersonalityProfile> = {
  boldExplorer: {
    key: "boldExplorer",
    name: "Bold Explorer",
    shortLabel: "Bold",
    icon: "🔥",
    image: "/results/bold-explorer.svg",
    accent: "#C96A4D",
    vibe: "Intensity, momentum, and strong flavor.",
    description:
      "You want coffee with presence. Bold Explorer personalities gravitate toward high-energy rituals, dramatic flavors, and cups that feel unforgettable from the first sip.",
    coffees: [
      {
        name: "Midnight Summit",
        description: "Dark roast, smoky, and bold with Indonesian depth.",
      },
      {
        name: "Campfire Stories",
        description: "A cozy dark roast with toasted marshmallow energy.",
      },
      {
        name: "Double Down",
        description: "Extra-bold espresso roast with thick crema and no apologies.",
      },
    ],
  },
  smoothOperator: {
    key: "smoothOperator",
    name: "Smooth Operator",
    shortLabel: "Smooth",
    icon: "🌤️",
    image: "/results/smooth-operator.svg",
    accent: "#F6B96D",
    vibe: "Balanced, polished, and quietly excellent.",
    description:
      "You appreciate quality that feels effortless. Smooth Operator personalities love refined, easygoing coffees that are elevated without ever trying too hard.",
    coffees: [
      {
        name: "Velvet Fog",
        description: "Creamy medium-light roast with almond and cocoa notes.",
      },
      {
        name: "Golden Hour",
        description: "Sweet, honey-processed Costa Rican comfort with polish.",
      },
    ],
  },
  cozyClassic: {
    key: "cozyClassic",
    name: "Cozy Classic",
    shortLabel: "Cozy",
    icon: "📚",
    image: "/results/cozy-classic.svg",
    accent: "#FFD5B8",
    vibe: "Warm, familiar, and comfort-first.",
    description:
      "Cozy Classic personalities want coffee to feel like a ritual they can exhale into. You are drawn to softness, warmth, and flavors that feel immediately comforting.",
    coffees: [
      {
        name: "Sunday Paper",
        description: "Hazelnut, vanilla, and easy comfort in one familiar cup.",
      },
      {
        name: "Velvet Fog",
        description: "Gentle, creamy, and mellow enough for slow mornings.",
      },
    ],
  },
  wildCard: {
    key: "wildCard",
    name: "Wild Card",
    shortLabel: "Wild",
    icon: "🎨",
    image: "/results/wild-card.svg",
    accent: "#7C3F54",
    vibe: "Unexpected, curious, and impossible to bore.",
    description:
      "Wild Card personalities want discovery. You are energized by the off-menu pick, the strange micro-lot, and any coffee that feels like a story worth telling.",
    coffees: [
      {
        name: "Wildflower",
        description: "Floral, fruity Ethiopian brightness with personality.",
      },
      {
        name: "Off the Map",
        description: "Experimental rotating micro-lot with surprise built in.",
      },
    ],
  },
  brightIdealist: {
    key: "brightIdealist",
    name: "Bright Idealist",
    shortLabel: "Bright",
    icon: "🌼",
    image: "/results/bright-idealist.svg",
    accent: "#F0CF69",
    vibe: "Fresh, optimistic, and full of light.",
    description:
      "You gravitate toward coffee that feels alive. Bright Idealist personalities love uplifting flavors, energetic mornings, and anything that feels fresh, airy, and expressive.",
    coffees: [
      {
        name: "Golden Hour",
        description: "Sweet, smooth, and sunny with honey-processed warmth.",
      },
      {
        name: "Wildflower",
        description: "A lively floral roast that feels bright from the first sip.",
      },
    ],
  },
  craftPurist: {
    key: "craftPurist",
    name: "Craft Purist",
    shortLabel: "Craft",
    icon: "🛠️",
    image: "/results/craft-purist.svg",
    accent: "#5D3A2C",
    vibe: "Intentional, thoughtful, and detail-rich.",
    description:
      "Craft Purist personalities care about how something is made as much as how it tastes. You are drawn to precision, story, and coffees that feel carefully composed rather than flashy.",
    coffees: [
      {
        name: "Sunrise Blend",
        description: "Balanced caramel-and-chocolate composition with structure.",
      },
      {
        name: "The Purist",
        description: "A clean Kenyan single origin with zero unnecessary noise.",
      },
    ],
  },
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "Your ideal Saturday morning looks like...",
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "A warm coffee setup in soft morning light.",
    options: [
      {
        text: "A strong start, a packed schedule, and coffee that keeps up",
        personality: "boldExplorer",
      },
      {
        text: "Slow music, clean sunlight, and a routine that just feels right",
        personality: "smoothOperator",
      },
      {
        text: "Soft blankets, nowhere to be, and a mug you hold with two hands",
        personality: "cozyClassic",
      },
      {
        text: "Wandering somewhere new with no real plan",
        personality: "wildCard",
      },
      {
        text: "A bright kitchen, fresh air, and something that feels optimistic",
        personality: "brightIdealist",
      },
      {
        text: "A quiet ritual done perfectly, down to the smallest detail",
        personality: "craftPurist",
      },
    ],
  },
  {
    id: 2,
    prompt: "Pick the space that feels most like you.",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "A beautifully designed interior with warm lighting and rich atmosphere.",
    options: [
      { text: "A dramatic rooftop at night", personality: "boldExplorer" },
      {
        text: "A beautifully designed lounge with everything in balance",
        personality: "smoothOperator",
      },
      {
        text: "A cozy cabin with warm lamps and overstuffed chairs",
        personality: "cozyClassic",
      },
      {
        text: "An art gallery opening where you know nobody",
        personality: "wildCard",
      },
      {
        text: "A sunny greenhouse filled with color",
        personality: "brightIdealist",
      },
      {
        text: "A minimalist studio with handcrafted objects",
        personality: "craftPurist",
      },
    ],
  },
  {
    id: 3,
    prompt: "When you try something new, your instinct is to...",
    imageUrl:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "A person choosing between interesting options in a stylish setting.",
    options: [
      { text: "Go bold and commit fully", personality: "boldExplorer" },
      {
        text: "Choose the option that feels polished and reliable",
        personality: "smoothOperator",
      },
      {
        text: "Stick with what sounds comforting and familiar",
        personality: "cozyClassic",
      },
      {
        text: "Pick the weirdest one on the menu",
        personality: "wildCard",
      },
      {
        text: "Go for whatever feels fresh and uplifting",
        personality: "brightIdealist",
      },
      {
        text: "Pick the one that feels the most thoughtfully made",
        personality: "craftPurist",
      },
    ],
  },
  {
    id: 4,
    prompt: "Which phrase sounds most like your energy?",
    imageUrl:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "An artful coffee table scene that feels expressive and personality-driven.",
    options: [
      { text: '"Let’s make it stronger."', personality: "boldExplorer" },
      { text: '"Keep it smooth."', personality: "smoothOperator" },
      { text: '"Make it comforting."', personality: "cozyClassic" },
      { text: '"Surprise me."', personality: "wildCard" },
      { text: '"I want something bright."', personality: "brightIdealist" },
      { text: '"I care how it’s made."', personality: "craftPurist" },
    ],
  },
  {
    id: 5,
    prompt: "Pick a travel vibe.",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "A scenic travel view that suggests exploration and mood.",
    options: [
      {
        text: "Late-night city with intense energy",
        personality: "boldExplorer",
      },
      {
        text: "Stylish boutique hotel with perfect service",
        personality: "smoothOperator",
      },
      {
        text: "Quiet lake house with a fireplace",
        personality: "cozyClassic",
      },
      {
        text: "Remote town you found by accident",
        personality: "wildCard",
      },
      {
        text: "Coastal sunrise and open windows",
        personality: "brightIdealist",
      },
      {
        text: "Thoughtfully planned cultural trip with a curated itinerary",
        personality: "craftPurist",
      },
    ],
  },
  {
    id: 6,
    prompt: "Which kind of gift feels most like you?",
    imageUrl:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Beautifully wrapped gifts arranged with warm, premium styling.",
    options: [
      {
        text: "Something bold and unforgettable",
        personality: "boldExplorer",
      },
      {
        text: "Something elegant you will use all the time",
        personality: "smoothOperator",
      },
      {
        text: "Something soft, warm, and personal",
        personality: "cozyClassic",
      },
      {
        text: "Something unusual no one else would pick",
        personality: "wildCard",
      },
      {
        text: "Something cheerful and full of life",
        personality: "brightIdealist",
      },
      {
        text: "Something handcrafted with a story behind it",
        personality: "craftPurist",
      },
    ],
  },
  {
    id: 7,
    prompt: "Your perfect coffee experience should feel...",
    imageUrl:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "A premium coffee moment with steam, texture, and atmosphere.",
    options: [
      { text: "Intense", personality: "boldExplorer" },
      { text: "Effortless", personality: "smoothOperator" },
      { text: "Comforting", personality: "cozyClassic" },
      { text: "Unexpected", personality: "wildCard" },
      { text: "Vibrant", personality: "brightIdealist" },
      { text: "Intentional", personality: "craftPurist" },
    ],
  },
];
