import BilingualText from "./BilingualText";

function BulletList({ bullets }) {
  return (
    <ul className="experience-bullets">
      {bullets.map((bullet, index) => (
        <li key={bullet.label ?? index}>
          {bullet.label && <strong>{bullet.label}: </strong>}
          <BilingualText es={bullet.es} en={bullet.en} />
          {bullet.children && <BulletList bullets={bullet.children} />}
        </li>
      ))}
    </ul>
  );
}

export default BulletList;
