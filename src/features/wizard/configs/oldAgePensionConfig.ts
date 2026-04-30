import { WizardConfig } from './types';

const oldAgePensionConfig: WizardConfig = {
  id: 'oldAgePension',
  title: 'Yaşlılık Aylığı',
  description: 'Yaşlılık aylığı için gerekli bilgileri paylaşın.',
  questions: [
    { key: 'applicant_age', label: 'Kaç yaşındasınız?', type: 'number' },
    { key: 'self_and_spouse_monthly_income', label: 'Başvuran ve eşinin toplam aylık geliri (TL)', type: 'currency' },
    { key: 'social_security_absence', label: 'SGK kapsamında priminiz var mı?', type: 'boolean' },
    { key: 'has_pension', label: 'Zaten emekli maaşı alıyor musunuz?', type: 'boolean' }
  ],
  shortCircuits: [
    { when: { key: 'applicant_age', op: '<', value: 65 }, outcome: { eligible: false, reasonCode: 'MIN_AGE_REQUIRED' } },
    { when: { key: 'self_and_spouse_monthly_income', op: '>', valueRef: 'MEANS_TEST_OLD_AGE_PENSION_1_3' }, outcome: { eligible: false, reasonCode: 'MEANS_TEST_OLD_AGE_PENSION_1_3' } },
    { when: { key: 'has_pension', op: '===', value: true }, outcome: { eligible: false, reasonCode: 'NO_PENSION_REQUIRED' } }
  ]
};

export default oldAgePensionConfig;
