import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas V) Mata Pelajaran IPAS
 * Lingkup Materi: Sistem Pencernaan Manusia
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 22 butir soal IPAS Fase C (10 PG, 3 PGK, 9 PGK Kategori)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi organ-organ sistem pencernaan manusia beserta fungsi utamanya.',
    indikatorSoal:
      'Disajikan gambar organ sistem pencernaan manusia bernomor 1 sampai 6, peserta didik dapat menentukan fungsi organ yang ditunjuk oleh nomor 3 (lambung) dan nomor 4 (usus halus).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan proses pencernaan kimiawi yang terjadi di dalam rongga mulut.',
    indikatorSoal:
      'Disajikan fenomena nasi yang terasa manis saat dikunyah lama, peserta didik dapat menentukan nama enzim pada air liur yang berperan mengubah zat tepung menjadi gula sederhana.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan jenis-jenis gigi manusia berdasarkan bentuk dan fungsinya dalam pencernaan mekanis.',
    indikatorSoal:
      'Disajikan gambar tiga bentuk gigi manusia (gigi seri, taring, dan geraham), peserta didik dapat memasangkan nomor gambar gigi dengan nama serta fungsinya secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan mekanisme gerakan otot pada organ kerongkongan saat proses menelan.',
    indikatorSoal:
      'Disajikan narasi pergerakan gumpalan makanan (bolus) melewati kerongkongan menuju lambung, peserta didik dapat mengidentifikasi nama gerak peristaltik.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis fungsi zat-zat yang terkandung dalam getah lambung pada proses pencernaan.',
    indikatorSoal:
      'Disajikan gambar penampang organ lambung beserta getah lambung, peserta didik dapat menentukan fungsi utama asam klorida (HCl) di dalam lambung.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan peran organ pelengkap pencernaan (hati dan pankreas) dalam proses pencernaan kimiawi.',
    indikatorSoal:
      'Disajikan informasi mengenai organ hati dan pankreas sebagai kelenjar pelengkap, peserta didik dapat menentukan fungsi cairan empedu yang dihasilkan hati dalam mencerna lemak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi bagian-bagian usus halus beserta proses penyerapan sari makanan.',
    indikatorSoal:
      'Disajikan urutan tiga bagian usus halus (duodenum, jejunum, ileum), peserta didik dapat menentukan bagian usus halus tempat berlangsungnya penyerapan utama sari-sari makanan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan fungsi utama usus besar dalam penyerapan air dan pembusukan sisa makanan.',
    indikatorSoal:
      'Disajikan gambar struktur organ usus besar manusia, peserta didik dapat menentukan fungsi utama usus besar dalam sistem pencernaan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis jenis gangguan sistem pencernaan berdasarkan kebiasaan makan dan gejalanya.',
    indikatorSoal:
      'Disajikan studi kasus siswa dengan pola makan tidak teratur dan gejala nyeri perut bagian atas serta mual, peserta didik dapat menentukan jenis gangguan pencernaan (maag/gastritis).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan upaya pencegahan gangguan sistem pencernaan dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan kondisi gangguan sulit buang air besar (sembelit), peserta didik dapat menentukan kebiasaan pola makan dan minum yang tepat untuk mencegah gangguan tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan proses pencernaan mekanis dan pencernaan kimiawi pada organ pencernaan.',
    indikatorSoal:
      'Disajikan tiga pernyataan mengenai aktivitas organ pencernaan, peserta didik dapat memilih semua pernyataan yang benar mengenai pencernaan mekanis (lebih dari satu jawaban benar).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis keterkaitan struktur jonjot usus halus (vili) dengan fungsinya dalam penyerapan nutrisi.',
    indikatorSoal:
      'Disajikan gambar penampang mikroskopis vili usus halus dan tiga pernyataan, peserta didik dapat memilih semua pernyataan yang benar mengenai struktur dan fungsi jonjot usus halus.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat membiasakan pola hidup bersih dan sehat untuk menjaga kesehatan sistem pencernaan.',
    indikatorSoal:
      'Disajikan tiga pernyataan mengenai kebiasaan makan dan kebersihan diri, peserta didik dapat memilih semua kebiasaan sehat yang menjaga organ pencernaan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi peran gigi, lidah, dan kelenjar ludah dalam pencernaan di rongga mulut.',
    indikatorSoal:
      'Disajikan narasi kerja sama organ di rongga mulut, peserta didik dapat menentukan kebenaran (Benar/Salah) pada tiga pernyataan tentang peran lidah, air liur, dan jenis pencernaan di mulut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis fungsi katup epiglotis dan kerongkongan saat proses menelan makanan.',
    indikatorSoal:
      'Disajikan informasi persimpangan saluran napas dan saluran cerna serta katup epiglotis, peserta didik dapat menentukan kebenaran (Benar/Salah) pada tiga pernyataan terkait mekanisme menelan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis proses pencernaan mekanis dan enzimatis di dalam lambung.',
    indikatorSoal:
      'Disajikan deskripsi pencernaan makanan menjadi kim di lambung, peserta didik dapat menilai kebenaran (Benar/Salah) pada tiga pernyataan tentang pepsin, renin, dan lapisan otot lambung.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis mekanisme sekresi enzim pankreas dan cairan empedu di usus dua belas jari.',
    indikatorSoal:
      'Disajikan narasi peran hati dan pankreas pada usus dua belas jari, peserta didik dapat menentukan kebenaran (Benar/Salah) pada tiga pernyataan terkait enzim pankreas, jalur makanan, dan lipase.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi proses pembusukan sisa makanan, penyerapan air, dan fungsi rektum di usus besar.',
    indikatorSoal:
      'Disajikan uraian tahap akhir pencernaan di usus besar hingga anus, peserta didik dapat menentukan kebenaran (Benar/Salah) pada tiga pernyataan tentang bakteri E. coli, diare, dan rektum.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat menghubungkan kandungan zat gizi menu makanan seimbang ("Isi Piringku") dengan organ dan enzim yang mencernanya.',
    indikatorSoal:
      'Disajikan gambar menu makanan bergizi seimbang, peserta didik dapat menentukan kebenaran (Benar/Salah) pada tiga pernyataan mengenai pencernaan karbohidrat, protein, dan manfaat serat sayur/buah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis penyebab, dampak, dan pencegahan gangguan maag (gastritis).',
    indikatorSoal:
      'Disajikan studi kasus siswa yang mengalami sakit maag akibat pola makan tidak teratur, peserta didik dapat menilai kebenaran (Benar/Salah) tiga pernyataan tentang iritasi asam lambung dan penanganannya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Pemahaman IPAS',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan penyebab, gejala, dan pertolongan pertama gangguan diare serta sembelit.',
    indikatorSoal:
      'Disajikan perbandingan gangguan diare dan sembelit yang berkaitan dengan penyerapan air di usus besar, peserta didik dapat menentukan kebenaran (Benar/Salah) pada tiga pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan perilaku hidup bersih dan sehat (PHBS) untuk menjaga sistem pencernaan.',
    indikatorSoal:
      'Disajikan konteks kampanye sekolah sehat di SDN 3 Pendem, peserta didik dapat mengevaluasi kebenaran (Benar/Salah) pada tiga pernyataan tentang kebersihan jajanan, asupan air putih, dan aktivitas fisik setelah makan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep ${q.topic} pada sistem pencernaan manusia.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus mengenai ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (
    t.includes('pencegahan') ||
    t.includes('kebiasaan') ||
    t.includes('gizi') ||
    t.includes('hidup bersih') ||
    t.includes('analisis gangguan')
  ) {
    return 'Keterampilan Proses';
  }
  return 'Pemahaman IPAS';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
