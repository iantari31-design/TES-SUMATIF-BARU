import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================
  // BAGIAN 1: PILIHAN GANDA (10 SOAL - 4 OPSI JAWABAN)
  // =========================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Urutan & Fungsi Organ Pencernaan',
    difficulty: 'Mudah',
    imageKey: 'digestive_system',
    imageCaption: 'Gambar 1. Diagram saluran pencernaan manusia (nomor 1 sampai 6)',
    text: 'Perhatikan gambar sistem pencernaan manusia di atas! Organ yang ditunjuk oleh nomor 3 dan nomor 4 secara berturut-turut berperan dalam proses...',
    options: [
      { id: 'A', text: 'Menghancurkan makanan secara mekanis oleh gigi dan mendorong makanan dengan gerak peristaltik' },
      { id: 'B', text: 'Mencerna makanan dengan asam lambung dan enzim, lalu menyerap sari-sari makanan' },
      { id: 'C', text: 'Menyerap kembali air dari sisa makanan dan membusukkan sisa makanan menjadi feses' },
      { id: 'D', text: 'Menghasilkan cairan empedu dan mengeluarkan sisa makanan melalui anus' },
    ],
    correctAnswer: 'B',
    explanation:
      'Berdasarkan gambar:\n• Nomor 1: Mulut\n• Nomor 2: Kerongkongan\n• Nomor 3: Lambung (mencerna makanan secara mekanis & kimiawi dengan HCl serta enzim pepsin/renin)\n• Nomor 4: Usus Halus (menyerap sari-sari makanan ke dalam darah)\n• Nomor 5: Usus Besar (menyerap air dan membusukkan sisa makanan)\n• Nomor 6: Anus.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Pencernaan Kimiawi di Mulut',
    difficulty: 'Mudah',
    text: 'Ketika kita mengunyah nasi putih cukup lama, lama-kelamaan nasi tersebut terasa agak manis di lidah. Hal ini terjadi karena di dalam air liur terdapat enzim yang mengubah zat tepung (karbohidrat) menjadi zat gula sederhana. Enzim yang dimaksud adalah...',
    options: [
      { id: 'A', text: 'Enzim pepsin' },
      { id: 'B', text: 'Enzim renin' },
      { id: 'C', text: 'Enzim amilase (ptialin)' },
      { id: 'D', text: 'Enzim lipase' },
    ],
    correctAnswer: 'C',
    explanation:
      'Di dalam rongga mulut terdapat kelenjar ludah yang menghasilkan air liur (saliva). Air liur mengandung enzim amilase (ptialin) yang berfungsi mengubah amilum (zat tepung/karbohidrat) menjadi maltosa (gula sederhana) sehingga nasi terasa manis jika dikunyah lama.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Jenis dan Fungsi Gigi Manusia',
    difficulty: 'Mudah',
    imageKey: 'teeth_types',
    imageCaption: 'Gambar 2. Tiga jenis bentuk gigi manusia (nomor 1, 2, dan 3)',
    text: 'Perhatikan gambar tiga bentuk gigi manusia di atas! Pasangan yang tepat antara nomor jenis gigi dengan nama dan fungsinya dalam pencernaan mekanis adalah...',
    options: [
      { id: 'A', text: 'Nomor 1 adalah gigi seri untuk memotong makanan, nomor 2 gigi taring untuk merobek makanan, dan nomor 3 gigi geraham untuk menggilas serta melumatkan makanan' },
      { id: 'B', text: 'Nomor 1 adalah gigi taring untuk merobek makanan, nomor 2 gigi seri untuk memotong makanan, dan nomor 3 gigi geraham untuk mengunyah makanan' },
      { id: 'C', text: 'Nomor 1 adalah gigi geraham untuk melumatkan makanan, nomor 2 gigi taring untuk memotong makanan, dan nomor 3 gigi seri untuk merobek makanan' },
      { id: 'D', text: 'Nomor 1 adalah gigi seri untuk mengunyah makanan, nomor 2 gigi geraham untuk merobek makanan, dan nomor 3 gigi taring untuk memotong makanan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tiga jenis gigi manusia berdasarkan bentuknya:\n1. Gigi seri (bentuk pahat datar) berfungsi memotong dan menggigit makanan.\n2. Gigi taring (bentuk runcing) berfungsi merobek atau mencabik makanan.\n3. Gigi geraham (permukaan lebar dan berlekuk) berfungsi mengunyah, menggilas, dan melumatkan makanan.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Kerongkongan & Gerak Peristaltik',
    difficulty: 'Mudah',
    text: 'Setelah makanan dikunyah di mulut, makanan berbentuk gumpalan lunak (bolus) ditelan masuk ke kerongkongan. Otot dinding kerongkongan melakukan gerakan meremas dan mendorong secara bergelombang sehingga makanan tetap dapat turun ke lambung meskipun posisi kepala menunduk. Gerakan otot tersebut dinamakan...',
    options: [
      { id: 'A', text: 'Gerak refleks' },
      { id: 'B', text: 'Gerak peristaltik' },
      { id: 'C', text: 'Gerak kimiawi' },
      { id: 'D', text: 'Gerak mengaduk' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kerongkongan (esofagus) merupakan saluran penghubung rongga mulut dengan lambung. Otot dinding kerongkongan melakukan gerak peristaltik, yaitu gerakan meremas dan mendorong makanan secara bergelombang hingga masuk ke lambung.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Pencernaan Kimiawi di Lambung',
    difficulty: 'Sedang',
    imageKey: 'stomach_diagram',
    imageCaption: 'Gambar 3. Penampang organ lambung dan getah lambung',
    text: 'Perhatikan gambar penampang lambung di atas! Di dalam lambung dihasilkan getah lambung yang mengandung asam klorida (HCl). Apa fungsi utama dari asam klorida (HCl) bagi makanan yang masuk ke lambung?',
    options: [
      { id: 'A', text: 'Mengubah lemak menjadi asam lemak dan gliserol' },
      { id: 'B', text: 'Menyerap air dan mineral agar feses menjadi padat' },
      { id: 'C', text: 'Membunuh kuman atau bakteri yang terbawa bersama makanan dan mengasamkan makanan' },
      { id: 'D', text: 'Mengubah zat tepung (amilum) menjadi gula sederhana' },
    ],
    correctAnswer: 'C',
    explanation:
      'Getah lambung mengandung 3 zat penting:\n1. Asam Klorida (HCl): membunuh kuman/bakteri yang masuk bersama makanan dan mengasamkan makanan agar pepsin dapat bekerja.\n2. Enzim Pepsin: memecah protein menjadi pepton.\n3. Enzim Renin: menggumpalkan protein susu (kasein).',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Kelenjar Pelengkap (Hati & Pankreas)',
    difficulty: 'Sedang',
    text: 'Selain saluran utama pencernaan, terdapat organ pelengkap yaitu hati dan pankreas yang menghasilkan zat pencernaan untuk dialirkan ke usus dua belas jari. Cairan empedu yang dihasilkan oleh hati memiliki peran penting dalam proses pencernaan untuk...',
    options: [
      { id: 'A', text: 'Menggumpalkan protein susu menjadi kasein' },
      { id: 'B', text: 'Mengemulsikan (memecah butiran) lemak agar mudah dicerna enzim lipase' },
      { id: 'C', text: 'Membusukkan sisa-sisa makanan sebelum dibuang ke anus' },
      { id: 'D', text: 'Mengubah selulosa tumbuhan menjadi glukosa' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hati menghasilkan cairan empedu yang ditampung di kantong empedu lalu dialirkan ke usus dua belas jari. Cairan empedu berfungsi mengemulsikan lemak (memecah gumpalan lemak menjadi butiran halus) sehingga lebih mudah dicerna oleh enzim lipase dari pankreas.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Bagian-Bagian Usus Halus',
    difficulty: 'Sedang',
    text: 'Usus halus terdiri atas tiga bagian berurutan, yaitu usus dua belas jari (duodenum), usus kosong (jejunum), dan usus penyerapan (ileum). Proses penyerapan sari-sari makanan ke dalam pembuluh darah agar dapat diedarkan ke seluruh tubuh terutama berlangsung pada bagian...',
    options: [
      { id: 'A', text: 'Usus dua belas jari (duodenum)' },
      { id: 'B', text: 'Usus kosong (jejunum)' },
      { id: 'C', text: 'Usus penyerapan (ileum)' },
      { id: 'D', text: 'Umbai cacing (apendiks)' },
    ],
    correctAnswer: 'C',
    explanation:
      '• Duodenum (usus dua belas jari): tempat bermuaranya cairan empedu dan getah pankreas untuk pencernaan kimiawi.\n• Jejunum (usus kosong): tempat pemecahan lanjutan sari makanan sebelum diserap.\n• Ileum (usus penyerapan): memiliki ribuan jonjot usus (vili) untuk menyerap sari-sari makanan ke dalam pembuluh darah.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Fungsi Usus Besar',
    difficulty: 'Mudah',
    imageKey: 'large_intestine',
    imageCaption: 'Gambar 4. Struktur organ usus besar manusia',
    text: 'Perhatikan gambar organ usus besar di atas! Sisa makanan yang tidak dapat dicerna dan diserap di usus halus akan diteruskan menuju organ ini. Fungsi utama organ pada gambar tersebut adalah...',
    options: [
      { id: 'A', text: 'Menghasilkan enzim ptialin untuk mencerna karbohidrat' },
      { id: 'B', text: 'Menyerap kembali air dan mineral serta membusukkan sisa makanan dengan bantuan bakteri baik' },
      { id: 'C', text: 'Mengaduk makanan bersama getah lambung hingga berbentuk bubur (kim)' },
      { id: 'D', text: 'Menghancurkan makanan dengan bantuan otot lidah dan gigi geraham' },
    ],
    correctAnswer: 'B',
    explanation:
      'Usus besar (kolon) berfungsi mengatur kadar air pada sisa makanan dengan menyerap kembali air dan garam mineral, serta membusukkan sisa makanan menjadi feses dengan bantuan bakteri baik Escherichia coli.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Gangguan Sistem Pencernaan',
    difficulty: 'Sedang',
    text: 'Dayu sering menunda waktu makan siang hingga sore hari dan sangat gemar jajan makanan yang terlalu pedas dan asam. Belakangan ini ia sering mengeluh perut bagian atasnya terasa perih, kembung, dan mual. Berdasarkan gejalanya, gangguan sistem pencernaan yang dialami Dayu adalah...',
    options: [
      { id: 'A', text: 'Sembelit (konstipasi)' },
      { id: 'B', text: 'Diare' },
      { id: 'C', text: 'Maag (gastritis)' },
      { id: 'D', text: 'Sariawan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Maag (gastritis) adalah peradangan atau iritasi pada dinding lambung akibat produksi asam lambung berlebih, pola makan tidak teratur, atau konsumsi makanan terlalu pedas/asam. Gejalanya meliputi nyeri/perih di ulu hati, mual, dan kembung.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Pencegahan Gangguan Pencernaan',
    difficulty: 'Mudah',
    text: 'Seseorang mengalami kesulitan buang air besar karena tinja (feses) menjadi terlalu keras dan kering akibat terlalu banyak penyerapan air di usus besar. Kebiasaan hidup sehat yang paling tepat untuk mencegah gangguan tersebut adalah...',
    options: [
      { id: 'A', text: 'Memperbanyak makan makanan berserat (sayur dan buah) serta minum air putih cukup' },
      { id: 'B', text: 'Mengurangi minum air putih dan memperbanyak makanan cepat saji' },
      { id: 'C', text: 'Menunda buang air besar sampai merasa sangat mulas' },
      { id: 'D', text: 'Mengonsumsi makanan pedas dan minuman bersoda setiap malam' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sulit buang air besar dengan feses yang keras disebut sembelit (konstipasi). Pencegahan terbaik adalah memperbanyak asupan serat dari sayur-sayuran dan buah-buahan, mencukupi kebutuhan air putih harian, serta tidak menahan buang air besar.',
  },

  // =========================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (3 SOAL - 3 OPSI JAWABAN)
  // Ketentuan: Kemungkinan lebih dari 1 jawaban benar, setiap soal memiliki 3 pilihan jawaban
  // =========================================================
  {
    id: 11,
    type: 'pgk',
    topic: 'Pencernaan Mekanis & Kimiawi',
    difficulty: 'Sedang',
    text: 'Di dalam sistem pencernaan manusia berlangsung pencernaan mekanis (perubahan ukuran/bentuk secara fisik) dan pencernaan kimiawi (penguraian zat makanan oleh enzim). Pilihlah SEMUA pernyataan yang BENAR berikut ini! (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Pengunyahan makanan oleh gigi di dalam rongga mulut termasuk pencernaan mekanis' },
      { id: 'B', text: 'Gerak peristaltik dinding kerongkongan dan gerakan mengaduk otot dinding lambung termasuk pencernaan mekanis' },
      { id: 'C', text: 'Pengubahan zat protein menjadi pepton oleh enzim pepsin di lambung termasuk pencernaan mekanis' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• A Benar: Gigi menghancurkan makanan secara fisik menjadi potongan kecil (pencernaan mekanis).\n• B Benar: Gerakan meremas dan mengaduk otot kerongkongan serta lambung merupakan pencernaan mekanis.\n• C Salah: Kerja enzim pepsin memecah protein menjadi pepton adalah pencernaan KIMIAWI, bukan mekanis.',
  },
  {
    id: 12,
    type: 'pgk',
    topic: 'Struktur Vili Usus Halus',
    difficulty: 'Sukar',
    imageKey: 'small_intestine_villi',
    imageCaption: 'Gambar 5. Penampang mikroskopis dinding dalam usus halus (vili/jonjot usus)',
    text: 'Perhatikan gambar penampang dinding dalam usus halus di atas! Pilihlah SEMUA pernyataan yang BENAR mengenai struktur dan proses yang terjadi pada gambar tersebut! (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Lipatan berjonjot-jonjot (vili) berfungsi memperluas permukaan dinding usus sehingga penyerapan sari makanan berlangsung maksimal' },
      { id: 'B', text: 'Pembuluh darah kapiler di dalam setiap jonjot mengangkut sari-sari makanan hasil penyerapan untuk diedarkan ke seluruh sel tubuh' },
      { id: 'C', text: 'Jonjot usus pada gambar berfungsi menghancurkan sisa makanan dengan bantuan bakteri pembusuk menjadi feses' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• A Benar: Vili (jonjot usus) berbentuk lipatan seperti jari untuk memperluas bidang penyerapan nutrisi di usus halus.\n• B Benar: Di dalam vili terdapat jaringan pembuluh kapiler darah yang menyerap glukosa, asam amino, vitamin, dan mineral.\n• C Salah: Pembusukan sisa makanan menjadi feses oleh bakteri terjadi di usus besar, bukan pada jonjot usus halus.',
  },
  {
    id: 13,
    type: 'pgk',
    topic: 'Kebiasaan Sehat Sistem Pencernaan',
    difficulty: 'Mudah',
    text: 'Menjaga kesehatan organ pencernaan sangat penting bagi anak usia sekolah agar pertumbuhan optimal. Pilihlah SEMUA kebiasaan yang BENAR untuk menjaga kesehatan sistem pencernaan! (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Mencuci tangan memakai sabun dengan air mengalir sebelum makan untuk mencegah kuman penyebab diare' },
      { id: 'B', text: 'Mengunyah makanan dengan baik hingga lembut sebelum ditelan agar meringankan kerja lambung' },
      { id: 'C', text: 'Menghindari minum air putih setelah makan sayur dan buah agar usus besar bekerja lebih cepat' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• A Benar: Kebersihan tangan mencegah masuknya bakteri/virus ke saluran pencernaan penyebab diare atau tifus.\n• B Benar: Mengunyah makanan secara sempurna membuat partikel makanan lebih halus dan bercampur air liur sehingga kerja lambung lebih ringan.\n• C Salah: Tubuh justru membutuhkan air putih yang cukup untuk membantu melarutkan nutrisi serta mencegah sembelit.',
  },

  // =========================================================
  // BAGIAN 3: PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL)
  // Ketentuan: Setiap soal memiliki 3 deskripsi/pernyataan yang harus dijawab Benar / Salah
  // =========================================================
  {
    id: 14,
    type: 'pgk_kategori',
    topic: 'Organ Rongga Mulut',
    difficulty: 'Mudah',
    text: 'Rongga mulut merupakan gerbang awal masuknya makanan ke dalam sistem pencernaan manusia. Di dalam mulut terdapat gigi, lidah, dan kelenjar ludah yang bekerja sama. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Lidah berfungsi mengatur letak makanan saat dikunyah, mengecap rasa, dan membantu mendorong makanan menuju kerongkongan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Di dalam rongga mulut hanya terjadi pencernaan mekanis tanpa adanya bantuan enzim pencernaan sama sekali.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Air liur yang dihasilkan kelenjar ludah membantu melumasi makanan agar mudah ditelan dan memulai pemecahan zat tepung.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Lidah memang berperan mengatur posisi makanan, indra pengecap, dan membantu proses menelan (BENAR).\n2. Di mulut terjadi pencernaan mekanis (gigi) DAN kimiawi (enzim amilase/ptialin pada air liur) (SALAH).\n3. Air liur melicinkan bolus makanan dan mengandung enzim amilase untuk memecah amilum (BENAR).',
  },
  {
    id: 15,
    type: 'pgk_kategori',
    topic: 'Menelan, Epiglotis, & Kerongkongan',
    difficulty: 'Sedang',
    text: 'Pada bagian tenggorokan terdapat persimpangan antara saluran pernapasan (trakea) dan saluran pencernaan (kerongkongan). Saat kita menelan makanan, terdapat katup khusus bernama epiglotis yang bekerja otomatis. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Ketika menelan makanan, katup epiglotis akan menutup saluran pernapasan agar makanan tidak masuk ke batang tenggorokan (tersedak).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Di dalam kerongkongan terjadi proses penyerapan sari-sari vitamin dan protein dalam jumlah besar.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Berbicara atau tertawa sambil mengunyah dan menelan makanan dapat mengganggu kerja katup epiglotis sehingga menyebabkan tersedak.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Epiglotis menutup saluran napas saat menelan agar makanan tepat masuk ke kerongkongan (BENAR).\n2. Kerongkongan hanya berfungsi sebagai jalur transportasi bolus ke lambung via gerak peristaltik, bukan tempat penyerapan nutrisi (SALAH).\n3. Berbicara sambil menelan membuat epiglotis terbuka saat makanan lewat sehingga berisiko tersedak (BENAR).',
  },
  {
    id: 16,
    type: 'pgk_kategori',
    topic: 'Enzim dan Asam di Lambung',
    difficulty: 'Sedang',
    text: 'Setelah melewati kerongkongan, makanan masuk ke lambung dan dicerna selama beberapa jam menjadi bubur halus bernama kim (chyme) dengan bantuan getah lambung. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Enzim pepsin yang ada di dalam lambung berfungsi memecah protein menjadi molekul yang lebih sederhana (pepton).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Enzim renin pada lambung berfungsi mengendapkan/menggumpalkan protein susu (kasein) agar mudah dicerna.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Dinding lambung tidak memiliki lapisan otot sehingga tidak dapat melakukan pencernaan secara mekanis.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Enzim pepsin bekerja di suasana asam lambung untuk memecah protein menjadi pepton (BENAR).\n2. Enzim renin mengendapkan kasein dari air susu (BENAR).\n3. Dinding lambung tersusun atas tiga lapis otot polos yang berkontraksi meremas dan mengaduk makanan secara mekanis (SALAH).',
  },
  {
    id: 17,
    type: 'pgk_kategori',
    topic: 'Peran Hati & Pankreas di Usus Halus',
    difficulty: 'Sukar',
    text: 'Pada bagian awal usus halus (usus dua belas jari), terjadi pencernaan kimiawi paling lengkap karena mendapatkan bantuan sekresi dari organ hati dan pankreas. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Pankreas menghasilkan enzim amilase, tripsin, dan lipase untuk membantu mencerna karbohidrat, protein, dan lemak di usus halus.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Makanan yang kita telan terlebih dahulu masuk ke dalam organ hati dan pankreas sebelum menuju usus halus.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Enzim lipase berperan memecah lemak (yang sudah diemulsikan cairan empedu) menjadi asam lemak dan gliserol.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Pankreas mensekresikan amilase (karbohidrat), tripsin (protein), dan lipase (lemak) ke duodenum (BENAR).\n2. Makanan TIDAK pernah masuk ke hati atau pankreas; keduanya adalah kelenjar pelengkap yang hanya menyalurkan cairan/enzim melalui saluran khusus ke usus dua belas jari (SALAH).\n3. Lipase memang memecah lemak menjadi asam lemak dan gliserol (BENAR).',
  },
  {
    id: 18,
    type: 'pgk_kategori',
    topic: 'Proses di Usus Besar & Rektum',
    difficulty: 'Mudah',
    text: 'Ampas makanan yang tidak tercerna masuk ke usus besar sebelum akhirnya dikeluarkan melalui rektum dan anus. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Di dalam usus besar hidup bakteri Escherichia coli yang membantu proses pembusukan sisa makanan dan pembentukan vitamin K.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Apabila sisa makanan bergerak terlalu cepat melewati usus besar sehingga air gagal diserap dengan baik, tinja menjadi encer (diare).',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Rektum adalah bagian usus halus yang menghasilkan enzim amilase untuk mengolah glukosa.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Bakteri E. coli di usus besar bersimbiosis mutualisme membantu pembusukan sisa makanan sekaligus menghasilkan vitamin K (BENAR).\n2. Jika gerak usus terlalu cepat (misalnya akibat infeksi), penyerapan air di usus besar tidak optimal sehingga timbul diare (BENAR).\n3. Rektum adalah bagian ujung akhir usus besar sebagai tempat penampungan sementara feses sebelum dikeluarkan lewat anus, bukan penghasil amilase (SALAH).',
  },
  {
    id: 19,
    type: 'pgk_kategori',
    topic: 'Menu Gizi Seimbang & Pencernaannya',
    difficulty: 'Sedang',
    imageKey: 'balanced_meal_plate',
    imageCaption: 'Gambar 6. Contoh menu makan siang bergizi seimbang (Isi Piringku)',
    text: 'Perhatikan gambar menu makanan bergizi seimbang "Isi Piringku" di atas (nasi, ikan & tempe, sayuran hijau, buah pepaya & pisang, serta air putih)! Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Nasi putih merupakan sumber karbohidrat yang mulai dicerna secara kimiawi di dalam rongga mulut oleh enzim amilase.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Ikan dan tempe kaya akan protein yang dicerna secara kimiawi di lambung oleh enzim pepsin serta di usus halus oleh enzim tripsin.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Sayuran dan buah-buahan pada piring tersebut tidak bermanfaat bagi pencernaan karena tidak mengandung serat maupun vitamin.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Nasi mengandung zat tepung (karbohidrat) yang mulai dicerna amilase (ptialin) di mulut (BENAR).\n2. Ikan dan tempe mengandung protein hewani dan nabati yang dipecah pepsin di lambung dan tripsin di usus halus (BENAR).\n3. Sayuran dan buah sangat kaya serat, vitamin, dan mineral yang membantu kerja usus besar dan mencegah sembelit (SALAH).',
  },
  {
    id: 20,
    type: 'pgk_kategori',
    topic: 'Analisis Gangguan Maag (Gastritis)',
    difficulty: 'Sedang',
    text: 'Beni sering melewatkan sarapan sebelum berangkat sekolah dan gemar mengonsumsi minuman berkafein serta jajanan sangat pedas saat perut kosong. Beberapa minggu kemudian dokter mendiagnosis Beni mengalami radang dinding lambung (gastritis/maag). Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Perut yang dibiarkan kosong terlalu lama menyebabkan asam lambung (HCl) langsung mengiritasi lapisan dinding lambung.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Salah satu cara pemulihan penderita maag adalah membiasakan makan dalam porsi kecil namun teratur dan menghindari makanan pedas atau asam.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Penyakit maag selalu disebabkan oleh kurangnya konsumsi makanan berlemak dan gorengan berminyak.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Saat lambung kosong, produksi asam lambung berlebih dapat mengikis mukosa (lapisan pelindung) dinding lambung (BENAR).\n2. Pola makan teratur, tidak langsung porsi besar, serta menghindari pemicu asam seperti pedas/asam membantu meredakan maag (BENAR).\n3. Makanan berlemak/gorengan justru memperlambat pengosongan lambung dan dapat memperparah maag, bukan mencegahnya (SALAH).',
  },
  {
    id: 21,
    type: 'pgk_kategori',
    topic: 'Perbandingan Diare vs Sembelit',
    difficulty: 'Sedang',
    text: 'Diare dan sembelit (konstipasi) merupakan dua gangguan sistem pencernaan yang sama-sama berkaitan dengan fungsi penyerapan air di usus besar namun memiliki gejala berlawanan. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Pada penderita diare, tubuh kehilangan banyak cairan dan elektrolit sehingga pertolongan pertama yang penting adalah pemberian larutan oralit.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pada penderita sembelit (konstipasi), feses menjadi sangat keras karena sisa makanan terlalu lama berada di usus besar sehingga airnya terserap berlebihan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Diare umumnya disebabkan oleh kurangnya konsumsi makanan berserat seperti pepaya dan sayuran hijau.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Diare mengeluarkan banyak air dan garam mineral sehingga pemberian oralit dan air putih mencegah dehidrasi (BENAR).\n2. Sembelit terjadi saat pergerakan usus lambat sehingga usus besar menyerap air secara berlebihan dan feses mengeras (BENAR).\n3. Kurang serat menyebabkan SEMBELIT, sedangkan diare umumnya dipicu infeksi bakteri/virus dari makanan/minuman yang tercemar (SALAH).',
  },
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Penerapan Pola Hidup Bersih & Sehat',
    difficulty: 'Mudah',
    text: 'Siswa kelas V SDN 3 Pendem melakukan kampanye sekolah sehat untuk menjaga kesehatan organ pencernaan seluruh warga sekolah. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Mengonsumsi jajanan terbuka yang banyak dihinggapi lalat di pinggir jalan dapat menularkan bakteri penyebab tifus dan diare.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Minum air putih secara teratur membantu pelarutan zat makanan dan menjaga kelancaran buang air besar.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Berolahraga terlalu berat tepat segera setelah makan porsi besar merupakan kebiasaan terbaik untuk mempercepat kerja lambung.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Lalat membawa kuman dari tempat kotor ke makanan terbuka yang dapat memicu infeksi pencernaan seperti diare atau tifus (BENAR).\n2. Air putih sangat dibutuhkan dalam proses pencernaan, penyerapan, dan mencegah sembelit (BENAR).\n3. Olahraga berat tepat setelah makan besar mengalihkan aliran darah ke otot rangka sehingga mengganggu pencernaan dan memicu kram/mual perut (SALAH).',
  },
];
