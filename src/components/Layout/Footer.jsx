import { StyledContainer } from '../Container/Container.styled';
import { StyledFooterWrapper } from './styles/StyledFooterWrapper.styled';
import { LiaPhoneSolid } from 'react-icons/lia';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <StyledContainer>
        <StyledFooterWrapper>
          <div>
            <h4 className="footerTitle">{t('footer.titleLeft')}</h4>
            <div>
              <ul className="contactsList">
                <li className="contactsItem">
                  <LiaPhoneSolid size={30} />
                  <a href="tel:+38094000000">+38094000000</a>
                </li>
                <li className="contactsItem">
                  <MdOutlinePhoneAndroid size={30} />
                  <a href="tel:+380940000123">+380940000123</a>
                </li>
                <li className="contactsItem">
                  <IoIosMail size={30} />
                  <a href="mailto:wonderwheels@mail.com">
                    wonderwheels@mail.com
                  </a>
                </li>
                <li className="contactsItem">
                  <FaLocationDot size={30} />
                  <span>{t('footer.address')}</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="footerTitle">{t('footer.titleRight')}</h4>
            <table className="Hours table">
              <tbody>
                <tr>
                  <td>
                    <span>{t('footer.days')}</span>{' '}
                  </td>
                  <td>
                    <span>{t('footer.hours')}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>{t('footer.weekend')}</span>
                  </td>
                  <td>
                    <span>{t('footer.closed')}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </StyledFooterWrapper>
      </StyledContainer>
    </footer>
  );
};

export default Footer;
