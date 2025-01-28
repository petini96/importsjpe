export interface Product {
    id: number;
    name: string;
    brand: string;
    originalPrice: number;
    discountPercentage: number;
    discountPrice: number;
    installmentPrice: number;
    installmentsCount: number;
    additionalInfo: string;
    description: string;
    link: string;
    productType: ProductType;
    productCategory: ProductCategory;
    photos: Photo[];
}

export interface ProductCategory {
    id: number;
    name: string;
    description: string;
}

export interface ProductType {
    id: number;
    name: string;
    description: string;
}

export interface Photo {
    id: number;
    url: string;
    fileType: string;
    fileSize: number;
    createdAt: number;
}

export interface ListProduct {
    id: number;
    name: string;
    description: string;
    photos: Photo[];
}