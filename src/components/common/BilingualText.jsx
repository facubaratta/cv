function BilingualText({ as: Component = "span", className, es, en }) {
  return (
    <>
      <Component className={className} data-lang="es">
        {es}
      </Component>
      {en !== undefined ? (
        <Component className={className} data-lang="en">
          {en}
        </Component>
      ) : null}
    </>
  );
}

export default BilingualText;
