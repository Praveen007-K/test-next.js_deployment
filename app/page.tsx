import Link from "next/link";
import { getBlogPosts } from '../lib/data';


export default function Home() {
  const posts = getBlogPosts(); // Fetch blog posts (from mock data)

    return (
        <main>
            <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Welcome to My Blog</h1>
            <ul className="space-y-4">
                <li>
                    <p className="text-blue-200 hover:underline font-semibold">Blog</p>
                </li>
                <li>
                    <p className="underline">[id] - Dynamic Routing</p>
                </li>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`} className="text-blue-200 hover:underline">{post.title}</Link>
                    </li>
                ))}
                <li>
                    <Link href="/blog" className="text-blue-200 hover:underline">Blog</Link>
                </li>
                <li>
                    <Link href="/blog/100" className="text-blue-200 hover:underline">Blog/100</Link>
                </li>
                <li>
                    <p className="underline">[...id] - Catch-all Segments</p>
                </li>
                <li>
                    <Link href="/diary" className="text-blue-200 hover:underline">Diary</Link>
                </li>
                <li>
                    <Link href="/diary/100" className="text-blue-200 hover:underline">Diary/100</Link>
                </li>
                <li>
                    <p className="underline">[[...id]] - Optional Catch-all Segments</p>
                </li>
                <li>
                    <Link href="/journal" className="text-blue-200 hover:underline">Journal</Link>
                </li>
                <li>
                    <Link href="/journal/100" className="text-blue-200 hover:underline">Journal/100</Link>
                </li>
                <li>
                    <p className="underline">Data From Fake API</p>
                </li>
                <li>
                    <Link href="/api" className="text-blue-200 hover:underline">API Data</Link>
                </li>
            </ul>
        </div>
        </main>
    );
}

