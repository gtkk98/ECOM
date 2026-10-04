export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    portion: string;
    taste: string;
    images: {
        thumbnail: string;
        primary: string;
        gallery: string[];
    };
}