import { GetStaticPaths, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import path from 'path'
import fs from 'fs'
import { MDXProvider } from '@mdx-js/react';

export const DemoBlock = ({ children }: any) => {
  console.log(children)
  return <div>{children}</div>
}

const component = {
  DemoBlock,
};

export default function DocPage({ slug }: { slug: string }) {
  // 动态加载当前目录下的MDX文件
  console.log('Current slug:', slug);
  const MdxContent = dynamic(() => import(`./packages/${slug}.mdx`), {
    ssr: false, // 优先启用SSR
    loading: () => <p>Loading...</p>
  })

  return (
    <div className="doc-container">
      <MDXProvider components={component}>
        <MdxContent />
      </MDXProvider>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // 扫描同级packages目录
  const docsDir = path.join(process.cwd(), 'src/pages/docs/packages')
  const files = fs.readdirSync(docsDir)
  console.log('docsDir', docsDir)
  
  const paths = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => ({
      params: { slug: [file.replace('.mdx', '')] }
    }))

  console.log('Generated paths:', paths) // 调试用
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug as string[])[0] // 获取第一个slug参数
  console.log('slug', slug)
  return { props: { slug } }
}



