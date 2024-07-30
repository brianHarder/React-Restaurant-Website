import React from 'react';
import { useForm } from 'react-hook-form';

function BookingPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);

    // Display a confirmation alert
    alert(`Reservation confirmed for ${data.name} on ${data.date} at ${data.time}.`);

    // Clear the form after submission
    reset();
  };

  const validateTime = (value) => {
    const [hour, minute] = value.split(':').map(Number);
    const selectedTime = new Date(1970, 0, 1, hour, minute);
    const minTime = new Date(1970, 0, 1, 11, 0);
    const maxTime = new Date(1970, 0, 1, 20, 0);

    if (selectedTime < minTime || selectedTime > maxTime) {
      return 'Time must be between 11:00 AM and 8:00 PM';
    }

    if (minute % 15 !== 0) {
      return 'Time must be in 15-minute intervals';
    }

    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        className={errors.name ? 'error' : ''}
        type="text"
        {...register('name', { required: 'Name is required' })}
      />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <label>Email</label>
      <input
        className={errors.email ? 'error' : ''}
        type="email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Enter a valid email address',
          },
        })}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <label>Date</label>
      <input
        className={errors.date ? 'error' : ''}
        type="date"
        {...register('date', { required: 'Date is required' })}
      />
      {errors.date && <p className="error">{errors.date.message}</p>}

      <label>Time</label>
      <input
        className={errors.time ? 'error' : ''}
        type="time"
        {...register('time', {
          required: 'Time is required',
          validate: validateTime,
        })}
      />
      {errors.time && <p className="error">{errors.time.message}</p>}

      <label>Number of Guests</label>
      <input
        className={errors.guests ? 'error' : ''}
        type="number"
        {...register('guests', {
          required: 'Number of guests is required',
          min: { value: 1, message: 'Must be at least 1 guest' },
          max: { value: 8, message: 'Cannot exceed 8 guests' },
        })}
      />
      {errors.guests && <p className="error">{errors.guests.message}</p>}

      <label>Occasion</label>
      <select
        className={errors.occasion ? 'error' : ''}
        {...register('occasion')}
      >
        <option value="">-- Select an occasion --</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Reserve" />
    </form>
  );
}

export default BookingPage;
