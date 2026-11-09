import type { Translations } from "./types";

export const zhCN: Translations = {
  // Header
  tagline: "立直麻将点数计算器",

  // Loading/Error states
  loadingCalculator: "正在加载计算器…",
  failedToLoad: "加载计算器失败：",

  // Hand builder
  buildYourHand: "组建手牌",
  clear: "清空",
  addMeld: "添加副露：",
  chi: "吃",
  pon: "碰",
  openKan: "明杠",
  closedKan: "暗杠",

  // Meld builder
  buildingChi: "添加吃牌",
  buildingPon: "添加碰牌",
  buildingOpenKan: "添加明杠",
  buildingClosedKan: "添加暗杠",
  hintChi: "（请选择同花色的3张连续数牌）",
  hintPon: "（请选择3张相同的牌）",
  hintKan: "（请选择4张相同的牌）",
  cancel: "取消",
  confirmAddMeld: "确认添加",

  // Melds display
  calledMelds: "已副露的面子",

  // Hand display
  yourHand: "手牌",
  selectWinningTileHint: "点击一张手牌，将其设为和牌张",
  winBadge: "和牌",

  // Shanten
  complete: "和牌型",
  tenpai: "听牌",
  shanten: "向听",

  // Dora section
  doraIndicators: "宝牌指示牌",
  dora: "宝牌",
  uraDora: "里宝牌",
  addButton: "+ 添加",
  akadoraInHand: "手牌中的赤宝牌：",

  // Results
  results: "计算结果",
  calculating: "正在计算…",
  inferredWinningTile: "推定和牌张为",
  han: "番",
  fu: "符",
  pts: "点",
  all: "每家",
  twoPayers: "（两家支付）",
  dealer: "庄家",
  dealerOya: "庄家（亲）",
  yaku: "役种",
  ura: "里宝牌",
  aka: "赤宝牌",
  nukidora: "拔北宝牌",
  fuBreakdown: "符数明细",
  fuBase: "底符",
  fuMenzenRon: "门前荣和",
  fuTsumo: "自摸",
  fuMelds: "面子",
  fuPair: "雀头",
  fuWait: "听牌方式",
  fuTotal: "合计",
  structure: "牌型结构：",
  enterCompleteHand: "请输入完整和牌手牌以计算点数",

  // Options
  options: "选项",
  game: "对局",
  fourPlayers: "四人麻将",
  threePlayers: "三人麻将",
  winType: "和牌方式",
  ron: "荣和",
  tsumo: "自摸",
  winds: "风位",
  round: "场风",
  seat: "自风",
  riichi: "立直",
  openHandNotice: "已副露，不能立直",
  doubleRiichi: "双立直",
  ippatsu: "一发",
  situational: "特殊情况",
  haitei: "海底摸月",
  houtei: "河底捞鱼",
  rinshanKaihou: "岭上开花",
  chankan: "抢杠",
  firstTurnYakuman: "首巡役满",
  tenhou: "天和",
  chiihou: "地和",

  // Calculate button
  calculateScore: "计算点数",

  // Footer
  footerPoweredBy: "基于",
  footerDescription: "—— 使用 Rust 编写的立直麻将点数计算引擎",

  // Tile picker
  selectTile: "选择麻将牌",

  // Wind names
  windEast: "东",
  windSouth: "南",
  windWest: "西",
  windNorth: "北",

  // Language
  language: "语言",

  // Share
  share: "分享",
  copiedToClipboard: "链接已复制！",

  // Tile Theme
  tileTheme: "牌面",
  tileThemeLight: "浅色",
  tileThemeDark: "深色",

  // Score levels
  scoreLevelMangan: "满贯",
  scoreLevelHaneman: "跳满",
  scoreLevelBaiman: "倍满",
  scoreLevelSanbaiman: "三倍满",
  scoreLevelYakuman: "役满",
  scoreLevelDoubleYakuman: "双倍役满",
  scoreLevelCountedYakuman: "累计役满",

  // Yaku names
  yakuRiichi: "立直",
  yakuIppatsu: "一发",
  yakuMenzenTsumo: "门前清自摸和",
  yakuTanyao: "断幺九",
  yakuPinfu: "平和",
  yakuIipeikou: "一杯口",
  yakuYakuhaiEast: "役牌：东风",
  yakuYakuhaiSouth: "役牌：南风",
  yakuYakuhaiWest: "役牌：西风",
  yakuYakuhaiNorth: "役牌：北风",
  yakuYakuhaiWhite: "役牌：白",
  yakuYakuhaiGreen: "役牌：发",
  yakuYakuhaiRed: "役牌：中",
  yakuRinshanKaihou: "岭上开花",
  yakuChankan: "抢杠",
  yakuHaitei: "海底摸月",
  yakuHoutei: "河底捞鱼",
  yakuDoubleRiichi: "双立直",
  yakuToitoi: "对对和",
  yakuSanshokuDoujun: "三色同顺",
  yakuSanshokuDoukou: "三色同刻",
  yakuIttsu: "一气通贯",
  yakuChiitoitsu: "七对子",
  yakuChanta: "混全带幺九",
  yakuSanAnkou: "三暗刻",
  yakuSanKantsu: "三杠子",
  yakuHonroutou: "混老头",
  yakuShousangen: "小三元",
  yakuHonitsu: "混一色",
  yakuJunchan: "纯全带幺九",
  yakuRyanpeikou: "两杯口",
  yakuChinitsu: "清一色",
  yakuTenhou: "天和",
  yakuChiihou: "地和",
  yakuKokushiMusou: "国士无双",
  yakuSuuankou: "四暗刻",
  yakuDaisangen: "大三元",
  yakuShousuushii: "小四喜",
  yakuDaisuushii: "大四喜",
  yakuTsuuiisou: "字一色",
  yakuChinroutou: "清老头",
  yakuRyuuiisou: "绿一色",
  yakuChuurenPoutou: "九莲宝灯",
  yakuKokushi13Wait: "国士无双十三面听",
  yakuSuuankouTanki: "四暗刻单骑",
  yakuJunseiChuurenPoutou: "纯正九莲宝灯",
  yakuSuuKantsu: "四杠子",
};
