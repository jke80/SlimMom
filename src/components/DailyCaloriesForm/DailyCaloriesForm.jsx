import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { DailyCaloriesIntake } from 'components/DailyCaloriesIntake/DailyCaloriesIntake';
import css from './DailyCaloriesForm.module.css';
import { Button } from 'components/Button/Button';

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
      <h1 className={css.dailyCaloriesFormTitle}>
        Calculate your daily calorie intake right now
      </h1>
      <form name="daily_calories_form" onSubmit={handleSubmit}>
        <div className={css.inputsContainer}>
          <div className={css.leftSideInputs}>
            <input
              className={css.formInput}
              placeholder="Height (cm)*"
              name="height"
              value={state.height}
              onChange={handleChange}
              required
            />

            <input
              className={css.formInput}
              placeholder="Age*"
              name="age"
              value={state.age}
              onChange={handleChange}
              required
            />

            <input
              className={css.formInput}
              placeholder="Current weight(kg)*"
              name="currentWeight"
              value={state.currentWeight}
              onChange={handleChange}
              required
            />
          </div>
          <div className={css.rightSideInputs}>
            <input
              className={css.formInput}
              placeholder="Desired weight(kg)*"
              name="desiredWeight"
              value={state.desiredWeight}
              onChange={handleChange}
              required
            />
            <p className={css.bloodTypeTitle}>Blood Type*</p>
            <div className={css.bloodTypeContainer}>
              <input
                id="bloodType1"
                className={css.bloodTypeInput}
                type="radio"
                name="bloodType"
                value="1"
                onChange={handleChange}
              />
              <label htmlFor="bloodType1" className={css.bloodTypeLabel}>
                1
              </label>

              <input
                id="bloodType2"
                className={css.bloodTypeInput}
                type="radio"
                name="bloodType"
                value="2"
                onChange={handleChange}
              />
              <label htmlFor="bloodType2" className={css.bloodTypeLabel}>
                2
              </label>

              <input
                id="bloodType3"
                className={css.bloodTypeInput}
                type="radio"
                name="bloodType"
                value="3"
                onChange={handleChange}
              />
              <label htmlFor="bloodType3" className={css.bloodTypeLabel}>
                3
              </label>

              <input
                id="bloodType4"
                className={css.bloodTypeInput}
                type="radio"
                name="bloodType"
                value="4"
                onChange={handleChange}
              />
              <label htmlFor="bloodType4" className={css.bloodTypeLabel}>
                4
              </label>
            </div>
          </div>
        </div>
        <Button type="submit" className={css.submitFormButton}>
          Start losing weight
        </Button>

        {/* <button
          type="submit"
          className={`${css.formButton} ${css.submitFormButton}`}
        >
          Start losing weight
        </button> */}
      </form>
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <DailyCaloriesIntake
          dailyCalories={state.dailyCalories}
          bloodType={state.bloodType}
        />
        {/* <button type="button" className={css.formButton} onClick={onModalClose}>
          Start losing weight
        </button> */}
        <Button type="button" onClick={onModalClose}>
          Start losing weight
        </Button>
      </Modal>
    </>
  );
};
