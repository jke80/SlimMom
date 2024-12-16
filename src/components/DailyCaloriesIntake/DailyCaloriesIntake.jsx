import { filterProducts } from 'utils/filterProducts';

export const DailyCaloriesIntake = ({ dailyCalories, bloodType }) => {
  const { notAllowedCategories, notAllowedProductsFromAllowedCategories } =
    filterProducts(bloodType);
  console.log(notAllowedCategories, notAllowedProductsFromAllowedCategories);

  return (
    <>
      <p> Your recommended daily calorie intake is {dailyCalories} kkal</p>

      {!!notAllowedCategories.length && (
        <div>
          <p>Foods you should not eat</p>
          <p>Categories</p>
          <ul>
            {notAllowedCategories.map(item => (
              <li key={item}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
