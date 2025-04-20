import { GetStaticPaths, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import path from 'path'
import fs from 'fs'

export default function DocPage({ slug }: { slug: string }) {
  // 动态加载当前目录下的MDX文件
  const MdxContent = dynamic(() => import(`./packages/${slug}.mdx`), {
    ssr: false,
    loading: () => <p>Loading documentation...</p>
  })

  return (
    <div className="doc-container">
      <MdxContent />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // 扫描同级packages目录
  const docsDir = path.join(process.cwd(), 'src/pages/docs/packages')
  const files = fs.readdirSync(docsDir)
  
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
  return { props: { slug } }
}