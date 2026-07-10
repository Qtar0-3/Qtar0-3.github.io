// ===============================================
// コスプレアチーブメント：デフォルトデータ
// ここにオブジェクトを追加すれば、いつでもアチーブメントを増やせます。
// id はユニークな文字列にしてください。
// cat: wig / costume / prop / makeup / photo / event / community / aruaru
// ===============================================
const DEFAULT_ACHIEVEMENTS = [
  // --- ウィッグ ---
  { id: "wig-first",    cat: "wig", icon: "💇", title: "ウィッグデビュー", desc: "初めてウィッグを被った" },
  { id: "wig-cut",      cat: "wig", icon: "✂️", title: "お抱え美容師", desc: "ウィッグを自分でカットした" },
  { id: "wig-styling",  cat: "wig", icon: "🎀", title: "スタイリスト", desc: "ウィッグをセット・スタイリングした" },
  { id: "wig-make",     cat: "wig", icon: "🧵", title: "ヘルメット職人", desc: "ヘルメットウィッグを自作した" },
  { id: "wig-kedaba",   cat: "wig", icon: "🦁", title: "毛束マイスター", desc: "毛束を作った" },
  { id: "wig-ahoge",    cat: "wig", icon: "📡", title: "アンテナ", desc: "アホ毛を自立させた" },
  { id: "wig-waffle",   cat: "wig", icon: "🧇", title: "ふかふか腱鞘炎", desc: "ワッフルアイロンを手に入れた" },
  { id: "wig-twin",     cat: "wig", icon: "🎏", title: "ツインテール属性", desc: "ツインテールキャラをした" },
  { id: "wig-long",     cat: "wig", icon: "🧜", title: "ロングヘアの運命", desc: "絡まったウィッグを人に梳かしてもらった" },
  { id: "wig-color",    cat: "wig", icon: "🌈", title: "カラーコーディネーター", desc: "ウィッグを染めた・グラデーションを作った" },
  { id: "wig-gravity",  cat: "wig", icon: "🚀", title: "ニュートンへの反逆", desc: "物理法則を無視した髪型を再現した" },
  { id: "wig-box" ,     cat: "wig", icon: "📦", title: "引っ越し業者", desc: "キャリーケースの上に箱を載せて移動した" },

  // --- 衣装 ---
  { id: "costume-buy",     cat: "costume", icon: "🛍️", title: "衣装デビュー", desc: "初めて衣装を購入した" },
  { id: "costume-make",    cat: "costume", icon: "🪡", title: "お針子デビュー", desc: "衣装を自作した" },
  { id: "costume-pattern", cat: "costume", icon: "📐", title: "型紙使い", desc: "型紙も作った" },
  { id: "costume-remake",  cat: "costume", icon: "♻️", title: "リメイク錬金術師", desc: "既製服をリメイクして衣装にした" },
  { id: "sewing-machine",  cat: "costume", icon: "🧷", title: "最高の相棒", desc: "自分のミシンを手に入れた" },
  { id: "costume-armor",   cat: "costume", icon: "🛡️", title: "いのちだいじに", desc: "鎧・アーマーを制作した" },
  { id: "costume-night",   cat: "costume", icon: "🌙", title: "まだ布、まだ金", desc: "イベント前日に徹夜で衣装を作った" },
  { id: "glue-gun",        cat: "costume", icon: "🔥", title: "グルーガンの洗礼", desc: "グルーガンでやけどした" },
  { id: "costume-kimono",  cat: "costume", icon: "👘", title: "和の心", desc: "和装キャラをした" },
  { id: "costume-school",  cat: "costume", icon: "🎒", title: "永遠の学生", desc: "制服キャラをした" },

  // --- 小物・造形 ---
  { id: "prop-make",   cat: "prop", icon: "🔨", title: "小物クラフター", desc: "小物・アクセサリーを自作した" },
  { id: "prop-weapon", cat: "prop", icon: "⚔️", title: "鍛冶職人", desc: "剣・銃などの武器を作った" },
  { id: "prop-lion",   cat: "prop", icon: "🧱", title: "ライオンボード使い", desc: "ライオンボード・EVAフォームで造形した" },
  { id: "prop-3d",     cat: "prop", icon: "🖨️", title: "未来の造形師", desc: "3Dプリンタで小物を出力した" },
  { id: "prop-led",    cat: "prop", icon: "💡", title: "光る者", desc: "衣装や小物にLEDを仕込んだ" },
  { id: "prop-huge",   cat: "prop", icon: "🗼", title: "規格外建築", desc: "自分の身長より大きい造形物を作った" },

  // --- メイク ---
  { id: "make-first",    cat: "makeup", icon: "💄", title: "キャラメイク入門", desc: "キャラに寄せたメイクをした" },
  { id: "make-scar",     cat: "makeup", icon: "🩸", title: "傷メイク師", desc: "傷・アザのメイクをした" },
  { id: "bandage-chara", cat: "makeup", icon: "🩹", title: "包帯の使い手", desc: "包帯キャラをした" },
  { id: "make-colorcon", cat: "makeup", icon: "👁️", title: "瞳の錬成", desc: "カラコンデビューした" },
  { id: "make-danso",    cat: "makeup", icon: "🎭", title: "性別の壁を越えし者", desc: "男装・女装メイクをした" },
  { id: "make-paint",    cat: "makeup", icon: "🎨", title: "全身キャンバス", desc: "ボディペイントをした" },
  { id: "make-tattoo",   cat: "makeup", icon: "🐉", title: "紋様の刻印", desc: "タトゥーシールを自作した" },

  // --- 撮影 ---
  { id: "photo-first",    cat: "photo", icon: "📸", title: "ファーストショット", desc: "初めてコス写真を撮ってもらった" },
  { id: "photo-studio",   cat: "photo", icon: "🏢", title: "スタジオデビュー", desc: "コススタジオで撮影した" },
  { id: "photo-location", cat: "photo", icon: "🏞️", title: "ロケハンター", desc: "ロケーション撮影をした" },
  { id: "photo-awase",    cat: "photo", icon: "👯", title: "併せの絆", desc: "併せ（合わせ）に参加した" },
  { id: "photo-self",     cat: "photo", icon: "🤳", title: "ひとり撮影隊", desc: "三脚＋リモコンでセルフ撮影した" },
  { id: "photo-edit",     cat: "photo", icon: "🖌️", title: "レタッチの魔法", desc: "写真のレタッチを覚えた" },
  { id: "photo-camera",   cat: "photo", icon: "🎥", title: "二刀流", desc: "カメラを買って撮る側も経験した" },

  // --- イベント ---
  { id: "event-first",    cat: "event", icon: "🎪", title: "イベント初陣", desc: "コスプレイベントに初参加した" },
  { id: "event-comike",   cat: "event", icon: "🏟️", title: "ビッグサイトの戦士", desc: "コミケでコスプレした" },
  { id: "event-overseas", cat: "event", icon: "✈️", title: "ワールドレイヤー", desc: "海外イベントに参加した" },
  { id: "event-stage",    cat: "event", icon: "🎤", title: "ステージの主役", desc: "ステージやコンテストに出た" },
  { id: "event-toho",     cat: "event", icon: "🚄", title: "遠征部隊", desc: "泊まりがけで遠征した" },
  { id: "event-rain",     cat: "event", icon: "☔", title: "雨ニモマケズ", desc: "雨のイベントを乗り切った" },

  // --- SNS・交流 ---
  { id: "sns-post",   cat: "community", icon: "📱", title: "初投稿", desc: "SNSにコス写真を投稿した" },
  { id: "sns-100",    cat: "community", icon: "❤️", title: "バズの入り口", desc: "投稿がいいね100を超えた" },
  { id: "friend-cos", cat: "community", icon: "🤝", title: "運命の出会い", desc: "コス友ができた" },
  { id: "name-card",  cat: "community", icon: "💳", title: "名刺は顔", desc: "コスネーム名刺を作った" },
  { id: "layer-10y",  cat: "community", icon: "👑", title: "レジェンドレイヤー", desc: "コスプレ歴10年を迎えた" },

  // --- あるある ---
  { id: "wig-net",    cat: "aruaru", icon: "🥅", title: "ネットとの死闘", desc: "ウィッグネットと格闘した" },
  { id: "safety-pin", cat: "aruaru", icon: "📎", title: "安全ピンの救済", desc: "安全ピンに現場で救われた" },
  { id: "cloak-line", cat: "aruaru", icon: "🚶", title: "更衣室の行列", desc: "更衣室の大行列に並び切った" },
  { id: "cheki",      cat: "aruaru", icon: "🎞️", title: "チェキ交換", desc: "チェキを配った・もらった" },
  { id: "same-chara", cat: "aruaru", icon: "🔁", title: "推しへの忠誠", desc: "同じキャラを別衣装でコスした" },
  { id: "genderbend", cat: "aruaru", icon: "⚧️", title: "if の世界", desc: "性別逆転アレンジをした" },
  { id: "original",   cat: "aruaru", icon: "✨", title: "オリジナリティ", desc: "オリジナルアレンジ衣装を作った" },
];

const CATEGORIES = {
  wig:       { label: "ウィッグ",   icon: "💇" },
  costume:   { label: "衣装",       icon: "🪡" },
  prop:      { label: "小物・造形", icon: "🔨" },
  makeup:    { label: "メイク",     icon: "💄" },
  photo:     { label: "撮影",       icon: "📸" },
  event:     { label: "イベント",   icon: "🎪" },
  community: { label: "SNS・交流",  icon: "🤝" },
  aruaru:    { label: "あるある",   icon: "😂" },
  custom:    { label: "カスタム",   icon: "⭐" },
};
