import { Rye } from "next/font/google";

import formatMoney from '../utils/formatMoney';

import styles from './foodMenu.module.scss';

const rye = Rye({
  subsets: ["latin"],
  weight: ["400"],
});

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
        <>
          <h2 className={rye.className}>{section.name}</h2>
          <div
            key={section.name}
            className={styles.menuSection}
          >
            {section?.description && (
              <h4 className={styles.description}>{section.description}</h4>
            )}
            {section.items.map((item) => (
              <div
                key={item.name}
                className={styles.itemWrapper}
              >
                <h5 className={rye.className}>{item.name}</h5>
                {item?.description && (
                  <p>{item.description}</p>
                )}
                <p>{formatMoney(item.price)}</p>
                {item?.subDescription && (
                  <p>{item.subDescription}</p>
                )}
                {item?.subPrice && (
                  <p>{formatMoney(item.subPrice)}</p>
                )}
              </div>
            ))}
          </div>
        </>
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
          <p>{formatMoney(section.price)}</p>
        </div>
      ))}
    </div>
  );
}
