import styles from './foodMenu.module.scss';

export default function FoodMenu({
  menu,
}) {
  const {
    main,
    secondary,
  } = menu;

  if (!main) {
    return <p>Missing Menu items...</p>
  }

  return (
    <div
      className={styles.foodMenuWrapper}
    >
      {main.map((section) => (
        <div
          key={section.name}
        >
          <h3>{section.name}</h3>
          {section?.description && (
            <h4>{section.description}</h4>
          )}
          {section.items.map((item) => (
            <div
              key={item.name}
            >
              <h5>{item.name}</h5>
              {item?.description && (
                <p>{item.description}</p>
              )}
              <p>{item.price}</p>
              {item?.subDescription && (
                <p>{item.subDescription}</p>
              )}
              {item?.subPrice && (
                <p>{item.subPrice}</p>
              )}
            </div>
          ))}
        </div>
      ))}
      {secondary.map((section) => (
        <div
          key={section.name}
        >
          <h4>{section.name}</h4>
          {section.items && section.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
          {section.description && (
            <p>{section.description}</p>
          )}
          <p>{section.price}</p>
        </div>
      ))}
    </div>
  );
}
