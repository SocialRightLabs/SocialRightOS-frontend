import { WizardConfig } from './types';

const cozgerHomeCareConfig: WizardConfig = {
  id: 'cozgerHomeCare',
  title: 'Çocuklar için Evde Bakım (COZGER)',
  description: 'COZGER raporuna dayalı evde bakım uygunluğunu değerlendirmek için kısa sorular.',
  questions: [
    { key: 'child_age', label: 'Çocuğun yaşı', type: 'number' },
    { key: 'household_monthly_income', label: 'Hane aylık toplam geliri (TL)', type: 'currency' },
    { key: 'cozger_report_present', label: 'COZGER raporu yüklediniz mi?', type: 'boolean' },
    { key: 'cozger_special_need_level', label: 'Özel gereksinim düzeyi', type: 'select', options: [
      { value: 'none', label: 'Yok' },
      { value: 'belirgin_ozel_gereksinim_var', label: 'Belirgin özel gereksinim' },
      { value: 'cok_ileri_duzey_ozel_gereksinim', label: 'Çok ileri düzey' }
    ] },
    { key: 'caregiver_same_residence', label: 'Bakım veren ile aynı adreste yaşıyor musunuz?', type: 'boolean' }
  ],
  shortCircuits: [
    { when: { key: 'cozger_report_present', op: '===', value: false }, outcome: { eligible: false, reasonCode: 'COZGER_REPORT_REQUIRED' } },
    { when: { key: 'cozger_special_need_level', op: 'in', value: ['belirgin_ozel_gereksinim_var','cok_ileri_duzey_ozel_gereksinim'] }, outcome: { eligible: true } },
    { when: { key: 'household_monthly_income', op: '>', valueRef: 'MEANS_TEST_HOME_CARE_2_3' }, outcome: { eligible: false, reasonCode: 'MEANS_TEST_HOME_CARE_2_3' } }
  ]
};

export default cozgerHomeCareConfig;
