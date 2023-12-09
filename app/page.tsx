import BuiltInFormatsDemo from '../components/BuiltInFormatDemo';
import SubscribeForm from '../components/SubscribeForm';
import {createTranslation} from '../i18n/server';

async function IndexPage() {
  const {t} = await createTranslation('home');

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <hr className="my-4" />
      <SubscribeForm />
      <BuiltInFormatsDemo />
    </div>
  );
}

export default IndexPage;
