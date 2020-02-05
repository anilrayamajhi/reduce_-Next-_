import Layout from "../components/MyLayout.js";

// export default function Index() {
//   return (
//     <Layout>
//       <p>Hello Next.js</p>
//     </Layout>
//   );
// }

import withLayout from "../components/MyLayout";

const Index = () => <p>Hello Next.js</p>;

export default withLayout(Index);
