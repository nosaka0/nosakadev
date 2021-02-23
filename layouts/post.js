import Head from 'next/head'
import BlogLink from '../components/BlogLink'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import Date from '../components/Date'


export default function PostLayout(props) {
    const mdparsed = unified()
                .use(parse)
                .use(remark2react,
                    {
                        reactRemarkComponents: {
                            a: BlogLink,
                        }
                    })
                .processSync(props.content).result

    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div className="sm:w-10/12 xl:w-8/12 mx-auto">
                <h1 className="text-4xl font-extrabold">{props.title}</h1>
                <div className="mt-1">
                    <Date date={props.date} bold={false} />
                    <p className="ml-1.5 inline">⋅</p>
                    <p className="ml-1.5 inline font-light">{props.time} minute read</p>
                </div>
                <article className="prose max-w-none mt-10">
                    {mdparsed}
                </article>
            </div>
        </div>
    )
}
