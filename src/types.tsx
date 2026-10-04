export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    portions: { name: string; price: number }[];
    taste: string | string[];
    images: {
        thumbnail: string;
        primary: string;
        gallery: string[];
    };
}