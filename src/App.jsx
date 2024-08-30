//todo // package import

import { BrowserRouter, Route, Routes } from "react-router-dom";
// useLocation
//todo // component imports
import CLarksvilleTennessee from "./pages/Location/CLarksVilleTennessee";
import BloomingtonMinnesota from "./pages/Location/BloomingtonMinnesota";
import WoodbridgeVirginia from "./pages/Location/WoodBridgeVirginia";
import PageNotFound from "./PageNotFound";
import HomePage from "./pages/Home";
import AppLayOut from "./components/ui/AppLayOut";
import CarsUnder5000 from "./pages/Reservations/CarsUnder5000";
import InsuredCars from "./pages/Reservations/InsuredCars";
import SpecialOffers from "./pages/Reservations/SpecialOffers";
import Blogs from "./pages/Blogs";
import Politics from "./pages/Reservations/Politics";
import LatestCarNews from "./pages/Reservations/LatestCarNews";
import RideShareReservationAndMore from "./pages/Business/RideShareReservationAndMore";
// import RentToOwn from "./pages/Business/RentToOwn";
import HowWeWork from "./pages/Reservations/HowWeWork";
import Faq from "./pages/help/Faq";
import Safety from "./components/ui/Safety";
import Accident from "./pages/blogs/Accident";
import AvoidPayDeposit from "./pages/blogs/AvoidPayDeposits";
import BestCarCompanies from "./pages/blogs/BestCarCompanies";
import CarCrashWithoutInsurance from "./pages/blogs/CarCrashWithoutInsurance";
import DriverFault from "./pages/blogs/DriverFault";
import AboutUs from "./pages/About/AboutUs";
import CarFleet from "./pages/Vehicles/CarFleet";
import AllVehicleCategory from "./pages/Vehicles/AllVehicleCategory";
import StartCarReservation from "./pages/Reservations/StartCarReservation";
import CarCrashKnowledge from "./pages/blogs/CarCrashKnowledge";
import BestShortTerm from "./pages/blogs/BestShortTerm";
import Map from "./components/map/Map";
import HelpInfo from "./pages/help/FaqInfo";
import InsuranceImportance from "./pages/blogs/InsuranceImportance";
import NoInsuranceCrash from "./pages/blogs/NoInsuranceCrash";
import Overview from "./pages/blogs/Overview";
import PayTolls from "./pages/blogs/PayTolls";
import RentalCarState from "./pages/blogs/RentalCarState";
import RentalCarStolen from "./pages/blogs/RentalCarStolen";
import Repairs from "./pages/blogs/Repairs";
import Requirements from "./pages/blogs/Requirements";
import TimeToReportStolen from "./pages/blogs/TimeToReportStolen";
import Contact from "./components/Contact";
import Services from "./pages/Reservations/Services";
import SellACar from "./pages/Business/SellACar";
import UserDashboard from "./components/UserDashboard";

import ReserveForThirdPartyAndHolidayOffers from "./pages/Reservations/ReserveForThirdPartyAndHolidayOffers";
import Vehicle from "./pages/Vehicles/Vehicle";
import AllCars from "./pages/Vehicles/AllCars";

//When a user clicks the book now button, it takes the user to the book now page as defined in the book-now route below
import BookNow from "./pages/Vehicles/BookNow";

import ReviewsAndTouristicSitesPage from "./pages/ReviewsAndTouristicSitesPage";

// scroll all routes to the top when navigated
import ScrollToTop from "./lib/ScrollToTop";
import Login from "./components/ui/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  //code to import the client id from our .env file. Without this id, the google sign in will not work.
  //this id must be kept secret because it can be used to log into your google account without your permission.
  const clientID = import.meta.env.VITE_APP_CLIENT_ID;

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            element={
              //providing our google auth provider to the entire application

              // <GoogleOAuthProvider clientId="a clientId will be provided by google that we will use here. this id is private and should not be leaked to the browser">

              // for now, the sign in will not work until we specify our client id
              <GoogleOAuthProvider clientId={clientID}>
                <AppLayOut />
              </GoogleOAuthProvider>
            }
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<Login />} />

            {/* //todo //: route for navbar-_1 */}
            {/* routes for help */}
            <Route path="F-A-Q" element={<Faq />} />
            <Route path="Help" element={<HelpInfo />} />
            <Route path="find-a-location" element={<Map />} />
            {/* //todo //: route for navbar-_2 */}
            {/*  route path for Reservation */}
            <Route
              path="start-a-car-reservation"
              element={<StartCarReservation />}
            />
            <Route
              path="third-party-reservations"
              element={<ReserveForThirdPartyAndHolidayOffers />}
            />
            <Route
              path="share-a-ride"
              element={<RideShareReservationAndMore />}
            />
            <Route path="how-we-operate" element={<HowWeWork />} />
            <Route path="services" element={<Services />} />
            {/* Good Deals */}
            <Route path="cars-under-$5000" element={<CarsUnder5000 />} />
            <Route path="insured-cars" element={<InsuredCars />} />
            {/* Promo */}
            <Route path="special-offers" element={<SpecialOffers />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="politics" element={<Politics />} />
            <Route path="latest-car-news" element={<LatestCarNews />} />
            {/*  routes for Business */}
            <Route path="buy-a-car" element={<SellACar />} />
            <Route path="sell-a-car" element={<SellACar />} />
            {/* <Route path="how-ride-share-works" element={<RideShare />} /> */}
            <Route
              path="rent-to-own"
              element={<RideShareReservationAndMore />}
            />
            {/* //todo vehicles Routes */}

            <Route
              path="/all-vehicle-category"
              element={<AllVehicleCategory />}
            />
            <Route path="/all-vehicle-category/:carsId" element={<Vehicle />} />
            {/* <Route path="usersChosenCar" element={<Test />} /> */}

            {/* this is all-available-cars routes */}
            <Route path="all-available-cars" element={<AllCars />} />

            {/* //todo  forms */}
            <Route path="view-car-fleet" element={<CarFleet />} />

            {/* //todo location */}
            {/* //todo landham */}
            <Route path="Lanham-MD" element={<StartCarReservation />} />

            <Route
              path="Lanham-MD/all-vehicle-category"
              element={<AllVehicleCategory />}
            />

            <Route
              path="Lanham-MD/all-vehicle-category/:carsId"
              element={<Vehicle />}
            />

            {/* //todo laurel-MD*/}
            <Route path="Laurel-MD" element={<StartCarReservation />} />

            <Route
              path="Laurel-MD/all-vehicle-category"
              element={<AllVehicleCategory />}
            />

            <Route
              path="Laurel-MD/all-vehicle-category/:carsId"
              element={<Vehicle />}
            />
            {/* ///////////////////////////////////////////////////////// */}
            {/* 
            <Route path={`/${location}`} element={<StartCarReservation />} />

            <Route
              path={`/${location}/all-vehicle-category`}
              element={<AllVehicleCategory />}
            />

            <Route
              path={`/${location}/all-vehicle-category/:carsId`}
              element={<Vehicle />}
            /> */}

            {/* //todo clarksville-TN */}
            <Route
              path="clarksville-TN"
              element={<CLarksvilleTennessee />}
            ></Route>

            <Route
              path="clarksville-TN/all-vehicle-category"
              element={<AllVehicleCategory />}
            />
            <Route
              path="clarksville-TN/all-vehicle-category/:carsId"
              element={<Vehicle />}
            />

            {/* /////////////////////////////////////////////////////////// */}

            {/* //todo this is for clarksville-TN minnesota */}
            <Route path="bloomington-MT" element={<BloomingtonMinnesota />} />

            <Route
              path="bloomington-MT/all-vehicle-category"
              element={<AllVehicleCategory />}
            />

            <Route
              path="bloomington-MT/all-vehicle-category/:carsId"
              element={<Vehicle />}
            />

            {/* //todo this is for woodbridge virginia */}
            <Route path="woodbridge-VA" element={<WoodbridgeVirginia />} />

            <Route
              path="woodbridge-VA/all-vehicle-category"
              element={<AllVehicleCategory />}
            />

            <Route
              path="woodbridge-VA/all-vehicle-category/:carsId"
              element={<Vehicle />}
            />

            {/* //todo learn */}
            {/* safety routes */}
            <Route path="our-safety-policy" element={<Safety />} />
            <Route path="How-we-operate" element={<HowWeWork />} />
            <Route path="Our-offerings" element={<Services />} />
            <Route path="accident-in-rental-car" element={<Accident />} />
            <Route
              path="holiday-offers"
              element={<ReserveForThirdPartyAndHolidayOffers />}
            />

            {/*Penalty */}
            <Route path="our-safety-policy" element={<Safety />} />
            <Route
              path="holiday-offers"
              element={<ReserveForThirdPartyAndHolidayOffers />}
            />

            {/* rental car repairs */}
            <Route
              path="who-pays-for-rental-car-repairs"
              element={<Repairs />}
            />
            <Route
              path="results-on-stolen-rental-car"
              element={<RentalCarStolen />}
            />
            {/* this is the blogs */}
            <Route path="accident" element={<Accident />} />
            <Route path="Avoid-Paying-Deposits" element={<AvoidPayDeposit />} />
            <Route path="Best-Car-companies" element={<BestCarCompanies />} />
            <Route
              path="Car-crash-without-insurance"
              element={<CarCrashWithoutInsurance />}
            />
            <Route path="Learn-about-company" element={<AboutUs />} />
            <Route path="Driver-fault" element={<DriverFault />} />
            <Route
              path="Insurance-Importance"
              element={<InsuranceImportance />}
            />
            <Route path="No-Insurance-crash" element={<NoInsuranceCrash />} />
            <Route path="Overview" element={<Overview />} />
            <Route path="Pay-tolls" element={<PayTolls />} />
            <Route path="Rental-car-state" element={<RentalCarState />} />
            <Route path="Rental-car-stolen" element={<RentalCarStolen />} />
            <Route path="Repairs" element={<Repairs />} />
            <Route path="Requirements" element={<Requirements />} />
            <Route
              path="Time-to-report-stolen"
              element={<TimeToReportStolen />}
            />

            <Route
              path="/best-short-term-car-rental-in-lanham"
              element={<BestShortTerm />}
            />
            <Route
              path="/knowledge-on-car-crash"
              element={<CarCrashKnowledge />}
            />
            {
              //added contact route
            }
            <Route path="/Contact-us" element={<Contact />} />
            <Route path="/dashboard" element={<UserDashboard />} />

            <Route path="/book-now" element={<BookNow />} />
            <Route path="/book-now/:carDetails" element={<BookNow />} />

            {/* reviews and touristic sites */}
            <Route
              path="/bon-voyage-reviews"
              element={<ReviewsAndTouristicSitesPage />}
            />
            <Route
              path="/bon-voyage-touristic-site"
              element={<ReviewsAndTouristicSitesPage />}
            />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
