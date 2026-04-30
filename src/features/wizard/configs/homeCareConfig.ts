import { WizardConfig } from './types';

const homeCareConfig: WizardConfig = {
  id: 'homeCare',
  title: 'Evde Bakım Maaşı',
  description: 'Evde bakım desteği için bazı soruları yanıtlayın — size adım adım yardımcı olacağız.',
  questions: [
    { key: 'applicant_age', label: 'Kaç yaşındasınız?', type: 'number' },
    { key: 'household_monthly_income', label: 'Hane aylık toplam geliri (TL)', type: 'currency' },
    {
      key: 'care_dependency',
      label: 'Bakım ihtiyacı seviyesi',
      type: 'select',
      options: [
        { value: 'none', label: 'Yok' },
        { value: 'partial', label: 'Kısmi' },
        { value: 'full_dependency', label: 'Tam bağımlılık' }
      ]
    },
    { key: 'care_recipient_disability_rate', label: 'Bakım ihtiyacı olan kişinin engellilik oranı (%)', type: 'number' },
    { key: 'caregiver_same_residence', label: 'Bakım veren ile aynı adreste yaşıyor musunuz?', type: 'boolean' }
  ],
  shortCircuits: [
    { when: { key: 'care_dependency', op: '!==', value: 'full_dependency' }, outcome: { eligible: false, reasonCode: 'CARE_DEPENDENCY_REQUIRED' } },
    { when: { key: 'household_monthly_income', op: '>', valueRef: 'MEANS_TEST_HOME_CARE_2_3' }, outcome: { eligible: false, reasonCode: 'MEANS_TEST_HOME_CARE_2_3' } }
  ]
};

export default homeCareConfig;
