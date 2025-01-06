import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { DailyCaloriesIntake } from 'components/DailyCaloriesIntake/DailyCaloriesIntake';
import css from './DailyCaloriesForm.module.css';
import { Button } from 'components/Button/Button';
import { FloatLabelInput } from 'components/Input/FloatingLabelInput';

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
    <div className={css.container}>
      <h1 className={css.dailyCaloriesFormTitle}>
        Calculate your daily calorie intake right now
      </h1>
      <form name="daily_calories_form" onSubmit={handleSubmit}>
        <div className={css.inputsContainer}>
          <div className={css.leftSideInputs}>
            <FloatLabelInput
              id="height"
              name="height"
              value={state.height}
              onChange={handleChange}
              required
              label="Height*"
            />
            <FloatLabelInput
              id="age"
              name="age"
              value={state.age}
              onChange={handleChange}
              required
              label="Age*"
            />
            <FloatLabelInput
              id="currentWeight"
              name="currentWeight"
              value={state.currentWeight}
              onChange={handleChange}
              required
              label="Current Weight*"
            />
          </div>
          <div className={css.rightSideInputs}>
            <FloatLabelInput
              id="desiredWeight"
              name="desiredWeight"
              value={state.desiredWeight}
              onChange={handleChange}
              required
              label="Desired Weight (kg) *"
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
      </form>

      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <DailyCaloriesIntake
          dailyCalories={state.dailyCalories}
          bloodType={state.bloodType}
        />
        <Button type="button" onClick={onModalClose}>
          Start losing weight
        </Button>
      </Modal>
    </div>
  );
};
