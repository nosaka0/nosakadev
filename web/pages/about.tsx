import Header from '@components/Header'
import Head from 'next/head'

export default function About() {
    return (
        <div>
            <Head>
                 <title>about - nosaka</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <div className="mt-8 xl:mt-20 mx-auto w-5/6 md:w-9/12 lg:w-8/12">
                <h1 className="text-4xl uppercase font-extrabold mb-5">About</h1>
                <div className="prose">
                    <p>Hi, I&apos;m Nicholas. I&apos;m an undergraduate student at the University of North Carolina at Charlotte studying Computer Science and Philosophy. My research interests include computer vision, physical sensing through novel imagery techniques, and natural language processing. With my double major in Philosophy, I&apos;ve become acquainted with methods for approaching complex issues in emerging technology. </p>
                    <p>My primary philosophical interests lie at the intersection of society and technology: addressing emergent social issues as we interact with novel (or not so novel) technologies.</p>
                </div>
            </div>
        </div>
    )
}
