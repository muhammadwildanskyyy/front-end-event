import Head from "next/head";

interface PropsTypes {
  title?: string;
}

const PageHead = (props: PropsTypes) => {
  const { title = "Event" } = props;
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="icon" href="/images/general/logo.svg" type="image/x-icon" />
    </Head>
  );
};

export default PageHead;
