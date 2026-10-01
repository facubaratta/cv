import BilingualText from "./BilingualText";
import BulletList from "./BulletList";

function EntryDetails({ subtitleEs, subtitleEn, bodyEs, bodyEn, bullets }) {
  return (
    <>
      <BilingualText className="subtitle" es={subtitleEs} en={subtitleEn} />
      {bullets ? (
        <BulletList bullets={bullets} />
      ) : (
        <>
          <br />
          <BilingualText es={bodyEs} en={bodyEn} />
        </>
      )}
    </>
  );
}

export default EntryDetails;
