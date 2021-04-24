const Post = () => <p>Hello world!</p>;

export const getStaticProps = () => {
  const published = false; // e.g. from API/frontmatter

  if (!published && process.env.NODE_ENV === "production") {
    return { notFound: true };
  }

  return { props: {} }
};

export default Post;
