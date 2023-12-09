import React from 'react';
import {createTranslation} from '../i18n/server';

// pass the locale as a prop
const SubscribeForm = async () => {
  const {t} = await createTranslation('newsletter');

  return (
    <section className="w-[350px]">
      <h3>{t('title')}</h3>
      <h4>{t('subtitle')}</h4>

      <form className="flex flex-col items-start">
        <input
          placeholder={t('form.firstName')}
          className="border mb-1 p-1 w-full"
        />
        <input
          placeholder={t('form.email')}
          className="border mb-1 p-1 w-full"
        />
        <button className="border mb-1 p-1 w-full">
          {t('form.action.signUp')}
        </button>
        <button className="border mb-1 p-1 w-full">
          {t('form.action.cancel')}
        </button>
      </form>
    </section>
  );
};

export default SubscribeForm;
