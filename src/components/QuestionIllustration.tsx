import React from 'react';
import { QuestionImageKey } from '../types';

interface QuestionIllustrationProps {
  imageKey?: QuestionImageKey;
  caption?: string;
  compact?: boolean;
}

export const QuestionIllustration: React.FC<QuestionIllustrationProps> = ({
  imageKey,
  caption,
  compact = false,
}) => {
  if (!imageKey) return null;

  const containerSize = compact ? 'max-w-xs' : 'max-w-md';

  return (
    <figure className={`my-4 mx-auto ${containerSize} rounded-2xl border border-slate-200 bg-slate-50/70 p-3 shadow-2xs`}>
      <div className="bg-white rounded-xl border border-slate-100 p-2 flex items-center justify-center overflow-hidden">
        {imageKey === 'digestive_system' && <DigestiveSystemSVG />}
        {imageKey === 'teeth_types' && <TeethTypesSVG />}
        {imageKey === 'stomach_diagram' && <StomachDiagramSVG />}
        {imageKey === 'large_intestine' && <LargeIntestineSVG />}
        {imageKey === 'small_intestine_villi' && <SmallIntestineVilliSVG />}
        {imageKey === 'balanced_meal_plate' && <BalancedMealPlateSVG />}
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-[11px] font-semibold text-slate-600 leading-snug">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

/* 1. Diagram Lengkap Sistem Pencernaan Manusia dengan Nomor 1 - 6 */
const DigestiveSystemSVG: React.FC = () => (
  <svg viewBox="0 0 360 280" className="w-full h-auto" role="img" aria-label="Diagram Organ Sistem Pencernaan Manusia">
    <defs>
      <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#eff6ff" />
        <stop offset="100%" stopColor="#dbeafe" />
      </linearGradient>
      <linearGradient id="stomachGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fda4af" />
        <stop offset="100%" stopColor="#f43f5e" />
      </linearGradient>
    </defs>

    {/* Siluet Kepala & Tubuh */}
    <path
      d="M145,14 C168,14 184,30 184,52 C184,65 178,76 170,83 L170,96 C206,102 225,126 225,160 L225,268 L95,268 L95,160 C95,126 114,102 150,96 L150,83 C142,76 136,65 136,52 C136,30 152,14 145,14 Z"
      fill="url(#bodyGrad)"
      stroke="#93c5fd"
      strokeWidth="2"
    />

    {/* 1. Rongga Mulut */}
    <path
      d="M137,56 C142,52 156,52 162,56 C162,64 152,68 144,64 Z"
      fill="#fb7185"
      stroke="#be123c"
      strokeWidth="1.5"
    />

    {/* 2. Kerongkongan (Esofagus) */}
    <path
      d="M156,62 L156,128 C156,133 164,133 164,128 L164,62 Z"
      fill="#fca5a5"
      stroke="#dc2626"
      strokeWidth="1.5"
    />

    {/* Hati (organ pelengkap di kanan lambung/kiri gambar) */}
    <path
      d="M112,130 C112,118 148,116 154,126 C154,136 136,144 118,144 C112,144 112,136 112,130 Z"
      fill="#b45309"
      opacity="0.85"
      stroke="#78350f"
      strokeWidth="1.4"
    />

    {/* 3. Lambung */}
    <path
      d="M158,128 C176,124 196,132 195,152 C194,170 176,177 160,171 C150,167 148,156 156,152 C164,148 164,138 158,128 Z"
      fill="url(#stomachGrad)"
      stroke="#be123c"
      strokeWidth="1.8"
    />

    {/* 5. Usus Besar (bingkai luar) */}
    <path
      d="M126,232 L126,184 C126,176 134,172 142,174 C156,178 176,178 190,174 C198,172 204,178 204,186 L204,228 C204,236 196,240 188,240 L166,240 L166,256"
      fill="none"
      stroke="#0d9488"
      strokeWidth="14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M126,232 L126,184 C126,176 134,172 142,174 C156,178 176,178 190,174 C198,172 204,178 204,186 L204,228 C204,236 196,240 188,240 L166,240 L166,256"
      fill="none"
      stroke="#5eead4"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="1 10"
    />

    {/* 4. Usus Halus (berkelok di tengah) */}
    <path
      d="M142,188 C154,182 184,182 188,192 C192,202 142,198 140,208 C138,218 188,210 188,220 C188,230 144,226 144,232"
      fill="none"
      stroke="#f59e0b"
      strokeWidth="8.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M142,188 C154,182 184,182 188,192 C192,202 142,198 140,208 C138,218 188,210 188,220 C188,230 144,226 144,232"
      fill="none"
      stroke="#fde68a"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* 6. Anus */}
    <circle cx="166" cy="259" r="4.5" fill="#0f766e" />

    {/* Garis Penunjuk & Nomor 1 - 6 */}
    {/* No 1: Mulut */}
    <line x1="138" y1="58" x2="62" y2="48" stroke="#334155" strokeWidth="1.4" strokeDasharray="3 2" />
    <circle cx="48" cy="48" r="12" fill="#1d4ed8" />
    <text x="48" y="52.5" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">1</text>

    {/* No 2: Kerongkongan */}
    <line x1="164" y1="95" x2="275" y2="85" stroke="#334155" strokeWidth="1.4" strokeDasharray="3 2" />
    <circle cx="289" cy="85" r="12" fill="#1d4ed8" />
    <text x="289" y="89.5" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">2</text>

    {/* No 3: Lambung */}
    <line x1="194" y1="148" x2="275" y2="142" stroke="#334155" strokeWidth="1.4" strokeDasharray="3 2" />
    <circle cx="289" cy="142" r="12" fill="#dc2626" />
    <text x="289" y="146.5" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">3</text>

    {/* No 4: Usus Halus */}
    <line x1="142" y1="208" x2="62" y2="205" stroke="#334155" strokeWidth="1.4" strokeDasharray="3 2" />
    <circle cx="48" cy="205" r="12" fill="#d97706" />
    <text x="48" y="209.5" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">4</text>

    {/* No 5: Usus Besar */}
    <line x1="205" y1="205" x2="275" y2="205" stroke="#334155" strokeWidth="1.4" strokeDasharray="3 2" />
    <circle cx="289" cy="205" r="12" fill="#0d9488" />
    <text x="289" y="209.5" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">5</text>

    {/* No 6: Anus */}
    <line x1="170" y1="259" x2="275" y2="255" stroke="#334155" strokeWidth="1.4" strokeDasharray="3 2" />
    <circle cx="289" cy="255" r="12" fill="#0f766e" />
    <text x="289" y="259.5" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">6</text>
  </svg>
);

/* 2. Jenis-Jenis Gigi Manusia (1: Gigi Seri, 2: Gigi Taring, 3: Gigi Geraham) */
const TeethTypesSVG: React.FC = () => (
  <svg viewBox="0 0 360 190" className="w-full h-auto" role="img" aria-label="Bentuk Tiga Jenis Gigi Manusia">
    {/* Latar kartu per gigi */}
    <rect x="12" y="14" width="102" height="162" rx="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
    <rect x="129" y="14" width="102" height="162" rx="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
    <rect x="246" y="14" width="102" height="162" rx="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />

    {/* Badge Nomor 1: Gigi Seri (Pahat Datar) */}
    <circle cx="32" cy="34" r="11" fill="#1d4ed8" />
    <text x="32" y="38" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">1</text>
    {/* Gusi */}
    <path d="M36,105 Q63,97 90,105 L90,122 L36,122 Z" fill="#fda4af" />
    {/* Mahkota & Akar Gigi Seri */}
    <path
      d="M46,52 L80,52 L77,102 C75,112 68,144 63,144 C58,144 51,112 49,102 Z"
      fill="#ffffff"
      stroke="#475569"
      strokeWidth="2"
    />
    <line x1="48" y1="58" x2="78" y2="58" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
    <text x="63" y="164" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">Bentuk Pahat Datar</text>

    {/* Badge Nomor 2: Gigi Taring (Runcing) */}
    <circle cx="149" cy="34" r="11" fill="#dc2626" />
    <text x="149" y="38" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">2</text>
    {/* Gusi */}
    <path d="M153,105 Q180,97 207,105 L207,122 L153,122 Z" fill="#fda4af" />
    {/* Mahkota & Akar Gigi Taring */}
    <path
      d="M180,44 L196,74 L192,104 C190,118 185,148 180,148 C175,148 170,118 168,104 L164,74 Z"
      fill="#ffffff"
      stroke="#475569"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <text x="180" y="164" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">Bentuk Runcing</text>

    {/* Badge Nomor 3: Gigi Geraham (Lebar Berlekuk) */}
    <circle cx="266" cy="34" r="11" fill="#0d9488" />
    <text x="266" y="38" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">3</text>
    {/* Gusi */}
    <path d="M266,105 Q297,97 328,105 L328,122 L266,122 Z" fill="#fda4af" />
    {/* Mahkota & 2 Akar Gigi Geraham */}
    <path
      d="M274,60 C274,52 286,52 292,58 C296,52 302,52 306,58 C312,52 320,52 320,60 L318,102 C317,118 314,144 308,144 C303,144 301,120 297,114 C293,120 291,144 286,144 C280,144 277,118 276,102 Z"
      fill="#ffffff"
      stroke="#475569"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M283,64 Q297,70 311,64" fill="none" stroke="#94a3b8" strokeWidth="1.8" />
    <text x="297" y="164" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">Lebar &amp; Berlekuk</text>
  </svg>
);

/* 3. Penampang Lambung & Pencernaan Kimiawi */
const StomachDiagramSVG: React.FC = () => (
  <svg viewBox="0 0 360 220" className="w-full h-auto" role="img" aria-label="Penampang Organ Lambung Manusia">
    {/* Kerongkongan masuk */}
    <path d="M138,14 L138,62 L162,62 L162,14" fill="#fca5a5" stroke="#be123c" strokeWidth="2" />
    {/* Dinding Luar Lambung */}
    <path
      d="M138,62 C110,68 85,95 88,136 C92,182 140,204 195,198 C236,193 266,166 274,132 L298,136 L298,156 L268,152 C254,180 218,212 168,210 C115,208 72,178 72,130 C72,88 102,54 138,52 Z"
      fill="#fb7185"
      stroke="#be123c"
      strokeWidth="2"
    />
    {/* Rongga Dalam Lambung */}
    <path
      d="M142,64 C116,70 96,95 98,132 C100,170 140,190 188,186 C225,182 252,158 262,126 L280,128 C280,128 282,148 272,150 C252,186 205,198 164,194 C118,190 92,162 92,126 C92,90 116,66 142,64 Z"
      fill="#ffe4e6"
    />
    {/* Cairan Asam Lambung (HCl) & Enzim */}
    <path
      d="M104,142 Q140,132 178,142 T252,140 C244,168 214,186 176,186 C135,186 110,166 104,142 Z"
      fill="#fde047"
      opacity="0.7"
    />
    {/* Partikel Makanan (Chyme) */}
    <circle cx="145" cy="158" r="5" fill="#d97706" />
    <circle cx="172" cy="166" r="4" fill="#b45309" />
    <circle cx="198" cy="155" r="5.5" fill="#d97706" />
    <circle cx="222" cy="164" r="3.5" fill="#92400e" />
    <circle cx="158" cy="146" r="3" fill="#f59e0b" />

    {/* Tanda Panah Bolus Masuk */}
    <path d="M150,26 L150,52" stroke="#991b1b" strokeWidth="2.5" strokeLinecap="round" />
    <polygon points="145,48 155,48 150,57" fill="#991b1b" />

    {/* Label Bersih */}
    <text x="150" y="102" textAnchor="middle" fill="#881337" fontSize="11" fontWeight="bold">Rongga Lambung</text>
    <text x="180" y="176" textAnchor="middle" fill="#78350f" fontSize="10" fontWeight="bold">Getah Lambung (HCl &amp; Enzim)</text>
    <text x="312" y="124" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">Menuju</text>
    <text x="312" y="136" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">Usus Halus</text>
  </svg>
);

/* 4. Usus Besar & Penyerapan Air */
const LargeIntestineSVG: React.FC = () => (
  <svg viewBox="0 0 360 220" className="w-full h-auto" role="img" aria-label="Diagram Usus Besar Manusia">
    {/* Usus Besar Bentuk U Terbalik */}
    <path
      d="M78,176 L78,66 C78,44 96,34 116,42 C152,54 208,54 244,42 C264,34 282,44 282,66 L282,162 C282,182 264,192 242,192 L192,192 L192,212"
      fill="none"
      stroke="#0f766e"
      strokeWidth="30"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M78,176 L78,66 C78,44 96,34 116,42 C152,54 208,54 244,42 C264,34 282,44 282,66 L282,162 C282,182 264,192 242,192 L192,192 L192,212"
      fill="none"
      stroke="#99f6e4"
      strokeWidth="20"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="2 16"
    />
    {/* Apendiks / Umbai Cacing */}
    <path d="M78,190 C72,204 82,214 92,208" fill="none" stroke="#0d9488" strokeWidth="7" strokeLinecap="round" />

    {/* Tetesan Air yang Diserap Keluar */}
    <path d="M46,106 C46,106 38,118 46,122 C54,118 46,106 46,106 Z" fill="#0284c7" />
    <path d="M314,106 C314,106 306,118 314,122 C322,118 314,106 314,106 Z" fill="#0284c7" />
    <path d="M180,18 C180,18 172,30 180,34 C188,30 180,18 180,18 Z" fill="#0284c7" />

    {/* Tanda Panah Penyerapan Air */}
    <path d="M62,114 L52,114" stroke="#0284c7" strokeWidth="2" />
    <path d="M298,114 L308,114" stroke="#0284c7" strokeWidth="2" />

    <text x="180" y="114" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">Penyerapan Air &amp; Mineral</text>
    <text x="180" y="130" textAnchor="middle" fill="#0f766e" fontSize="10" fontWeight="bold">serta Pembusukan Sisa Makanan</text>
    <text x="180" y="145" textAnchor="middle" fill="#475569" fontSize="9.5">(Dibantu bakteri Escherichia coli)</text>
  </svg>
);

/* 5. Struktur Vili / Jonjot Usus Halus */
const SmallIntestineVilliSVG: React.FC = () => (
  <svg viewBox="0 0 360 200" className="w-full h-auto" role="img" aria-label="Struktur Vili atau Jonjot Dinding Usus Halus">
    {/* Latar Rongga Usus */}
    <rect x="10" y="10" width="340" height="180" rx="12" fill="#fffbeb" stroke="#fde68a" strokeWidth="1.5" />

    {/* 3 Lipatan Vili (Jonjot Usus) */}
    <path
      d="M20,175 L20,135 C20,135 45,55 75,55 C105,55 120,135 135,135 C150,135 160,45 190,45 C220,45 230,135 245,135 C260,135 275,55 305,55 C330,55 340,135 340,135 L340,175 Z"
      fill="#fed7aa"
      stroke="#ea580c"
      strokeWidth="2.5"
    />

    {/* Pembuluh Kapiler Darah di Dalam Tiap Vili */}
    <path d="M75,175 L75,72" stroke="#dc2626" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M81,175 L81,78" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />

    <path d="M187,175 L187,62" stroke="#dc2626" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M193,175 L193,68" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />

    <path d="M302,175 L302,72" stroke="#dc2626" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M308,175 L308,78" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />

    {/* Partikel Sari Makanan Menuju Vili */}
    <circle cx="50" cy="34" r="5" fill="#16a34a" />
    <circle cx="115" cy="28" r="4.5" fill="#d97706" />
    <circle cx="190" cy="24" r="5" fill="#16a34a" />
    <circle cx="265" cy="30" r="4.5" fill="#2563eb" />
    <circle cx="318" cy="34" r="5" fill="#d97706" />

    {/* Panah Penyerapan Sari Makanan */}
    <path d="M75,38 L75,50" stroke="#15803d" strokeWidth="2" />
    <path d="M190,30 L190,41" stroke="#15803d" strokeWidth="2" />
    <path d="M305,38 L305,50" stroke="#15803d" strokeWidth="2" />

    <text x="180" y="168" textAnchor="middle" fill="#7c2d12" fontSize="10.5" fontWeight="bold">
      Lipatan Jonjot Usus (Vili) dengan Pembuluh Darah Kapiler
    </text>
  </svg>
);

/* 6. Menu Makanan Bergizi Seimbang (Isi Piringku) */
const BalancedMealPlateSVG: React.FC = () => (
  <svg viewBox="0 0 360 210" className="w-full h-auto" role="img" aria-label="Menu Makanan Bergizi Seimbang Isi Piringku">
    {/* Alas Meja */}
    <rect x="10" y="10" width="340" height="190" rx="14" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.5" />

    {/* Piring Putih */}
    <circle cx="145" cy="105" r="82" fill="#ffffff" stroke="#94a3b8" strokeWidth="3" />
    <circle cx="145" cy="105" r="70" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />

    {/* Sekat 1 (Kiri Atas): Nasi / Karbohidrat */}
    <path d="M145,105 L145,39 A66,66 0 0,0 79,105 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
    <ellipse cx="118" cy="82" rx="20" ry="15" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
    <circle cx="114" cy="79" r="1.5" fill="#94a3b8" />
    <circle cx="122" cy="83" r="1.5" fill="#94a3b8" />
    <text x="114" y="60" textAnchor="middle" fill="#334155" fontSize="8.5" fontWeight="bold">Nasi</text>

    {/* Sekat 2 (Kiri Bawah): Ikan & Tempe / Protein */}
    <path d="M145,105 L79,105 A66,66 0 0,0 145,171 Z" fill="#fef3c7" stroke="#fde68a" strokeWidth="1" />
    {/* Ikan */}
    <ellipse cx="115" cy="126" rx="19" ry="9" fill="#d97706" />
    <polygon points="132,126 141,120 141,132" fill="#b45309" />
    <circle cx="104" cy="124" r="1.5" fill="#ffffff" />
    {/* Tempe */}
    <rect x="106" y="140" width="22" height="12" rx="2" fill="#f59e0b" stroke="#b45309" strokeWidth="1" />
    <text x="114" y="164" textAnchor="middle" fill="#78350f" fontSize="8.5" fontWeight="bold">Ikan &amp; Tempe</text>

    {/* Sekat 3 (Kanan Atas): Sayuran Hijau & Wortel */}
    <path d="M145,105 L145,39 A66,66 0 0,1 211,105 Z" fill="#dcfce7" stroke="#bbf7d0" strokeWidth="1" />
    <circle cx="168" cy="76" r="10" fill="#16a34a" />
    <circle cx="182" cy="82" r="9" fill="#22c55e" />
    <circle cx="174" cy="90" r="8" fill="#15803d" />
    <circle cx="192" cy="70" r="5" fill="#f97316" />
    <text x="178" y="58" textAnchor="middle" fill="#14532d" fontSize="8.5" fontWeight="bold">Sayuran</text>

    {/* Sekat 4 (Kanan Bawah): Buah Pepaya & Pisang */}
    <path d="M145,105 L211,105 A66,66 0 0,1 145,171 Z" fill="#ffedd5" stroke="#fed7aa" strokeWidth="1" />
    <path d="M162,125 A16,16 0 0,0 192,135 Z" fill="#fb923c" stroke="#ea580c" strokeWidth="1" />
    <path d="M160,145 Q176,158 192,142" fill="none" stroke="#eab308" strokeWidth="7" strokeLinecap="round" />
    <text x="176" y="164" textAnchor="middle" fill="#7c2d12" fontSize="8.5" fontWeight="bold">Buah</text>

    {/* Gelas Air Putih di Sebelah Kanan */}
    <polygon points="270,70 314,70 306,154 278,154" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
    <polygon points="272,88 312,88 306,152 278,152" fill="#38bdf8" opacity="0.65" />
    <text x="292" y="172" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">Air Putih</text>
  </svg>
);
