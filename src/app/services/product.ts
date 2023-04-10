export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    features: string[];
    inbox: string[];
    images: string[];
    isNew: boolean;
  }
  export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    img: string;
  }
  