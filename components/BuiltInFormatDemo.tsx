'use client';
import React from 'react';
import {useTranslation} from '../i18n/client';

const BuiltInFormatsDemo = () => {
  const {t} = useTranslation('built-in-demo');

  return (
    <div>
      <p>
        {/* "number": "Number: {{val, number}}", */}
        {t('number', {
          val: 123456789.0123,
        })}
      </p>
      <p>
        {/* "currency": "Currency: {{val, currency}}", */}
        {t('currency', {
          val: 123456789.0123,
          style: 'currency',
          currency: 'USD',
        })}
      </p>

      <p>
        {/* "dateTime": "Date/Time: {{val, datetime}}", */}
        {t('dateTime', {
          val: new Date(1234567890123),
          formatParams: {
            val: {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            },
          },
        })}
      </p>

      <p>
        {/* "relativeTime": "Relative Time: {{val, relativetime}}", */}
        {t('relativeTime', {
          val: 12,
          style: 'long',
        })}
      </p>

      <p>
        {/* "list": "List: {{val, list}}", */}
        {t('list', {
          // https://www.i18next.com/translation-function/objects-and-arrays#objects
          // Check the link for more details on `returnObjects`
          val: t('weekdays', {returnObjects: true}),
        })}
      </p>
    </div>
  );
};

export default BuiltInFormatsDemo;
