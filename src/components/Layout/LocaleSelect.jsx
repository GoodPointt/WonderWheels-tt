import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { StyledLocaleSelectBtn } from './styles/LocaleSelect.styled';
import { MdOutlineLanguage } from 'react-icons/md';

const LocaleSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { i18n } = useTranslation();
  const lang = searchParams.get('locale') || '';

  useEffect(() => {
    i18n?.changeLanguage(lang);
  }, [i18n, lang]);

  const handleLocaleChange = () => {
    const chosenLang = lang === 'en' ? 'ua' : 'en';
    setSearchParams({ locale: chosenLang });
  };

  return (
    <StyledLocaleSelectBtn onClick={handleLocaleChange}>
      <MdOutlineLanguage size={30} />
      {lang}
    </StyledLocaleSelectBtn>
  );
};

export default LocaleSelect;
