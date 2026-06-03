export type Project = {
  slug: string;
  title: string;
  location: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  focusAreas: string[];
  activities: string[];
  intendedOutcomes: string[];
};

export const projects: Project[] = [
  {
    slug: "trees-for-tomorrow",
    title: "Trees for Tomorrow",
    location: "Ghana",
    summary:
      "Reforesting previously deforested areas with native tree species while training local youth and farmers to care for seedlings.",
    description:
      "Trees for Tomorrow brings communities together to restore degraded land with species suited to the local environment. The work continues after planting through practical training, routine monitoring, and shared responsibility for seedling survival.",
    image:
      "https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989694/m-abnodey-W48i6oMFSCM-unsplash_aunr5q.jpg",
    imageAlt: "A green landscape being restored with trees",
    focusAreas: ["Reforestation", "Biodiversity", "Youth engagement"],
    activities: [
      "Select native tree species appropriate for each site",
      "Train community members in planting and seedling care",
      "Monitor survival and replace seedlings where needed",
    ],
    intendedOutcomes: [
      "Healthier, more resilient local ecosystems",
      "Improved community knowledge of tree care",
      "Long-term restoration of degraded land",
    ],
  },
  {
    slug: "green-farms-initiative",
    title: "Green Farms Initiative",
    location: "Ghana",
    summary:
      "Helping smallholder farmers combine crop farming with tree planting to improve yields, soil health, shade, and natural windbreaks.",
    description:
      "The Green Farms Initiative supports farmers who want to grow food while caring for the land that sustains them. By integrating trees with crops, the project promotes practical farming systems that can improve soil health and strengthen resilience over time.",
    image:
      "https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989972/2148761816_bkkbbh.jpg",
    imageAlt: "Farmers tending crops in a green field",
    focusAreas: ["Agroforestry", "Food security", "Soil health"],
    activities: [
      "Introduce useful tree species into existing farms",
      "Share climate-smart farming and soil care practices",
      "Support farmers with practical tools and guidance",
    ],
    intendedOutcomes: [
      "More resilient smallholder farms",
      "Improved soil protection and natural shade",
      "Stronger local food security",
    ],
  },
  {
    slug: "agro-watershed-revival",
    title: "Agro-Watershed Revival",
    location: "Ghana",
    summary:
      "Using fruit trees, native plants, and contour farming near rivers and streams to reduce erosion and retain water.",
    description:
      "Agro-Watershed Revival focuses on the connection between healthy farms and healthy water systems. Communities use tree planting and land-care practices around sensitive watershed areas to reduce erosion and help the landscape retain water.",
    image:
      "https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989811/64585_cbuxap.jpg",
    imageAlt: "Crops growing near a restored watershed area",
    focusAreas: ["Watersheds", "Erosion control", "Sustainable farming"],
    activities: [
      "Plant native and fruit-bearing trees near waterways",
      "Promote contour farming on sloped land",
      "Engage communities in protecting sensitive water sources",
    ],
    intendedOutcomes: [
      "Reduced soil erosion near rivers and streams",
      "Improved water retention across farm landscapes",
      "More productive and resilient agricultural land",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
