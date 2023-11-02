import Select from 'react-select';
import { makes } from '../../../common/data/index';
import { useAdverts } from '../../../hooks/useAdverts';
import { useDispatch } from 'react-redux';
import { getByMake } from '../../../redux/adverts/operations';
import { resetPage } from '../../../redux/adverts/slice';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const MakesFilter = () => {
  const { isLoading, make } = useAdverts();
  const dispatch = useDispatch();

  const controlStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: '#F7F7FB',
      borderColor: '#F7F7FB',
      color: '#121417',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.11,
      padding: '14px 0px 14px 14px',
      borderRadius: '14px',
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
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 1.25,
        transition: 'all 300ms ease',
        ':hover': {
          cursor: 'pointer',
        },
      };
    },
    singleValueRemove: styles => {
      return {
        ...styles,
        ':hover': {
          cursor: 'pointer',
        },
      };
    },
  };

  const handleChange = selectedOption => {
    const { label } = selectedOption;
    if (label !== make) dispatch(resetPage());
    dispatch(getByMake(label));
  };

  return (
    <div>
      <h4>Car brand</h4>
      <Select
        styles={controlStyles}
        options={makes}
        onChange={handleChange}
        name="makes"
        isDisabled={isLoading}
        className="makes"
        isSearchable={true}
        placeholder="Select brand..."
        closeMenuOnSelect={true}
        components={animatedComponents}
      />
    </div>
  );
};

export default MakesFilter;
