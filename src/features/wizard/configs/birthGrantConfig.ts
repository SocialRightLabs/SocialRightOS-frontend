import { WizardConfig } from './types';

const birthGrantConfig: WizardConfig = {
  id: 'birthGrant',
  title: 'Doğum Yardımı',
  description: 'Doğum yardımı için bazı temel bilgileri paylaşın.',
  questions: [
    { key: 'applicant_citizen', label: 'TC vatandaşı mısınız?', type: 'boolean' },
    { key: 'residency', label: 'Türkiye ikametiniz mevcut mu?', type: 'boolean' },
    { key: 'live_birth', label: 'Canlı doğum gerçekleşti mi?', type: 'boolean' },
    { key: 'kps_registered', label: 'KPS kaydınız var mı?', type: 'boolean' },
    { key: 'birth_date', label: 'Doğum tarihi', type: 'date' }
  ],
  shortCircuits: [
    { when: { key: 'applicant_citizen', op: '!==', value: true }, outcome: { eligible: false, reasonCode: 'APPLICANT_TURKISH_CITIZEN_REQUIRED' } },
    { when: { key: 'live_birth', op: '!==', value: true }, outcome: { eligible: false, reasonCode: 'LIVE_BIRTH_REQUIRED' } }
  ]
};

export default birthGrantConfig;
