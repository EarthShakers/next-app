import Mock from "mockjs";
import { GetStaticProps } from "next";

function Page({ data }) {
  // Render data...
  return data;
}

// This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const data = await Mock.mock(Math.random());

//   // Pass data to the page via props
//   return { props: { data } };
// }

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
  const data = "sadafafa";
  return { props: { data } };
};
