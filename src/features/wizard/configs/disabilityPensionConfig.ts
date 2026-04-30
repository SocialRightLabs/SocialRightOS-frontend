import { WizardConfig } from './types';

const disabilityPensionConfig: WizardConfig = {
  id: 'disabilityPension',
  title: 'Engelli Aylığı',
  description: 'Engelli aylığı uygunluğunu değerlendirmek için gerekli bilgileri paylaşın.',
  questions: [
    { key: 'applicant_age', label: 'Kaç yaşındasınız?', type: 'number' },
    { key: 'household_monthly_income', label: 'Hane aylık toplam geliri (TL)', type: 'currency' },
    { key: 'social_security_absence', label: 'SGK kapsamında priminiz var mı?', type: 'boolean' },
    { key: 'disability_rate', label: 'Engellilik oranı (%)', type: 'number' },
    { key: 'valid_medical_report', label: 'Geçerli sağlık raporunuz var mı?', type: 'boolean' }
  ],
  shortCircuits: [
    { when: { key: 'social_security_absence', op: '===', value: true }, outcome: { eligible: false, reasonCode: 'SOCIAL_SECURITY_ABSENCE_REQUIRED' } },
    { when: { key: 'disability_rate', op: '<', valueRef: 'DISABILITY_RATE_THRESHOLD' }, outcome: { eligible: false, reasonCode: 'DISABILITY_RATE_THRESHOLD' } },
    { when: { key: 'household_monthly_income', op: '>', valueRef: 'MEANS_TEST_DISABILITY_PENSION_1_3' }, outcome: { eligible: false, reasonCode: 'MEANS_TEST_DISABILITY_PENSION_1_3' } }
  ]
};

export default disabilityPensionConfig;
