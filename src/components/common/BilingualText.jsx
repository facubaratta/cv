function BilingualText({ as: Component = "span", className, es, en }) {
  const getClassName = (lang) => [className, `lang-${lang}`].filter(Boolean).join(" ");

  return (
    <>
      <Component className={getClassName("es")}>
        {es}
      </Component>
      <Component className={getClassName("en")}>
        {en}
      </Component>
    </>
  );
}

export default BilingualText;
