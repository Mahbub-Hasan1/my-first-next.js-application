import Head from 'next/head';
import Link from 'next/link';
import ArticleList from '../Components/ArticleList';

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development, programming' />
      </Head>


      <h1 className="title">
        Welcome to next app{' '}
        <Link href="/about">about page</Link>
      </h1>
      
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}