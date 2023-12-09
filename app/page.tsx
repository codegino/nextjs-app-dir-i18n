import BuiltInFormatsDemo from '../components/BuiltInFormatDemo';
import SubscribeForm from '../components/SubscribeForm';
import {createTranslation, getLocale} from '../i18n/server';

// Make the page async cause we need to use await for createTranslation
const IndexPage = async () => {
  const locale = getLocale();
  // Make sure to use the correct namespace here.
  const {t} = await createTranslation(locale, 'home');

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <hr className="my-4" />
      <BuiltInFormatsDemo />
      <hr className="my-4" />
      <SubscribeForm locale={locale} />
    </div>
  );
};

export default IndexPage;
