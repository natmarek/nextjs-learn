import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout projects>
      <Head>
        <title>Projects</title>
      </Head>
      <main className="main-projects">
        <h1>Projects</h1>
        <h2>
          <Link href="/">
            <a>x</a>
          </Link>
        </h2>
        <p className="post">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed
          ullamcorper morbi tincidunt ornare massa eget egestas purus. Eget
          felis eget nunc lobortis mattis aliquam. Velit ut tortor pretium
          viverra suspendisse. Felis donec et odio pellentesque diam volutpat
          commodo sed. Mattis aliquam faucibus purus in massa tempor. Dictum
          fusce ut placerat orci nulla pellentesque dignissim enim. Nunc sed
          blandit libero volutpat sed cras ornare arcu. Tempor commodo
          ullamcorper a lacus vestibulum sed arcu non odio. Id eu nisl nunc mi
          ipsum faucibus. Duis tristique sollicitudin nibh sit amet commodo
          nulla facilisi nullam. Integer vitae justo eget magna fermentum.
          Libero justo laoreet sit amet cursus. At varius vel pharetra vel.
          Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien
          nec sagittis. Volutpat maecenas volutpat blandit aliquam etiam erat
          velit. Quam nulla porttitor massa id neque aliquam vestibulum morbi.
          Et tortor consequat id porta nibh venenatis cras sed.
          <br />
          <br />
          Sed libero enim sed faucibus. Habitasse platea dictumst vestibulum
          rhoncus est pellentesque. Eget arcu dictum varius duis. Sed arcu non
          odio euismod. Eget dolor morbi non arcu risus quis varius quam. Quis
          commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi
          eget mauris pharetra et ultrices neque ornare aenean. Neque aliquam
          vestibulum morbi blandit. Mauris nunc congue nisi vitae suscipit
          tellus mauris a. Ac tortor vitae purus faucibus ornare suspendisse.
          Orci a scelerisque purus semper eget duis. Feugiat in fermentum
          posuere urna. Cras fermentum odio eu feugiat pretium nibh ipsum
          consequat. Morbi leo urna molestie at elementum eu facilisis. Pulvinar
          mattis nunc sed blandit.
        </p>
      </main>
    </Layout>
  );
}
