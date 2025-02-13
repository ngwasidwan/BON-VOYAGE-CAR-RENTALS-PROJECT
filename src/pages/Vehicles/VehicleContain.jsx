// import { useState } from "react";

const VehicleContain = ({
  car,
  usersReservationDetails,
  onHandleBookingAsGuest,
  filledFormBooking,
}) => {
  // function onHandleHaveAccountBooking() {}
  // console.log(usersReservationDetails);

  const matchingNavigationPath =
    usersReservationDetails === null ||
    usersReservationDetails.stateOfOperation === undefined ||
    usersReservationDetails.stateOfOperation === "";

  return (
    <div className="shadow-lg relative">
      <div className="overflow-hidden">
        <img src={`/${car.image}`} alt={car.name} />
      </div>
      <p className="text-lg font-bold my-4 ml-4">{car.name}</p>

      {car.price > 100 && <p className="italic mb-4 ml-4">{car.description}</p>}

      <p className="ml-4 mb-16 ">
        <strong>${car.price}</strong>
        /day
      </p>

      <div className="flex justify-around items-center pb-4">
        {/* //todo  this will check for the incoming usersReservationDetails from all directions and then render the button that matches */}
        {
          <button
            // onClick={onHandleHaveAccountBooking}

            onClick={() => {
              !matchingNavigationPath && filledFormBooking(car);
              matchingNavigationPath && onHandleBookingAsGuest(car);
            }}
            className="booking_btn mb-5"
          >
            Book now
          </button>
        }
      </div>
    </div>
  );
};

export default VehicleContain;
