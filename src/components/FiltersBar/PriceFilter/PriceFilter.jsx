import Select from 'react-select';
import { prices } from '../../../common/data/index';
import { useAdverts } from '../../../hooks/useAdverts';
import { useDispatch } from 'react-redux';
import { getByPrice } from '../../../redux/adverts/operations';
import { resetPage } from '../../../redux/adverts/slice';
import makeAnimated from 'react-select/animated';
import { VARIANT } from '../../../common/constants';
import { useState, useEffect } from 'react';

const animatedComponents = makeAnimated();

const PriceFilter = ({ variant }) => {
  const { isLoading, filter, favorites } = useAdverts();
  const [isDisabled, setIsDisabled] = useState(isLoading);

  useEffect(() => {
    if (variant === VARIANT.FAV && favorites.length === 0) setIsDisabled(true);
  }, [favorites.length, isLoading, variant]);
  const dispatch = useDispatch();

  const controlStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: '#F7F7FB',
      borderColor: '#F7F7FB',
      color: '#121417',
      fontFamily: 'Manrope',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.11,
      padding: '12px 0px 12px 12px',
      borderRadius: '14px',
      transition: 'all 300ms ease',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: isSelected || isFocused ? '#121417' : 'rgba(6, 7, 8, 0.272)',
        backgroundColor: (isSelected || isFocused) && 'transparent',
        fontFamily: 'Manrope',
        fontSize: '16px',
        fontStyle: 'normal',
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

  const handleChange = selectedOption => {
    if (selectedOption === null) return;
    const { label } = selectedOption;
    if (label !== filter.rentalPrice) dispatch(resetPage());
    dispatch(
      getByPrice({ filter: { ...filter, rentalPrice: label }, variant })
    );
  };

  return (
    <div>
      <h4>Price / 1 hour</h4>
      <Select
        isClearable
        styles={{
          ...controlStyles,
          // clearIndicator: (base, state) => ({
          //   ...base,
          //   cursor: 'pointer',
          //   color: state.isFocused ? 'lightblue' : 'black',
          //   padding: 0,
          //   backgroundColor: 'red',
          //   position: 'absolute',
          //   right: '4%',
          // }),
        }}
        options={prices}
        onChange={handleChange}
        name="prices"
        isDisabled={isLoading || isDisabled}
        className="prices"
        isSearchable={true}
        placeholder="to $"
        closeMenuOnSelect={true}
        components={animatedComponents}
      />
    </div>
  );
};

export default PriceFilter;
