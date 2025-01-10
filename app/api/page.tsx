export default async function Page() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()
    return (
        <ul>
        <table className="min-w-full bg-black border border-gray-300 shadow-md">
          <thead>
            <tr className="border-b bg-black-100">
              <th className="p-4 text-left font-semibold text-blue-200">Post ID</th>
              <th className="p-4 text-left font-semibold text-blue-200">Title</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: { id: string | number; title: string }) => (
              <tr key={post.id} className="border-b hover:bg-gray-700">
                <td className="p-4 text-blue-200">{post.id}</td>
                <td className="p-4 text-blue-200">{post.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ul>
      
    )
  }