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
};

export type ProductsType = ProductType[]

export type CartItemType = ProductType & {
    quantity: number;
    selectedPortion: string;
};

export type CartItemsType = CartItemType[]