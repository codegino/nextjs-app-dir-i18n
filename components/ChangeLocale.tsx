'use client';
import React from 'react';
import {switchLocaleAction} from '../actions/switch-locale';
import {useTranslation} from '../i18n/client';

function ChangeLocale() {
  const {i18n, t} = useTranslation('common');

  return (
    <div>
      <select
        onChange={e => switchLocaleAction(e.target.value)}
        value={i18n.resolvedLanguage}
      >
        <option value="en">🇺🇸 {t('english')}</option>
        <option value="zh-CN">🇨🇳 {t('chinese')}</option>
        <option value="sv">🇸🇪 {t('swedish')}</option>
      </select>
    </div>
  );
}

export default ChangeLocale;
