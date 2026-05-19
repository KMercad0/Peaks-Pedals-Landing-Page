export const APARTMENT_COORDS = { lat: 12.7044247, lng: 124.0315898 } as const;

export type LandmarkCategory = "Food" | "Shops" | "Sights" | "Services";

export type Landmark = {
  id: string;
  name: string;
  category: LandmarkCategory;
  lat: number;
  lng: number;
  description?: string;
  mapsUrl?: string;
};

export type CategoryIconName =
  | "UtensilsCrossed"
  | "ShoppingBag"
  | "Mountain"
  | "Stethoscope";

export const categories: { key: LandmarkCategory; icon: CategoryIconName }[] = [
  { key: "Food", icon: "UtensilsCrossed" },
  { key: "Shops", icon: "ShoppingBag" },
  { key: "Sights", icon: "Mountain" },
  { key: "Services", icon: "Stethoscope" },
];

export const allCategories: LandmarkCategory[] = categories.map((c) => c.key);

// Haversine distance in meters between two lat/lng points.
export function distanceMeters(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number }
): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

// Owner: add landmarks below. To get lat/lng, right-click a spot on Google Maps
// and click the coordinates to copy them. Use a stable kebab-case id.
// mapsUrl: directions deep-link — opens Google Maps app natively on mobile.
const mapsDir = (lat: number, lng: number) =>
  `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

export const landmarks: Landmark[] = [
  // Food
  { id: "ka-pampi-lechon-manok", name: "Ka Pampi Lechon Manok", category: "Food", lat: 12.7047168, lng: 124.0315005, mapsUrl: mapsDir(12.7047168, 124.0315005) },
  { id: "barbeque-stall", name: "Barbeque Stall", category: "Food", lat: 12.7045073, lng: 124.0314595, mapsUrl: mapsDir(12.7045073, 124.0314595) },
  { id: "harveys-lechon-manok", name: "Harvey's Lechon Manok", category: "Food", lat: 12.7045843, lng: 124.0311289, mapsUrl: mapsDir(12.7045843, 124.0311289) },
  { id: "sayong-grill-resto-bar", name: "Sayong Grill and Resto Bar", category: "Food", lat: 12.70458, lng: 124.0309186, mapsUrl: mapsDir(12.70458, 124.0309186) },
  { id: "andoks-litson-manok", name: "Andok's Litson Manok", category: "Food", lat: 12.7048657, lng: 124.03054, mapsUrl: mapsDir(12.7048657, 124.03054) },
  { id: "crispy-king", name: "Crispy King", category: "Food", lat: 12.7045117, lng: 124.0296912, mapsUrl: mapsDir(12.7045117, 124.0296912) },
  { id: "isarog-lechon-de-cebu", name: "Isarog Lechon De Cebu", category: "Food", lat: 12.7045567, lng: 124.0318714, mapsUrl: mapsDir(12.7045567, 124.0318714) },
  { id: "caldera-cafe", name: "Caldera Cafe", category: "Food", lat: 12.7044294, lng: 124.0321899, mapsUrl: mapsDir(12.7044294, 124.0321899) },
  { id: "chooks-to-go", name: "Chooks to Go", category: "Food", lat: 12.7044894, lng: 124.0326564, mapsUrl: mapsDir(12.7044894, 124.0326564) },
  { id: "chomp-diner", name: "The Chomp Diner", category: "Food", lat: 12.7044603, lng: 124.032737, mapsUrl: mapsDir(12.7044603, 124.032737) },
  { id: "cuptivated", name: "Cuptivated", category: "Food", lat: 12.7041678, lng: 124.0334338, mapsUrl: mapsDir(12.7041678, 124.0334338) },
  { id: "kims-lugawan", name: "Kim's Lugawan", category: "Food", lat: 12.7055197, lng: 124.0304392, mapsUrl: mapsDir(12.7055197, 124.0304392) },
  { id: "park-and-go-bakery", name: "Park & Go Bakery", category: "Food", lat: 12.7038726, lng: 124.0352674, mapsUrl: mapsDir(12.7038726, 124.0352674) },
  { id: "el-amigo", name: "El Amigo", category: "Food", lat: 12.7037335, lng: 124.0354143, mapsUrl: mapsDir(12.7037335, 124.0354143) },
  { id: "choice-place", name: "Choice Place", category: "Food", lat: 12.7036332, lng: 124.0353292, mapsUrl: mapsDir(12.7036332, 124.0353292) },
  { id: "irosin-hapi-place", name: "Irosin Hapi Place", category: "Food", lat: 12.7030187, lng: 124.0345442, description: "Street food strip.", mapsUrl: mapsDir(12.7030187, 124.0345442) },
  { id: "caferista", name: "Caferista", category: "Food", lat: 12.7022459, lng: 124.0355959, mapsUrl: mapsDir(12.7022459, 124.0355959) },
  { id: "eagle-munch-oclock", name: "Eagle Munch O'Clock Resto Bar", category: "Food", lat: 12.7023617, lng: 124.0349845, mapsUrl: mapsDir(12.7023617, 124.0349845) },
  { id: "kobis-grill-resto-bar", name: "Kobi's Grill and Resto Bar", category: "Food", lat: 12.7019837, lng: 124.0379675, mapsUrl: mapsDir(12.7019837, 124.0379675) },
  { id: "altum-coffee-ikigai", name: "ALTUM.Coffee by IKIGAI", category: "Food", lat: 12.7023107, lng: 124.0387093, mapsUrl: mapsDir(12.7023107, 124.0387093) },
  { id: "blooms-and-brews", name: "Blooms and Brews", category: "Food", lat: 12.702728, lng: 124.0402371, mapsUrl: mapsDir(12.702728, 124.0402371) },
  { id: "manoys-tapsihan", name: "Manoy's Tapsihan", category: "Food", lat: 12.7024885, lng: 124.0345662, mapsUrl: mapsDir(12.7024885, 124.0345662) },
  { id: "kofitea-irosin", name: "Kofitea Irosin", category: "Food", lat: 12.7035444, lng: 124.0360918, mapsUrl: mapsDir(12.7035444, 124.0360918) },
  { id: "hom-cafe-kitchen", name: "HōM Cafe + Kitchen", category: "Food", lat: 12.7012699, lng: 124.0275713, mapsUrl: mapsDir(12.7012699, 124.0275713) },
  { id: "jump-shot-burger", name: "Jump Shot Flame-Grilled Burger", category: "Food", lat: 12.6995251, lng: 124.025803, mapsUrl: mapsDir(12.6995251, 124.025803) },
  { id: "casa-luna-ristorante", name: "CASA LUNA Ristorante", category: "Food", lat: 12.6996159, lng: 124.0262538, mapsUrl: mapsDir(12.6996159, 124.0262538) },

  // Shops
  { id: "7-eleven-irosin", name: "7-Eleven", category: "Shops", lat: 12.7048893, lng: 124.0303572, mapsUrl: mapsDir(12.7048893, 124.0303572) },
  { id: "lcc-irosin", name: "LCC Irosin", category: "Shops", lat: 12.7043327, lng: 124.0337885, description: "Department store.", mapsUrl: mapsDir(12.7043327, 124.0337885) },
  { id: "puregold-irosin", name: "Puregold Irosin", category: "Shops", lat: 12.7034002, lng: 124.0315899, mapsUrl: mapsDir(12.7034002, 124.0315899) },
  { id: "irosin-public-market", name: "Irosin Public Market", category: "Shops", lat: 12.7039761, lng: 124.034854, description: "Local market for fresh produce, seafood, and dry goods.", mapsUrl: mapsDir(12.7039761, 124.034854) },

  // Services
  { id: "southstar-drug", name: "Southstar Drug", category: "Services", lat: 12.704498, lng: 124.032243, description: "Pharmacy.", mapsUrl: mapsDir(12.704498, 124.032243) },
  { id: "rhu-irosin", name: "Rural Health Unit of Irosin", category: "Services", lat: 12.7029547, lng: 124.0353012, mapsUrl: mapsDir(12.7029547, 124.0353012) },
  { id: "irosin-district-hospital", name: "Irosin District Hospital", category: "Services", lat: 12.7092605, lng: 124.028373, mapsUrl: mapsDir(12.7092605, 124.028373) },
  { id: "imac-hospital", name: "IMAC Hospital", category: "Services", lat: 12.6998733, lng: 124.0265264, mapsUrl: mapsDir(12.6998733, 124.0265264) },

  // Sights
  { id: "irosin-rizal-park", name: "Irosin Rizal Park", category: "Sights", lat: 12.7027807, lng: 124.0343182, mapsUrl: mapsDir(12.7027807, 124.0343182) },
  { id: "irosin-boulevard", name: "Irosin Boulevard", category: "Sights", lat: 12.6902996, lng: 124.016741, mapsUrl: mapsDir(12.6902996, 124.016741) },
  { id: "san-benon-resort", name: "San Benon Resort", category: "Sights", lat: 12.7318767, lng: 124.0256162, mapsUrl: mapsDir(12.7318767, 124.0256162) },
];
