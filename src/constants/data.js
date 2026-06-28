import award01 from '../assets/award01.png';
import award02 from '../assets/award02.png';
import award03 from '../assets/award03.png';
import award05 from '../assets/award05.png';

export const wines = [
    { name: "Chapel Hill Shiraz", price: "$56", tags: "AU | Bottle" },
    { name: "Catena Malbec", price: "$59", tags: "AR | Bottle" },
    { name: "La Vieille Ferme", price: "$44", tags: "FR | 750ml" },
    { name: "Bud Light", price: "$14", tags: "US | 355ml" }
];

export const cocktails = [
    { name: "Aperol Spritz", price: "$20", tags: "Aperol | Prosecco | Soda | 150ml" },
    { name: "Dark 'N' Stormy", price: "$16", tags: "Dark Rum | Ginger Beer | Slice of lime" },
    { name: "Negroni", price: "$26", tags: "Gin | Sweet Vermouth | Campari | Orange peel" },
    { name: "Cosmopolitan", price: "$22", tags: "Vodka | Triple Sec | Lime Juice | Cranberry Juice" }
];

export const awards = [
    {
        title: "Rising Star",
        subtitle: "Honoring our kitchen's innovation, passion, and future promise.",
        imgUrl: award01
    },
    {
        title: "Bib Gourmand",
        subtitle: "Awarded for exceptional dining experiences and high-quality food.",
        imgUrl: award02
    },
    {
        title: "Outstanding Chef",
        subtitle: "Recognizing culinary mastery, leadership, and creative vision.",
        imgUrl: award03
    },
    {
        title: "AA Hospitality",
        subtitle: "Celebrating our unwavering commitment to service and guest care.",
        imgUrl: award05
    }
];