import {createTranslation} from '../../../i18n/server';

const AboutPage = async ({params: {locale}}) => {
  // Make sure to use the correct namespace here.
  const {t} = await createTranslation(locale, 'about');

  return (
    <div>
      <h1>{t('aboutThisPage')}</h1>
    </div>
  );
};

export default AboutPage;
