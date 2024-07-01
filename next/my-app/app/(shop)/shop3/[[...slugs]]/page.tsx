type Params = {
  params: {
    slugs: string | string[];
  };
};

export default function Shop3({ params }: Params) {
  const { slugs } = params;

  return (
    <>
      slugs3: <strong>{Array.isArray(slugs) ? slugs.join('~') : slugs}</strong>
    </>
  );
}
