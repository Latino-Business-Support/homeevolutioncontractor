export type InfosT = {
    id: number;
    label: string;
    type: string;
    field: string;
    value: string;
    formatted: string;
};

export type InfoT = {
    logo: string;
    favicon: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    schedule: string;
    summary: string;
    facebook: string;
    google_place: string;
    map: string;
    history: string;
};

export type ServiceFaqT = {
    id: number;
    question: string;
    answer: string;
    service_id: number;
    service: ServiceT;
};

export type ServiceT = {
    id: number;
    name: string;
    slug: string;
    image: string;
    image_url: string;
    description: string;
    faqs: ServiceFaqT[];
};

export type ProjectT = {
    id: number;
    image: string;
    image_url: string;
};

export type SlideT = {
    id: number;
    title: string;
    description: string;
    image: string;
    image_url: string;
    link: string;
};

export type SocialT = {
    id: number;
    name: string;
    icon: string;
    link: string;
};
