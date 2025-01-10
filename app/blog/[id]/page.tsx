import { getBlogPostById } from '../../../lib/data';

interface BlogPostProps {
    params: Promise<{id: string }>;
}


export default async function BlogPost({ params }: BlogPostProps) {
    const post = getBlogPostById(Number((await params).id)); // Fetch the blog post by ID

    if (!post) {
        return <h1>Post Not Found</h1>;
    }

    return (
        <main className='p-10'>
            <div className="bg-blue-500 p-8 rounded-lg shadow-lg text-white max-w-md mx-auto">
                <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
                <p className="text-lg leading-relaxed">{post.content}</p>
            </div>

        </main>
    );
}
