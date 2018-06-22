/*
  global variables
*/
var totalCards = 16;  // default total number of cards
var cardCurrentClicked = 0;
var currentSelectedCards = new Array(2);
var canvasWidth = 320;
var canvasHeight = 180;
var imagesArray = new Array();
var previewInterval = 1500; // default 2 seconds
var countDownInterval = 25; // default 45 secs

var imageTypePref = "auto";
var imageSrcDir = "src/images/" + imageTypePref;
var imageCardFrontCover = imageTypePref + "FrontCover.jpg";

var gameType = "auto";
var gameTypeList = ["auto", "landscape", "chinese"];
var gGameTimer;
var paused = false;

/*var imageSrcDir = "src/images";
var imageTypePref = "auto";
var imageCardFrontCover = "chineseFrontCover.jpg";*/

var chineseText =
/*"一乙丁七乃九了二人入八几刀刁力匕十卜又" +
"三下丈上丫丸凡久么也乞于亡兀刃千叉口土士孓寸小尸山川工己已巳巾干弓才夕大女子孑" +
"丑丐不中丹之尹予云井互五仁什仃仆仇仍今介仄元允內六兮公冗凶分切匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛王丙世丕且丘主乍乏乎以付仔仕他" +
"仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼" +
"司叵叫另只史叱台句叭四囚外央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩由由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交示亥仿伉伙伊伕伍伐休伏仲件任仰仳份" +
"企光兇兆先全共再冰列刑划刎劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回圳地在圭圬圯夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐" +
"汕灰牟牝百竹米系缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡" +
"串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣作你伯低伶余佝兌克兕免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟囪困囤坊坑址坍均坎圾坐坏壯夾妝妒妨妞妣妙妖妍妤妓妊" +
"妥孝孜孚完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑改攻旱更束李杏材村杜杖杞杉步每求汞沙沁沈沉沅沛汪決沐汰沌汩沖沒汽沃汲汾灶灼災灸牢牡牠狄狅" +
"玖甬甫男甸皀盯矣私秀禿究系罕肖肓肝肘肛肚育良芒芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉里防阮阱阪" +
"並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏兔兒兩具其典冽函刻券刷刺到刮制剁劾卒協卓卑卦卷卸卹取叔受味呵咖吥咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐" +
"姍始姓姊妯妳姒孟孤季宗定官宜宙宛尚屈居屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於" +
"旺昔易昌昆昂明昀昏服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚欣武歧歿毒氓氛泣注泳沱泌泥河沽沾沼波沬法泓沸泄油況沮泗泅泱沿治泡泛泊炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫甽疝疙疚的盂盲直知矽社祀祁秉空穹"
"竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥虎虱初表軋迎返近邵邸邱采金長門阜陀阿阻附雨青非";*/
// 一 ~三畫
"一乙二十丁廠七蔔人入八兒了力乃刀又匕刁三於幹虧士工土才大丈與萬上小口巾山千乞個勺久凡及夕丸麽廣亡之屍弓己已子衛也女飛刃馬鄉" +
// 四畫
"豐王井開夫天無元專雲木五支廳不太犬區歷尤友巨牙屯比互切瓦止少日九幾寸下川億義習叉藝匹車岡門紮中貝內水見午牛手毛氣升長仁什片仆化仇幣仍僅斤爪反介父從今兇分乏公倉月氏勿欠風丹勻烏鳳勾文六方火為鬥憶訂計戶" +
"認心尺引醜巴孔隊辦以允予勸雙書幻丐歹戈夭侖譏冗鄧" +
//五畫
"玉刊示末未擊打巧正撲扔去甘世古節本術可丙左石布龍平滅軋東卡北占帥歸且旦目葉甲申叮電由史只央兄叼叫另叨嘆失禾丘付仗代仙們儀白仔瓜乎叢令用甩印樂句匆外處冬鳥務包饑主市立半汁匯頭漢寧穴它討寫讓必議訊記永司" +
"尼民出遼加召皮邊發孕聖對臺矛幼絲艾夯凸盧叭嘰皿凹囚爾馮玄扒功厲右業舊號田四生他斥冊犯閃蘭禮訓奶奴糾母" +
// 六畫
"式刑動扛寺吉扣考托老執鞏圾擴掃地揚場耳共芒亞芝朽樸機權過臣再協西壓厭在有百存而頁匠誇奪灰達列死軌邪劃邁畢至此貞師塵光當早吐嚇蟲曲團同吊吃嗎嶼帆歲回豈剛則肉網先丟舌竹遷喬偉傳乒乓伏優伐延件任傷價份華仰" +
"偽自血向似後行舟全會兆企眾爺傘創肌朵雜危負各名多爭色壯沖冰莊慶齊交次衣產決充妄閉問並關米燈州汗汙江池湯宇守宅字安講軍許論農諷尋那迅盡導異孫陣陽收防奸如婦好她媽戲羽觀紅纖級約紀馳巡邦迂邢芋芍吏夷籲呂吆" +
"迄臼仲倫伊肋旭匈鳧妝亥訝訛訟訣弛阱馱馴紉矢乍廷汛諱屹" +
// 七畫
"成夾尖劣因吸年朱休伍仿夥殺合旬旨亦劉闖羊忙興設訪階陰歡買壽弄麥形進戒吞遠違運扶撫壇技壞擾拒找批扯址走抄壩貢攻赤折抓扮搶孝均拋投墳抗坑坊抖護殼誌扭塊聲把報卻劫芽花芹芬蒼芳嚴蘆勞桿杠杜材村杏極李楊求更兩" +
"麗醫辰勵否還殲來連旱盯呈時吳助縣裏呆園呀噸足郵男困吵串員聽吩吧吼別崗帳財針釘告我禿秀私每兵估體何但伸伶傭低你住位伴身皂佛近返余希坐谷妥含鄰岔肝龜免狂猶角刪條卵島迎系言凍狀畝況床庫療應冷辛棄冶忘閑間悶" +
"判竈燦沙汽沃泛溝沒沈沈懷憂宋宏牢究窮災良證啟評社識訴診詞譯君靈即層尿局改張忌際陸阿陳阻附妨努忍勁雞驅純紗納綱克蘇束豆步堅曠圍吹嗚亂利作伯徹役肚腸飯飲這序弟汪快完補初尾遲妙妖駁縱紛紙紋紡驢紐玖瑪韌摳扼" +
"汞扳掄坎塢抑擬抒芙蕪葦芥芯芭杖杉巫杈甫匣軒鹵肖吱吠嘔吶吟嗆吻吭囤吮嶇牡佑佃伺囪肛肘甸鳩彤灸刨庇吝廬閏兌灼沐汰瀝淪洶滄滬忱詛詐罕屁墜姊妒緯" +
// 八畫
"奉玩環武青責現表規抹攏拔揀擔坦押抽拐拖拍者頂拆擁拘勢抱垃拉攔拌幸招坡披擇擡其取苦若茂蘋苗英範茄莖茅林枝杯櫃析板松槍傑述枕喪或畫臥事刺棗雨賣碼廁奔奇奮態歐壟妻轟頃斬輪軟到非叔肯齒些虎虜賢尚旺具果味昆國" +
"昌暢明易典固忠咐呼鳴詠呢岸巖帖幟嶺凱敗販購圖釣制知垂物乖刮稈和季委佳侍供使例侄偵側憑僑佩貨依的迫質征往爬彼徑所舍金命斧爸采乳貪念貧膚肺肢腫脹朋股服脅周昏魚兔狐忽狗備飾飼變京享店夜廟府底劑郊廢盲放刻育" +
"閘鬧鄭券卷單炒抵撥直構礦轉腎昂羅牧版欣受肥飽凈炊炕炎爐沫淺法泄河沾淚油泊沿泡註瀉泳泥沸波潑澤治怖性怕憐怪學寶宗定宜審宙官空簾實試郎詩肩房誠襯衫視話誕詢該詳建肅錄隸居屆刷屈弦承孟孤陜降限妹姑姐姓參艱線" +
"練組細駛織終駐經貫玫卦坷坯拓坪坤拄擰拂拙拗茉昔苛苫茍苞茁苔枉樞枚杭郁礬奈奄毆歧卓曇哎咕嚨呻咒咆咖帕賬貶貯氛秉俠僥侶侈卑劊剎肴覓忿甕肪獰龐瘧疙疚卒氓炬沽沮泣泌沼怔怯寵宛衩祈詭帚屜彌陋陌函姆虱叁紳駒絆繹" +
"邑狽沛妓拇楓呵嶽骯濘弧" +
// 九畫
"奏春幫珍玻毒型掛封持挎城撓政赴趙擋挺括拴拾墊掙擠拼挖按揮挪某甚巷帶草繭茶荒茫蕩榮故藥標枯柄棟相查柏柳柱樹要鹹威歪研磚厘厚砌砍耍牽殘殃輕鴉皆背戰點豎省削嘗是盼眨哄顯啞星昨畏趴胃貴界虹蝦蟻思品咽罵嘩咱響" +
"哈咬咳哪罰賤貼骨鈔鐘鋼鑰鉤卸始駕駝紹項垮挑指革薦胡南柿欄面耐臨覽冒映螞雖炭峽缸拜看矩怎牲選適秒香種秋科重復竿段便倆貸順修保促侮儉俗俘信皇泉鬼侵追俊盾待律很須敘劍逃食盆膽勝胞胖脈勉狹獅獨狡獄狠貿怨急饒" +
"蝕餃餅彎將獎哀亭亮度跡庭瘡疤姿親音帝施聞閥閣差姜叛送類迷前首逆總煉炸剃潔洪灑澆濁洞測洗活染濟洋洲渾濃津恒恢恰舉覺宣室宮憲突穿竊客冠襖祖神祝誤誘說誦墾退晝費陡眉孩除險院娃姥嬌怒架賀盈勇怠柔壘綁絨驕繪給" +
"絡駱絕絞統契貳玷玲珊拭拷拱挾垢垛拯荊茸茬莢茵茴蕎薺葷熒荔棧柑柵檸枷勃柬砂泵硯鷗軸韭虐昧盹咧昵昭盅勛哆咪喲鈍鈉欽鈞鈕氈氫秕俏俄徊衍胚朧胎猙餌巒奕咨颯籽婁爍炫窪柒涎洛恃恍宦誡誣祠誨屏屎遜隕姚駭" +
// 十畫
"耕耗艷泰珠班素蠶頑盞栽捕振載趕起鹽捎捏埋捉損都哲逝撿換挽熱恐壺耽恭蓮莫荷獲晉惡真框瘋疫養美炮爛派洽惱恨語扁既屋姨姻結繞匪撈捆捐挨恥桂檔桐株橋桃格校核樣根索哥速逗栗配翅辱唇夏礎破原套逐烈殊顧轎較頓斃致" +
"柴桌慮監緊黨曬眠曉鴨晃晌暈蚊哨哭恩喚啊唉罷峰圓賊賄錢鉗鉆鐵鈴鉛缺氧特犧造乘敵秤租秧秩稱秘透筆笑筍債借值倚倒倘俱倡候俯倍倦健臭射息徒徐艦艙般航途拿爹愛翁脆脂胸胳臟膠腦貍狼逢留餓戀槳漿衰高席準座脊癥疾疼" +
"疲效離唐資涼站剖競旁旅畜閱羞瓶拳粉料益兼烤煩燒燭煙遞濤浙澇酒涉消海塗浴浮流潤浪浸漲燙湧悄悔悅害寬家宵宴賓窄容宰請朗諸讀扇襪袖袍被祥課調冤諒談誼剝懇展劇屑弱陶陷陪娛娘通能難預桑絹繡繼耘耙秦匿埂捂捍袁捌" +
"挫捅埃耿聶荸莽萊莉瑩鶯梆栓桅樁賈酌砸砰礫殉逞哺剔蚌蚜畔蚣蚪蚓哩圃哼唆峭唧峻賂贓鉀鉚氨俺賃倔殷聳舀豺豹頒胯胰逛卿鴕鴛餒淩淒衷郭齋瓷羔烙浦渦渙滌澗涕澀幽鈣俐侯閨閩恬恤娜蚤摯搗棲樺哮嘮鴦唁秫笆臍膿疹紊悍憫" +
"竅諾誹袒諄祟恕娩駿" +
// 十一畫
"積傾躬頌皺病部烘浩悟案誰陵驗球理捧堵描域掩捷排掉堆推掀授教掏掠培接控探據掘職基著勒黃萌蘿菌菜萄菊萍菠營械夢梢梅檢梳梯桶救副票戚爽聾襲盛雪輔輛虛雀堂常匙晨睜瞇眼懸野啦晚啄距躍略蛇累唱患唯崖嶄崇圈銅鏟銀" +
"甜梨犁移笨籠笛符第敏做袋悠償偶偷您售停偏假得銜盤船斜盒鴿悉欲彩領腳脖臉脫象夠猜豬獵貓猛餡館湊減毫麻癢痕廊康庸鹿盜章竟商族旋望率著蓋粘粗粒斷剪獸清添淋淹渠漸混漁淘液淡深婆梁滲情惜慚悼懼惕驚慘慣寇寄宿窯" +
"密謀謊禍謎逮敢屠彈隨蛋隆隱婚嬸頸績緒續騎繩維綿綢綠瑣麩琉瑯措捺捶赦埠撚掐掂掖擲撣摻勘聊娶菱菲萎菩蕭薩菇彬梗梧梭曹醞酗碩奢盔匾顱彪眶晤曼晦畦趾啃蛆蚯蛉蛀唬啰唾嘯崎邏崔崩嬰賒銬鐺鋁鍘矯稭穢笙笤偎傀軀兜釁" +
"舶舷舵斂翎脯逸凰猖祭庵痊閻闡眷焊煥鴻涯淑淌淵淫淳淤澱涮涵惦悴惋諜諧襠袱禱謁謂諺尉墮頗綽繃綜綻綴巢" +
// 十二畫
"琴斑替款堪搭塔越趁趨超提堤博揭喜插揪搜煮援裁擱摟攪握揉斯期欺聯散惹葬葛董葡敬蔥落朝辜葵棒棋植森椅椒棵棍棉棚棕惠惑逼廚廈硬確雁殖裂雄暫雅輩悲紫輝敞賞掌晴暑最量噴晶喇遇喊景跑遺蛙蛛蜓喝餵喘喉幅賠黑鑄鋪鏈" +
"銷鎖鋤鍋銹鋒智毯鵝剩稍程稀稅筐等篩筒答筋箏傲傅牌堡集儲奧街懲禦循艇舒番釋禽腔魯猾猴然饞裝蠻就痛善羨普糞尊道曾焰港湖溫渴滑灣渡遊滋溉憤慌惰慨割寒富竄窩窗遍裕褲謠謙屬屢強粥疏隔隙絮緞緩編騙緣琳琢瓊揍堰揩" +
"攬揖彭揣壹搔葫募蔣蒂韓棱椰焚椎橢粟棘酣酥硝硫頰靂翹螢乾廂矽冕啡啤啥銑銘徘徙烹庶淮淆寂窒隅婉攙搓棺榔鑿棠晰鼎喳遏晾疇跋跛蛔蜒蛤鵑喻啼喧嵌賦贖賜銼鋅甥掰氮氯黍筏牘粵逾腌腋腕猩猬憊敦痘痢瘓竣翔奠遂焙滯湘渤" +
"渺潰濺湃愕惶寓窖窘雇謗犀隘媒媚婿緬纜締縷騷" +
// 十三畫
"瑞魂肆攝摸填搏塌鼓擺搖搞塘攤蒜勤鵲藍墓幕蓬踐跌帽賭銳短築策焦傍臘脾童闊渣濕愧愉裙謝嫂登攜搬蓄蒙蒸獻禁楚想槐榆樓概賴酬感礙碑碎碰碗碌雷零霧雹輸督齡鑒睛睡睬鄙愚暖盟歇暗照跨跳跪路跟遣蛾蜂嗓置罪罩錯錫鑼錘" +
"錦鍵鋸矮辭稠愁籌簽簡毀舅鼠催傻像躲微愈腥腹騰腿觸解醬痰廉新韻數煎塑慈煤煌滿漠源濾溪溜滾濱粱灘慎譽塞謹殿辟障嫌嫁叠縫纏瑟鵡瑰搪聘斟靴靶蓖蒿楔椿楷欖楞楣酪碘硼碉輻睹睦瞄嗜嗦暇畸蹺跺蜈蛹嗅嗡嗤署蜀幌錨錐鍁" +
"稚頹筷魁衙膩腮腺鵬肄煞雛饃餾稟痹廓癡靖謄漓溶滓溺寞窺窟寢褂裸謬縛繽剿" +
// 十四畫
"靜碧璃墻撇嘉摧截誓境聚蔽慕暮蔑模榴榜榨歌遭酸磁願需弊裳顆嗽蜻蠟賺鍬鍛舞穩算籮管僚鼻膜膊膀鮮疑饅裹敲豪膏瘦辣竭端旗精歉熄熔漆漂演漏慢寨賽察蜜譜嫩翠騾縮遙腰意糧濫滔福群摘摔酷釀蠅蜘魄貌遮腐漫滴熊凳贅熬赫" +
"蔫摹蔓蔗藹熙蔚榕酵碟碴堿碳轅轄雌墅嘁蒲蓉輯頻蝸蛻錠錳猿穎溢溯媳嫉兢榛踴蟬嘀幔鍍舔熏箍箕簫輿僧孵瘩瘟彰粹漱漩漾慷寡寥譚褐褪隧嫡纓" +
// 十五畫
"慧撕撒趣趟撐播撞撤增聰鞋蕉蔬橫槽櫻橡飄醋醉震黴瞞題暴瞎影踢踏踩蹤蝶蝴囑墨鎮靠稻黎稿稼箱箭篇僵躺僻艘膝膛熟摩顏毅糊遵潛潮額慰劈攆撩撮撬擒墩撰鞍蕊蘊橄敷豌醇磕磅碾憋嘶嘲嘹蝌蝗蝙嘿幢鑷鎬稽簍膘褒癟瘤癱凜澎" +
"潭潦澳潘澄憔懊憎翩褥譴鶴憨履繚" +
// 十六畫
"操燕薯薪薄顛橘整融醒餐蹄器贈默鏡贊籃邀衡膨雕磨辨辯糖糕燃澡激懶壁避繳撼擂擅蕾薛薇擎翰噩櫥蟥霍霎轍冀踱蹂蟆螃螟噪穆篡篷篙籬儒膳鯨癮瘸瀕憾懈窿韁" +
// 十七畫
"戴擦鞠藏霜霞瞧蹈螺繁辮贏糟糠燥臂翼驟樊樟蝠蠍鯉鯽澈瀾嬉豫橙瓢鸚黔糙燎壕藐檬檐檁檀礁磷瞭瞬瞳瞪曙蹋蟋蟀嚎贍鐐魏簇儡徽爵朦臊鱷糜癌懦豁臀" +
//十八畫
"鞭覆蹦鐮翻鷹藕藤瞻囂鰭癩瀑襟璧戳" +
// 十九畫
"警攀蹲顫瓣爆疆德懂嘴凝穗攢孽蘑藻鱉蹭蹬簸簿蟹靡癬羹" +
// 二十畫
"壤耀躁嚼嚷籍魔灌鬢攘蠕巍鱗糯譬蠢霸露霹躪髓囊蘸鑲瓤罐矗";


var gameStarted = false;

$('.sel-button').hide();
englishGroupClicked();

/*
  to start a new game
*/
function newGame(level, type) {
    //gameType = type;
    var rand = Math.floor((Math.random() * 1000)) % 3;
    gameType = gameTypeList[rand];
    if(level == 1) {
      // 16 cards , 4X4
      totalCards = 16;
      previewInterval = 1500;
      countDownInterval = 25;
      
      canvasWidth = 320;
      canvasHeight = 180;
      setDocumentVariable('--card-width', "320px");
      setDocumentVariable('--card-height', "180px");
    }
    else if(level == 2) {
      // 20 cards, 5X4
      totalCards = 20;
      previewInterval = 2000;
      countDownInterval = 45;
      
      canvasWidth = 240;
      canvasHeight = 128;
      setDocumentVariable('--card-width', "240px");
      setDocumentVariable('--card-height', "128px");
    }
    else if(level == 3) {
      // 30 cards, 6X5
      totalCards = 30;
      previewInterval = 3000;
      countDownInterval = 80;
      
      canvasWidth = 200;
      canvasHeight = 107;
      setDocumentVariable('--card-width', "200px");
      setDocumentVariable('--card-height', "107px");
    }
    // initialization for configuration
    gameStarted = false;
    cardCurrentClicked = 0;
    initConfig();
    // hide levelButton
    $('.menuGroup').hide();

    // hide pauseButton, restartButton, quitButton
    $('.sel-button').show();
    $('.homePage').show();
    $('.startButton').show();
    $('.pauseButton').hide();
    $('.restartButton').hide();
    $('.quitButton').hide();
    $('.missedButton').hide();
    $('.counterButton').hide();

    //generate images into imagesArray
    generateImagesForGame(totalCards);
    insertCardDivIntoCardList();
    addCardClickedEvent();
}


/*
  to click the chinese button
*/
function chineseGroupClicked() {
  $('.englishGroup').hide();
  $('.chineseGroup').show();
}

/*
  to click the english button
*/
function englishGroupClicked() {
  $('.englishGroup').show();
  $('.chineseGroup').hide();
}

/*
  to click the home page
*/
function clickedHomePage() {
  removeCardDivFromCardList();
  $('.sel-button').hide();
  $('.menuGroup').show();
  resetGameTimer();
}

/*
  to start a new game
*/
function playStart() {
    $('.startButton').hide();
    
    $('.pauseButton').show();
    $('.restartButton').show();
    $('.quitButton').show();
    $('.missedButton').show();
    $('.counterButton').show();
    resetMissedCounter();
    $('.clock'). FlipClock(0, {
    		        clockFace: 'MinuteCounter',
    		        countup: true,
                //autoStart: true,
    		        callbacks: {
    		        	stop: function() {
    		        		$('.message').html('The clock has stopped!');
    		        	}
    		        }
    		    });    
    // preview miliseconds
    preview(previewInterval, this);
    gameStarted = true;
    //initTimer();
}

/*
  to pause the game
*/
function pauseGame() {
    $('.pauseScreen').show();
    paused = true;
    //myclock.stop();
}

/*
  to pause the game
*/
function resumeGame() {
    $('.pauseScreen').hide();
    paused = false;
    //myclock.start();
}

/*
  to restart the game
*/
function restartGame() {
    //quitGame();
    showAllCards(true);
    flipAllCards(false);
    resetGameTimer();
    resetMissedCounter();
    gameStarted = false;
    
    preview(previewInterval, this);
    gameStarted = true;
}

/*
  to quit the game
*/
function quitGame() {
  paused = true;
  var modal = document.getElementById('myModal');  
  modal.style.display = "block";
  /*showAllCards(true);
  flipAllCards(false);
  resetGameTimer();
  resetMissedCounter();
  gameStarted = false;*/
}

/*
  to confirm quit the game
*/
function quitYesButton() {
  paused = false;
  var modal = document.getElementById('myModal');  
  modal.style.display = "none";
  showAllCards(true);
  flipAllCards(false);
  resetGameTimer();
  resetMissedCounter();
  gameStarted = false;
}

/*
  to cancel quit the game
*/
function quitNoButton() {
  var modal = document.getElementById('myModal');  
  modal.style.display = "none";
  paused = false;
}

var cellCount = 100,
    cellWidth = 44,
    cellHeight = 40,
    cellMarginTop = 1,
    cellMarginBottom = 8,
    cellMarginLeftRight = 1,
    glyphMargin = 5,
    pixelRatio = window.devicePixelRatio || 1;
var font, fontScale, fontSize, fontBaseline, glyphScale, glyphSize, glyphBaseline;

/*
* initialization font for generate font image
*/
function initFont() {
  var fontFileName = 'fonts/ukai.ttf';
  opentype.load(fontFileName, function(err, font) {
      var amount, glyph, ctx, x, y, fontSize;
      if (err) {
          //showErrorMessage(err.toString());
          return;
      }
      window.font = font;
  });
}

/*
* initialization for glyph configuration
*/
function initConfig() {
  var rand = Math.floor((Math.random() * 1000)) % 3;
  //gameType = gameTypeList[rand];
  if(gameType == "chinese") {
    initChineseConfig();
  }
  imageTypePref = gameType;
  imageSrcDir = "src/images/" + imageTypePref;
  imageCardFrontCover = imageTypePref + "FrontCover.jpg";
  //imageCardFrontCover = "pickme.gif";
}

/*
* initialization for glyph configuration
*/
function initChineseConfig() {
  var w = cellWidth - cellMarginLeftRight * 2,
      h = cellHeight - cellMarginTop - cellMarginBottom,
      head = font.tables.head,
      maxHeight = head.yMax - head.yMin;
  fontScale = Math.min(w/(head.xMax - head.xMin), h/maxHeight);
  fontSize = fontScale * font.unitsPerEm;
  fontBaseline = cellMarginTop + h * head.yMax / maxHeight;
  w = canvasWidth / pixelRatio,
  h = canvasHeight / pixelRatio,
  glyphW = w - glyphMargin*2,
  glyphH = h - glyphMargin*2,
  head = font.tables.head,
  maxHeight = head.yMax - head.yMin,

  glyphScale = Math.min(glyphW/(head.xMax - head.xMin), glyphH/maxHeight);
  glyphSize = glyphScale * font.unitsPerEm;
  glyphBaseline = glyphMargin + glyphH * head.yMax / maxHeight;
}

/*
  function to generate images
*/
function generateImagesForGame(numOfCards) {
  // clear imagesArray first
  imagesArray = new Array();
  if(gameType == "chinese") {
    for(var i=0; i<numOfCards; i++) {
            var canvas = document.createElement('canvas');
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            var width = canvas.width / pixelRatio;
            var height = canvas.height / pixelRatio;
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //if(glyphIndex < 0) return;
            var grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            var rColor = Math.floor(Math.random() * 256) % 255;
            var gColor = Math.floor(Math.random() * 256) % 255;
            var bColor = Math.floor(Math.random() * 256) % 255;
            var rgbColor = 'rgb(' + rColor + ',' + gColor +',' + bColor +')';
            grd.addColorStop(0, rgbColor); // grd.addColorStop(0,'rgb(0,0,0)');
            grd.addColorStop(1,"lightblue");
  
            // Fill with gradient
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
  
            var rand = Math.floor(Math.random()*(chineseText.length-1));
            var userChar = chineseText.charAt(rand);
            var glyphIndex = font.charToGlyph(userChar);
  //          if (glyphIndex.index < font.numGlyphs) {
  //          }
  
            var glyph = font.glyphs.get(glyphIndex.index),
                glyphWidth = glyph.advanceWidth * glyphScale,
                xmin = (width - glyphWidth)/2,
                xmax = (width + glyphWidth)/2,
                x0 = xmin,
                markSize = 10;
  
            ctx.fillStyle = '#606060';
            ctx.fillRect(xmin-markSize+1, glyphBaseline, markSize, 1);
            ctx.fillRect(xmin, glyphBaseline, 1, markSize);
            ctx.fillRect(xmax, glyphBaseline, markSize, 1);
            ctx.fillRect(xmax, glyphBaseline, 1, markSize);
            ctx.textAlign = 'center';
            ctx.fillText('0', xmin, glyphBaseline+markSize+10);
            ctx.fillText(glyph.advanceWidth, xmax, glyphBaseline+markSize+10);
  
            ctx.fillStyle = '#000000';
            var path = glyph.getPath(x0, glyphBaseline, glyphSize);
            //var path = glyph.getPath(0, 0, glyphSize);
            path.fill = '#000';
            path.stroke = '#000000';
            path.strokeWidth = 1.5;
            drawPathWithArrows(ctx, path);
            //glyph.drawPoints(ctx, x0, glyphBaseline, glyphSize);
            var oGrayImg = new Image();
            oGrayImg.src = canvas.toDataURL();
            imagesArray.push(oGrayImg);
    }
  }  
  else {
    // use fixed images for now
    for(var i=0; i<numOfCards; i++) {
      var oGrayImg = new Image();
      //oGrayImg.src = canvas.toDataURL();
      oGrayImg.src = imageSrcDir + '/' + imageTypePref + (i+1) + ".jpg";
      imagesArray.push(oGrayImg);
    }
  }

}

/*
  function to draw font path
*/
function drawPathWithArrows(ctx, path) {
    var i, cmd, x1, y1, x2, y2;
    var arrows = [];
    ctx.beginPath();
    for (i = 0; i < path.commands.length; i += 1) {
        cmd = path.commands[i];
        if (cmd.type === 'M') {
            if(x1 !== undefined) {
                arrows.push([ctx, x1, y1, x2, y2]);
            }
            ctx.moveTo(cmd.x, cmd.y);
        } else if (cmd.type === 'L') {
            ctx.lineTo(cmd.x, cmd.y);
            x1 = x2;
            y1 = y2;
        } else if (cmd.type === 'C') {
            ctx.bezierCurveTo(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
            x1 = cmd.x2;
            y1 = cmd.y2;
        } else if (cmd.type === 'Q') {
            ctx.quadraticCurveTo(cmd.x1, cmd.y1, cmd.x, cmd.y);
            x1 = cmd.x1;
            y1 = cmd.y1;
        } else if (cmd.type === 'Z') {
            arrows.push([ctx, x1, y1, x2, y2]);
            ctx.closePath();
        }
        x2 = cmd.x;
        y2 = cmd.y;
    }
    if (path.fill) {
        ctx.fillStyle = path.fill;
        ctx.fill();
    }
    if (path.stroke) {
        ctx.strokeStyle = path.stroke;
        ctx.lineWidth = path.strokeWidth;
        ctx.stroke();
    }
    ctx.fillStyle = '#000000';
    //arrows.forEach(function(arrow) {
    //    drawArrow.apply(null, arrow);
    //});
}

/*
  insert div for cards into cardlist div
*/
function insertCardDivIntoCardList() {
  // need to remove the card list first if there is any
  var arrayRandomCard = initRandomCardArray();
  var cardList = document.getElementById("cardList");

  for(var i = 0; i < totalCards; i++) {

      var div1 = document.createElement("div");
      div1.id = 'card'+(i+1) + '_front';
      div1.className = "card__front";
      var elem1 = document.createElement("img");
      elem1.setAttribute("src", imageSrcDir +'/' + imageCardFrontCover);
      div1.appendChild(elem1);

      var div2 = document.createElement("div");
      div2.id = 'card'+(i+1) + '_back';
      div2.className = "card__back";
      var elem2 = document.createElement("img");
      var imageSrc = imagesArray[arrayRandomCard[i].value].src;
      elem2.setAttribute("src", imageSrc);
      div2.appendChild(elem2);

      var divCard = document.createElement("div");
      divCard.id = 'card'+(i+1);
      divCard.className = "card effect__click";
      divCard.imageId = arrayRandomCard[i].value;

      divCard.appendChild(div1);
      divCard.appendChild(div2);

      cardList.appendChild(divCard);
  }
}

/*
  remove all div for cards from cardlist div
*/
function removeCardDivFromCardList() {
  // need to remove the card list first if there is any
  var cardList = document.getElementById("cardList");
  while (cardList.hasChildNodes()) {
      cardList.removeChild(cardList.lastChild);
  }
}

/*
  create randowm arry with key and image id number
*/
function initRandomCardArray() {
  var totalArray = new Array();
  for(var i=1; i<=totalCards/2; i++) {
    var val = new Array();
    val.key =  Math.floor((Math.random() * 100));
    val.value = i;
    totalArray.push(val);
    val = new Array();
    val.key =  Math.floor((Math.random() * 100));
    val.value = i;
    totalArray.push(val);
  }
  var initArray = sortByKey(totalArray, "key");
  return(initArray);
}

/*
  function for sorting arry using key
*/
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];

        if (typeof x == "string")
            x = x.toLowerCase();
        if (typeof y == "string")
            y = y.toLowerCase();

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

/*
  function to add onclick event to all cards
*/
function addCardClickedEvent() {
  var cards = document.querySelectorAll(".card.effect__click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }
}

/*
  function to handle when card clicked
*/
function clickListener(card) {
  card.addEventListener( "click", function() {
    if(gameStarted==false || cardCurrentClicked >= 2)
      return; // do nothing, user click too fast
    var c = this.classList;
    var cardId = this.id;
    var imageId = this.imageId;
    if(c.contains("flipped") === true)
      return;
    c.add("flipped");
    if(cardCurrentClicked == 0) {
      cardCurrentClicked++;
      currentSelectedCards[0] = cardId;
    }
    else if(cardCurrentClicked == 1) {
      //check if match
      var item = document.getElementById(currentSelectedCards[0]);
      if(item.imageId == imageId) {
        setTimeout(function() { 
          hideMatchedCards(cardId, currentSelectedCards[0]); 
        }, 500);
      }
      else {
        setTimeout(function() { 
          restoreCards(cardId, currentSelectedCards[0]); 
          setMissedCounterValue(true, 1);
          //missedCounter.increment();
        }, 500);
      }
    }
  });
}

/*
  function to restore unflip state
*/
function hideMatchedCards(cardId1, cardId2) {
  document.getElementById(cardId1).style.visibility = "hidden";
  document.getElementById(cardId2).style.visibility = "hidden";
  cardCurrentClicked = 0;
  currentSelectedCards = new Array(2);
  if(checkIfGameComplete()) {
    // show animation gif for 5 seconds
    //myclock.stop();
    stopGameTimer();
    $('.completeScreen').show();
    setTimeout(function() { 
      $('.completeScreen').hide(); 
    }, 5000);
  }
}

/*
  function to restore unflip state
*/
function restoreCards(cardId1, cardId2) {
  document.getElementById(cardId1).classList.remove("flipped");
  document.getElementById(cardId2).classList.remove("flipped");
  cardCurrentClicked = 0;
  currentSelectedCards = new Array(2);
}


/*
  function to restore unflip state
*/
function preview(previewTime, scope) {
  flipAllCards(true);
  setTimeout(function() { 
    flipAllCards(false); 
    //myclock.start();
    scope.startGameTimer(countDownInterval);
  }, previewTime);
}

/*
* function to flip(true) or unflip all cards
*/
function showAllCards(show) {
  for(var i=1; i<=totalCards; i++) {
    var cardId = "card" + i;
    if(show)
      document.getElementById(cardId).style.visibility = "visible";
    else
      document.getElementById(cardId).style.visibility = "hidden";
  }
}

/*
* function to flip(true) or unflip all cards
*/
function flipAllCards(flip) {
  for(var i=1; i<=totalCards; i++) {
    var cardId = "card" + i;
    if(flip)
      document.getElementById(cardId).classList.add("flipped");
    else
      document.getElementById(cardId).classList.remove("flipped");
  }
}

/*
* function to check if all cards clipped
*/
function checkIfGameComplete() {
  for(var i=1; i<=totalCards; i++) {
    var cardId = "card" + i;
    var c = document.getElementById(cardId).classList;
    if(c.contains("flipped") === true) {
      
    }
    else {
      return(false);
    }
  }
  return(true);
}

var myclock;
//var missedCounter;

/*function initTimer() {
  myclock = $('.clock').FlipClock(0, {
          clockFace: 'MinuteCounter',
          countdown: false,
          autoStart: false,
          callbacks: {
            start: function() {
              //$('.message').html('The clock has started!');
            }
          }
      });
  missedCounter = $('.missCounter').FlipClock({
          clockFace: 'Counter'
          //autoStart: false,
      });
  //myclock.start();

  setTimeout(function() {
    setInterval(function() {
      if(paused == false)
        myclock.increment();
    }, 1000);
  });
}*/

/*
* Auxiliary method. Sets the value of a custom property at the document level.
*/
var setDocumentVariable = function(propertyName, value) {
  document.documentElement.style.setProperty(propertyName, value);
};

/*
  function to start game timer
*/
function startGameTimer(start, countUp) {
  var accumulateTime = start*1000;
  var interval = 15; // 10 msec
  gGameTimer = setInterval(function(){ gameTimer() }, interval);
  
  function gameTimer() {
    if(paused == false) {
      //accumulateTime += interval;
      accumulateTime -= interval;
      if(accumulateTime > 0) {
        var part3 = accumulateTime % 1000;
        var part2 = (Math.floor(accumulateTime / 1000)) % 60;
        var part1 = (Math.floor(accumulateTime / 60000)) % 60;
        if(part3 < 10) 
          part3 = "00" + part3;
        else if(part3 < 100) 
          part3 = "0" + part3;
        if(part2 < 10) part2 = "0" + part2;
        if(part1 < 10) part1 = "0" + part1;
        var timeString = part1 + ":" + part2 + ":" + part3;
        document.getElementById("counterButton").innerText  = timeString; 
      }
      else {
        clearInterval(gGameTimer);
        document.getElementById("counterButton").innerText  = "00:00:000"; 
        // fail message
        $('.failedScreen').show();
        setTimeout(function() { 
          $('.failedScreen').hide(); 
        }, 10000);
      }
    }
  }
}

/*
  function to stop game timer
*/
function stopGameTimer() {
  clearInterval(gGameTimer);
}

/*
  function to reset game timer
*/
function resetGameTimer() {
  stopGameTimer();
  document.getElementById("counterButton").innerText  = "00:00:000"; 
}


var missedCounter = 0;
/*
  function to set missed counter value
*/
function setMissedCounterValue(countUp, inc) {
  if(countUp == true)
    missedCounter += inc;
  else
    missedCounter -= inc;
  //document.getElementById("missedButton").innerText  = "Missed: " + missedCounter; 
  document.getElementById("missedButton").innerText  = "錯誤次數: " + missedCounter; 
  
  
}

/*
  function to reset missed counter value
*/
function resetMissedCounter() {
  missedCounter = 0
  document.getElementById("missedButton").innerText  = "Missed: " + missedCounter; 
}

