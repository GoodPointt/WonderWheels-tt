import { useTranslation } from 'react-i18next';
import Button from '../../Button/Button';
import { StyledCarDetails } from './CarDetails.styled';
import PropTypes from 'prop-types';

function NumberText({ value }) {
  return <span className="number">{value}</span>;
}

NumberText.propTypes = {
  value: PropTypes.string.isRequired,
};

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
    address,
    rentalConditions,
    mileage,
  },
}) => {
  const { t } = useTranslation();
  const tips = `${address}, Id: ${id}, Year: ${year}, Type: ${type}, Fuel Consumption: ${fuelConsumption}, Engine Size: ${engineSize}`;
  const tipsArr = tips.split(',');
  const tipsF = tipsArr.shift(0);
  const formatedMileage =
    mileage.toString().slice(0, 1) + ',' + mileage.toString().slice(1);

  const renderRentalConditions = () => {
    const conditions = [
      ...rentalConditions.split('\n'),
      `Mileage: ${formatedMileage}`,
      `Price: $${rentalPrice}`,
    ];

    return conditions.map((item, idx) => (
      <span className="condition" key={idx}>
        {item.includes(':') ? (
          <>
            {item.split(':')[0]}: <NumberText value={item.split(':')[1]} />
          </>
        ) : (
          item
        )}
      </span>
    ));
  };

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
          tipsArr.map((tip, idx) => (
            <span className="tip" key={idx}>
              {' '}
              {tip}{' '}
            </span>
          ))}
      </p>
      <p className="desc">{description}</p>
      <h4>Accessories and functionalities:</h4>
      <p className="subDesc">
        {[...accessories, ...functionalities].map((tip, idx) => (
          <span key={idx} className="tip">
            {' '}
            {tip}
          </span>
        ))}
      </p>
      <h4>Rental Conditions:</h4>
      <p
        style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24 }}
      >
        {renderRentalConditions()}
      </p>
      <a href="tel:+380730000000">
        <Button>{t('button.rentLable')}</Button>
      </a>
    </StyledCarDetails>
  );
};

export default CarDetails;

CarDetails.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    rentalPrice: PropTypes.number.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
