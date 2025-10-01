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
    captcha_site_key: string;
    map: string;
    history: string;
    lbsupp_api_url: string;
    lbsupp_api_key: string;
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
    page: string;
    faqs: ServiceFaqT[];
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

export type ReviewT = {
    author_name: string;
    author_url: string;
    language: string;
    original_language: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
    translated: boolean;
};

export type ProjectT = {
    id: number;
    image: string;
    image_url: string;
};

export type ImageT = {
    id: number;
    name: string;
    url: string;
};

export type EmailT = {
    id: number;
    name: string;
    email: string;
};
