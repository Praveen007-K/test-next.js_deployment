// lib/data.ts
export interface Post {
    id: number;
    title: string;
    content: string;
}

// Simulate a data source
const blogPosts: Post[] = [
    { id: 1, title: 'First Blog', content: 'This is the first blog post.' },
    { id: 2, title: 'Second Blog', content: 'This is the second blog post.' },
];

export function getBlogPosts() {
    return blogPosts;
}

export function getBlogPostById(id: number) {
    return blogPosts.find((post) => post.id === id) || null;
}
