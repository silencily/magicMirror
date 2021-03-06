Page({

  /**
   * 页面的初始数据
   */
  data: {
    targets: [
      { name: '唐僧', desc: '俗家姓陈，乳名江流，法名 玄奘，唐朝第一高僧，所以被人们称为唐僧。西行取经时，唐朝太宗皇帝李世民赐法名三藏。唐僧十八岁出家皈依佛门，经常青灯夜读，对佛家经典研修不断，而且悟性极高，二十来岁便名冠中国佛教，倍受唐朝太宗皇帝厚爱。后来被如来佛祖暗中选中去西天取经，并赐宝物三件，即袈裟、九环锡杖、金箍咒。唐僧身材高大，举止文雅、性情和善，佛经造诣极高。他西行取经遇到九九八十一难，始终痴心不改，在孙悟空、猪八戒、沙和尚的辅佐下，历尽千辛万苦，终于从西天雷音寺取回三十五部真经，为弘扬佛家教化做出了巨大贡献，至今被人们津津乐道，不忘他的历史功绩。' },
      { name: '孙悟空', desc: '法号行者，是唐僧的大徒弟，会七十二变、腾云驾雾。一双火眼金睛，能看穿妖魔鬼怪伪装的伎俩；一个筋斗能翻十万八千里；使用的兵器如意金箍棒，能大能小，随心变化，小到绣花针，大到顶天立地。他占花果山为王，自称齐天大圣，搅乱王母娘娘的蟠桃胜会，偷吃太上老君的长生不老金丹，打败天宫十万天兵天将，又自不量力地与如来佛祖斗法，被压在五行山下五百多年。后来经观世音菩萨点化，保护唐僧西天取经，三打白骨精，收服红孩儿，熄灭火焰山，一路上降魔斗妖，历经九九八十一难，取回真经终成正果。他嫉恶如仇，不怕困难，坚韧不拔，英勇无畏，取经后被封为斗战胜佛。' },
      { name: '猪八戒', desc: '法号悟能，是唐僧的二徒弟，原来是玉皇大帝的天蓬元帅，因调戏嫦娥被逐出天界，到人间投胎，却又错投猪胎，嘴脸与猪相似。他会变身术，能腾云驾雾，使用的兵器是九齿钉钯。唐僧西去取经路过云栈洞，猪八戒被孙悟空收服，八戒从此成为孙悟空的好帮手，一同保护唐僧西天取经。八戒性格温和，憨厚单纯，力气大，但又好吃懒做，爱占小便宜，贪图女色，经常被妖怪的美色所迷，难分敌我。他对师兄的话言听计从，对师父忠心耿耿，为唐僧西天取经立下汗马功劳，是个被人们喜爱同情的喜剧人物。' },
      { name: '沙和尚', desc: '法名悟净，原是天宫玉帝的卷帘大将，因触犯天条，被贬出天界，在人间流沙河兴风作浪。他使用的兵器是一柄月牙铲，武艺高强，不畏强敌。经南海观世音菩萨点化，拜唐僧为师，与孙悟空、猪八戒一起保护唐僧西天取经。他身上有两件宝，一件是菩萨葫芦，一件是九个骷髅组成的项圈。后来，他用九个骷髅作为九宫，把菩萨葫芦安放在其中，成为法船，稳似轻舟，顺利地帮助师徒四人渡河西去。沙和尚保护唐僧西天取经路上，任劳任怨，忠心不二，取经后被封为金身罗汉。' },
      { name: '白龙马', desc: '小白龙原来是西海龙王敖闰殿下的三太子。龙王三太子纵火烧了殿上玉帝赐的明珠，触犯天条，犯下死罪，幸亏大慈大悲的南海观世音菩萨出面，才幸免于难，被贬到蛇盘山等待唐僧西天取经。无奈他不识唐僧和悟空，误食唐僧坐骑白马，后来被观世音菩萨点化，锯角退鳞，变化成白龙马，皈依佛门，取经路上供唐僧坐骑，任劳任怨，历尽艰辛，终于修成正果，取经归来，被如来佛祖升为八部天龙。' },
      { name: '观世音菩萨', desc: '相貌端庄慈祥，经常手持净瓶杨柳，具有起死回生的神奇法力，也是如来佛祖得意的徒弟之一。他大慈大悲，普救人间灾难。在人们遇到灾难时，只要念其名号，他就可以听见世上苦难的声音，所以称观世音。唐僧师徒西天取经路上，孙悟空毁伤镇元大仙的人参果树无法医活，只好请观世音菩萨帮忙。只见观音菩左手持净瓶，右手持杨柳枝，稍蘸甘露，就使人参果树死而回生。他在唐僧取经路，帮助孙悟空收服红孩儿、天蓬元帅、西海龙王三太子等等，才使唐僧师徒到西天取得真经。' },
      { name: '菩提祖师', desc: '住在灵山方寸山斜月三星洞，是传授美猴王孙悟空武艺的师傅，对三教九流，长生之术，七十二变、腾云驾雾等样样精通。美猴王刚投到菩提祖师门下，祖师见他天性聪悟，给他取名悟空。随后教给孙悟空长生的法术，又教了七十二般变化的本领，再传授给十万八千里的筋斗云。十年功夫的悉心教授，使美猴王从顽劣的凡骨俗胎成为得道的神猴，身上八万四千根毫毛，根根能随心变化，为悟空闹天宫、保唐僧奠定了深厚的武功基础。' },
      { name: '玉皇大帝', desc: '也叫玉皇大天尊玄穹高上皇，简称玉皇大帝或玉帝，自幼修行，经历了三千多年才成金仙，又经过一千五百五十五劫，每劫为十二万九千六百年，才享受到无极大道，成为掌管天、地、人三界的最高主宰，也被佛教、道教尊为最崇高的神。玉帝住在金阙云宫灵霄宝殿，由三十三座天宫、七十二重宝殿组成，手下十代冥王管人间生死；四海龙王管天气变化；九曜星、五方将、二十八宿、四大天王等等神勇盖地；太白金星、二郎真君、五方五老各路神仙，个个法力无边；而且有西天如来佛祖暗中保护。玉帝大慈大悲，也是普救众生的大救星。' },
      { name: '王母娘娘', desc: '住在瑶池，所以又叫瑶池娘娘。她在瑶池中开蟠桃胜会，宴请各路神仙，不料被齐天大圣孙悟空搅乱了蟠桃胜会。她种的蟠桃最为神奇，小桃树三千年一熟，人吃了体健身轻，成仙得道；一般的桃树六千年一熟，人吃了白日飞升，长生不老；最好的九千年一熟，人吃了与天地同寿，与日月同寿。她是天宫最受尊奉的女神仙，在天上掌管宴请各路神仙之职，在人间管婚姻和生儿育女之事。' },
      { name: '太上老君', desc: '姓李名耳，道教创始人，因而称为太上老君。他住在兜率宫练金丹，常骑青牛。他有个法宝叫金钢琢，非常厉害，在捉拿大闹天宫的孙悟空时立下功劳，却又被他的青牛偷去，在金洞多次斗败孙悟空、托塔天王、十八罗汉等神仙，最后老君宝扇一扇，收走了金钢琢，降服了青牛精。他是一个息事宁人，轻易不与人争斗的老好人。' },
      { name: '灵吉菩萨', desc: '住在小须弥山，法力广大，手使飞龙宝杖，并有如来赐给的定风珠等宝贝。唐僧取经在黄风岭被黄毛貂鼠精捉住，孙悟空多次难胜鼠精，经太白金星点化，孙悟空驾筋斗云请来灵吉菩萨。灵吉将飞龙宝杖抛起，变成八爪金龙，张开双爪，捉住妖精，使妖精现出了黄毛貂鼠的本相。后来，唐僧被阻挡在八百里火焰山，铁扇公主用芭蕉神扇把孙悟空扇得如败叶残花，又是灵吉菩萨把定风珠借给悟空，才抵抗了罗刹女的芭蕉扇。' },
      { name: '南极寿星', desc: '是个令人喜爱的老神仙，头上有个大肉包，手拄蟠龙拐杖，白鹿紧随身后，供他骑乘。不料这白鹿凡心不灭，趁南极寿星与东华帝君下棋的机会，借着数千年修炼的道行，下到凡间的比丘国，与狐狸精狼狈为奸，将狐狸精变成如花似玉的美女，进献给国王，自己以国丈自居，专用小孩心肝作长寿药引，祸害百姓，结果遇到火眼金睛的孙悟空，难逃劫难，被悟空降服。悟空正要打杀白鹿精时，南极仙翁赶到，命令妖怪现出原形，驼南极寿星回归仙山。' },
      { name: '太白金星', desc: '是天界一位颇有名气的星宿，法力广大，又比较和善。孙悟空闯地府、闹龙宫，玉皇大帝正要发兵征讨，太白金星替悟空说情，建议封悟空为管理御马的弼马温。孙悟空二反天宫时，又是金星出面为招安使，封悟空为齐天大圣，管理蟠桃园。后来，在唐僧师徒西天取经的路上，长庚星多次暗中帮助师徒四人战胜黄风怪，扫荡狮驼洞，是个和善的好老头。' },
      { name: '镇元大仙', desc: '是地仙之祖，道号镇元子，住在西牛贺洲的五庄观上，道术深厚精深，连观世音菩萨也让他三分。他种的人参果，九千年成熟一次，闻一闻神奇的人参果，就能活三百六十岁；吃一颗，就能活四万七千年。镇元大仙三绺美髯，貌似童颜，手无兵器，只有一只玉尘麈。在与孙悟空打斗中，一只玉麈抵得住千钧之力的金箍棒，只两三个回合，他施展袖里乾坤的法术，把唐僧师徒连人带马装进袖子里，本领着实厉害。但大仙心胸开阔，气度不凡，当孙悟空请来菩萨救活人参果树后，他不记前嫌，与孙悟空结拜为兄弟，并且慷慨举办人参果会，用珍贵的人参果宴众仙和唐僧师徒，颇有大仙气度。' },
      { name: '东来佛祖', desc: '又称作弥勒佛，大耳方面，腹满体胖，笑容常在，又被人们俗称笑和尚。佛曾预言，弥勒菩萨经历五十六亿七千万年出生于第十道灭劫，继承释迦牟尼佛的佛位，在华林园龙华树下成佛，所以又称未来佛。他殿下敲磬的黄眉童儿，偷走了后天袋子，把孙悟空等神仙斗得没有办法。最后多亏东来佛祖相助，帮孙悟空降服黄眉童儿。' },
      { name: '二郎真君', desc: '姓杨名戬，是玉皇大帝的外甥，常住灌江口，使用的兵器是三尖两刃枪，具有七十三般变化，善于腾云驾雾，还有一只神勇的哮天犬，手下的梅山六兄弟也非常了得。在与大闹天宫的孙悟空大战中，他武打文斗，终于把武艺非凡的孙悟空捉住。他在天宫中武艺超群，因此十分显赫的地位。唐僧西天取经路上，二郎神又帮助孙悟空打败了九头怪，消除了唐僧一难。' },
      { name: '托塔天王', desc: '姓李名靖，是天宫中的卫戍司令。所生三子，长子金吒侍奉如来佛祖，二子木吒是南海观世音菩萨的大徒弟，三子哪吒在自己的帐下效力。早年因与三子哪吒反目，如来佛祖赐他一座舍利子如意黄金宝塔，化解了父子前仇，所以称为托塔李天王。李家父子武艺超群，法力深厚，又对玉帝忠心耿耿，在天界享有崇高而又重要的地位。每逢大事，玉帝必先钦点李天王挂帅。两次平息孙猴子造反，都是任命他为降魔大元帅，手下的巨灵神、鱼肚将、哪吒三太子等十万神将天兵，均是天王所统率的精兵良将，在取经途中帮了唐僧四人度过不少劫难。' },
      { name: '如来佛祖', desc: '法力无边，手下的八大金刚、十八罗汉、各路菩萨，个个都有千般变化。英勇无比的孙悟空，一个筋斗云十万八千里，但却翻不出如来佛的手掌心。如来的本意是乘真如来之道而来，也就是说如实而来，是佛教的祖师。他的种族名释迦，牟尼是圣人的意思，合起来叫释迦圣人，他原是古印度北部一个王子，因为对当时的婆罗门教不满，出家修行，创立佛教。' },
      { name: '文殊菩萨', desc: '住在五台山，在佛界名气很大，他骑著一头青毛狮子。不料这青狮趁狮奴打盹儿时，下凡到人间，在狮驼岭兴妖作怪，擒住唐僧，也想吃圣僧以求长生不老，连悟空也难以战胜。后来，如来佛祖命令文殊菩萨收取狮怪。当孙悟空引诱狮怪出洞大战时，文殊菩萨抛起莲花台，正好落在妖怪的脊背上，降服了青毛狮子怪。' },
      { name: '普贤菩萨', desc: '住在峨眉山，在佛界享有很高的地位，坐骑是一头白象。这白象不安于天界寂寞，趁象奴疏忽之机，思凡下界，在狮驼岭一带与青毛狮子怪、万里鹏怪一起兴风作浪，想吃唐僧肉求得长生不老。无奈天网恢恢，疏而不漏，如来佛祖命令普贤菩萨下界收妖。等孙悟空诱使黄牙象怪出了山洞，普贤菩萨把莲花台丢在象怪背上，使其现出原形，随菩萨回山。' },
      { name: '阴曹阎王', desc: '是阴间天子十殿冥王之一，手下有五官，鲜官禁杀，水官禁盗，铁官禁淫，土官禁两舌，天官禁酒。他在天界掌管人间生老病死，手下的黑无常、白无常、催命判官，全做的是勾命的事情。遇到蛮横的孙悟空举起如意金箍棒，阎罗天子也连连讨饶，在生死簿上消去了悟空的姓名。碰到人间的唐朝皇帝李世民，又索要银两礼品，得到满足后就给延寿二十年。看来，这个阎罗天子也是个欺软怕硬、贪财好物的角色。' },
      { name: '昴日星官', desc: '是天界光明宫的神仙，专职司晨的大公鸡，其母是大慈大悲的毗蓝婆菩萨。唐僧师徒西天取经，途中在毒敌山琵琶洞被蝎子精困住，那妖怪异想天开，想与唐僧结为夫妻，好取圣僧的真阳之气。孙悟空、猪八戒久战难以取胜，多亏观音菩萨指点，昴日星官慷慨答应下界捉妖。等到孙悟空引诱蝎子精出洞来战，星官现出本相，变成六七尺高的大公鸡，长叫一声，妖怪现出原形，再叫一声，蝎子精浑身酥软，死于面前。' },
      { name: '哪吒三太子', desc: '是托塔李天王的第三个儿子，也是如来佛祖的弟子之一，在天宫任三坛海会大神。哪吒出生时，左手掌有个“哪”字，右手掌有个“吒”字，所以起名哪吒。他三岁就下海，闯下大祸，踏倒水晶宫，捉住蛟龙抽筋刮鳞。托塔天王怕他长大再惹大祸，想杀哪吒以绝后患，谁知哪吒奋怒，拿刀在手，割肉还母，剔骨还父，一缕灵魂到西天告佛，如来取荷藕做他的骨骼，荷叶做他的肌肉，使哪吒起死回生。后来哪吒要杀天王，报那剔骨之仇，多亏如来从中说和，赐给天王宝塔一座，让哪吒以佛为父，才消释了父子冤仇。哪吒年少但法力广大，可以变化为三头六臂，足蹬风火轮，手使一柄金枪，项戴乾坤圈，又有斩妖剑、砍妖刀、缚妖索、降妖杵、绣球儿等六件法宝，变化多端。每逢托塔天王挂帅出征，哪吒必然前往，有时当先锋，有时为大将，先后降服九十六个妖魔，是天上人间公认的少年小英雄。' },
      { name: '摩昂太子', desc: '是西海龙王敖闰的太子，为人忠勇，不徇私情，手执一柄三棱锏，武艺十分了得。敖摩昂的姑表弟小鼍龙，在黑水河捉住唐僧，邀请舅舅西海龙王来吃唐僧肉，西海龙王得知后，立即派摩昂率兵捉拿鼍龙，表兄弟在黑水河混战一场，小鼍龙怎敌得住表兄摩昂的高超武艺。三五个回合摩昂就将鼍龙擒住归案，解救唐僧和八戒。后来，在孙悟空与四禽木星追赶玄英洞三个妖魔时，摩昂太子又率兵助阵，帮助悟空捉住三个犀牛精，又立了一大功。' },
      { name: '嫦娥', desc: '原是天神后羿的妻子。天神后羿射落九个太阳，得罪天帝被贬下凡。夫妻二人不能回到天上，后羿便去求取长生不老药。西王母赐后羿灵药，此药两人分吃可以长生不死，一人独吃可以升天成仙。嫦娥偷食灵药升到天上，又怕别人耻笑，就飞到冷清无人的月宫，只有一只玉兔、一个蟾蜍和一棵桂树陪伴她。天河里的天蓬元帅由于酒醉调戏嫦娥，被贬下界错投猪胎成为后来的猪八戒。嫦娥的玉兔因报私仇下凡成妖作怪，后被太阴星君降伏收回月宫，除去唐僧师徒西天取经路上一难。' },
      { name: '毗蓝婆菩萨', desc: '住在紫云山千花洞，是昴日星官的母亲，法力无边，大慈大悲。唐僧被百眼魔君捉住，十分危险，悟空又难以战胜妖精，幸亏黎山老母指点，悟空请求毗蓝婆菩萨帮助。毗蓝婆菩萨用儿子昴日星官炼成的宝贝，抛向天空，就破了百眼妖魔的妖术。毗蓝用手一指，妖魔现出原身，悟空一把火把妖精住的黄花观烧了个精光。-' },
      { name: '巨灵神', desc: '是托塔天王帐下的一员战将，使用的兵器是件宣花板斧，舞动起沉重的宣花板斧，就象凤凰穿花，灵巧无比。在托塔天王率十万天兵天将征讨造反的孙猴子时，巨灵神为先锋大将，可见其武艺与法力不同一般。' },
      { name: '木叉', desc: '又叫木吒，是托塔天王的二儿子，哪吒的二兄长，法名惠岸，是南海观世音菩萨的护教大徒弟。木叉使用的兵器是一柄浑铁棍，神勇非凡，而且会多端变化。他常随观音菩萨出游，又暗中帮助唐僧师徒战胜妖魔，为唐僧西行取经立下功劳。' },
      { name: '黑风山熊罴怪', desc: '原是一头黑熊，住在黑风山里的黑风洞，修行多年成为精怪，使一柄黑缨长枪，善于变化，手段也很厉害。唐僧取经路上，这个黑熊精偷走如来佛祖赐给唐僧的宝贝袈裟。孙悟空与他争斗多次，也未讨回师傅的袈裟，只好求救于南海观音菩萨。观音假装送给熊精一粒仙丹，使黑熊精现出原形，为唐僧讨回袈裟。后来，黑熊怪皈依佛门，摩顶受戒，在菩萨的落伽山后当了守山大神。' },
      { name: '黄风大圣', desc: '又叫黄风怪，原是灵山脚下得道的老鼠，因为偷吃琉璃盏内的清油，怕金刚捉拿问罪，跑到黄风岭兴妖作怪。他用金蝉脱壳之计骗了悟空和八戒，捉住唐僧想吃圣僧肉，求得长生不老。黄风怪使用一杆三股钢叉，十分骁勇，与孙悟空在黄风岭上打斗三十多个回合，未见胜负。黄风怪吹起狂风，刮得悟空象纺车一样在空中乱转，火眼金睛酸痛。无奈之际，悟空从小须弥上搬来了灵吉菩萨，用定风珠和飞龙才降服黄风怪，使之现出黄毛貂鼠的本相，救出了唐僧。' },
      { name: '南山大王', desc: '本是只艾叶花皮豹子精，修行数百年成妖，在隐雾山折岳连环洞作怪，使一根铁杵，勇猛异常。他使用分瓣梅花计，捉住唐僧。孙悟空救师心切，一会儿变成水老鼠，一会儿变成会飞的蚂蚁，用瞌睡虫放倒看守唐僧的小妖怪，和八戒打入妖精洞府，打死妖精，救出师父。' },
      { name: '黑水河鼍怪', desc: '原来是西海龙王敖闰的外甥鼍龙，手使一根竹节钢鞭，抢占了卫阳峪黑水河神的府第，又用计擒住唐僧和八戒，也想吃唐僧肉长生不老。孙悟空知道他的出身后，闯进西海龙宫，连唬带吓，逼迫西海龙王派太子敖摩昂率兵征讨收服鼍龙，解救了唐僧一难。' },
      { name: '黄眉大王', desc: '原本是东来佛祖笑和尚敲磬的童子，手使一根由敲磬槌变成短软狼牙棒。他趁佛祖不在家时，偷了金钹、人种袋几件宝贝，下界成精。此怪胆大妄为，假设雷音寺诱使唐僧师徒上当，并把悟空扣在金钹里。又施展人种袋，数次把孙悟空和天兵天将收入袋子。紧急关头，东来佛祖笑呵呵踏云而来，教悟空诱使妖怪出洞，弥勒佛变成种瓜叟，让妖魔把悟空变成的西瓜吃进肚子，治服了黄眉大王，弥勒佛也趁机收回了人种袋子等宝物。' },
      { name: '六耳猕猴', desc: '神通广大，多端变化，腾云驾雾，样样精通，非常了得。这个妖精趁唐僧赶走孙悟空的机会，变成孙悟空，差点打死唐僧，抢去唐僧的衣钵，又嫁祸给孙悟空，霸占了花果山。悟空与他交战，难以取胜，打到天宫，众神仙难辨真假。真假悟空打到西天雷音寺之后，如来佛祖慧眼一睁，六耳猕猴恐难逃法网，急忙变成小蜜蜂慌张逃走，如来抛起金钵盂，扣住蜜蜂，现出六耳猕猴的原形，被悟空一棒打死。' },
      { name: '通天河鱼怪', desc: '原来是普陀山莲池中的一尾金鱼，每日浮头听菩萨讲经，炼成一身的本事，偷偷离开菩萨下凡，在通天河两岸专吃童男童女。鱼怪使用的兵器是一柄九瓣铜锤。他使用降雪的法术，冻住通天河，当唐僧走到河中央，鱼怪打开冰冻，捉住唐僧。危难之际，观音菩萨下山，收服鱼怪，救出唐僧。' },
      { name: '红孩儿', desc: '号圣婴大王，住在号山枯松涧火云洞。红孩儿是他的乳名，是牛魔王的儿子，铁扇公主养的小妖怪，使用一杆八丈火尖枪，武功非凡，又在火焰山修练三百年，练成三昧真火，口里吐火，鼻子喷烟，十分了得，经常与人赤脚打斗。红孩儿听说吃唐僧肉可以长生不老，用狂风卷走唐僧，用计骗擒八戒。孙悟空战之不胜，去落伽山请来观音菩萨，又让护法惠岸木叉借来李天王的天罡刀，收服了红孩儿，让他做了观音菩萨的善财童子，最终成了正果。' },
      { name: '独角兕大王', desc: '本是太上老君坐骑青牛，趁着牛童儿瞌睡之际，偷走老君的宝贝金钢琢，下界到金山金洞。独角兕大王使用一根丈二长的钢枪，又仗着太上老君的宝物金钢琢，用计捉住唐僧、八戒和沙僧，套住悟空的金箍棒，将他打败。悟空只好到天宫搬来了托塔天王父子，独角兕大王着实厉害，把哪吒的六件兵器统统套住收走，又打败前来助阵的火德星君率领的众火神，天兵天将和如来的十八罗汉都战胜不了。多亏如来佛祖暗示孙悟空，请来了太上老君，使妖怪现出青牛本相，老君跨上牛背，悟空等率众打入洞中，杀死小妖。' },
      { name: '百眼魔君', desc: '又叫作多眼怪，住在黄花观，祸害百姓。多目怪长了一千只眼睛，只只眼睛金光四射，使人向前不能靠近，往后不得后退，就象罩在无形的光网之中。整得神通广大的孙悟空也是没有办法。幸亏骊山老母指点，孙悟空驾云到紫云山千花洞，请来了毗蓝婆菩萨，破了多目怪的金光罩，救出了唐僧、八戒和沙僧。经毗蓝婆菩萨施展法术，多目怪现出原形，原来是条七尺长的蜈蚣精。' },
      { name: '白骨精', desc: '又叫白骨夫人，是唐僧西天取经途中遇见的少有的女妖精，使用双剑，武艺出色，想吃唐僧肉，先变成十六七岁的漂亮少女，再变成一个八十岁的老婆婆，后变成年迈力衰的老翁，使出离间计，使唐僧逼走孙悟空，把唐僧捉住。在唐僧险遭杀身之祸时，神通广大的孙悟空多番变化，几经争斗，终于打得白骨精露出原形，救出了唐僧。' },
      { name: '狮魔王', desc: '原来是文殊菩萨座下的青毛狮子，善于变化，武器是一把宝刀。经如来佛祖同意，派青毛狮子下凡，把以前捆绑过文殊菩萨的乌鸡国王推入八角琉璃井后，变化成国王模样取而代之，当了三年国王。唐僧师徒西行到乌鸡国，夜晚遇到乌鸡国国王灵魂诉说冤屈，孙悟空奉唐僧之命，上天向太上老君借来九转还魂丹，救活国王，在文殊菩萨的帮助下，用莲花罩住狮魔，迫使狮魔现出原形，终于收服。' }
    ],
    target: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tarCount = this.data.targets.length;
    var idx = Math.floor(Math.random() * tarCount);
    var path = '/images/target/' + this.data.targets[idx].name + '.jpg';
    var target = { name: this.data.targets[idx].name, desc: this.data.targets[idx].desc, path: path }
    this.setData({ target: target });
  }

})