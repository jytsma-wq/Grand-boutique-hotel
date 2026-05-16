import { type SanityMenuSection } from '@/types/sanity';

export const cocktailSectionKeys = [
  'signature-cocktails',
  'classic-cocktails',
  'non-alcoholic-cocktails',
] as const;

export const spiritSectionKeys = [
  'whiskey-bourbon',
  'vodka',
  'gin',
  'rum',
  'tequila',
  'cognac-brandy',
  'special-spirits',
] as const;

export const wineSectionKeys = [
  'georgian-wines',
  'international-wines',
  'sparkling-champagne',
] as const;

export const breakfastSectionKeys = [
  'breakfast-georgian',
  'breakfast-hot-dishes',
  'breakfast-continental',
  'breakfast-fresh-healthy',
  'breakfast-beverages',
] as const;

export const restaurantMenuSectionKeys = [
  'starters',
  'main-dishes',
  'desserts',
] as const;

export const barMenuFallbackSections: SanityMenuSection[] = [
  {
    sectionKey: 'signature-cocktails',
    title: 'Signature Cocktails',
    subtitle: 'Exclusive creations by our master mixologists',
    items: [
      {
        name: 'Black Sea Sunset',
        priceUsd: 14,
        priceGel: 39,
        description: 'Premium vodka, blackberry liqueur, fresh citrus, and champagne',
        ingredients: 'Vodka, blackberry liqueur, lemon, champagne',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80',
      },
      {
        name: 'Georgian Gold',
        priceUsd: 16,
        priceGel: 44,
        description: 'Chacha, honey, saffron, and local herbs',
        ingredients: 'Chacha, honey, saffron, herbs',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
      },
      {
        name: 'Batumi Breeze',
        priceUsd: 15,
        priceGel: 41,
        description: 'Premium gin, cucumber, fresh mint, and elderflower tonic',
        ingredients: 'Gin, cucumber, mint, elderflower tonic',
        image: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?w=400&q=80',
      },
      {
        name: 'Midnight Hour',
        priceUsd: 18,
        priceGel: 50,
        description: 'Aged whiskey, green tea liqueur, fresh lime, and honey syrup',
        ingredients: 'Whiskey, green tea liqueur, lime, honey',
        image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80',
      },
      {
        name: 'Adjara Mule',
        priceUsd: 13,
        priceGel: 36,
        description: 'Vodka, ginger beer, lime, and fresh mint',
        ingredients: 'Vodka, ginger beer, lime, mint',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80',
      },
      {
        name: 'Tbilisi Sour',
        priceUsd: 14,
        priceGel: 39,
        description: 'Bourbon, lemon juice, egg white, and Georgian cherry syrup',
        ingredients: 'Bourbon, lemon, egg white, cherry syrup',
        image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&q=80',
      },
    ],
  },
  {
    sectionKey: 'classic-cocktails',
    title: 'Classic Cocktails',
    subtitle: 'Timeless favorites, expertly crafted',
    items: [
      { name: 'Mojito', priceUsd: 12, priceGel: 33, description: 'White rum, mint, lime, sugar, soda water' },
      { name: 'Margarita', priceUsd: 13, priceGel: 36, description: 'Tequila, triple sec, lime juice, salt rim' },
      { name: 'Old Fashioned', priceUsd: 15, priceGel: 41, description: 'Bourbon, sugar, bitters, orange peel' },
      { name: 'Negroni', priceUsd: 14, priceGel: 39, description: 'Gin, Campari, sweet vermouth' },
      { name: 'Espresso Martini', priceUsd: 14, priceGel: 39, description: 'Vodka, coffee liqueur, fresh espresso' },
      { name: 'Cosmopolitan', priceUsd: 13, priceGel: 36, description: 'Vodka, triple sec, cranberry, lime' },
      { name: 'Aperol Spritz', priceUsd: 12, priceGel: 33, description: 'Aperol, prosecco, soda water, orange' },
      { name: 'Manhattan', priceUsd: 15, priceGel: 41, description: 'Rye whiskey, sweet vermouth, bitters' },
    ],
  },
  {
    sectionKey: 'non-alcoholic-cocktails',
    title: 'Non-Alcoholic Cocktails',
    subtitle: 'Sophisticated mocktails for every occasion',
    items: [
      { name: 'Virgin Mojito', priceUsd: 8, priceGel: 22, description: 'Fresh mint, lime, sugar, soda water' },
      { name: 'Tropical Punch', priceUsd: 9, priceGel: 25, description: 'Pineapple, mango, passion fruit, coconut' },
      { name: 'Berry Lemonade', priceUsd: 8, priceGel: 22, description: 'Mixed berries, fresh lemon, honey' },
      { name: 'Cucumber Cooler', priceUsd: 7, priceGel: 19, description: 'Cucumber, mint, lime, tonic water' },
    ],
  },
  {
    sectionKey: 'whiskey-bourbon',
    title: 'Whiskey & Bourbon',
    subtitle: 'From Scottish Highlands to American bourbon country',
    items: [
      { name: 'Macallan 12 Year', origin: 'Scotland', priceUsd: 18, priceGel: 50, description: 'Smooth single malt with sherry notes' },
      { name: 'Glenfiddich 18 Year', origin: 'Scotland', priceUsd: 22, priceGel: 61, description: 'Rich and complex Highland whisky' },
      { name: 'Jameson Irish Whiskey', origin: 'Ireland', priceUsd: 12, priceGel: 33, description: 'Triple-distilled, smooth and balanced' },
      { name: "Jack Daniel's", origin: 'USA', priceUsd: 14, priceGel: 39, description: 'Classic Tennessee whiskey' },
      { name: 'Johnnie Walker Blue', origin: 'Scotland', priceUsd: 35, priceGel: 97, description: 'Premium blended Scotch whisky' },
      { name: 'Yamazaki 12 Year', origin: 'Japan', priceUsd: 28, priceGel: 77, description: 'Japanese single malt, elegant and refined' },
    ],
  },
  {
    sectionKey: 'vodka',
    title: 'Vodka',
    subtitle: 'Premium vodkas from around the world',
    items: [
      { name: 'Belvedere', origin: 'Poland', priceUsd: 14, priceGel: 39, description: 'Premium rye vodka, smooth and pure' },
      { name: 'Grey Goose', origin: 'France', priceUsd: 15, priceGel: 41, description: 'French wheat vodka, exceptionally smooth' },
      { name: 'Stolichnaya', origin: 'Russia', priceUsd: 11, priceGel: 30, description: 'Classic Russian vodka' },
      { name: "Tito's Handmade", origin: 'USA', priceUsd: 13, priceGel: 36, description: 'American craft vodka, corn-based' },
      { name: 'Ketel One', origin: 'Netherlands', priceUsd: 14, priceGel: 39, description: 'Dutch vodka, crisp and clean' },
    ],
  },
  {
    sectionKey: 'gin',
    title: 'Gin',
    subtitle: 'Botanical excellence',
    items: [
      { name: "Hendrick's", origin: 'Scotland', priceUsd: 14, priceGel: 39, description: 'Infused with cucumber and rose' },
      { name: 'Tanqueray No. Ten', origin: 'England', priceUsd: 15, priceGel: 41, description: 'Premium London dry gin with citrus' },
      { name: 'Bombay Sapphire', origin: 'England', priceUsd: 13, priceGel: 36, description: 'Classic gin with 10 botanicals' },
      { name: "Gordon's", origin: 'England', priceUsd: 11, priceGel: 30, description: 'Traditional London dry gin' },
      { name: 'Monkey 47', origin: 'Germany', priceUsd: 18, priceGel: 50, description: 'Complex Black Forest gin with 47 botanicals' },
    ],
  },
  {
    sectionKey: 'rum',
    title: 'Rum',
    subtitle: 'Caribbean treasures',
    items: [
      { name: 'Ron Zacapa 23', origin: 'Guatemala', priceUsd: 16, priceGel: 44, description: 'Premium aged rum, rich and smooth' },
      { name: 'Diplomatico Reserva', origin: 'Venezuela', priceUsd: 15, priceGel: 41, description: 'Sweet and complex aged rum' },
      { name: 'Bacardi Superior', origin: 'Puerto Rico', priceUsd: 11, priceGel: 30, description: 'Classic white rum' },
      { name: 'Havana Club 7 Year', origin: 'Cuba', priceUsd: 14, priceGel: 39, description: 'Aged Cuban rum, smooth and balanced' },
      { name: 'Mount Gay XO', origin: 'Barbados', priceUsd: 17, priceGel: 47, description: 'Premium Barbadian rum' },
    ],
  },
  {
    sectionKey: 'tequila',
    title: 'Tequila',
    subtitle: 'Mexican heritage',
    items: [
      { name: 'Don Julio 1942', origin: 'Mexico', priceUsd: 28, priceGel: 77, description: 'Premium anejo tequila, smooth and complex' },
      { name: 'Patron Silver', origin: 'Mexico', priceUsd: 16, priceGel: 44, description: 'Ultra-premium silver tequila' },
      { name: 'Herradura Reposado', origin: 'Mexico', priceUsd: 14, priceGel: 39, description: 'Aged tequila with oak notes' },
      { name: 'Jose Cuervo Tradicional', origin: 'Mexico', priceUsd: 12, priceGel: 33, description: 'Classic Mexican tequila' },
      { name: 'Casamigos Anejo', origin: 'Mexico', priceUsd: 18, priceGel: 50, description: 'Smooth aged tequila' },
    ],
  },
  {
    sectionKey: 'cognac-brandy',
    title: 'Cognac & Brandy',
    subtitle: 'French elegance',
    items: [
      { name: 'Hennessy VS', origin: 'France', priceUsd: 15, priceGel: 41, description: 'Classic French cognac' },
      { name: 'Remy Martin VSOP', origin: 'France', priceUsd: 18, priceGel: 50, description: 'Smooth and balanced cognac' },
      { name: 'Courvoisier XO', origin: 'France', priceUsd: 35, priceGel: 97, description: 'Premium extra old cognac' },
      { name: 'Martell Cordon Bleu', origin: 'France', priceUsd: 32, priceGel: 88, description: 'Rich and complex XO cognac' },
    ],
  },
  {
    sectionKey: 'special-spirits',
    title: 'Special Spirits',
    subtitle: 'Unique selections',
    items: [
      { name: 'Chacha (Georgian Grappa)', origin: 'Georgia', priceUsd: 10, priceGel: 28, description: 'Traditional Georgian grape spirit' },
      { name: 'Absinthe', origin: 'Switzerland', priceUsd: 16, priceGel: 44, description: 'Classic green fairy spirit' },
      { name: 'Jagermeister', origin: 'Germany', priceUsd: 12, priceGel: 33, description: 'Herbal liqueur with 56 botanicals' },
      { name: 'Baileys Irish Cream', origin: 'Ireland', priceUsd: 13, priceGel: 36, description: 'Creamy whiskey liqueur' },
    ],
  },
  {
    sectionKey: 'georgian-wines',
    title: 'Georgian Wines',
    subtitle: 'Discover the ancient winemaking heritage of Georgia, the cradle of wine',
    items: [
      { region: 'Kakheti', name: 'Saperavi', year: '2021', priceUsd: 28, priceGel: 77, description: 'Full-bodied red with dark fruit notes' },
      { region: 'Kakheti', name: 'Rkatsiteli', year: '2022', priceUsd: 24, priceGel: 66, description: 'Crisp white with citrus and floral notes' },
      { region: 'Imereti', name: 'Tsitska', year: '2022', priceUsd: 26, priceGel: 72, description: 'Light white with green apple and pear' },
      { region: 'Adjara', name: 'Chkhaveri', year: '2021', priceUsd: 30, priceGel: 83, description: 'Rare rose with strawberry notes' },
      { region: 'Qvevri Aged', name: 'Amber Blend', year: '2019', priceUsd: 45, priceGel: 124, description: 'Traditional orange wine, complex and tannic' },
      { region: 'Qvevri Aged', name: 'Saperavi Reserve', year: '2018', priceUsd: 55, priceGel: 152, description: 'Premium aged red, oak and leather notes' },
      { region: 'Kakheti', name: 'Kisi', year: '2021', priceUsd: 32, priceGel: 88, description: 'Aromatic white with honey and quince' },
      { region: 'Kartli', name: 'Chinuri', year: '2022', priceUsd: 27, priceGel: 74, description: 'Fresh white with mineral character' },
    ],
  },
  {
    sectionKey: 'international-wines',
    title: 'International Selection',
    subtitle: "Premium wines from the world's finest vineyards",
    items: [
      { region: 'Bordeaux, France', name: 'Chateau Margaux', year: '2018', priceUsd: 180, priceGel: 496, description: 'Premier Cru Classe, elegant and refined' },
      { region: 'Tuscany, Italy', name: 'Brunello di Montalcino', year: '2017', priceUsd: 95, priceGel: 262, description: 'Full-bodied Sangiovese, cherry and spice' },
      { region: 'Rioja, Spain', name: 'Gran Reserva', year: '2015', priceUsd: 68, priceGel: 187, description: 'Aged Tempranillo, vanilla and tobacco' },
      { region: 'Napa Valley, USA', name: 'Cabernet Sauvignon', year: '2019', priceUsd: 85, priceGel: 234, description: 'Bold California red, blackberry and oak' },
      { region: 'Champagne, France', name: 'Dom Perignon', year: '2012', priceUsd: 220, priceGel: 607, description: 'Prestige cuvee, fine bubbles and complexity' },
      { region: 'Mosel, Germany', name: 'Riesling Spatlese', year: '2020', priceUsd: 42, priceGel: 116, description: 'Sweet white with peach and apricot' },
    ],
  },
  {
    sectionKey: 'sparkling-champagne',
    title: 'Sparkling & Champagne',
    subtitle: 'Celebrate with our selection of fine bubbles',
    items: [
      { name: 'Prosecco DOC', origin: 'Veneto, Italy', priceUsd: 38, priceGel: 105, description: 'Light and fruity, perfect aperitif' },
      { name: 'Cava Brut Reserva', origin: 'Catalonia, Spain', priceUsd: 35, priceGel: 96, description: 'Traditional method, crisp and elegant' },
      { name: 'Champagne Brut', origin: 'Champagne, France', priceUsd: 95, priceGel: 262, description: 'Classic French champagne, refined bubbles' },
      { name: 'Georgian Sparkling', origin: 'Kakheti, Georgia', priceUsd: 32, priceGel: 88, description: 'Local sparkling wine, fresh and lively' },
    ],
  },
];

export const restaurantMenuFallbackSections: SanityMenuSection[] = [
  {
    sectionKey: 'breakfast-georgian',
    title: 'Georgian Breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80',
    items: [
      { name: 'Adjarian Khachapuri', description: 'Traditional cheese bread boat with butter and egg', included: true },
      { name: 'Imeruli Khachapuri', description: 'Round cheese-filled flatbread', included: true },
      { name: 'Churchkhela', description: 'Traditional grape and walnut candy', included: true },
      { name: 'Sulguni Cheese', description: 'Fresh Georgian cheese platter', included: true },
    ],
  },
  {
    sectionKey: 'breakfast-hot-dishes',
    title: 'Hot Dishes',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80',
    items: [
      { name: 'Eggs Any Style', description: 'Fried, scrambled, poached, or omelette', included: true },
      { name: 'Shakshuka', description: 'Eggs poached in spiced tomato sauce', included: true },
      { name: 'Pancakes', description: 'Fluffy pancakes with maple syrup', included: true },
      { name: 'French Toast', description: 'Classic with berries and cream', included: true },
    ],
  },
  {
    sectionKey: 'breakfast-continental',
    title: 'Continental Selection',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    items: [
      { name: 'Fresh Croissants', description: 'Butter and chocolate varieties', included: true },
      { name: 'Artisan Breads', description: 'Selection of fresh baked breads', included: true },
      { name: 'Danish Pastries', description: 'Assorted fruit and cream pastries', included: true },
      { name: 'Muffins & Scones', description: 'Blueberry, chocolate, and plain', included: true },
    ],
  },
  {
    sectionKey: 'breakfast-fresh-healthy',
    title: 'Fresh & Healthy',
    image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&q=80',
    items: [
      { name: 'Seasonal Fruits', description: 'Fresh local and imported fruits', included: true },
      { name: 'Greek Yogurt', description: 'With honey and granola', included: true },
      { name: 'Smoothie Bowl', description: 'Acai or tropical blend', included: true },
      { name: 'Avocado Toast', description: 'On sourdough with poached egg', included: true },
    ],
  },
  {
    sectionKey: 'breakfast-beverages',
    title: 'Beverages',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    items: [
      { name: 'Fresh Juices', description: 'Orange, apple, grapefruit, carrot', included: true },
      { name: 'Coffee Selection', description: 'Espresso, cappuccino, latte, americano', included: true },
      { name: 'Premium Teas', description: 'Georgian and international blends', included: true },
      { name: 'Hot Chocolate', description: 'Rich Belgian chocolate', included: true },
    ],
  },
  {
    sectionKey: 'starters',
    title: 'Starters',
    subtitle: 'Begin your culinary journey with our carefully crafted appetizers',
    items: [
      { name: 'Khachapuri Adjarian', priceUsd: 12, priceGel: 33, description: 'Traditional cheese-filled bread boat with egg and butter' },
      { name: 'Badrijani Nigvzit', priceUsd: 9, priceGel: 25, description: 'Eggplant rolls with walnut paste, garlic, and herbs' },
      { name: 'Pkhali Trio', priceUsd: 11, priceGel: 30, description: 'Spinach, beetroot, and bean pates with walnut and spices' },
      { name: 'Lobio', priceUsd: 8, priceGel: 22, description: 'Red kidney beans with herbs, onions, and Georgian spices' },
      { name: 'Stuffed Mussels', priceUsd: 14, priceGel: 39, description: 'Black Sea mussels with rice, herbs, and aromatic spices' },
      { name: 'Salmon Carpaccio', priceUsd: 16, priceGel: 44, description: 'Thinly sliced salmon with citrus, capers, and olive oil' },
      { name: 'Burrata Salad', priceUsd: 13, priceGel: 36, description: 'Fresh burrata with heirloom tomatoes, basil, and balsamic' },
    ],
  },
  {
    sectionKey: 'main-dishes',
    title: 'Main Dishes',
    subtitle: 'Signature dishes showcasing the best of Georgian and international cuisine',
    items: [
      { name: 'Khinkali (8 pcs)', priceUsd: 10, priceGel: 28, description: 'Juicy dumplings with spiced meat filling' },
      { name: 'Chakapuli', priceUsd: 18, priceGel: 50, description: 'Lamb stew with tarragon, plums, and white wine' },
      { name: 'Ojakhuri', priceUsd: 15, priceGel: 41, description: 'Pan-fried pork and potatoes with onions and spices' },
      { name: 'Grilled Sea Bass', priceUsd: 24, priceGel: 66, description: 'Fresh Black Sea bass with herb butter and lemon' },
      { name: 'Trout with Walnut Sauce', priceUsd: 22, priceGel: 61, description: 'Pan-seared trout with traditional Georgian walnut sauce' },
      { name: 'Beef Tenderloin', priceUsd: 32, priceGel: 88, description: 'Premium beef with red wine reduction and roasted vegetables' },
      { name: 'Duck Breast', priceUsd: 28, priceGel: 77, description: 'Cherry-glazed duck with seasonal vegetables' },
      { name: 'Lamb Chops', priceUsd: 30, priceGel: 83, description: 'Grilled lamb chops with rosemary and garlic' },
      { name: 'Risotto with Truffle', priceUsd: 22, priceGel: 61, description: 'Creamy Arborio rice with black truffle and parmesan' },
      { name: 'Chicken Tabaka', priceUsd: 17, priceGel: 47, description: 'Flattened and fried chicken with garlic sauce' },
      { name: 'Vegetarian Platter', priceUsd: 19, priceGel: 52, description: 'Grilled vegetables, hummus, and Georgian specialties' },
      { name: 'Mtsvadi (Shashlik)', priceUsd: 20, priceGel: 55, description: 'Traditional Georgian grilled meat skewers' },
    ],
  },
  {
    sectionKey: 'desserts',
    title: 'Desserts',
    subtitle: 'Sweet endings to complete your dining experience',
    items: [
      { name: 'Churchkhela', priceUsd: 7, priceGel: 19, description: 'Traditional Georgian candy made with grape must and walnuts' },
      { name: 'Pelamushi', priceUsd: 6, priceGel: 17, description: 'Grape pudding with walnuts and cinnamon' },
      { name: 'Gozinaki', priceUsd: 8, priceGel: 22, description: 'Honey-caramelized walnuts and hazelnuts' },
      { name: 'Tiramisu', priceUsd: 10, priceGel: 28, description: 'Classic Italian dessert with mascarpone and espresso' },
      { name: 'Chocolate Fondant', priceUsd: 11, priceGel: 30, description: 'Warm chocolate cake with molten center and vanilla ice cream' },
      { name: 'Panna Cotta', priceUsd: 9, priceGel: 25, description: 'Italian cream dessert with berry compote' },
      { name: 'Baklava', priceUsd: 8, priceGel: 22, description: 'Layered pastry with honey, nuts, and spices' },
    ],
  },
];

export function selectMenuSections(
  sourceSections: SanityMenuSection[] | undefined,
  sectionKeys: readonly string[],
  fallbackSections: SanityMenuSection[],
): SanityMenuSection[] {
  const sourceByKey = new Map(
    sourceSections
      ?.filter((section) => section.sectionKey && section.items?.length)
      .map((section) => [section.sectionKey, section]),
  );
  const fallbackByKey = new Map(fallbackSections.map((section) => [section.sectionKey, section]));

  return sectionKeys.flatMap((key) => {
    const section = sourceByKey.get(key) ?? fallbackByKey.get(key);
    return section ? [section] : [];
  });
}

export function formatUsdPrice(price: number | undefined): string {
  return typeof price === 'number' ? `$${price}` : '';
}

export function formatGelPrice(price: number | undefined): string {
  return typeof price === 'number' ? `${price} GEL` : '';
}
