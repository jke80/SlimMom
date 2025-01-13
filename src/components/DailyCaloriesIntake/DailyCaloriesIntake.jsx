import { filterProducts } from 'utils/filterProducts';
import css from './DailyCaloriesIntake.module.css';

export const DailyCaloriesIntake = ({ dailyCalories, bloodType }) => {
  const { notAllowedCategories, notAllowedProductsFromAllowedCategories } =
    filterProducts(bloodType);
  console.log(notAllowedCategories, notAllowedProductsFromAllowedCategories);

  return (
    <div className={css.container}>
      <p className={css.title}>Your recommended daily calorie intake is</p>
      <p className={css.calories}>
        {dailyCalories} <span>kkal</span>
      </p>

      {!!notAllowedCategories.length && (
        <div className={css.notAllowedProductsContainer}>
          <p className={css.notAllowedProductsTitle}>
            Foods you should not eat
          </p>
          <ul>
            {notAllowedCategories.map(item => (
              <li key={item}>
                <p className={css.notAllowedProductsItem}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
