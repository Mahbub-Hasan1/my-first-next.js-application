import Head from 'next/Head';
import Link from 'next/link';

const about = () => {
    return (
        <div>
            <Head>
                <title>about page</title>
                <meta name='keywords' content='web development programming' />
            </Head>
            <h1>This is about page
                <Link href="/">
                Back to home
                </Link>
            </h1>
        </div>
    )
}

export default about