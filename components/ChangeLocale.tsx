'use client';
import React from 'react';
import {useParams} from 'next/navigation';
import {switchLanguageAction} from '../actions/switch-language';

const ChangeLocale = () => {
  const params = useParams();

  const handleLocaleChange = event => {
    switchLanguageAction(event.target.value);
  };

  return (
    <div>
      <select onChange={handleLocaleChange} value={params.locale}>
        <option value="en">🇺🇸 English</option>
        <option value="zh-CN">🇨🇳 中文</option>
        <option value="sv">🇸🇪 Swedish</option>
      </select>
    </div>
  );
};

export default ChangeLocale;
