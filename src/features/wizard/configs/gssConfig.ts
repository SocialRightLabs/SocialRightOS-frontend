import { WizardConfig } from './types';

const gssConfig: WizardConfig = {
  id: 'gss',
  title: 'Genel Sağlık Sigortası (GSS) Uygunluğu',
  description: 'GSS uygunluğunuzu kontrol etmek için gelir ve sigorta bilgilerini paylaşın.',
  questions: [
    { key: 'household_gross_income', label: 'Hane aylık brüt gelir (TL)', type: 'currency' },
    { key: 'social_security_absence', label: 'SGK kapsamında priminiz var mı?', type: 'boolean' },
    { key: 'active_insurance', label: 'Aktif bir sigorta kaydınız var mı?', type: 'boolean' },
    { key: 'dependent_coverage', label: 'Ailenizde sigorta kapsamında olan bağımlılar var mı?', type: 'boolean' }
  ],
  shortCircuits: [
    { when: { key: 'household_gross_income', op: '>', valueRef: 'MEANS_TEST_GSS_GROSS_1_3' }, outcome: { eligible: false, reasonCode: 'MEANS_TEST_GSS_GROSS_1_3' } },
    { when: { key: 'social_security_absence', op: '===', value: false }, outcome: { eligible: true } }
  ]
};

export default gssConfig;
