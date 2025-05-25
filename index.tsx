import Head from 'next/head';

export default function Home() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const time = `${hour}:${minutes}`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <Head>
        <title>Not Returning</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">שלום בעז</h1>
      <p className="mb-4 text-xl">השעה עכשיו: {time}</p>
      <div className="grid gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">יומן שבועי</button>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">חירות פראית</button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">קיר שקט</button>
      </div>
      <p className="mt-6 italic text-gray-700">"אני לא חוזר להיות קטן."</p>
    </div>
  );
}
