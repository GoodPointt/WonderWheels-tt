import Button from '../../Button/Button';
import { StyledCarDetails } from './CarDetails.styled';

const CarDetails = ({
  car: {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  },
}) => {
  const tips = `${address}, Id: ${id}, Year: ${year}, Type: ${type}, Fuel Consumption: ${fuelConsumption}, Engine Size: ${engineSize}`;

  const tipsArr = tips.split(',');
  const tipsF = tipsArr.shift(0);

  return (
    <StyledCarDetails>
      <img src={img} alt={`${model} ${make} ${year}`} />
      <h3>
        {make}
        <span>{model},</span>
        {year}
      </h3>

      <p className="subDesc">
        {tipsArr.length > 0 &&
          tipsArr.map((tip, idx) => <span key={idx}> {tip} |</span>)}
      </p>
      <p className="desc">{description}</p>
      <h4>Accessories and functionalities:</h4>
      <p className="subDesc">
        {[...accessories, ...functionalities].map((tip, idx) => (
          <span key={idx}> {tip} |</span>
        ))}
      </p>
      <h4>Rental Conditions:</h4>
      <Button>Rental Car</Button>
    </StyledCarDetails>
  );
};

export default CarDetails;
