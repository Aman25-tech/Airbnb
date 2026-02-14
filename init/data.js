const sampleListings = [
  // ===================== TRENDING (10) =====================
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
    price: 1500, location: "Malibu", country: "United States", category: "Trending",
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
    price: 1200, location: "New York City", country: "United States", category: "Trending",
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
    price: 800, location: "Portland", country: "United States", category: "Trending",
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
    price: 3500, location: "Los Angeles", country: "United States", category: "Trending",
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    price: 1600, location: "Miami", country: "United States", category: "Trending",
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
    price: 10000, location: "Fiji", country: "Fiji", category: "Trending",
  },
  {
    title: "Desert Oasis in Dubai",
    description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
    price: 5000, location: "Dubai", country: "United Arab Emirates", category: "Trending",
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
    price: 6000, location: "Maldives", country: "Maldives", category: "Trending",
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    price: 2000, location: "Tokyo", country: "Japan", category: "Trending",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
    price: 750, location: "Costa Rica", country: "Costa Rica", category: "Trending",
  },

  // ===================== ROOMS (9) =====================
  {
    title: "Boutique Room in Paris",
    description: "A beautifully decorated room in a charming Parisian hotel, steps from the Eiffel Tower.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    price: 2500, location: "Paris", country: "France", category: "Rooms",
  },
  {
    title: "Cozy Room in a Heritage Home",
    description: "Stay in a charming heritage home with period furnishings and modern amenities.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    price: 1000, location: "Charleston", country: "United States", category: "Rooms",
  },
  {
    title: "Minimalist Room in Berlin",
    description: "A sleek, modern room in trendy Kreuzberg with designer furnishings.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 900, location: "Berlin", country: "Germany", category: "Rooms",
  },
  {
    title: "Luxury Suite in Singapore",
    description: "Enjoy panoramic views of Marina Bay from this opulent hotel suite.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 4500, location: "Singapore", country: "Singapore", category: "Rooms",
  },
  {
    title: "Traditional Ryokan Room in Kyoto",
    description: "Experience traditional Japanese hospitality with tatami mats and a private onsen.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 3000, location: "Kyoto", country: "Japan", category: "Rooms",
  },
  {
    title: "Penthouse Room in Manhattan",
    description: "Stay atop a luxury skyscraper with floor-to-ceiling windows overlooking Central Park.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 5500, location: "New York City", country: "United States", category: "Rooms",
  },
  {
    title: "Colonial Room in Havana",
    description: "A colorful room in a restored colonial mansion in the heart of Old Havana.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 600, location: "Havana", country: "Cuba", category: "Rooms",
  },
  {
    title: "Stylish Loft Room in Amsterdam",
    description: "A canal-view loft room with exposed brick and contemporary Dutch design.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1800, location: "Amsterdam", country: "Netherlands", category: "Rooms",
  },
  {
    title: "Designer Room in Milan",
    description: "A fashion-forward room in Milan's design district with Italian luxury touches.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2200, location: "Milan", country: "Italy", category: "Rooms",
  },

  // ===================== ICONIC CITIES (9) =====================
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    price: 2200, location: "Boston", country: "United States", category: "Iconic Cities",
  },
  {
    title: "Flat with Big Ben Views",
    description: "Wake up to views of the iconic Big Ben from this stylish London flat.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 3000, location: "London", country: "United Kingdom", category: "Iconic Cities",
  },
  {
    title: "Apartment near the Colosseum",
    description: "Stay steps from the ancient Colosseum in this beautifully appointed Roman apartment.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2800, location: "Rome", country: "Italy", category: "Iconic Cities",
  },
  {
    title: "Condo overlooking Sydney Harbour",
    description: "Spectacular views of the Opera House and Harbour Bridge from your private balcony.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 3500, location: "Sydney", country: "Australia", category: "Iconic Cities",
  },
  {
    title: "Loft near Times Square",
    description: "Be in the center of the action in this modern loft near dazzling Times Square.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2600, location: "New York City", country: "United States", category: "Iconic Cities",
  },
  {
    title: "Apartment on the Champs-Élysées",
    description: "Live the Parisian dream on the most famous avenue in the world.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 4000, location: "Paris", country: "France", category: "Iconic Cities",
  },
  {
    title: "Penthouse in Hong Kong",
    description: "Stunning skyline views from a luxury penthouse in Victoria Peak.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 4500, location: "Hong Kong", country: "China", category: "Iconic Cities",
  },
  {
    title: "Studio near the Acropolis",
    description: "Ancient history at your doorstep in this cozy Athens studio apartment.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1400, location: "Athens", country: "Greece", category: "Iconic Cities",
  },
  {
    title: "Riverside Flat in Prague",
    description: "A charming flat overlooking the Vltava River and the Charles Bridge.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1100, location: "Prague", country: "Czech Republic", category: "Iconic Cities",
  },

  // ===================== MOUNTAINS (10) =====================
  {
    title: "Mountain Retreat in Aspen",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    price: 1000, location: "Aspen", country: "United States", category: "Mountains",
  },
  {
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    price: 1500, location: "Banff", country: "Canada", category: "Mountains",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    price: 3000, location: "Verbier", country: "Switzerland", category: "Mountains",
  },
  {
    title: "Ski Chalet in Aspen",
    description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
    price: 4000, location: "Aspen", country: "United States", category: "Mountains",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    price: 1100, location: "Montana", country: "United States", category: "Mountains",
  },
  {
    title: "Alpine Lodge in Zermatt",
    description: "Stay at the foot of the Matterhorn in this cozy alpine lodge with panoramic views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    price: 3500, location: "Zermatt", country: "Switzerland", category: "Mountains",
  },
  {
    title: "Himalayan Mountain House",
    description: "A remote mountain retreat in the foothills of the Himalayas with stunning valley views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 800, location: "Manali", country: "India", category: "Mountains",
  },
  {
    title: "Chalet in Chamonix",
    description: "A traditional French chalet at the base of Mont Blanc, perfect for skiing and hiking.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2800, location: "Chamonix", country: "France", category: "Mountains",
  },
  {
    title: "Patagonia Mountain Cabin",
    description: "A rustic cabin surrounded by the dramatic peaks and glaciers of Patagonia.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1200, location: "El Chaltén", country: "Argentina", category: "Mountains",
  },
  {
    title: "Rocky Mountain Retreat",
    description: "A luxury cabin nestled deep in the Colorado Rocky Mountains with hot tub and fireplace.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2200, location: "Colorado Springs", country: "United States", category: "Mountains",
  },

  // ===================== CASTLES (9) =====================
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle in the Scottish Highlands.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
    price: 4000, location: "Scottish Highlands", country: "United Kingdom", category: "Castles",
  },
  {
    title: "Medieval Castle in Ireland",
    description: "Experience medieval grandeur in this restored Irish castle with a private tower.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 3500, location: "Galway", country: "Ireland", category: "Castles",
  },
  {
    title: "Château in the Loire Valley",
    description: "Stay in a grand French château surrounded by vineyards and formal gardens.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 5000, location: "Loire Valley", country: "France", category: "Castles",
  },
  {
    title: "Fairy-Tale Castle in Bavaria",
    description: "A stunning Bavarian castle that inspired Disney, nestled in the alpine forest.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 4500, location: "Füssen", country: "Germany", category: "Castles",
  },
  {
    title: "Moorish Palace in Spain",
    description: "Experience the ornate beauty of a Moorish-inspired palace in southern Spain.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1512753360435-329c4535a9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 3800, location: "Granada", country: "Spain", category: "Castles",
  },
  {
    title: "Hilltop Castle in Tuscany",
    description: "A romantic Tuscan castle perched on a hill with olive groves and panoramic views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 4200, location: "Florence", country: "Italy", category: "Castles",
  },
  {
    title: "Castle on the Rhine",
    description: "A riverside castle overlooking the Rhine Valley with centuries of history.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1546268060-5765e8f2f8ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 3200, location: "Rhine Valley", country: "Germany", category: "Castles",
  },
  {
    title: "Gothic Castle in Transylvania",
    description: "Channel your inner vampire in this mysterious Gothic castle deep in the Carpathian Mountains.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1569959220744-ff553533f492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2000, location: "Bran", country: "Romania", category: "Castles",
  },
  {
    title: "Coastal Fortress in Portugal",
    description: "A converted fortress on the Atlantic coast with crashing waves and sea views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2800, location: "Sintra", country: "Portugal", category: "Castles",
  },

  // ===================== ARCTIC (9) =====================
  {
    title: "Glass Igloo in Finland",
    description: "Watch the Northern Lights from the comfort of your heated glass igloo in Finnish Lapland.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 3500, location: "Rovaniemi", country: "Finland", category: "Arctic",
  },
  {
    title: "Ice Hotel Suite in Sweden",
    description: "Sleep in a room carved entirely from ice and snow in the original Ice Hotel.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 4000, location: "Jukkasjärvi", country: "Sweden", category: "Arctic",
  },
  {
    title: "Arctic Lodge in Norway",
    description: "A warm timber lodge beyond the Arctic Circle with fjord views and dog sledding.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2800, location: "Tromsø", country: "Norway", category: "Arctic",
  },
  {
    title: "Aurora Cabin in Iceland",
    description: "A cozy cabin perched on an Icelandic lava field, perfect for aurora viewing.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2500, location: "Reykjavik", country: "Iceland", category: "Arctic",
  },
  {
    title: "Snowcapped Chalet in Greenland",
    description: "A remote chalet surrounded by icebergs and the vast Greenlandic ice sheet.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 3000, location: "Ilulissat", country: "Greenland", category: "Arctic",
  },
  {
    title: "Wilderness Cabin in Alaska",
    description: "A rugged off-grid cabin in the Alaskan wilderness with views of Denali.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1530878902700-5ad4f9e4c318?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1800, location: "Denali", country: "United States", category: "Arctic",
  },
  {
    title: "Polar Expedition Base Camp",
    description: "Stay in a converted polar research station on Svalbard with midnight sun in summer.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 5000, location: "Svalbard", country: "Norway", category: "Arctic",
  },
  {
    title: "Northern Lights Dome in Lapland",
    description: "A luxury heated dome for the ultimate northern lights viewing experience.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 3200, location: "Saariselkä", country: "Finland", category: "Arctic",
  },
  {
    title: "Fjord-side Cottage in Norway",
    description: "A traditional red timber cottage on the edge of a dramatic Norwegian fjord.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2000, location: "Geirangerfjord", country: "Norway", category: "Arctic",
  },

  // ===================== CAMPING (9) =====================
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
    price: 4000, location: "Serengeti National Park", country: "Tanzania", category: "Camping",
  },
  {
    title: "Glamping Tent in Rajasthan",
    description: "A luxurious desert glamping experience under the stars of the Thar Desert.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
    price: 1200, location: "Jaisalmer", country: "India", category: "Camping",
  },
  {
    title: "Lakeside Yurt in Vermont",
    description: "A fully furnished yurt on a peaceful lake with canoeing and campfire under the stars.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
    price: 700, location: "Vermont", country: "United States", category: "Camping",
  },
  {
    title: "Luxury Safari Camp in Kenya",
    description: "A tented safari camp in the Masai Mara with wildlife at your doorstep.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 3500, location: "Masai Mara", country: "Kenya", category: "Camping",
  },
  {
    title: "Treehouse Camping in Oregon",
    description: "Camp among giant redwoods in an elevated treehouse platform with forest views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 500, location: "Portland", country: "United States", category: "Camping",
  },
  {
    title: "Desert Glamping in Morocco",
    description: "A luxury tent in the Sahara with camel rides and stargazing in the desert.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1500, location: "Merzouga", country: "Morocco", category: "Camping",
  },
  {
    title: "Wilderness Camp in Patagonia",
    description: "A remote backcountry camp at the edge of Torres del Paine National Park.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 900, location: "Torres del Paine", country: "Chile", category: "Camping",
  },
  {
    title: "Bubble Tent in Australia",
    description: "Sleep under the Milky Way in a transparent bubble tent in the Australian outback.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1800, location: "Mudgee", country: "Australia", category: "Camping",
  },
  {
    title: "Forest Cabin Camping in Sweden",
    description: "A minimalist forest cabin with outdoor sauna and hiking trails in Swedish wilderness.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 650, location: "Dalarna", country: "Sweden", category: "Camping",
  },

  // ===================== FARMS (9) =====================
  {
    title: "Tuscan Vineyard Estate",
    description: "Stay on a working vineyard in Tuscany and enjoy wine tastings and Italian cuisine.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1523528283115-9bf9b1699245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2200, location: "Chianti", country: "Italy", category: "Farms",
  },
  {
    title: "Lavender Farm in Provence",
    description: "A charming farmhouse surrounded by endless fields of fragrant lavender.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1800, location: "Provence", country: "France", category: "Farms",
  },
  {
    title: "Organic Farm in Vermont",
    description: "A working organic farm with fresh produce, farm animals, and maple syrup making.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 900, location: "Stowe", country: "United States", category: "Farms",
  },
  {
    title: "Tea Plantation Stay in Sri Lanka",
    description: "Wake up to misty mountain views on a historic tea plantation in the hill country.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 600, location: "Ella", country: "Sri Lanka", category: "Farms",
  },
  {
    title: "Ranch Stay in Texas",
    description: "Experience cowboy life on a working cattle ranch with horseback riding and BBQ.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1500, location: "Austin", country: "United States", category: "Farms",
  },
  {
    title: "Olive Grove Farmhouse in Greece",
    description: "A stone farmhouse in a centuries-old olive grove with Mediterranean views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1100, location: "Crete", country: "Greece", category: "Farms",
  },
  {
    title: "Sheep Farm in New Zealand",
    description: "Stay on a sprawling sheep farm in the rolling green hills of New Zealand.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 800, location: "Queenstown", country: "New Zealand", category: "Farms",
  },
  {
    title: "Coffee Plantation in Colombia",
    description: "Learn the art of coffee on a working plantation in Colombia's coffee triangle.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 700, location: "Salento", country: "Colombia", category: "Farms",
  },
  {
    title: "Agritourism Estate in Napa Valley",
    description: "A luxury farmhouse on a Napa Valley estate with private wine cellar.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 3500, location: "Napa Valley", country: "United States", category: "Farms",
  },

  // ===================== BEACHES (9) =====================
  {
    title: "Beachfront Paradise in Cancun",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
    price: 2000, location: "Cancun", country: "Mexico", category: "Beaches",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
    price: 1800, location: "Bali", country: "Indonesia", category: "Beaches",
  },
  {
    title: "Beachfront Villa in Greece",
    description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
    price: 2500, location: "Mykonos", country: "Greece", category: "Beaches",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
    price: 1800, location: "Santa Teresa", country: "Costa Rica", category: "Beaches",
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    price: 3000, location: "Phuket", country: "Thailand", category: "Beaches",
  },
  {
    title: "Seaside Cottage in the Amalfi Coast",
    description: "A cliffside cottage overlooking the turquoise waters of the Amalfi Coast.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2800, location: "Positano", country: "Italy", category: "Beaches",
  },
  {
    title: "Overwater Bungalow in Tahiti",
    description: "Stay in an iconic overwater bungalow in the crystal-clear lagoon of Bora Bora.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 7000, location: "Bora Bora", country: "French Polynesia", category: "Beaches",
  },
  {
    title: "Beach Cabana in Zanzibar",
    description: "A thatched-roof cabana on the white sands of Zanzibar with Indian Ocean views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1200, location: "Zanzibar", country: "Tanzania", category: "Beaches",
  },
  {
    title: "Surf Shack in Hawaii",
    description: "A laid-back surf shack steps from the famous North Shore breaks of Oahu.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1600, location: "Oahu", country: "United States", category: "Beaches",
  },

  // ===================== DOMES (9) =====================
  {
    title: "Geodesic Dome in Joshua Tree",
    description: "A stunning geodesic dome retreat in the desert landscape of Joshua Tree.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    price: 1600, location: "Joshua Tree", country: "United States", category: "Domes",
  },
  {
    title: "Eco Dome in the Scottish Highlands",
    description: "A sustainable eco-dome with grass roof and panoramic highland views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1400, location: "Inverness", country: "United Kingdom", category: "Domes",
  },
  {
    title: "Stargazing Dome in Chile",
    description: "A transparent dome in the Atacama Desert — one of the best stargazing spots on Earth.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2000, location: "Atacama", country: "Chile", category: "Domes",
  },
  {
    title: "Forest Dome in Costa Rica",
    description: "A luxury dome nestled in the Costa Rican cloud forest with howler monkeys.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1100, location: "Monteverde", country: "Costa Rica", category: "Domes",
  },
  {
    title: "Volcano View Dome in Bali",
    description: "Wake up to views of Mount Agung from this bamboo dome in the rice paddies.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 900, location: "Ubud", country: "Indonesia", category: "Domes",
  },
  {
    title: "Arctic Dome in Finnish Lapland",
    description: "A heated glass dome for the ultimate aurora borealis experience in Lapland.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 3000, location: "Kakslauttanen", country: "Finland", category: "Domes",
  },
  {
    title: "Mountain Dome in Wanaka",
    description: "A luxury dome with mountain and lake views in the adventure capital of New Zealand.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1800, location: "Wanaka", country: "New Zealand", category: "Domes",
  },
  {
    title: "Desert Dome in Arizona",
    description: "A minimalist desert dome with floor-to-ceiling windows and Sedona red rock views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1500, location: "Sedona", country: "United States", category: "Domes",
  },
  {
    title: "Vineyard Dome in South Africa",
    description: "A luxury dome on a wine estate in the Cape Winelands with Table Mountain views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2200, location: "Stellenbosch", country: "South Africa", category: "Domes",
  },

  // ===================== BOATS (9) =====================
  {
    title: "Historic Canal House Boat",
    description: "Stay in a beautifully preserved canal houseboat in Amsterdam's iconic district.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1800, location: "Amsterdam", country: "Netherlands", category: "Boats",
  },
  {
    title: "Luxury Yacht in Monaco",
    description: "Live the high life on a luxury yacht docked in Port Hercules, Monaco.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 8000, location: "Monaco", country: "Monaco", category: "Boats",
  },
  {
    title: "Houseboat in Kerala Backwaters",
    description: "Cruise the tranquil backwaters of Kerala on a traditional kettuvallam houseboat.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 600, location: "Alleppey", country: "India", category: "Boats",
  },
  {
    title: "Sailing Catamaran in the Caribbean",
    description: "Sail through the turquoise waters of the Caribbean on a spacious catamaran.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1500930287596-c1ecaa210c4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 5000, location: "St. Lucia", country: "Saint Lucia", category: "Boats",
  },
  {
    title: "Floating Villa in Thailand",
    description: "A floating villa on the emerald waters of Cheow Lan Lake in Khao Sok.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1540202404-a2f29016b523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1200, location: "Khao Sok", country: "Thailand", category: "Boats",
  },
  {
    title: "River Barge in Paris",
    description: "A converted river barge moored on the Seine with views of Notre-Dame.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2500, location: "Paris", country: "France", category: "Boats",
  },
  {
    title: "Converted Fishing Boat in Portugal",
    description: "A lovingly restored fishing boat in the Algarve, perfect for coastal exploration.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 900, location: "Lagos", country: "Portugal", category: "Boats",
  },
  {
    title: "Traditional Dhow in Zanzibar",
    description: "Sail on a traditional wooden dhow along the coast of Zanzibar at sunset.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 800, location: "Stone Town", country: "Tanzania", category: "Boats",
  },
  {
    title: "Charming Cottage on the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1200, location: "Cotswolds", country: "United Kingdom", category: "Boats",
  },
];

module.exports = { data: sampleListings };