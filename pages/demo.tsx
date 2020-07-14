import Mock from 'mockjs'
import './demo.less'
function Blog({ posts }) {
  return (
    <div className="index-wrapper">
      {/* <header className="header">header</header> */}
      <div className="background-video">
        <div className="cover" />
        <video
          poster="https://marketing.invisionapp-cdn.com/www.invisionapp.com/marketing-pages/deployed/build/8b716f92411d91fdce735a853ff00f943feafa19/img/home/poster-masthead.jpg"
          src="https://marketing.invisionapp-cdn.com/www-assets.invisionapp.com/Homepage/enterprise-loop.mp4"
          // playsinline=""
          // muted=""
          // loop=""
          preload="none"
          autoPlay
          controls
          width="100%"
          // height="300"
        ></video>
      </div>
      <img src="./login-bg.jpg" alt="" />
      <h1>The public value is: {process.env.NEXT_PUBLIC_EXAMPLE_KEY}</h1>
    </div>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const posts = await Mock.mock('222221312dafs')

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts
    }
  }
}

export default Blog
