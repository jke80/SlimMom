import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ReactComponent as CalendarIcon } from '../../images/calendar_icon.svg';
import css from './DiaryDateCalendar.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDiaryDate } from '../../redux/diaryDate/diaryDateSelector';
import { useDispatch } from 'react-redux';
import { setDiaryDate } from '../../redux/diaryDate/diaryDate.slice';
import { strToDate, dateToStr } from 'utils/formatedDate';
export const DiaryDateCalendar = () => {
  const dispatch = useDispatch();
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const diaryDate = useSelector(selectDiaryDate);

  const handleCalendarButtonClick = () => {
    isCalendarOpen ? setCalendarOpen(false) : setCalendarOpen(true);
  };

  const handleChange = e => {
    dispatch(setDiaryDate(dateToStr(e)));
  };

  return (
    <div className={css.container}>
      <p className={css.calendarDate}>{diaryDate}</p>
      <button
        type="button"
        className={css.calendarButton}
        onClick={handleCalendarButtonClick}
      >
        <CalendarIcon width="20" height="20" />
      </button>
      {isCalendarOpen && (
        <div className={css.calendarContainer}>
          <div className={css.calendarSubContainer}>
            <Calendar
              onChange={handleChange}
              onClickDay={handleCalendarButtonClick}
              value={strToDate(diaryDate)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
