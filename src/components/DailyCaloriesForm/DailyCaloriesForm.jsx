import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { DailyCaloriesIntake } from 'components/DailyCaloriesIntake/DailyCaloriesIntake';
import css from './DailyCaloriesForm.module.css';

export const DailyCaloriesForm = () => {
  const [state, setState] = useState({
    height: '',
    age: '',
    currentWeight: '',
    desiredWeight: '',
    bloodType: '1',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = e => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setState({ ...state, [e.target.name]: value });
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { height, age, currentWeight, desiredWeight, bloodType } = state;
    const dailyCalories =
      10 * currentWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (currentWeight - desiredWeight);

    setState({ ...state, dailyCalories });
    setIsModalOpen(true);

    console.log(dailyCalories, bloodType, state);
  };
  const onModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <form name="daily_calories_form" onSubmit={handleSubmit}>
        <h1>Calculate your daily calorie intake right now</h1>
        <div className={css.inputsContainer}>
          <div className={css.leftSideInputs}>
            <label>
              Height(cm)*
              <input
                name="height"
                value={state.height}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Age*
              <input
                name="age"
                value={state.age}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Current weight(kg)*
              <input
                name="currentWeight"
                value={state.currentWeight}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={css.rightSideInputs}>
            <label>
              Desired weight(kg)*
              <input
                name="desiredWeight"
                value={state.desiredWeight}
                onChange={handleChange}
                required
              />
            </label>
            <div className="bloodTypeContainer">
              <p>Blood Type*</p>
              <label>
                1
                <input
                  defaultChecked={true}
                  type="radio"
                  name="bloodType"
                  value="1"
                  onChange={handleChange}
                />
              </label>
              <label>
                2
                <input
                  type="radio"
                  name="bloodType"
                  value="2"
                  onChange={handleChange}
                />
              </label>
              <label>
                3
                <input
                  type="radio"
                  name="bloodType"
                  value="3"
                  onChange={handleChange}
                />
              </label>
              <label>
                4
                <input
                  type="radio"
                  name="bloodType"
                  value="4"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={`${css.formButton} ${css.submitFormButton}`}
        >
          Start losing weight
        </button>
      </form>
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <DailyCaloriesIntake
          dailyCalories={state.dailyCalories}
          bloodType={state.bloodType}
        />
        <button type="button" className={css.formButton} onClick={onModalClose}>
          Start losing weight
        </button>
      </Modal>
    </>
  );
};
