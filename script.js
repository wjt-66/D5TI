// MBTI类型对应的诗人描述
const poetDescriptions = {
    "ISTJ": {
        poet: "守墓人",
        description: " 你为人务实可靠，恪尽职守，如安德鲁一样，在无人问津的角落里默默践行着自己的责任。饱受白化病困扰的守墓人，始终被世人视作异类。比病魔更可怕的，是来自外界的流言与恶意，这让他习惯了独处。他躲进拉兹教会墓园，以铁铲为伴，与不会言语的死者朝夕相处。ISTJ最宝贵的品质就是坚持与可靠，而安德鲁将这一特质发挥到了极致——他掘行于幽暗的地下，只为给队友创造安全的环境，沉默寡言却值得托付。",
        imageUrl: "image/守墓人.jpeg"
    },
    "ISFJ": {
        poet: "医生",
        description: " 你仿佛是艾米丽的化身。温柔体贴、守护他人是你灵魂深处的本能。曾经那个因医疗事故而隐姓埋名的医者，艾米丽却始终保留着治愈者的本能。她早已厌倦了漂泊无依的生活，渴望一个能称之为家的地方。可每当队友受伤倒下，她总是第一个冲上前去，用手中的针筒抚平伤痛，用零帧起手的小药瓶手法回血。ISFJ是默默无闻的守护者，正如艾米丽——她从不奢求回报，只是习惯性地保护身边的每一个生命，用自己的温柔和细腻以及填补团队的安全空缺",
        imageUrl: "image/医.jpg"
    },
    "INFJ": {
        poet: "祭司",
        description: " 你的身上有祭司的影子。有着理想主义和道德感的你，深刻而内省，渴望指引迷途的灵魂走向光明，如同菲欧娜对未知领域的探求。作为克苏鲁神话中时空之主的忠实信徒，菲欧娜总是随身携带着那枚古怪的金属环，并坚信是神在指引她的方向。她能用手中的圣物撕裂空间，为同伴开辟不可思议的捷径。INFJ的直觉和洞察力让她看穿了表层的迷雾，她从不解释，只是默默用行动守护着她的信仰者，在绝境中为队伍构建救赎的通道。",
        imageUrl: "image/祭司.jpeg"
    },
    "INTJ": {
        poet: "囚徒",
        description: " “对面会是老师吗？” 逻辑缜密、远见卓识且执行力超群的你，像卢卡一样，有着清晰的计划和实现目标的决心与纯度，永远在探寻事物背后的终极原理。面对污蔑和牢狱之灾，天才发明家卢卡并未就此沉沦，而是将破碎的记忆化作动力。他是完美主义者，即使大脑受损，依然能凭借智慧在地下电路网络中编织出一张无形的战略网。为了完成那件伟大的发明，他愿意赌上一切。这种执着与牺牲精神，正是INTJ为了追求理想和构建宏大蓝图，而甘愿忍受孤独与误解的真实写照。",
        imageUrl: "image/囚徒.jpg"
    },
    "ISTP": {
        poet: "佣兵",
        description: " 你安静而务实，擅长用行动而非语言解决问题，像奈布一样在危机中展现出惊人的冷静与效率。这位来自廓尔喀的雇佣兵，在战场上习惯了与死神擦肩。他坚信人类生而平等，却也因此厌恶战争。他身经百战，身手矫健，能用钢铁护腕在监管者眼皮底下从容逃脱。ISTP是天生的行动派，他们不喜欢空谈，只相信实际的结果。而奈布正是如此——他话不多，但每一次出手都精准无比，能扛、能救、能跑，用最硬核的方式为队伍撑起一片天。",
        imageUrl: "image/佣兵.jpeg"
    },
    "ISFP": {
        poet: "调香师",
        description: " 你注重感官体验，对美有着独特的敏感度，像薇拉一样在香气四溢的世界里追寻着专属于自己的艺术境界。她凭借异于常人的敏锐嗅觉和对香味的执着，成为了首屈一指的调香师。她喜欢有品位的奢侈品，性格高傲、挑剔且优雅，无数富家子弟都拜倒在她的石榴裙下。ISFP是生活中的艺术家，而薇拉正是如此——她不在乎名利，只执着于那一缕忘忧之香的前中后调，将每一次回溯都变成令人屏息的视觉盛宴。在她看来，完美的香气就是最无可替代的艺术品。 ",
        imageUrl: "image/调香师.jpeg"
    },
    "INFP": {
        poet: "小女孩",
        description: " 小回忆是你性格的镜像。你内心柔软，怀揣着难以割舍的记忆，像她一样在支离破碎的过去中寻找着唯一的光亮。那个存在于记忆深处的“小女孩”，她记得伊甸园般的岛屿与缪斯女神的恩赐，也记得红色噩梦如何将一切美好吞噬殆尽。她并非以武力取胜，而是以“记忆同步”的方式融入队友，将自身的信念与勇气灌注给同伴。INFP天生追求理想与意义，在“回忆”身上，这份特质化作了一种纯粹而坚定的守护——她手持“回忆碎片”，以自己的方式推开恐惧，带着“怜悯”之心随时奔赴需要她的地方。她相信美好，愿意为了那一个微小的可能，再次踏上危险重重的航道。正如INFP永远在破碎的世界中执着地寻找着属于自己的诗意与意义，她用一腔热忱守护着记忆深处不愿舍弃的一切。",
        imageUrl: "image/小女孩.jpeg"
    },
    "INTP": {
        poet: "机械师",
        description: " 你是天生的天才少女。你对抽象概念和逻辑理论有着天生的好奇心，像特蕾西一样喜欢在安静的角落里拆解世界的运行规律。那个出身于钟表店的天才机械师，以超越年龄的冷静头脑构建着精密的机械生命。她拥有强大的逻辑分析能力，却不善与人交往，更信任手中冰冷的金属与精准的齿轮。作为INTP，她总是在不断地修补、升级，在机械的世界里追寻着完美的答案，用智慧和理论筑起抵御一切不确定性的堡垒。",
        imageUrl: "image/机械师.jpg"
    },
    "ESTP": {
        poet: "前锋",
        description: " “芜湖~~耶！” 你如威廉·艾利斯，是天生的行动派，充满能量，喜欢在风浪中搏击，勇于冲锋陷阵，拥有全庄园最快的大学生修速。ESTP注重结果、敢于冒险，而威廉正是这类人的典型代表——他从不畏惧正面对抗，总是抱着橄榄球直冲向监管者，用一次又一次的冲刺为队友争取宝贵的破译时间，浑身散发着旺盛的生命力。",
        imageUrl: "image/前锋.jpeg"
    },
    "ESFP": {
        poet: "杂技演员",
        description: " 你与麦麦头共享同一副性格骨架。你是人群中的焦点，充满了表演欲与感染力，像麦克一样用肢体语言向世界传递快乐。那个在旅行马戏团“喧嚣”里长大的金发男孩，拥有卷曲的金发和湛蓝的眼睛，人们永远不会从那眼神里看到一丝忧愁。他就是为舞台而生的王者，拥有化险为夷的弹射技巧，永远能在最危险的时刻反败为胜。ESFP是真正活在当下的表演者，而麦克正是如此——他把每一场追逐都当作一场盛大的杂技秀，用跳跃、翻滚和抛球去点燃观众的激情，在聚光灯下忘我地闪耀。",
        imageUrl: "image/杂技演员.jpeg"
    },
    "ENFP": {
        poet: "画家",
        description: " 你热情洋溢，对世界永远充满好奇，总是在追寻独特的灵感与激情。瓦尔登家的独子从小就对艺术有着浓厚的兴趣，并展现出极高的天赋。家人的宠溺与社会的赞誉造就了他古怪的性格——他的眼中只剩下艺术，自视甚高，甚至认为他人不配与自己谈论艺术。ENFP对自由和创造的渴望在他身上展露无遗：他并非为了奖金而来，唯一能打动他的只有灵感本身。他就像一座行走的艺术喷泉，不断喷薄着创意与色彩，将他眼中的美复刻在画板上。",
        imageUrl: "image/画家.jpg"
    },
    "ENTP": {
        poet: "勘探员",
        description: " “我生来称王，难驯如狼！”思维敏捷、喜欢挑战常规的你，像诺顿一样在冒险和交锋中寻找快感。这位从矿难中幸存的勘探员，在这场灾难中重塑了灵魂，变得阴沉而寡言，靠着那块神秘的陨石磁铁开启了全新的地下探索。他不再是那个只懂挥汗如雨的矿工，而是敢从磁铁两极中寻找博弈乐趣的精明赌徒。ENTP最擅长打破规则寻找捷径，而诺顿正是如此——他利用磁铁的吸引与排斥巧妙周旋，在博弈中抓住一切转机，视规则为可以弹射的跳板，只为在绝境中开辟属于自己的出路。",
        imageUrl: "image/勘探员.jpg"
    },
    "ESTJ": {
        poet: "空军",
        description: " 你就像玛尔塔。天生的实干家和组织者，行事果断，条理清晰，总能在危急时刻做出最务实的决策。从小擅长骑马射击的玛尔塔，凭借过硬的本领取得了上尉军衔。然而，一次引导失误导致了无法挽回的后果，这让她背负着沉重的阴影走进了庄园。但ESTJ的果敢与执行力早已刻入了她的骨子里——她从不犹豫，面对监管者时的信号枪永远是最快、最准的回应。即便内心伤痕累累，她依然保持着军人的雷厉风行，是战场上最可靠的定心石。",
        imageUrl: "image/空空.jpg"
    },
    "ESFJ": {
        poet: "拉拉队员",
        description: " 若要在庄园中寻一个与你最相似的人，那便是莉莉。你拥有天生的感染力与非凡的亲和力，如同阳光般温暖着身边的每一个人，像莉莉一样挥动着花球，为团队注入无穷的能量。出身运动世家的拉拉队员，用她的鼓舞、振奋与激励，点燃了整支队伍的士气。她从不吝啬自己的热情，用花球挥洒出无形的治愈之力，带动团队走出低迷。ENFJ是天生的领导者和鼓舞者，而莉莉正是这样的人——她关注身边每一个人的感受，渴望为团队带来正向的引领和改变，永远是全场最闪耀的能量核心。",
        imageUrl: "image/啦啦.jpg"
    },
    "ENFJ": {
        poet: "斗牛士",
        description: " “安~迪！干酒赛~干巴得——！”。ESFJ的社交能力与协作意识在你身上得到了淋漓尽致的展现。正如赫南多·罗梅罗那般，你深受传统与荣誉的熏陶，却也敢于将童年的恐惧磨砺为保护同伴的力量。你那张扬的“穆莱塔”不只是与危险共舞的武器，更是你为团队提供强力支援的证明。身为“ESFJ（执政官）”，你满怀热情地承担起守护他人的责任，用华丽的表演为集体赢来喝彩，是团队当之无愧的荣耀捍卫者。",
        imageUrl: "image/斗牛士.jpg"
    },
    "ENTJ": {
        poet: "骑士",
        description: " 你沉浸于预判与博弈，是天生的战略家和领导者，像理查德一样意志坚定且气场强大，在混乱中总能掌控全局，在楼梯上挥斥方遒。出身地下产业的斯特林家，理查德以爱为名，像手握棋子的君王般隐秘地操控着家族的命运。他沉浸在骑士的角色扮演中，戴上头盔后，便会短暂拥有骑士专属的战术预见和荣耀共鸣特质。ENTJ的果决、组织力和天生的支配欲，在理查德身上体现得淋漓尽致——他从不被动等待命运降临，而是主动出击，制定规则，将一切纳入掌控。",
        imageUrl: "image/骑士.jpeg"
    }
};

const data = {
    questions: [
        // 外向(E) vs 内向(I)维度 - 第五人格游戏场景
        { id: 1, dimension: "EI", text: "游戏胜利后，你更想？", scoreA: "E", scoreB: "I" },
        { id: 2, dimension: "EI", text: "参与游戏线下活动/漫展第五人格展区，你会？", scoreA: "E", scoreB: "I" },
        { id: 3, dimension: "EI", text: "看到第五人格职业赛事直播，你会？", scoreA: "E", scoreB: "I" },
        { id: 4, dimension: "EI", text: "排位遇到配合默契的路人队友，你会？", scoreA: "E", scoreB: "I" },
        { id: 5, dimension: "EI", text: "开了一把匹配，赛前你会发？", scoreA: "E", scoreB: "I" },

        // 实感(S) vs 直觉(N)维度 - 第五人格游戏场景
        { id: 6, dimension: "SN", text: "排位选角，你更看重？", scoreA: "S", scoreB: "N" },
        { id: 7, dimension: "SN", text: "溜鬼时，你更习惯？", scoreA: "S", scoreB: "N" },
        { id: 8, dimension: "SN", text: "学习新求生者玩法时，你更倾向？", scoreA: "S", scoreB: "N" },
        { id: 9, dimension: "SN", text: "挑选皮肤时，你更在意？", scoreA: "S", scoreB: "N" },
        { id: 10, dimension: "SN", text: "当你直播时被质疑“主播男的女的”时，你会回答？", scoreA: "S", scoreB: "N" },

        // 思考(T) vs 情感(F)维度 - 第五人格游戏场景
        { id: 11, dimension: "TF", text: "遇到“骰子队被封号”的讨论，你会？", scoreA: "T", scoreB: "F" },
        { id: 12, dimension: "TF", text: "选择是否卖队友保平争胜时，你会？", scoreA: "T", scoreB: "F" },
        { id: 13, dimension: "TF", text: "赛事里选手出现震慑、秒倒下饭操作，你会？", scoreA: "T", scoreB: "F" },
        { id: 14, dimension: "TF", text: "队友开局秒倒，你会？", scoreA: "T", scoreB: "F" },
        { id: 15, dimension: "TF", text: "当你被赛后时，你会回复？", scoreA: "T", scoreB: "F" },

        // 判断(J) vs 感知(P)维度 - 第五人格游戏场景
        { id: 16, dimension: "JP", text: "做推演任务、刷骰子，你会？", scoreA: "J", scoreB: "P" },
        { id: 17, dimension: "JP", text: "关注IVL赛事，你会？", scoreA: "J", scoreB: "P" },
        { id: 18, dimension: "JP", text: "皮肤收集，你会？", scoreA: "J", scoreB: "P" },
        { id: 19, dimension: "JP", text: "当你的主队正在小组赛挣扎时，你会？", scoreA: "J", scoreB: "P" },
        { id: 20, dimension: "JP", text: "排位遇到阴间阵容、队友小猪，你会？", scoreA: "J", scoreB: "P" }
    ]
};

let current = 0;
const count = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
const answers = {}; // 存储每道题的答案

// 获取题目选项的具体文本
function getOptionText(questionId, option) {
    const optionTexts = {
        1: { A: "和队友互相夸赞，分享胜利的喜悦", B: "自己回味对局，默默退出准备下一局" },
        2: { A: "主动和同好合影、交流角色、分享攻略", B: "独自逛展、打卡，安静体验活动内容" },
        3: { A: "发弹幕和其他观众讨论赛事战术、选手操作", B: "安静看直播，默默分析对局，不参与弹幕互动" },
        4: { A: "主动加好友，邀请后续一起排位", B: "觉得默契就好，不会主动添加好友" },
        5: { A: "小妹妹你挺牛逼克拉斯呀", B: "练" },
        6: { A: "版本答案、角色 T 度、修机溜鬼救援的实战能力", B: "冷门厨子手法信仰者" },
        7: { A: "利用熟悉的地形、固定板窗交互，稳扎稳打牵制", B: "发动小小|巧思，大胆预判，输了下一把" },
        8: { A: "先看技能说明、基础操作，一步步熟练", B: "直接进入自定义尝试，摸索独特的玩法思路" },
        9: { A: "皮肤有没有刀气优化、挂件特效是否显眼、实战会不会卡顿", B: "皮肤背后的庄园剧情、角色人设彩蛋、设计梗和联动故事" },
        10: { A: "呃，又被看穿了", B: "那就禁言喽" },
        11: { A: "一人犯错，全员受罚", B: "觉得玩家只是想刷骰子，理解但不支持" },
        12: { A: "从全局胜负出发，做出最有利的理性决策", B: "不要忘了我们之间的羁绊啊，宁愿冒险也不想抛弃同伴" },
        13: { A: "理性分析是失误还是战术问题，不情绪化吐槽", B: "宝子芝士失误了吧，理解赛场压力，不忍心骂" },
        14: { A: "“xx躲好别被发现”", B: "安慰队友没关系，主动去救援，不让队友自责" },
        15: { A: "老子才是老大", B: "对不起，我是一个无能的人" },
        16: { A: "制定每日计划，按目标完成，绝不拖沓", B: "想起来就做，佛系刷任务，随缘拿奖励" },
        17: { A: "提前存赛程、定闹钟，准点蹲直播不落下", B: "刷到就看，没看到就算了，不刻意追更" },
        18: { A: "列好必入清单，蹲返场、攒碎片，按计划拿下", B: "求送小女孩滚滚伙伴呀" },
        19: { A: "列出每一种情况，计算出线的条件", B: "关注比赛本身，主队能尽力发挥就行" },
        20: { A: "立刻启动备用方案，调整打法稳扎稳打", B: "临场摆烂整活，随便打打，享受随性游戏" }
    };
    return optionTexts[questionId] ? option + ". " + optionTexts[questionId][option] : option + " 同意";
}

function render() {
    const app = document.getElementById('app');

    // 显示欢迎页面
    if (current === 0) {
        app.innerHTML = `
            <div class="welcome-container">
                <h1>你的性格与第五人格中的哪位求生者相似？</h1>
                <p class="welcome-text">本测试包含20道题目，通过分析您的性格特质，为您匹配最相似的第五人格角色。</p>
                <p class="welcome-text">请根据您的真实情况选择最符合的选项。</p>
                <p class="welcome-text">注意：本测试纯属娱乐，如有质疑，以你为准。</p>
                <div class="start-btn" onclick="current = 1; render();">开始测试</div>
            </div>
        `;
        return;
    }

    // 显示结果页面
    if (current > data.questions.length) {
        const type = [
            count.E > count.I ? 'E' : 'I',
            count.S > count.N ? 'S' : 'N',
            count.T > count.F ? 'T' : 'F',
            count.J > count.P ? 'J' : 'P'
        ].join('');

        const poetInfo = poetDescriptions[type] || { poet: "未知角色", description: "你的性格特质独特，难以用单一角色概括。" };

        app.innerHTML = `
            <div class="result-container">
                <h2>你的MBTI类型：${type}</h2>
                <div class="poet-match">
                    <h3>与你最相似的第五人格角色：${poetInfo.poet}</h3>
                    <img src="${poetInfo.imageUrl}" alt="${poetInfo.poet}" class="poet-image">
                    <p class="poet-description">${poetInfo.description}</p>
                </div>
                <div class="restart-btn" onclick="location.reload()">重新测试</div>
            </div>
        `;
        return;
    }

    // 显示题目页面
    const q = data.questions[current - 1];
    const isFirstQuestion = current === 1;
    const isLastQuestion = current === data.questions.length;

    let navigationButtons = '';

    if (isFirstQuestion) {
        navigationButtons = `
            <div class="nav-buttons">
                <div class="nav-btn next-btn" onclick="nextQuestion()">下一题</div>
            </div>
        `;
    } else if (isLastQuestion) {
        navigationButtons = `
            <div class="nav-buttons">
                <div class="nav-btn prev-btn" onclick="prevQuestion()">上一题</div>
                <div class="nav-btn submit-btn" onclick="submitTest()">提交</div>
            </div>
        `;
    } else {
        navigationButtons = `
            <div class="nav-buttons">
                <div class="nav-btn prev-btn" onclick="prevQuestion()">上一题</div>
                <div class="nav-btn next-btn" onclick="nextQuestion()">下一题</div>
            </div>
        `;
    }

    app.innerHTML = `
        <div class="question-container">
            <div class="progress">${current}/20</div>
            <div class="question">${q.text}</div>
            <div class="options">
                <div class="option ${answers[current] === 'A' ? 'selected' : ''}" onclick="selectOption('A')">${getOptionText(q.id, 'A')}</div>
                <div class="option ${answers[current] === 'B' ? 'selected' : ''}" onclick="selectOption('B')">${getOptionText(q.id, 'B')}</div>
            </div>
            ${navigationButtons}
        </div>
    `;
}

function selectOption(ans) {
    answers[current] = ans;
    const q = data.questions[current - 1];
    count[ans === 'A' ? q.scoreA : q.scoreB]++;
    render();
}

function nextQuestion() {
    // 检查当前题目是否已回答
    if (!answers[current]) {
        showAlert("请先选择答案再继续");
        return;
    }

    if (current < data.questions.length) {
        current++;
        render();
    }
}

function prevQuestion() {
    if (current > 1) {
        current--;
        render();
    }
}

function submitTest() {
    // 检查最后一题是否已回答
    if (!answers[current]) {
        showAlert("请先选择答案再提交");
        return;
    }

    // 检查是否所有题目都已回答
    const unansweredQuestions = [];
    for (let i = 1; i <= data.questions.length; i++) {
        if (!answers[i]) {
            unansweredQuestions.push(i);
        }
    }

    if (unansweredQuestions.length > 0) {
        showAlert(`还有 ${unansweredQuestions.length} 道题目未回答：第 ${unansweredQuestions.join(', ')} 题`);
        return;
    }

    current = data.questions.length + 1;
    render();
}

function showAlert(message) {
    // 创建提示框
    const alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.innerHTML = `
        <div class="alert-content">
            <div class="alert-icon">⚠️</div>
            <div class="alert-message">${message}</div>
            <div class="alert-close" onclick="this.parentElement.parentElement.remove()">×</div>
        </div>
    `;

    // 添加到页面
    document.body.appendChild(alertBox);

    // 3秒后自动消失
    setTimeout(() => {
        if (alertBox.parentElement) {
            alertBox.remove();
        }
    }, 3000);
}

// 初始化渲染
render();