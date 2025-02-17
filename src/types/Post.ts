export interface Post {
    id: number;
    media: string;
    mediaMobile: string;
    title: string;
    description: string;
    order: number;
}

export interface PostInput {
    media: File | null;
    mediaMobile: File | null;
    title: string;
    description: string;
    order: number;
}
