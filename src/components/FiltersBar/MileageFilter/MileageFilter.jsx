import Select from 'react-select';
import { mileage } from '../../../common/data/index';
import { useAdverts } from '../../../hooks/useAdverts';
import { useDispatch } from 'react-redux';
import makeAnimated from 'react-select/animated';
import { useState } from 'react';
import { getByMileage } from '../../../redux/adverts/operations';
import Button from '../../Button/Button';
import { handleWarning } from '../../../utils/handleToast';

const animatedComponents = makeAnimated();

const MileageFilter = () => {
  const [minMileage, setMinMileage] = useState(0);
  const [maxMileage, setMaxMileage] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  console.log(minMileage);
  console.log(maxMileage);

  const { isLoading, filter } = useAdverts();
  const dispatch = useDispatch();

  const controlStylesAsc = {
    control: styles => ({
      ...styles,
      backgroundColor: '#F7F7FB',
      borderColor: '#F7F7FB',
      color: '#121417',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.11,
      padding: '14px 0px 14px 14px',
      borderBottomLeftRadius: '14px',
      borderTopLeftRadius: '14px',
      transition: 'all 300ms ease',
      ':hover': {
        cursor: 'text',
      },
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: isSelected || isFocused ? '#121417' : 'rgba(6, 7, 8, 0.272)',
        backgroundColor: (isSelected || isFocused) && 'transparent',
        fontFamily: 'Manrope',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: 1.25,
        transition: 'all 300ms ease',
        ':hover': {
          cursor: 'pointer',
        },
      };
    },
  };

  const controlStylesDesc = {
    control: styles => ({
      ...styles,
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: '14px',
      borderTopRightRadius: '14px',
      backgroundColor: '#F7F7FB',
      borderColor: '#F7F7FB',
      color: '#121417',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.11,
      padding: '14px 0px 14px 14px',
      transition: 'all 300ms ease',
      ':hover': {
        cursor: 'text',
      },
    }),
  };

  const handleChange = ({ label }, { name }) => {
    if (name === 'mileageAsc') {
      setMinMileage(Number(label));
    }
    if (name === 'mileageDesc') {
      setMaxMileage(Number(label));
    }
  };

  const onSearch = () => {
    if (minMileage > maxMileage) {
      return handleWarning('"From" mileage should be less then "To"');
    }
    if (minMileage === maxMileage) {
      return handleWarning('"From" and "To" mileages cant be equal');
    }

    dispatch(getByMileage({ minMileage, maxMileage }));
  };

  return (
    <div style={{ width: '728px' }}>
      <h4>Сar mileage / km</h4>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '18px',
        }}
      >
        <div style={{ display: 'flex' }}>
          <Select
            styles={controlStylesAsc}
            options={mileage}
            onChange={handleChange}
            name="mileageAsc"
            isDisabled={isLoading}
            isLoading={isLoading}
            className="mileageAsc"
            isSearchable={true}
            placeholder="From"
            closeMenuOnSelect={true}
            components={animatedComponents}
          />
          <Select
            styles={{ ...controlStylesAsc, ...controlStylesDesc }}
            options={mileage}
            onChange={handleChange}
            name="mileageDesc"
            isDisabled={isLoading}
            isLoading={isLoading}
            className="mileageDesc"
            isSearchable={true}
            placeholder="To"
            closeMenuOnSelect={true}
            components={animatedComponents}
          />
        </div>
        <Button
          isDisabled={minMileage === 0 && maxMileage === 0}
          handleClick={onSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default MileageFilter;
