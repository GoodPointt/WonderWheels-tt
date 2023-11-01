import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { StyledLocaleSelectBtn } from './styles/LocaleSelect.styled';
import { GrLanguage } from 'react-icons/gr';

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
      <GrLanguage size={24} />
      {lang}
    </StyledLocaleSelectBtn>
  );
};

export default LocaleSelect;
