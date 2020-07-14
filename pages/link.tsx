import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'

export default () => {
  const goB = () => {
    Router.push('/b')
  }

  return (
    <>
      <Link href="/a">
        <Button type="primary">跳转到a页面</Button>
      </Link>
      <Button type="dashed" onClick={goB}>
        跳转到b页面
      </Button>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
