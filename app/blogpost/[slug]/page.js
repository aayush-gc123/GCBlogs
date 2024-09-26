import fs from "fs"
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrettyCode from "rehype-pretty-code"
import {unified} from 'unified'
import {reporter} from 'vfile-reporter'
import { transformerCopyButton } from '@rehype-pretty/transformers'


export default async function Page({ params, blogsObject }) {
   const filepath = `content/${params.slug}.md`
  const fileContent = fs.readFileSync(filepath, "utf-8")
    const {content , data} = matter(fileContent)
    const processor = await unified()
    .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypeStringify)
  .use(rehypePrettyCode, {
    // See Options section below.
    theme: "github-dark",
    transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
  })

  const htmlContent = (await processor.process(content)).toString()

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">By {data.aurthur}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">{data.date}</p>
              <blockquote className="text-gray-800 dark:text-gray-200 mb-4 border-l-4 border-gray-500 dark:border-gray-400 pl-4 italic">
  {data.description}
</blockquote>
                <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
            </div>
        </div>
    );
}