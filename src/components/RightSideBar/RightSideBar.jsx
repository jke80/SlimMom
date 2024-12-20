import { UserInfo } from 'components/UserInfo/UserInfo';
import css from './RightSideBar.module.css';
import { formattedDate } from 'utils/formattedDate';
console.log(formattedDate);
export const RightSideBar = () => {
  return (
    <div className={css.container}>
      <UserInfo />
      <div className={css.summaryContainer}>
        <p>Summary for {formattedDate}</p>
        <ul>
          <li>
            <p>Left</p>
            <p>000 kcal</p>
          </li>
          <li>
            <p>Consumed</p>
            <p>000 kcal</p>
          </li>
          <li>
            <p>Daily rate</p>
            <p>000 kcal</p>
          </li>
          <li>
            <p>n% of normal</p>
            <p>000 kcal</p>
          </li>
        </ul>
      </div>
      <div>
        <p>Food not recommended</p>
        <ul>
          <li>
            <p>Your diet will be displayed here</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
