import Select from 'react-select';
import { mileage } from '../../../common/data/index';
import { useAdverts } from '../../../hooks/useAdverts';
import { useDispatch } from 'react-redux';
import makeAnimated from 'react-select/animated';
import { useState, useEffect } from 'react';
import { getByMileage } from '../../../redux/adverts/operations';
import Button from '../../Button/Button';
import { handleWarning } from '../../../utils/handleToast';
import { VARIANT } from '../../../common/constants';

const animatedComponents = makeAnimated();

const MileageFilter = ({ variant }) => {
  const [minMileage, setMinMileage] = useState(0);
  const [maxMileage, setMaxMileage] = useState(0);
  const { isLoading, favorites, filter } = useAdverts();

  const [isDisabled, setIsDisabled] = useState(isLoading);

  useEffect(() => {
    if (variant === VARIANT.FAV && favorites.length === 0) setIsDisabled(true);
  }, [favorites.length, isLoading, variant]);
  const dispatch = useDispatch();

  const controlStylesAsc = {
    control: styles => ({
      ...styles,
      backgroundColor: '#F7F7FB',
      borderColor: '#F7F7FB',
      color: '#121417',
      fontFamily: 'Manrope',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.11,
      padding: '14px 0px 14px 14px',
      borderBottomLeftRadius: '14px',
      borderTopLeftRadius: '14px',
      transition: 'all 300ms ease',
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
        ':hover': { cursor: 'pointer' },
      };
    },
    menu: styles => {
      return {
        ...styles,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        border: '1px solid rgba(18, 20, 23, 0.05)',
        padding: '14px 8px 14px 18px',
      };
    },
    clearIndicator: base => ({
      ...base,
      cursor: 'pointer',
      color: '#000',
      padding: 0,
      position: 'absolute',
      right: '8px',
      backgroundColor: '#F7F7FB',
    }),
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
    }),
  };

  const handleChange = (selectedOption, { name }) => {
    if (selectedOption === null) {
      setMinMileage(0);
      return;
    }
    console.log(selectedOption);
    if (name === 'mileageAsc') {
      setMinMileage(Number(selectedOption.value));
    }
    if (name === 'mileageDesc') {
      setMaxMileage(Number(selectedOption.value));
    }
  };

  const onSearch = () => {
    if (minMileage > maxMileage) {
      return handleWarning('"From" mileage should be less then "To"');
    }
    if (minMileage === maxMileage) {
      return handleWarning('"From" and "To" mileages cant be equal');
    }

    dispatch(
      getByMileage({
        variant,
        filter: {
          ...filter,
          mileage: {
            minMileage,
            maxMileage,
          },
        },
      })
    );
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
            isClearable
            styles={controlStylesAsc}
            options={mileage}
            onChange={handleChange}
            name="mileageAsc"
            isDisabled={isLoading || isDisabled}
            isLoading={isLoading}
            className="mileageAsc"
            isSearchable={true}
            placeholder="From"
            closeMenuOnSelect={true}
            components={animatedComponents}
          />
          <Select
            isClearable
            styles={{ ...controlStylesAsc, ...controlStylesDesc }}
            options={mileage}
            onChange={handleChange}
            name="mileageDesc"
            isDisabled={isLoading || isDisabled}
            isLoading={isLoading}
            className="mileageDesc"
            isSearchable={true}
            placeholder="To"
            closeMenuOnSelect={true}
            components={animatedComponents}
          />
        </div>
        <Button
          isDisabled={minMileage === 0 || maxMileage === 0}
          handleClick={onSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default MileageFilter;
