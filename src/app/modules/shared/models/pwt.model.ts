export interface Pwt {
    id: number;
    details: {
        name: string;
        hours: string;
        items?: [{
            title: string;
            section_items: [{
                url: string;
                description: string;
            }]
        }]
        opens_at: number;
        closed_at: number;
        border_name: string;
        crossing_name: string;
    };
    created_at: string;
    updated_at: string;
}
