
  var questionNumber = 0;//题目数量计数器
  var table = ``;//输出表格内容
  var lastRightOption=[];//选项随机后的正确答案
  var questionNum = 0;
  var radioBank = "1,（  ）按用途分为客车、货车及特种用途车（如试验车、发电车、轨道检查车、检衡车、除雪车等）,B,列车,车辆,机车,动车\
\n2,（  ）包括实验车、发电车、轨道检查车、检衡车、除雪车等。,C,客车,货车,特种用途车,小运转列车\
\n3,（  ）不属于旅客运输计划。,C,日常计划,长远计划,节假日计划,年度计划\
\n4,（  ）人以上乘车日期、车次、到站、座别相同的旅客可作为团体旅客，承运人应优先安排；如填 发代用票时除代用票持票本人外，每人另发一张团体旅客证。,C,10,15,20,25\
\n5,（  ）是铁路旅客运输日常工作的组织者和指挥者。,B,车站调度,客运调度,局总调度,行车调度\
\n6,（  ）是指编成的车列并挂有机车及规定的列车标志。,C,客车,货车,列车,特种用途车\
\n7,（  ）是指到发线、调车线、牵出线、货物线及站内指定用途的其他线路。,B,正线,站线,岔线,特别用途线\
\n8,（  ）是指机务、车辆、工务、电务、供电等段专用并由其管理的线路。,C,岔线,特别用途线,段管线,站线\
\n9,（  ）是指示列车运行及调车作业的命令，有关行车人员必须严格执行。,D,客调命令,行车命令,调度命令,信号\
\n10,（  ）售出不退。,C,客票,附加票,站台票,卧铺票\
\n11,（  ）一般分为信号机和信号表示器两类。,A,信号装置,信号设备,高柱信号机,色灯信号机\
\n12,（  ）由铁路运输企业处理，并报铁道部收入管理部门备案。,B,一般事故,重大、大事故,现金事故,票据事故\
\n13,（  ）准乘各种旅客列车（国际、旅游列车除外），但不能乘坐软席和免费使用卧铺。,B,就医乘车证,探亲乘车证,通勤乘车证,调度命令\
\n14,“三知”的内容是（  ）。,B,知座席、知发站、知到站,知座席、知到站、知困难,知发站、知位置、知到站,知发站、知位置、知困难 \
\n15,“退行信号”的机车鸣示方式是（  ）。,A,二长声,三长声,一长一短声,一长声\
\n16,《铁路旅客运输管理规则》规定，对在不准吸烟处所吸烟的旅客，客运人员应（  ）。,C,严禁乘车,驱出候车室,进行劝阻,给予处罚\
\n17,《铁路旅客运输管理规则》规定，候车室的使用面积，除有特殊要求外，一般应根据一日同一时间在站旅客最高集结量，按每一旅客占地（  ）计算。,B,1.0～1.1平方米,1.1～1.2平方米,1.2～1.3平方米,1.3～1.4平方米\
\n18,《铁路旅客运输管理规则》规定，旅客列车运行图上所使用的起止时间规定为（  ）。,C,18：00～18：00,0：00～18：00,0：00～24：00,6：00～6：00\
\n19,《铁路旅客运输管理规则》规定，始发站在列车开车前（  ）开始检票（特殊情况可提前）。,C,20min,30min,40min,50min\
\n20,《铁路旅客运输管理规则》规定，站、车客流信息表报的正确率应达（  ）以上。,B,90%,95%,99%,80%\
\n21,《铁路旅客运输管理规则》规定，站台服务人员组织旅客乘降时，应在（  ），组织站台上的人退到安全线内，确保人身安全。,C,列车进站时,列车停车后,列车进站前和开车铃响后,列车开车时\
\n22,《铁路运输收入管理规程》规定，铁路客货运输票据是国家批准的专业发票，（  ）。,A,属有价证券,不属有价证券,属证券,属证明\
\n23,《铁路运输收入管理规程》中规定，到付：批准按到付办理的货物运杂费、中途站和到站发生的 杂费，由（  ）负责计费收款，到达运输企业审核列账。,A,到站,中途站,发站,二等站\
\n24,《铁路运输收入管理规程》中规定，后付：符合后付范围的军事运输发生的票款、运费、押运人 乘车费，以及铁道部批准的按后付办理的货物运输费用，由（  ）负责制票，发送运输企业集中审核、列账， 并按铁道部制定的结算办法向指定单位进行结算。,B,中转站,发站,到站,中途站\
\n25,《铁路运输收入管理规程》中规定，现付：旅客票价，行李、包裹、货物运费以及发站发生的杂费实行发送核算制，由（  ）负责计费收款，发送运输企业审核列账。 ,C,到站,中转站,发站,中途站\
\n26,20人以上乘车日期、（  ）、座别相同的旅客可作为团体旅客，承运人应优先安排；如填发代用票时除代用票持票本人外，每人另发一张团体旅客证。 ,B,径路,车次、到站、,票价,发站、到站\
\n27,办理（  ）的车站应设旅客站台，并应有照明、广播设备，有条件的车站应设围墙栅栏。,D,行李业务,包裹业务,运输业务,客运业务\
\n28,办理客运的车站主要设施应包括（  ）三部分。,B,站房、站台、站前广场,站房、站场和站前广场,站房、站台、雨棚,站房、天桥、地道\
\n29,包房式硬卧票价分别按硬卧中、下铺另加（  ）计算。,C,50%,40%,30%,20%\
\n30,包裹运价率是以（  ）包裹运价率为基数。,C,一类,二类,三类,四类\
\n31,本年度的全年定期、定期通勤、通勤、定期就医、定期购粮乘车证，可延期使用到（  ）日止。 ,B,当年的十二月三十一日,次年的一月十五日,年的二月十五日,次年的十二月三十一日\
\n32,必要时，（  ）可以临时调整退票办法。,D,国务院,铁道部,铁路局,铁路运输企业\
\n33,不属于因公乘车的是（  ）。,C,出差,驻勤,旅游,搬家\
\n34,车票票面（特殊票种除外）主要应当载明：发站和到站站名；（  ）；径路；票价；车次；乘车日 期；有效期。,B,座位号、铺位号,座别、卧别,硬座,请输入内容\
\n35,车票中包括（  )和（  ）两部分。,B,客票、加快票,客票、附加票,卧铺票、附加票,卧铺票、空调票\
\n36,车站按（  ）分为编组站、区段站、中间站。,B,业务性质,技术作业,技术等级,车站规模\
\n37,车站按业务性质分为（  ）、货运站、客货运站。,A,客运站,中间站,编组站,区段站\
\n38,车站对列车上交下的无人护送的精神病旅客，由车站(  ）负责妥善处理。,D,客运,公安,列车长,客运、公安共同\
\n39,车站根据( )，开设足够的售票窗口。,D, 客流的流量、流向,旅客发送和中转量,旅客运输的能力,旅客发送量 \
\n40,车站建筑物和站、车一切为旅客服务的设备、备品应齐全并保持良好的 (  )，夜间应有良好照明。,C,外观外貌,内部设施,运用状态,管理水平\
\n41,车站应根据旅客运输组织原则和（  ）组织售票，做到减少旅客排队，正确发售车票。,A,票额分配计划,日计划 ,旬计划 ,月计划\
\n42,车站应因地制宜搞好环境绿化向车站园林化发展。（  ）客运（列车）段应设花房，配备园艺工。,B,特等站,特、一、二等站、,一等站,二等站\
\n43,车站应阻止无票人员不要进入候车室，（）可以实行凭票候车，以保证候车室的良好秩序。,A,三等以上车站,二等以上车站,四等以上车站,大站\
\n44,车站在检票时，应遵从的顺序是（  ）。,B,先一般旅客、后团体，再重点,先重点、后团体，再一般旅客,先一般旅客、后重点，再团体,先团体、后重点，再一般旅客\
\n45,承运人的基本权利是（  ）。,B,对所造成的铁路或者其他旅客的损失予以赔偿 ,对运送期间发生的身体损害有权要求承运人赔偿 ,对运送期间因承运人过错造成的旅客随身携带物品损失予以赔偿 ,支付运输费用，当场核对票、款，妥善保管车票，保持票面信息完整可识别 \
\n46,承运人的基本权利是（  )。,C,爱护铁路设备、设施，维护公共秩序和运输安全,对所造成的铁路或者其他旅客的损失予以赔偿 ,对损害他人利益和铁路设备、设施的行为有权制止、消除危险和要求赔偿, 对运送期间发生的旅客身体损害予以赔偿 \
\n47,承运人的义务是（  ）。,C,依照规定收取运输费用 ,对损害他人利益和铁路设备、设施的行为有权制止、消除危险和要求赔偿,对运送期间因承运人过错造成的旅客随身携带物品损失予以赔偿 ,要求旅客遵守国家法令和铁路规章制度，保证安全 \
\n48,承运人可以开办（  ）（指在购票地能够买到换乘地或返回地带有席位、铺位号的车票）、定期、不定期、储值、定额等多种售票业务，以便于购票人购票和使用。,C,直通票,直达票,往返票、联程票,异地票\
\n49,乘车人数通知单应保存（  ）。,B,2个月,3个月,6个月,1年\
\n50,乘坐动车组列车杆状物品不超过（  ）厘米。,A,130,160,180,200\
\n51,持（  ）的旅客在中转站换乘时，应当办理中转签证手续。,C,客票,客票,通票,直达票\
\n52,持动车组列车车票的旅客改乘当日其他动车组列车时（  ）。,B,受开车后2小时内限制,不受开车后2小时内限制,受开车后4小时内限制,不受开车后4小时内限制\
\n53,持通票的旅客在乘车途中有效期终了、要求继续乘车时，应自（  ）或最近前方停车站起，另行补票，核收手续费。,C,列车始发站,旅客上车站,有效期终了站,中途站\
\n54,持用（  ）乘车证到列车上使用卧铺时，可不交乘车证。,A,全年定期,临时定期,软席,硬席\
\n55,持站台票上车并在开车（  ）分钟后仍不声明时，按无票处理。,B,10,20,30,40\
\n56,除特殊情况并经（  ）同意外，持低票价席别车票的旅客不能在高票价席别的车厢停留。,D,客运员,客运值班员,列车员,列车长\
\n57,定期通勤乘车证，有效期间为（  ）。,D,3个月,6个月,9个月,一个历年\
\n58,动车组列车车票最远只发售至本次(  ),C,旅客中转站,旅客下车站,列车终点站,旅客换乘站\
\n59,对旅客的遗失物品应设法归还原主。如旅客已经下车，应编制客运记录，注明品名、件数等移交 下车站。不能判明时，移交列车（  ）。,C,始发站,中途站,终点站,临时停车站\
\n60,对违反国家法律、法规，在站内、列车内寻衅滋事、扰乱公共秩序的人，下列哪个做法是不正确 的（  )。,C,站、车均可拒绝其上车或责令其下车,情节严重的送交公安部门处理,对未使用至到站的票价应予退还 ,在票背面做相应的记载，运输合同即行终止 \
\n61,对无票乘车而又拒绝补票的让人，列车长可责令其下车并应编制客运记录交县、市所在地车站或 （  ）车站处理（其到站近于上述到站时应交到站处理）。,C,一等以上,二等以上,三等以上,四等\
\n62,发生车票误售、误购时，在（  ）应换发新票。,B,列车始发站,发站,列车终点站,列车停车站\
\n63,发售（  ）的到站，必须是所乘快车或特别快车的停车站。,A,加快票,空调票,卧铺票,客票\
\n64,发售需要中转换车的加快票的中转站还必须是有（  ）的车站。,C,快车始发,同等级列车始发,同等级快车始发,列车始发\
\n65,发售需要中转换车的加快票的中转站还必须是有（  ）的车站。,C,同等级列车停车,同等级快车停车,同等级快车始发,同等级列车始发\
\n66,发售学生票时应以（  ）的列车发售。,B,实际径路,近径路或换乘次数少,不需换乘,直达\
\n67,凡配有全列空调的列车，应全年使用空调，适时调节车内温、湿度和空气循环。空调车厢内温度 与车厢外部温度相差不少于（  ）。,A,8℃,10℃,12℃,6℃\
\n68,凡因工作需要，必须经常在所管辖区段内铁路沿线往返乘车的铁路职工，可使用所管辖区段内的（  ）乘车证。,A,全年定期,临时定期,通勤,就医\
\n69,符合（  ）探亲条件的职工，经本人申请，领导批准，可填发其本人工作地至探亲地点的探亲乘 车证。经领导批准探亲假分两次使用的职工，第二次探亲时也可填发探亲乘车证。,B,两年一次,一年一次,一年两次,一年多次\
\n70,各次旅客列车和（  ）车站，都应有广播设备，按定员标准配备专职广播员。,B,三等站,三等以上,办理旅客乘降的,旅客乘降所\
\n71,各级客调指挥运输生产的指示以(   )形式下达。,D,传真电报,电话通知,口头命令,调度命令\
\n72,各级客调指挥运输生产的指示以(  )形式下达。,D,传真电报,电话通知,口头命令,调度命令\
\n73,各种旅客列车都分为上行和下行，以（  ）为中心。,B,省会城市,首都,铁道部,铁路局\
\n74,购粮乘车证用（  ）乘车证代用。,B,通勤,就医,探亲,硬席\
\n75,关于铁路运输危险货物中的气体，描述不正确的是（  ）。,D,易燃气体,非易燃无毒气体,毒性气体,空气\
\n76,广播员必须经过（  ）的系统培训，获得机械操作合格证后方可上机。,C,广播学院,专业,电务部门,全面\
\n77,国家铁路的客运运价，对浮动票价应分别按（  ）处理尾数。,C,种类,张数,票种,总金额\
\n78,国家铁路的客运运价，以（  ）为计算单位，不足1元的尾数按四舍五入处理（但半价票价，棚车 票价，市郊单程票价，行李、包裹运价及客运杂费的尾数保留至角）。,C,分,角,元,拾元\
\n79,行李、包裹运价是根据规定的运价区段，以（  ）的运价率乘以通过递远递减后而确定的计价里程，再乘以5千克，即得5千克为单位的运价基数。,B,每5千克每千米,每千克每千米,每千克每米,每500克每千米\
\n80,行李运价里程，按行李（  ）计算，旅客要求行李由近径路运送时，如有直达列车可按近径路计算。,D,最短径路,指定径路,近径路,实际运送的径路\
\n81,候车室和特、一、二等站的站台上，应有（  ）。,C,方向牌,引导牌,准确的时钟,车次显示牌\
\n82,候车室和运用中的客车在发生传染病和发现“四害”时，要（  ）消毒、杀虫、灭鼠。,A,随时,每天,定期,定时\
\n83,候车室内气温低于（  ）℃时，应及时供暖。,B,12,14,16,18\
\n84,机车车辆在中途发生故障，机务段、车辆段检修工人去修理，应填发一次硬座乘车证，不能使用（  ）。,B,通勤（学）乘车证,便乘证,定期通勤乘车证,硬席乘车证\
\n85,机械冷藏车组应尽量挂于货物列车（  ）。,C,前部,中部,中部或后部,后部\
\n86,集体所有制职工到上级单位开会，可使用（  ）。,B,铁路软席乘车证,铁路硬席乘车证,通勤乘车证,探亲乘车证\
\n87,计算行李、包裹运价的起码里程为： 行李（  ）；包裹（  ）。,B,20千米、20千米,20千米、100千米,100千米、100千米,100千米、400千米\
\n88,计算旅客票价的起码里程为：客票20千米；空调票（  ）；加快票（  ）；卧铺票（  ）（特殊区段另有规定者除外）。,D,100千米、100千米、400千米,20千米、20千米、400千米,20千米、100千米、100千米,20千米、100千米、400千米\
\n89,驾驶机车、动车组、动车、自轮运转特种设备的人员，必须持有（  ）颁发的驾驶证。变更驾驶机型前，必须经过相应的技术培训并考试合格。,C,公安部,交通部,铁道部,运输部门\
\n90,客流调查的形式分为（  ）。,D,日常调查、定期调查、季度调查,C、日常调查、分期调查、季度调查,B、日常调查、分期调查、节假日调查,日常调查、综合调查、节假日调查 \
\n91,客流调查一般以（  ）为单位，在吸引区范围内进行。,B,列车 ,车站,车务段 ,铁路局\
\n92,客流综合调查每(  )进行一次。,D,季度,半年,年,两年\
\n93,客运工作人员应做好安全宣传和防范，加强综合治理，及时清理闲杂人员，杜绝围车叫卖，做到 （  ），保持良好的治安环境。,B,以车保站,以站保车,以公保私,以个人利益为重\
\n94,客运人员迎送列车时足踏白线，目迎目送，以（  ）为止。,D,看见列车开始至看不见列车,列车进入信号机至开出信号机,列车进入道岔至开出道岔,列车进入站台开始至开出站台\
\n95,客运人员在工作中的仪容仪表，下列说法不正确的是（  ）。,D,男不留胡须、长发，女发不过肩,不赤足穿鞋,不穿高跟鞋、钉子鞋、拖鞋,可以佩戴首饰\
\n96,客运人员在接班前，要充分休息，保持精力充沛。严禁在（  ）饮酒。,B,下班后,接班前和工作中,接班后,工作间休时间\
\n97,客运收入是指铁路运输企业在办理旅客运输业务和辅助作业中，使用铁路运输票据，按规定向旅客、托运人、收货人核收的（  ）。,C,运费、票款,杂费、票款,票款、运费、杂费,票款\
\n98,客运职工在通过线路时，应走天桥、（  ）、平过道。,B,轨面,地道,股道,路肩\
\n99,客运职工正在行走遇有旅客问话时应(  ),C,边走边答,不予回答,停下来回答,随意打断\
\n100,空调候车室温度应保持在（  ）之间。,D,18℃－28℃,20℃－26℃,18℃－26℃,20℃－28℃\
\n101,离休干部使用铁路乘车证时，用（  ）代替工作证。,C,工作证,户口簿,离休证,有效身份证件\
\n102,离休人员去外地探望父母、子女或回原籍，可使用软席、硬席乘车证，“使用别”栏填“出 差”。此项乘车证在离休后（  ）。,A,只能使用一次,一年使用两次,两年使用一次,可以长期反复使用\
\n103,礼貌待客，做到（  ）。,C,主动热情、举止文明,C、行为端庄、举止文明,B、主动热情、细心周到,行为端庄、细心周到 \
\n104,两名以上旅客共持一张代用票要求办理分票手续时，站、车应予以办理。办理时按（  ）核收手 续费。,B,人数,分票的张数,席别,到站\
\n105,列车旅客密度表应保存（  ）。,C,3个月,6个月,1年,2年\
\n106,列车通过速度不超过120km/h时，站台安全标线与站台边缘距离为（  ）。,A,1000mm,1500mm,1800mm,2000mm\
\n107,列车运行，原则上以开往（  ）方向为上行。,A,北京,上海,重庆,天津\
\n108,列车运行图是铁路行车组织工作的（  ）。,C,原则,目的,基础,宗旨\
\n109,列车运行图原则上每两年编制一次，在（  ）实行。,A,春季,夏季,秋季,冬季\
\n110,列车长度应根据运行区段内各站到发线的有效长，并须预留（  ）的附加制动距离确定。,A,30m,40m,50m,100m\
\n111,旅客补票后又找到原票时，列车长应编制客运记录交旅客，作为在到站出站前向（  ）要求退还后 补票价的依据。退票核收退票费。,D,发站,列车始发站,列车终点站,到站\
\n112,旅客不能按票面指定的日期、车次乘车时，应当在票面指定的日期、车次开车前办理一次提前或推迟乘车签证手续，特殊情况可在（  ）办理。,B,开车前2小时,开车后2小时内,开车前6小时,开车后6小时内\
\n113,旅客的义务是（  ）。,B,依据车票票面记载的内容乘车 ,对所造成铁路或者其他旅客的损失予以赔偿 ,对运送期间发生的身体损害有权要求承运人赔偿 ,对运送期间因承运人过错造成的随身携带物品损失有权要求承运人赔偿 \
\n114,旅客丢失车票应另行购票。在列车上应自（  ）起（不能判明时从列车始发站起）补收票价，核收手续费。 ,B,列车始发站,丢失站,最近前方停车站,任一停车站\
\n115,旅客购买卧铺票时，卧铺票的到站、座别必须与客票的到站、座别相同，但对持（  ）的旅客，卧铺票只发售到中转站。,C,直达票,往返票,通票,团体票\
\n116,旅客和行李、包裹的票价、运价里程，以国务院铁路主管部门公布的（  ）为计算依据。,B,行李包裹运价表,《铁路客运运价里程表》,旅客票价表,客货运输专刊\
\n117,旅客候车室应备有（  ）座椅，条件许可的，可增设旅客娱乐场所、售货部和旅客餐厅。,B,供旅客使用的,与候车面积相适应的,足够的,大量的\
\n118,旅客或无票人员在站内或列车上发生急病时，应（  ）。,B,立即通知其单位或家属,立即送医院抢救,立即收集旁证、物证,立即报警\
\n119,旅客减价不符，应收未收的，属于（  ）事故。,C,现金,票据,坏账损失,人为\
\n120,旅客可凭( )办理一次行李托运。,D,单位证明,身份证,介绍信,客票\
\n121,旅客列车到发线有效长一般不少于（  ）。,D,350m,450m,550m,650m\
\n122,旅客列车的尾部标志应使用（  ）。,A,电灯,信号旗,路徽,列车方向牌\
\n123,旅客列车或车站发生（  ）食物中毒时，列车长、客运主任应及时通知前方停车站或所在站防疫部 门，并做好现场保护工作。,A,三人以上,五人以上,十人以上,三十人以上\
\n124,旅客列车应固定停靠站台，因故临时必须变更时，（  ）应提早通知客运值班人员，由客运人员及时向旅客通告。,C,广播员,客运调度,运转值班人员,行车调度\
\n125,旅客列车硬座的实际定员：总标记定员减（  ）座位（非新型客车）。,C,4个,6个,10个,12个\
\n126,旅客列车运行图是运行图的重要组成部分，（  ）运行方案图是运行图的骨架。,D,直达特快旅客列车,特快旅客列车,快速旅客列车,直通旅客快车\
\n127,旅客票价包括（  ）两部分  。,A,客票票价和附加票票价,C、客票票价和行李运价,B、软座票价和硬座票价,客票票价和包裹运价 \
\n128,旅客票价里程，按旅客乘车的（  ）计算。,C,最短径路,指定径路,实际径路,近径路\
\n129,旅客票价是以每千米的票价率为基础，按照旅客旅行的距离和不同的列车设备条件，采取（  ） 的办法确定。,B,递远递增,递远递减,通算,按区段计算\
\n130,旅客托运的行李超过规定重量时，对超过部分按（  ）计算。,B,行李运价,行李运价加倍,三类包裹,二类包裹\
\n131,旅客携带品每件物品外部尺寸长、宽、高之和不超过（  ）厘米。,C,120,150,160,200\
\n132,旅客运输计划按执行期限的不同，可分为（  )三种形式。,C,长远计划、年度计划和季度计划,长远计划、年度计划和月度计划,长远计划、年度计划和日常计划,年度计划、月度计划和日常计划\
\n133,旅客在（  ）办理改签时，改签后的车次票价高于原票价时，核收票价差额；改签后的车次票价 低于原票价时，退还票价差额。,A,发站,中途站,中转站,折返站\
\n134,每一成人旅客可免费携带（  ）身高不足（  ）的儿童，超过（  ）时，超过的人数应买儿童票。,C,一名、1米、一名,两名、1米、两名,一名、2米、一名,两名、2米、一名\
\n135,每张行李、包裹票的起码运费为（  ）元。,A,1,2,5,10\
\n136,棚车代用客车时，客票票价按照( )计算。,D,实际客票票价,硬座客票票价,软座客票半价,硬座客票半价\
\n137,票据库必须有保证安全的设施，建立严格的出入库和交接制度，并指定（  ），建立票据总账和 明细账，掌握请领、使用和结存情况，定期清查。,A,专人负责,客运主任负责,票房主任负责,售票员负责\
\n138,起运地承运人依据《铁路旅客运输规程》订立的旅客运输合同对所涉及的（  ）具有同等约束力。 ,B,旅客,承运人,托运人,收货人\
\n139,勤恳敬业，做到（  ）。,B,工作勤奋、认真负责,工作勤奋、业务熟练,服从命令、业务熟练,认真负责、业务熟练\
\n140,全国各线的列车运行方向，以（  ）的规定为准，但枢纽地区的列车运行方向，由铁路局规定。,C,铁路局,集团公司,铁道部,国务院\
\n141,全国铁路的行车时刻，均以北京时间为标准，从零时起计算，实行（  ）小时制。,B,12,24,18,8\
\n142,全路列车运行图的编制和局部调整工作，由（  ）决定并负责组织。,B,国务院铁路主管部门,铁道部,铁路局,车站\
\n143,全路列车运行图的实行日期，由（  ）公布实行。,A,铁道部,铁路局,集团公司,站段\
\n144,日计划的编制一律规定为自（  ），以自站始发时间为标准。,D,8时至次日8时,12时至次日12时,18时至次日18时,0时至24时\
\n145,如旅客超重、超大的物品价值低于运费时，可按物品价值的（  ）核收运费。,D,20%,30%,40%,50%\
\n146,三等及以上或客流量较大的车站均须编制旅客输送（  ）计划，并报铁路局客调批准执行。,B,班,日,旬,月\
\n147,身高超过（  ）米的儿童使用儿童票乘车时，应补收儿童票价与全价票价的差额。,D,1,2,4,5\
\n148,市郊票、定期票、定额票的退票办法由（  ）自定。,D,国务院,铁道部,铁路局,铁路运输企业\
\n149,事故金额的计算：代用票按每组（  ）计算。,C,100元,500元,1000元,实际损失\
\n150,事故金额的计算：行李票、包裹票、客运杂费收据等未印金额的票据按每组（  ）计算。,A,100元,500元,1000元,实际损失\
\n151,事故救援与抢险救灾，由于时间紧迫来不及填发乘车证时，可凭（  ）乘车，一次乘车有效。,B,便乘证,调度命令,通勤乘车证,硬席临时定期乘车证\
\n152,顺线路行走时应走（  ），并随时警觉前后列车。,D,轨面,轨心,轨枕头,路肩\
\n153,四显示自动闭塞区段，一个绿色灯光和一个黄色灯光——准许列车由车站出发，表示运行前方有 （  ）个闭塞分区空闲。,B,一,两,三,四\
\n154,四显示自动闭塞区段进站色灯信号机，（  ）表示准许列车按限速要求越过该信号机，经道岔直向 位置进入站内正线准备停车。,B,一个绿色灯光,一个黄色灯光,一个红色灯光,两个黄色灯光\
\n155,随同成人进站身高不足（  ）的儿童及特殊情况经车站同意进站人员可不买站台票。,B,1米,2米,4米,5米\
\n156,随同成人旅行身高（  ）的儿童，享受半价客票、加快票和空调票（以下简称儿童票）。,C,1.1-1.4米,1.2-1.4米,1.2-1.5米,1.1-1.5米\
\n157,铁路办理客货运输使用的各种车票、行李票、包裹票、货票、客货运杂费收据、定额收据、有价表格等统称为（  ）。,C,铁路客运票据,铁路货运票据,铁路客货运输票据,铁路运输票据\
\n158,铁路乘车证分（  ）种。,C,7,8,9,10\
\n159,铁路单位招收的（  ），本人使用乘车证的办法与铁路职工相同，,D,临时工 ,合同工,农民工 ,农民合同制工人（在合同期内）和农民轮换工 \
\n160,铁路行车有关人员在任职期间，要定期进行身体检查，身体条件不符合任职岗位要求的，（  ）。,B,不得上岗,C、应带病坚持工作,B、应调整工作岗位,留在原岗位\
\n161,铁路客货运输票据的请领、保管和使用站、段使用的铁路客货运输票据，向（  ）请领。,B,铁路局,客运处,站、段,本企业收入管理部门\
\n162,铁路客运人员在工作中，应穿着（  ），仪容整洁，精神饱满，佩戴规定的标志。,D,规定服装,铁路制服,统一服装,规定的统一服装\
\n163,铁路旅客运输合同（  ），为合同履行完毕。,D,自检票进站起至到站出站时止 ,自售出车票时起至旅客出站时止,从上车开始至下车止 ,从售出车票时起成立，至按票面规定运输结束旅客出站时止 \
\n164,铁路旅客运输合同的基本凭证是（  ）。,B,站台票,车票,身份证,有效身份证明\
\n165,铁路旅客运输合同的基本凭证是（  ）。,A,车票,书面合同,站台票,身份证\
\n166,铁路信号红色表示（  ）。,D,按规定速度运行,注意或减低速度,迅速通过,停车\
\n167,铁路信号黄色表示：（  ）。,B,按规定速度运行,注意或减低速度,迅速通过,停车\
\n168,铁路信号绿色表示（  ）。,A,按规定速度运行,注意或减低速度,迅速通过,停车\
\n169,铁路运输费用不办理（  ）托收。,B,本地,异地,本站,到站\
\n170,铁路运输费用核收方式分为现付、到付、后付、（  ）四种。,C,支付,兑付,预付,转付\
\n171,铁路运输费用结算方式分为（  ）两种。,D,现付结算和到付结算,现付结算和预付款,预付款和现金结算,现金结算和非现金结算\
\n172,铁路运输企业及其所属的站、段均应设置（  ）。,C,保管室,保险柜,票据库,票据柜\
\n173,铁路运输企业在办理客货运输业务时，必须使用铁道部规定的（  ）核收运输费用。,B,铁路运输票据,铁路客货运输票据,铁路客运票据,铁路货运票据\
\n174,铁路运输收入分为（  ）。,B,客运收入、货运收入 ,客运收入、货运收入、铁路建设基金、代收款,客货运收入、代收款 ,客运收入、货运收入、代收款 \
\n175,铁路职工到其他单位驻勤，符合通勤条件的，可按规定使用（  ）乘车证。,B,定期通勤,通勤,硬席,软席\
\n176,听觉信号，长声为3s，短声为1s，音响间隔为1s。重复鸣示时，须间隔（  ）以上。,C,1s,2s,5s,7s\
\n177,通票的有效期按（  ）计算。,C,实际径路,最短径路,乘车里程,近径路\
\n178,通票的有效期按乘车里程计算，自指定乘车日起至有效期最后一日的（  ）时止。,A,24,12,1,0\
\n179,团体旅客办理改签不应晚于开车前（  ）小时。,D,2,6,12,48\
\n180,退还带有“（  ）”字戳迹的车票时，应先办理行李变更手续。,B,学,行,孩,团\
\n181,外交人员每人免费携带品的重量是（  ）千克。,D,20,25,30,35\
\n182,为方便旅客的旅行生活， 可限量携带不超过（  ）毫升的摩丝、发胶、卫生杀虫剂、空气清新 剂。,C,200,400,600,800\
\n183,为方便旅客的旅行生活，可限量携带安全火柴（  ）小盒。,B,10,20,30,40\
\n184,为方便旅客的旅行生活，可限量携带不超过（  ）毫升的酒精、冷烫精。,A,100,200,300,400\
\n185,为方便旅客的旅行生活，可限量携带不超过（  ）毫升的指甲油、去光剂、染发剂。,A,20,40,100,200\
\n186,问询处应备有完整的服务资料。客运人员应准确回答客运有关规定、列车到、发、中转换乘时刻 及当地（  ）等情况。,D,公路运输,航空运输,水路运输,水陆交通\
\n187,下列“三要”的内容，不正确的是（  ）。,D,接待旅客要文明礼貌,纠正违章要态度和蔼,处理问题要实事求是,解答问询要认真耐心\
\n188,下列哪类物质不属于爆炸品（  ）。,D,有整体爆炸危险的物质和物品 ,有迸射危险，但无整体爆炸危险的物质和物品,不呈现重大危险的物质和物品 ,毒害品 \
\n189,下列哪些物品可以带入车内（  ）。,C,国家禁止或限制运输的物品 ,动物及妨碍公共卫生（包括有恶臭等异味）的物品 ,军人、武警、公安人员、民兵、猎人凭法规规定的持枪证明佩带的枪支子弹,法律、法规、规章中规定的危险品、弹药和承运人不能判明性质的化工产品 \
\n190,下列哪些物品是可限量携带的（  ）。,D,国家禁止或限制运输的物品 ,动物及妨碍公共卫生（包括有恶臭等异味）的物品,能够损坏或污染车辆的物品 ,初生雏20只 \
\n191,下列哪一项不是承运人的基本权利（  ）。,B,依照规定收取运输费用 ,爱护铁路设备、设施，维护公共秩序和运输安全 ,要求旅客遵守国家法令和铁路规章制度，保证安全 ,对损害他人利益和铁路设备、设施的行为有权制止、消除危险和要求赔偿 \
\n192,下列哪一项不是承运人的义务（  ）。,C,对运送期间因承运人过错造成的旅客随身携带物品损失予以赔偿 ,为旅客提供良好的旅行环境和服务设施，不断提高服务质量，文明礼貌地为旅客服务,对所造成铁路或者其他旅客的损失予以赔偿 ,确保旅客运输安全正点 \
\n193,下列哪一项不是旅客的义务（  )。,C,支付运输费用，当场核对票、款，妥善保管车票，保持票面信息完整可识别, 爱护铁路设备、设施，维护公共秩序和运输安全 ,对运送期间发生的身体损害有权要求承运人赔偿 ,对所造成铁路或者其他旅客的损失予以赔偿 \
\n194,下列那一项不是旅客的基本权利（  ）。,C,依据车票票面记载的内容乘车 ,要求承运人提供与车票等级相适应的服务并保障其旅行安全 ,对运送期间因承运人过错造成的旅客随身携带物品损失予以赔偿 ,对运送期间因承运人过错造成的随身携带物品损失有权要求承运人赔偿 \
\n195,下列情况可以发售学生票的是（  ）。,D,学校所在地有学生父或母其中一方时,学生因休学、复学、转学、退学时,学生往返于学校与实习地点时,家庭居住地和学校不在同一城市时\
\n196,享受减价优待的学生、伤残军人乘坐市郊、棚车时，仍按（  ）计算，不再减价。,A,硬座客票半价 ,软座客票半价,实际票价 ,硬座票价\
\n197,信号机应设在（  ）或其所属线路的中心线上空。,C,线路左侧,线路右侧,列车运行方向的左侧,列车运行方向的右侧\
\n198,夜间要求列车停车，（  ）,A,红色灯光,黄色灯光,蓝色灯光,展开的黄色信号旗 \
\n199,遗失物品需通过铁路向失主所在站转送时，物品在（  ）千克以内的免费转送。,A,5,10,20,35\
\n200,迎送列车时，不正确的是（  ）。,C,足踏白线,目迎目送,双手背后,双手自然垂直\
\n201,由于误售、误购、误乘或坐过了站在原通票有效期不能到达到站时，应根据（  ）至正当到站间的 里程，重新计算通票有效期。,A,折返站,列车始发站,列车终点站,中转站\
\n202,有锅炉供暖设备的车站，由房产建筑部门负责昼夜供暖；无锅炉供暖或装有空调装置的车站，由 （  ）负责供暖。,B,房产建筑部门,车站,客运员,热力公司\
\n203,遇有特殊情况，经（  ）同意，（  ）可批准旅客列车在不停车站临时停车。,B,铁路局领导、客调,客运主管部门、客调,铁道部、铁路局,上级调度主管部门、客调\
\n204,运输收入事故的大事故：（  ）。,C,损失金额不足5000元,损失金额不足1万元,损失金额1万元及其以上，不足10万元,损失金额10万元及其以上\
\n205,运输收入事故的等级分为（  ）三等。,A,一般事故、大事故和重大事故,一般事故、大事故和较大事故,一般事故、较大事故和重大事故,一般事故、大事故和特大事故\
\n206,运输收入事故的种类分为（  ）三类。,B,现金事故、现金丢失、现金被盗 ,现金事故、票据事故、坏账损失 ,票据事故、票据丢失、票据被盗 ,现金丢失、票据被盗、无法收回的坏账。 \
\n207,运输收入事故的重大事故：（  ）。,D,损失金额不足5000元,损失金额不足1万元,损失金额1万元及其以上，不足10万元,损失金额10万元及其以上\
\n208,在车内或下车站，对超过免费重量的物品，其超重部分应补收（  ）运费。,D,一类包裹,二类包裹,三类包裹,四类包裹\
\n209,在有运输能力的情况下， 承运人或销售代理人应按（  ）的要求发售车票。,C,承运人,销售代理人,购票人,旅客\
\n210,站、车播音时间，从（  ），每次连续播音不超过一小时，间歇时间不超过半小时。,B,六点至二十一点,七点至二十二点,八点至二十一点,九点至二十一点\
\n211,站、车播音时间涉及（  ）始发、终到作业必须播音时，始发、终到前的播音作业为半小时。,C,1：00以后,21：00以后,22：00以后,0：00以后\
\n212,站、车广播宣传口径要以中央报刊文章和中央人民广播电台、中央电视台的稿件为准。站、车广 播资料由（  ）统一编写。,C,中央人民广播电台,铁道部,铁路局,各车站或直属站、段\
\n213,站、车广播应按规定的作业程序。每一班（趟）均应编制班（趟）计划。计划要有播音项目、具体播出时间及节目内容。广播计划要经（  ）批准。,C,铁路局,车间主任,列车长或值班员,广播员\
\n214,站、段必须建立健全铁路客货运输票据及报表的“三检”（自检、互检和（  ）  ）复核制度，防 止发生差错。,B,抽检,总检,联检,复检\
\n215,站容车容标准：庄重美观、(  )、设备齐全、标志鲜明。,A,整洁卫生,环境优美,窗明地净,四壁无尘\
\n216,站台票当日使用（  ）次有效。,A,一,两次,多次反复,三次\
\n217,中间站一般在列车到站前（  ）开始检票。,B,15分钟,20分钟,25分钟,半小时\
\n218,昼间要求列车停车的手信号是（  ）。,A,展开的红色信号旗,用红色信号旗下压数次,展开的红色信号旗高举头上左右摇动,展开的红色信号旗在下部左右摇动\
\n219,装卸费及其他作业费属于（  ）。,C,客运收入,货运收入,代收款,铁路建设基金\
\n220,自行车（含机动自行车）的规定计价重量是（  ）。,B,每辆20千克,每辆  25千克,每辆30千克,每辆40千克\
";


  var checkboxBank = "";


  var trueOrFalseBack = "1, 旅客站台不应邻靠正线。,A,对,错\
\n2,《管规》规定，进入站台车辆应技术状态良好并限速（20千米／小时）行驶。,B,对,错\
\n3,《铁路旅客运输管理规则》规定，在保证安全、正点和服务质量的前提下，允许旅客列车超员运输。,B,对,错\
\n4,20人以上乘车日期、车次、到站、座别相同的旅客可作为团体旅客，承运人应优先安排； 如填发代用票时每人发一张团体旅客证。,B,对,错\
\n5,22人以上乘车日期、车次、到站、座别相同的旅客为团体旅客。,B,对,错\
\n6,办理客运的车站主要设施应包括站房、站场和站台三部分。,B,对,错\
\n7,包裹运价里程按实际运送路径计算，有指定路径时，按指定径路计算。旅客票价包括硬座客票票价和软座客票票价两部分。,B,对,错\
\n8,采暖期前，房产建筑部门应对客运房舍、供暖设备进行一次检查、整修，保证设备完整， 好用。,A,对,错\
\n9,车辆按用途分为客车和货车。,B,对,错\
\n10,车票票价为旅客乘车日的适用票价。承运人调整票价时，已售出的车票票价应补收的补 收，应退还的退还。,B,对,错\
\n11,车票应在承运人或销售代理人的售票处购买。在有运输能力的情况下，承运人或销售代理 人应按购票人的要求发售车票。,A,对,错\
\n12,车站对列车移交或本站发现的无票乘车而又拒绝补票的人员应追补应收和加收的票款，不 收手续费。,B,对,错\
\n13,车站根据旅客发送量，开设足够的售票窗口。客流量较大的车站还应开设军人、中转签 证、加快及重点服务等窗口。,A,对,错\
\n14,车站候车区域、上、下车通道应有相应的车次、车厢顺号指引牌、检票车次牌等导向标 志。,A,对,错\
\n15,车站候车室和工作室都应安装电扇、排风扇，条件具备可安装冷风或空调设备。,A,对,错\
\n16,车站开展携带品搬运、暂存服务业务时，可核收搬运、暂存费。,A,对,错\
\n17,车站应设有配线，并办理列车接发、会让和客货运业务。,A,对,错\
\n18,车站应因地制宜搞好环境绿化向车站园林化发展。,A,对,错\
\n19,成人带儿童或儿童与儿童不可共用一个卧铺。,B,对,错\
\n20,承运人不接受儿童单独旅行。,B,对,错\
\n21,承运人的基本权利是爱护铁路设备、设施，维护公共秩序和运输安全,B,对,错\
\n22,承运人的基本权利是依照规定收取运输费用。,A,对,错\
\n23,承运人的义务是对所造成铁路或者其他旅客的损失予以赔偿。,B,对,错\
\n24,承运人的义务是对运送期间因承运人过错造成的旅客随身携带物品损失予以赔偿。,A,对,错\
\n25,承运人可以开办往返票、联程票（指在购票地能够买到换乘地或返回地带有席位、铺位号 的车票）、定期、不定期、储值、定额等多种售票业务，以便于购票人购票和使用。,A,对,错\
\n26,持通票的旅客在中转站和列车上要求变更径路时，必须在通票有效期能够到达到站时方可 办理。 原票价高于或相当于变更后的径路票价时，持原票乘车有效，差额部分（包括列车等级不符的差额） 应予退还。,B,对,错\
\n27,持用铁路各种乘车证，可以免费托运行李、搬家物品等。,B,对,错\
\n28,大、中型客运站站前应有广场，站台应有雨棚（根据需要可设无站台柱雨棚）、导向设备， 跨越线路应采用天桥或地道。,A,对,错\
\n29,到站台上迎送旅客的人员应买站台票。站台票当日使用一次有效。,A,对,错\
\n30,电化区段运行的客车、机械冷藏车等应有“电化区段严禁攀登”的标识。,A,对,错\
\n31,定向旅客、托运人、收货人核收的票款、运费、杂费。 ,A,对,错\
\n32,动车组列车只发售二等座车学生票，学生票为全价票的50%。,B,对,错\
\n33,对乘坐卧铺的旅客，列车可以收取车票并予集中保管。收取车票时，应当换发卧铺证；旅 客下车前，凭卧铺证换回车票。,A,对,错\
\n34,对浮动票价按四舍五入处理尾数。,B,对,错\
\n35,对旅客讲话时应态度和蔼，音量适宜，称呼恰当，语言表达得体准确。听旅客讲话时应认真 倾听，不得随意打断，正在行走遇有旅客问话时应停下来回答。夜间在卧车不得喧哗。,A,对,错\
\n36,对违反国家法律、法规，在站内、列车内寻衅滋事、扰乱公共秩序的人，站、车均可拒绝 其上车或责令其下车；情节严重的送交公安部门处理；对未使用至到站的票价不予退还，并在票背面做相应的 记载，运输合同即行终止。,A,对,错\
\n37,对重点旅客做到“三知三有”（知座席、知到站、知位置，有登记、有服务、有交接）。 ,B,对,错\
\n38,发到站间跨及两条及其以上线路时，应按照规定的结算站接算；通过轮渡时，轮渡里程另 行计算。,B,对,错\
\n39,发生线路中断旅客要求退票时，因违章加收的部分和已使用至到站的车票不退。,A,对,错\
\n40,发生运输收入事故时，应保护好现场，并立即电告收入管理部门和公安部门，及时组织破 案。,A,对,错\
\n41,发生运输收入事故造成的经济损失须由责任者和责任单位赔偿，责任者无力赔偿的部分由 事故发生单位负责赔偿，收回的事故赔款列原科目，其中票据事故赔款列其他收入。,A,对,错\
\n42,凡因工作需要，必须经常在所管辖区段内铁路沿线往返乘车的铁路职工，可使用所管辖区 段内的通勤乘车证。,B,对,错\
\n43,附加票是客票的补充部分，可以与客票合并发售，也可单独使用。,B,对,错\
\n44,高空作业时，要求做到身系安全带，梯子有人扶，物品不下掷。,A,对,错\
\n45,各次旅客列车和三等以上车站，都应有广播设备，按定员标准配备专职广播员。,A,对,错\
\n46,各级客调指挥运输生产的指示以口头传达形式下达。,B,对,错\
\n47,各种旅客列车都分为上行和下行，上行列车编为单数，下行列车编为双数。全国铁路的行车时刻，均以北京时间为标准。,B,对,错\
\n48,购粮乘车证用就医乘车证代用。,A,对,错\
\n49,股道编号，单线区段内的车站，从远离站舍的线路起向靠近站舍的方向顺序编号。,B,对,错\
\n50,顾全大局服从命令，执行标准。,B,对,错\
\n51,广播设备的添置、安装、维修由电务部门负责。,A,对,错\
\n52,广播员必须经过电务部门的系统培训，获得机械操作合格证后方可上机。,A,对,错\
\n53,国家铁路的客运运价，以元为计算单位，不足1元的尾数按四舍五入处理（但半价票价， 棚车票价，市郊单程票价，行李、包裹运价及客运杂费的尾数保留至角）。,A,对,错\
\n54,行车工作必须坚持集中领导、统一指挥、逐级负责的原则。,A,对,错\
\n55,行李、包裹的运费，根据《行李包裹运价表》按每张票据计算。,A,对,错\
\n56,行李包裹运价的计算重量以5千克为单位，不足5千克按实际重量计算。铁路运输收入分为客运收入和货运收入。,B,对,错\
\n57,行李车、邮政车、发电车等非乘坐旅客的车辆不得挂于机车后第一位和列车尾部，起隔离 作用。,B,对,错\
\n58,候车室内气温低于１４℃时，应及时供暖。,A,对,错\
\n59,候车室内温度冬季20℃-25℃，夏季24℃-28℃。,B,对,错\
\n60,机车车辆在中途发生故障，机务段、车辆段检修工人去修理，应填发一次硬座乘车证，不 能使用便乘证。,A,对,错\
\n61,集体所有制职工到上级单位开会，可使用铁路硬席乘车证。,A,对,错\
\n62,经领导批准探亲假分两次使用的职工，第二次探亲时也可填发探亲乘车证。,A,对,错\
\n63,经组织批准（以分局、处及以上人事部门命令）返聘的铁路离休人员仍担任一定的工作任 务，使用乘车证的办法与在职职工相同。,A,对,错\
\n64,可以使用铁路客货运输票据核收铁道部规定以外的任何费用。,B,对,错\
\n65,客流量较大的车站，应固定售票时间，并向旅客公告。,B,对,错\
\n66,客运工作人员应精神饱满，仪容整洁，举止大方，表情自然。女客运人员可浓妆上岗。 ,B,对,错\
\n67,客运人员对消防器材做到知位置、知特性、会使用。,B,对,错\
\n68,客运人员在接班前，必须充分休息，保持精力充沛。严禁在接班前和工作中饮酒。,A,对,错\
\n69,客运收入是指铁路运输企业在办理旅客运输业务和辅助作业中，使用铁路运输票据，按规 ,A,对,错\
\n70,客运调度（以下简称客调）是铁路旅客运输日常工作的组织者和指挥者，在保证旅客列车 按运行图行车，加强旅客计划运输组织工作，完成旅客及行包运输任务等方面起着重要作用。,A,对,错\
\n71,离休干部使用乘车证的乘车席别，按其离休前应享受的席别办理。离休后享受科级及以上 待遇的，可享受软席。,B,对,错\
\n72,列车编组计划是铁路行车组织工作的基础。,B,对,错\
\n73,列车起动或机车车辆前进时，机车鸣示方式为一长声。,A,对,错\
\n74,列车向车站移交伤亡旅客或无票人员时，受理站不得拒绝。,A,对,错\
\n75,列车须按规定编定车次。在个别区间，可与规定方向不符。,B,对,错\
\n76,列车须按有关规定编定车次，下行列车编为双数，上行列车编为单数。,B,对,错\
\n77,列车运行中，各有关作业人员应认真执行车机联控。,A,对,错\
\n78,烈性传染病患者、精神病患者或健康状况危及他人安全的旅客，站、车可以不予运送；已 购车票按旅客退票的有关规定处理，不收退票费。,B,对,错\
\n79,旅客的基本权利是对运送期间因承运人过错造成的随身携带物品损失有权要求承运人赔 偿。,A,对,错\
\n80,旅客的基本权利是支付运输费用，当场核对票、款，妥善保管车票，保持票面信息完整可 识别。,B,对,错\
\n81,旅客的义务是对损害他人利益和铁路设备、设施的行为有权制止、消除危险和要求赔偿。 ,B,对,错\
\n82,旅客丢失车票不必另行购票。,B,对,错\
\n83,旅客丢失车票应另行购票。在列车上应自丢失站起（不能判明时从列车始发站起）补收票 价，不收手续费。,B,对,错\
\n84,旅客或无票人员在站内或列车上受到伤害，站、车应先收集旁证、物证，详细做成记录，然 后进行抢救。,B,对,错\
\n85,旅客列车和车站应配备为旅客服务的“急救药箱”，用药由铁路医院（或保健站）负责， 按规定内容定量及时配备。,A,对,错\
\n86,旅客票价是以每人每千米的票价率为基础，按照旅客旅行的距离和不同的列车设备条件， 采取递远递减的办法确定。,A,对,错\
\n87,旅客让路时，应快步通过。,B,对,错\
\n88,旅客所持车票日期、车次相符但未经车站剪口的应补剪并核收手续费，但已使用至到站的 除外。,A,对,错\
\n89,旅客有遵守国家法令和铁路运输规章制度，听从铁路车站、列车工作人员的引导，按照车 站的引导标志进、出站的义务。,A,对,错\
\n90,旅客运输计划，按执行期限的不同，可分为长远计划、年度计划和月计划三种形式。 ,B,对,错\
\n91,旅客运输设备主要包括办理客运的车站、客技站和客运机车车辆及其附属设施。在客运站两侧应设有与站台长度相适应的栅栏或围墙,A,对,错\
\n92,旅客在车票到站前要求越过到站继续乘车时，在有运输能力的情况下列车应予以办理。核 收越站区间的票价和手续费。,A,对,错\
\n93,每一成人旅客可免费携带一名身高不足１．１米的儿童，超过一名时，超过的人数应买儿 童票。,B,对,错\
\n94,起运地承运人依据《铁路旅客运输规程》，订立的旅客运输合同仅对起运地承运人具有约 束力。,B,对,错\
\n95,全程在铁路运输企业管内运行的动车组列车车票有效期由企业自定。,A,对,错\
\n96,如隔离车在途中发生故障摘下时，可无隔离车继续运行。,A,对,错\
\n97,如旅客超重、超大的物品价值低于运费时，可按物品价值的20%核收运费。车站范围内旅客携带品暂存业务应由多经经营。,B,对,错\
\n98,身高超过5米的儿童使用儿童票乘车时，应补收儿童票价与全价票价的差额，不收手续 费。,B,对,错\
\n99,使用计算机制票的，必须使用铁道部统一制、售票软件计算运输费用。,A,对,错\
\n100,事故金额的计算：现金、银行票据和坏账损失按实际损失计算。,A,对,错\
\n101,事故救授与抢险救灾，由于时间紧迫来不及填发乘车证时，可凭调度命令乘车，一次乘车 有效。,A,对,错\
\n102,暑期，站长、客运主任、值班员、列车长、客运人员值班时，可不戴帽子。,B,对,错\
\n103,隧道内只采用夜间信号。,B,对,错\
\n104,特、一、二等站站台上（含县城所在地车站）应设与站台等长的雨棚，其他站雨棚长度应 不少于350米，站台地道出入口处必须设置雨棚。,A,对,错\
\n105,特别用途线是指到发线、调车线、牵出线、货物线及站内指定用途的其他线路。,B,对,错\
\n106,特大桥梁、长大隧道、轮渡的行车办法，由铁道部规定。,B,对,错\
\n107,天桥、地道、平过道要做好防护引导，防止旅客对流。站台上应组织旅客排队上车。 ,A,对,错\
\n108,铁路单位招收的农民合同制工人（在合同期内）和农民轮换工，本人使用乘车证的办法与 铁路职工相同，但其家属、子女不得使用乘车证。,A,对,错\
\n109,铁路行车有关人员，接班前须充分休息，严禁饮酒，如有违反，立即停止其所承担的任 务。,A,对,错\
\n110,铁路行车有关人员在任职期间，应按规定周期参加任职岗位适应性培训和业务考试，考试 不合格的，在补考前可以继续上岗作业。,B,对,错\
\n111,铁路行车有关人员在执行职务时，必须坚守岗位， 穿着规定的服装，佩戴易于识别的证章 或携带相应证件，讲普通话。,A,对,错\
\n112,铁路客货运输票据，未经上级收入管理部门批准，不准相互调拨和借用。,A,对,错\
\n113,铁路客货运输票据是国家批准的专业发票，属有价证券，是铁路运输企业核算运输收入的 原始凭证，铁路客货运输票据的各联任何单位不得增减。,A,对,错\
\n114,铁路线路分为正线、站线、段管线及岔线。,B,对,错\
\n115,铁路沿线及站内，禁止设置妨碍确认信号的红、黄、绿色的装饰彩布、标语和灯光。如车 站内已装有妨碍确认信号灯的设备时，应拆除或采取遮光措施。,A,对,错\
\n116,铁路有效乘车凭证专指车票。 ,B,对,错\
\n117,铁路运输危险货物按其主要危险性和运输要求分为9类。,A,对,错\
\n118,铁路职工入路内、外举办的大、中专、技校学习，不能使用通勤、定期通勤或通学乘车证 ,A,对,错\
\n119,听觉信号，长声为3s，短声为1s，音响间隔为3s。,B,对,错\
\n120,为方便旅客的旅行生活，可限量携带气体打火机5个，安全火柴10小盒。,B,对,错\
\n121,卫生标准：窗明地净、四壁无尘、内外清洁、消灭“四害”。,A,对,错\
\n122,新版铁路乘车证共分为10种。,B,对,错\
\n123,新生凭录取通知书、毕业生凭毕业证可买一次学生票。,B,对,错\
\n124,信号装置一般分为色灯信号机、壁板信号机和机车信号机。,B,对,错\
\n125,信号装置一般分为信号机和信号表示器两类。,A,对,错\
\n126,要求列车停车时，夜间无红色灯光时，用白色灯光上下急剧摇动。,A,对,错\
\n127,要维护好车站秩序，合理地使用天桥、地道。严禁旅客钻车和横跨股道并随时清理站内滞 留人员。,A,对,错\
\n128,一个红色灯光表示不准列车越过该信号机。,A,对,错\
\n129,一个绿色灯光和一个黄色灯光表示准许列车按规定速度经正线通过车站，表示出站及进路 信号机在开放状态，进路上的道岔均开通直向位置。,B,对,错\
\n130,易燃液体分为一级易燃液体和二级易燃液体。,A,对,错\
\n131,因承运人责任使旅客不能按票面记载的日期、车次、座别、铺别乘车时，站、车应重新妥 善安排。重新安排的列车、座席、铺位低于原票等级时，应退还票价差额，核收退票费。,B,对,错\
\n132,因承运人责任致使旅客退票时，在到站，退还已收票价与已使用部分票价差额。未使用部 分不足起码里程按起码里程计算，核收退票费。,B,对,错\
\n133,因承运人责任致使旅客退票时，在到站，退还已收票价与已使用部分票价差额。未使用部 分不足起码里程按起码里程计算，核收退票费。,B,对,错\
\n134,因工作需要短期内须在一定区段内连续往返乘车或一次出差到几个地点又不顺路的，可使 用一定区段内的通勤乘车证。,B,对,错\
\n135,因列车满员、晚点、停运等原因，使旅客在规定的有效期内不能到达到站时，车站可视实 际需要延长通票的有效期。延长日数从通票有效期终了日起计算。,B,对,错\
\n136,因误售、误购或误乘需送回时，承运人应免费将旅客送回。在免费送回区间，旅客不得中 途下车。如中途下车，对往返乘车区间补收票价，核收手续费。,A,对,错\
\n137,迎送列车时足踏白线，目迎目送，以列车进入站台开始开车铃响为止。安全工作要坚持“安全第一，预防为主”的原则。,B,对,错\
\n138,优质服务做到行为端庄，举止文明。,B,对,错\
\n139,由于误售、误购、误乘或坐过了站在原通票有效期不能到达到站时，应根据折返站至正当 到站间的里程，重新计算通票的有效期。,A,对,错\
\n140,运行图是铁路运输工作的综合性计划和行车组织的基础。,A,对,错\
\n141,在有运输能力的情况下，承运人或销售代理人应按站长的要求发售车票。,B,对,错\
\n142,站、车播音时间，从六点至二十一点。,B,对,错\
\n143,站、车的广告，要安全牢固，内容健康、真实。广告可在车站主站房、列车外皮和方向牌 上设置，可直接涂写在建筑物或客运设施上。,B,对,错\
\n144,站、车广播宣传口径要以中央报刊文章和中央人民广播电台、中央电视台的稿件为准。 站、车广播资料由铁路局统一编写。,A,对,错\
\n145,站、车广播要坚持计划性、针对性、思想性、知识性相统一的原则。,A,对,错\
\n146,站长可随时决定暂停发售站台票。,B,对,错\
\n147,正确地编制旅客列车运行图，对保证列车运行图质量，客货列车安全正点运行，加速机车 车辆周转，提高运输效率，充分利用运输能力，具有重要意义。,A,对,错\
\n148,职工（含路外符合使用乘车证的人员）出差、驻勤、开会、调转赴任、医疗转院（含职工 供养的直系亲属）、疗养、护送、出入学校，准予免费使用卧铺。,B,对,错\
\n149,职工供养的未满１８周岁的子女随同职工或职工供养的配偶、父母探亲时，可共同使用一 张探亲乘车证，但职工子女不能单独使用。,A,对,错\
\n150,职工家属居住地在工作地（夫妻同居一地），其父、母、子、女在外地，不能填发到父、 母、子、女所在地的通勤、定期通勤乘车证。,A,对,错\
\n151,昼间展开的黄色信号旗，表示列车按规定速度运行。,B,对,错\
";



function questionSetter(){
  var sheetRows = [];
  sheetRows[0] = radioBank.split('\n');
  sheetRows[1] = trueOrFalseBack.split('\n');


  sheetRows[0] = selectQuestion(sheetRows[0],40);
  sheetRows[1] = selectQuestion(sheetRows[1],20);
  showTable(sheetRows);
}

function selectQuestion(arr,num){
 const tmpArr = getArrRandom(arr);
    let arrList = [];
    for (let i = 0; i < num; i++) {
      arrList.push(tmpArr[i]);
    };
    return arrList;
}
function getArrRandom(arr){
  var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
      var randomIndex = Math.floor(Math.random() * (i + 1));
      var itemIndex = arr[randomIndex];
      arr[randomIndex] = arr[i];
      arr[i] = itemIndex;
    }
    return arr;
}


 //显示表格
function showTable(sheetRows){
  table = '';
  for (var i = 0; i < sheetRows.length; i++) {
    if(i == 0)
      table +='<tr style="background:#ccc"><td>单选题</td></tr>';
    
    else
      table +='<tr style="background:#ccc"><td>判断题</td></tr>';
    questionNum = 1;
    setQuestion(sheetRows[i],i);

  }
  


  table = `<form><table>${table}</table><div align="center">
  <button type="button" onclick='subAnswer()' >提交</button></div></form>`;
    document.querySelector('.table').innerHTML = table; // 显示table表格

    sessionStorage.setItem("rightOption",lastRightOption);
    sessionStorage.setItem("radio",JSON.stringify(sheetRows[0]));
    sessionStorage.setItem("trueOrFalse",JSON.stringify(sheetRows[1]));
  }
  
  //提交答案
  function subAnswer(){
    let myAnswer=[];
    for(let i = 0;i < questionNumber;i++)
    {
      var obj = document.getElementsByClassName(""+i);
      var answer=[];
      for(let x = 0;x < obj.length;x++){
        if (obj[x].checked) {
          answer.push(obj[x].value);
        }
      }

      if(answer.length == 0){
        myAnswer.push(" ");
      }else{
        myAnswer.push(answer.toString().split(",").join(""));
      }
      
    }
    sessionStorage.setItem("result",myAnswer);
    window.location.href="theoryGrade.html";
  }


//出题
  function setQuestion(rows,type){
    let cell;//单元格
    let option=[];//选项
    let initRightAnswer;//初始正确选项
    let RightOptionContext;//正确选项的内容
    
    //操作每一行
    for (let i = 0; i < rows.length; i++) {
      tr = ``;
      option=[];
      rightOptionContext=[];
      cell = rows[i].split(',');

     
      for(let x = 3;x < cell.length;x++){
        option.push(cell[x]);
      }
      let initRightAnswer=cell[2].trim();

      for(let x = 0;x <initRightAnswer.length;x++){
        rightOptionContext.push(option[initRightAnswer[x].charCodeAt()-65])//正确答案
      }
      answerRandom(option);//答案随机
      for(let x = 3;x < cell.length;x++){
        cell[x] = option[x-3];
      }
      rows[i] = cell.join(',');
      lastRightOption.push(trueAnswer(rightOptionContext,option));//储存答案

      table += showRows(cell,option,type);
    }
    
  }
//显示每行
  function showRows(cell,option,type){
    let tr='';
    let typeName = '';
      tr +='<tr><td>'+questionNum+'.'+cell[1]+'</td></tr>';//题目
      
      
      typeName = 'radio';


      for(let i = 0;i<option.length;i++){
        tr +='<tr><td><label><input type="'+typeName+'" class='+questionNumber+' value="'+String.fromCharCode(i+65)+'" name="'+
        questionNumber+'">'+String.fromCharCode(i+65)+'.'+option[i]+'</label></td></tr>';
      }
      questionNumber++;
      questionNum++;
      return tr;
    }

//随机后新的正确选项
    function trueAnswer(rightOptionContext,option){
      let newAnswer="";
      let arr=[];
      for(let i = 0;i<rightOptionContext.length;i++){
        var temp = option.indexOf(rightOptionContext[i]);//查找旧答案在新数组中的位置
        arr.push(String.fromCharCode(temp+65));//将新答案转化为字母
      }
      arr.sort();
      newAnswer=arr.toString().split(",").join("")
      return newAnswer;
    }

//选项随机
    function answerRandom(arr){
      var len = arr.length;
      for (var i = 0; i < len - 1; i++) {
        var index = parseInt(Math.random() * (len - i));
        var temp = arr[index];
        arr[index] = arr[len - i - 1];
        arr[len - i - 1] = temp;
      }
    }