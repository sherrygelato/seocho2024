type Params = {
  params: {
    slugs: string[];
  };
};

export default function Shop2({ params }: Params) {
  const { slugs } = params;

  // error on don't have slugs

  return (
    <>
      slugs2: <strong>{slugs.join('~')}</strong>
    </>
  );
}
