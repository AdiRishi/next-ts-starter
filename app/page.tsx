import Image from 'next/image';

function Card({ title, description }: { title: string; description: string }) {
  return (
    <a
      className="card-bordered card card-compact shadow-sm transition hover:border-blue-600 hover:text-blue-600"
      href="https://nextjs.org/docs"
    >
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-xl">{description}</p>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div>
      <main className="flex w-screen flex-col place-items-center sm:h-screen">
        <div className="hero">
          <div className="hero-content flex-col text-center">
            <h1 className="mt-20 text-6xl font-bold">
              Welcome to{' '}
              <a href="https://nextjs.org/docs" className="text-blue-600 hover:underline">
                Next.js!
              </a>
            </h1>
            <p className="my-20 text-xl font-medium">
              Get started by editing <code>pages/index.js</code>
            </p>
          </div>
        </div>

        <div className="grid w-10/12 gap-8 sm:w-3/5 sm:grid-cols-2">
          <Card
            title="Documentation &rarr;"
            description="Find in-depth information about Next.js features and API."
          />
          <Card
            title="Learn &rarr;"
            description="Learn about Next.js in an interactive course with quizzes!"
          />
          <Card
            title="Examples &rarr;"
            description="Discover and deploy boilerplate example Next.js projects."
          />
          <Card
            title="Deploy &rarr;"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
      </main>

      <footer className="block text-center">
        <div className="divider mx-auto w-4/5 justify-self-center"></div>
        <a
          className="my-5 block"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Powered by{' '}
            <Image className="inline" src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </p>
        </a>
      </footer>
    </div>
  );
}
