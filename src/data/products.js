// Product catalogue for Lakshmi Engineering Products
// Each product follows:
// { id, name, image, description, category }

const products = [
  {
    id: 1,
    name: "2 IN 1 PULVARISER",
    image: "2 IN 1 PULVARISER MODEL.jpeg",
    description:
      "Versatile 2-in-1 pulveriser designed for efficient grinding and processing of a variety of food materials.",
    category: "PULVARISER",
  },

  {
    id: 2,
    name: "AATA KNEADER",
    image: "AATA KNEADER.jpg.jpeg",
    description:
      "Heavy-duty dough kneader designed for quick and uniform mixing of wheat flour and other dough ingredients.",
    category: "KNEADER",
  },

  {
    id: 3,
    name: "APPALAM PAPPADAM CUTTING MACHINE",
    image: "APPALAM PAPPADAM CUTTING MACHINE 1.jpg.jpeg",
    description:
      "Efficient cutting machine designed for uniform sizing and high-volume production of appalam and pappadam.",
    category: "MACHINE",
  },

  {
    id: 4,
    name: "BANANA SLICER",
    image: "BANANA SLICER.jpg.jpeg",
    description:
      "Food-processing machine designed to produce fast, consistent and uniform banana slices for commercial production.",
    category: "SLICER",
  },

  {
    id: 5,
    name: "CHILLY CUTTER PULVARISER",
    image: "CHILLY CUTTER PULVARISER.JPG.jpeg",
    description:
      "Multi-purpose machine designed for cutting and pulverising dry chillies efficiently for commercial food processing.",
    category: "PULVARISER",
  },

  {
    id: 6,
    name: "COCONUT SCRUBBER",
    image: "COCONUT SCRUBBER.jpeg",
    description:
      "Efficient coconut cleaning and scrubbing machine designed to reduce manual effort and improve processing speed.",
    category: "SCRUBBER",
  },

  {
    id: 7,
    name: "COMMERCIAL GRINDER",
    image: "COMMERCIAL GRINDER.jpeg",
    description:
      "High-performance commercial grinder designed for efficient grinding of various food ingredients in bulk quantities.",
    category: "GRINDER",
  },

  {
    id: 8,
    name: "COMMERCIAL MIXER",
    image: "COMMERCIAL MIXER.jpg.jpeg",
    description:
      "Heavy-duty commercial mixer designed for consistent and efficient mixing of food ingredients and preparations.",
    category: "MIXER",
  },

  {
    id: 9,
    name: "DOUGH KNEADER",
    image: "DOUGH KNEADER.jpg.jpeg",
    description:
      "Commercial dough kneader designed to provide uniform mixing and kneading for bakeries, hotels and food businesses.",
    category: "KNEADER",
  },

  {
    id: 10,
    name: "INSTANT RICE GRINDER",
    image: "INSTANT RICE GRINDER.jpeg",
    description:
      "Fast and efficient rice grinding machine designed for convenient preparation of rice-based ingredients and batter.",
    category: "GRINDER",
  },

  {
    id: 11,
    name: "KUBOOSE MACHINE COOLING CONVEYER",
    image: "KUBOOSE MACHINE COOLING CONVEYER.jpg.jpeg",
    description:
      "Cooling conveyor system designed to move and cool processed food products efficiently during production.",
    category: "CONVEYER",
  },

  {
    id: 12,
    name: "MASALA GRINDING MACHINE",
    image: "MASALA GRINDING MACHINE 2.jpg.jpeg",
    description:
      "Powerful grinding machine designed for processing spices and masala ingredients into a consistent texture.",
    category: "MACHINE",
  },

  {
    id: 13,
    name: "MASALA PACKING MACHINE",
    image: "MASALA PACKING MACHINE.jpg.jpeg",
    description:
      "Commercial packing machine designed for efficient and consistent packaging of masala and powdered food products.",
    category: "MACHINE",
  },

  {
    id: 14,
    name: "PANI POORI MACHINE",
    image: "PANI POORI MACHINE.jpeg",
    description:
      "Specialized pani poori production machine designed to support consistent and efficient commercial snack preparation.",
    category: "MACHINE",
  },

  {
    id: 15,
    name: "PAPPADAM CUTTING MACHINE",
    image: "PAPPADAM CUTTING MACHINE.jpg.jpeg",
    description:
      "Production-oriented cutting machine designed to deliver uniform pappadam shapes and sizes with improved efficiency.",
    category: "MACHINE",
  },

  {
    id: 16,
    name: "PAPPADAM DRYER",
    image: "PAPPADAM DRYER 1.jpg.jpeg",
    description:
      "Dedicated drying machine designed to provide efficient and consistent drying of pappadam before packaging or further processing.",
    category: "MACHINE",
  },

  {
    id: 17,
    name: "PAROTTA CUTTING MACHINE",
    image: "PAROTTA SHEETER MACHINE.jpg.jpeg",
    description:
      "Commercial parotta cutting machine designed to provide consistent cutting and improve production efficiency.",
    category: "MACHINE",
  },

  {
    id: 18,
    name: "PAROTTA SHEETER MACHINE",
    image: "PAROTTA SHEETER.jpg.jpeg",
    description:
      "Efficient sheeting machine designed to produce uniform parotta sheets quickly for commercial food production.",
    category: "MACHINE",
  },

  {
    id: 19,
    name: "PLATE MILL",
    image: "PLATE MILL.JPG.jpeg",
    description:
      "Commercial plate mill designed for efficient grinding and processing of food ingredients for large-scale operations.",
    category: "MACHINE",
  },

  {
    id: 20,
    name: "POTATO PEELER",
    image: "POTATO PEELER.jpg.jpeg",
    description:
      "Commercial potato peeling machine designed for quick and efficient peeling while reducing manual preparation time.",
    category: "MACHINE",
  },

  {
    id: 21,
    name: "PULVARISER MS MODEL",
    image: "PULVARISER MS MODEL.jpg.jpeg",
    description:
      "MS-body pulveriser designed for efficient grinding and pulverising of a wide range of food materials.",
    category: "MACHINE",
  },

  {
    id: 22,
    name: "PULVARISER",
    image: "PULVARISER.jpeg",
    description:
      "Heavy-duty pulveriser designed for fast and uniform grinding of grains, spices and other food ingredients.",
    category: "MACHINE",
  },

  {
    id: 23,
    name: "ROTARY TYPE CHAPPATHI MACHINE",
    image: "ROTARY TYPE CHAPPATHI MACHINE.jpg.jpeg",
    description:
      "Rotary-type chapathi machine designed for efficient and consistent production of uniform chapathis in commercial kitchens.",
    category: "MACHINE",
  },

  {
    id: 24,
    name: "SEMI AUTOMATIC CHAPATHI MACHINE",
    image: "SEMI AUTOMATIC CHAPATHI MACHINE.jpeg",
    description:
      "Semi-automatic chapathi machine designed to streamline dough pressing and chapathi production for commercial use.",
    category: "MACHINE",
  },

  {
    id: 25,
    name: "SEMI COOKED CHAPPATHI MAKING MACHINE PRESSING TYPE",
    image:
      "SEMI COOKED CHAPPATHI MAKING MACHINE PRESSING TYPE.jpeg",
    description:
      "Pressing-type machine designed for efficient production of uniformly shaped semi-cooked chapathis.",
    category: "MACHINE",
  },

  {
    id: 26,
    name: "U TYPE BLENDER",
    image: "U TYPE BLENDER.jpg.jpeg",
    description:
      "U-type industrial blender designed for thorough and uniform mixing of food ingredients and dry or semi-dry materials.",
    category: "MACHINE",
  },

  {
    id: 27,
    name: "VATTU PATHIRI MACHINE",
    image: "VATTU PATHIRI MACHINE.jpg.jpeg",
    description:
      "Specialized food-processing machine designed to simplify and speed up the preparation of vattu pathiri for commercial production.",
    category: "MACHINE",
  },

  {
    id: 28,
    name: "VEGETABLE CUTTER (500 KG)",
    image: "VEGETABLE CUTTER (500 KG ).jpg.jpeg",
    description:
      "High-capacity vegetable cutting machine designed for processing up to 500 kg and producing consistent cuts for commercial operations.",
    category: "MACHINE",
  },

  {
    id: 29,
    name: "VEGETABLE CUTTER REGULAR",
    image: "VEGETABLE CUTTER.jpg.jpeg",
    description:
      "Regular commercial vegetable cutter designed for fast, uniform and efficient cutting of a variety of vegetables.",
    category: "MACHINE",
  },

  {
    id: 30,
    name: "AUGER FILLING MACHINE",
    image: "auger-filling-machine-jpg.jpg.jpeg",
    description:
      "Auger filling machine designed for accurate and efficient filling of powders and fine food products into containers or packages.",
    category: "MACHINE",
  },
];

export default products;