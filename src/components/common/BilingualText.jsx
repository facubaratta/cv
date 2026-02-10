function BilingualText({ as: Component = "span", className, es, en }) {
  const esClass = className ? `${className} lang-es` : "lang-es";
  const enClass = className ? `${className} lang-en` : "lang-en";

  return (
    <>
      <Component className={esClass}>
        {es}
      </Component>
      {en !== undefined ? (
        <Component className={enClass}>
          {en}
        </Component>
      ) : null}
    </>
  );
}

export default BilingualText;
