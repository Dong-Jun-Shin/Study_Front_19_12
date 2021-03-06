var coords = [
	'315,389,123',
	'536,251,43',
	'578,358,41',
	'567,461,39',
	'330,140,40',
	'475,142,31',
	'678,233,31',
	'703,299,28',
	'641,168,29',
	'596,113,30',	
	'229,643,38',
	'342,658,28',
	'82,510,38',
	'498,584,39',
	'131,216,40',
	'69,298,28'
	];

function setArea(){
	var coordsCode = "";
	for (var i = 0; i < coords.length; i++) {
		coordsCode += "<area shape='circle' coords='" + coords[i] + "' alt='person_img' onclick='showPerson(" + i + ")'>";	
	}

	document.getElementById('rel_map').innerHTML = coordsCode; 
}

var img = [
	'main_person_1.jpg', 'm1_sub_1.jpg', 'm1_sub_2.jpg', 'm1_sub_3.jpg', 'm1_sub_4.jpg', 'm1_sub_5.jpg', 
	'm1_sub_6.jpg', 'm1_sub_7.jpg', 'm1_sub_8.jpg', 'm1_sub_9.jpg', 'main_person_2.jpg', 
	'm2_sub_1.jpg', 'main_person_3.jpg', 'main_person_4.jpg', 'main_person_5.jpg', 'm5_sub_1.jpg'
];
var head = [
	'이대길', '최장군', '왕손이', '설화', '천지호', '오포교', 
	'큰 주모', '작은 주모', '방화백', '마의', '김혜원(언년이)', 
	'김성환', '송태하', '업복이', '황철웅', '이경식', 
];
var p = [
	'추노의 메인 주인공. 도망친 노비를 추적해 잡아오는 무자비한 현상금 사냥꾼. 저잣거리엔 부모 제삿날에도 기생끼고 노는 금수같은 새끼라는 평판이 자자하다. 도망친 노비에 대해 집착하는 이유는 내거 노비였던 큰놈이와 큰놈이의 여동생인 언년이 때문에 양친이 죽고 집안이 망했기 때문이다. 성격이 개차반이고 돈을 밝히는 수전노로 유명하며 실제로 추노를 하여 번돈을 같은 추노패인 최장군과 왕손이를 속이며 착복하고 있다. 꼭 그들뿐만은 아니고 위조된 호패를 쓰는 사람들을 잡아서 주머니를 터는 듯 하다.',
	'30대 후반. 장군이란 별호와 달리 무과시험에 수회 낙방하면서 패가망신을 당하고, 목숨을 버리기 직전 대길을 만났다. 대길의 설득으로 추노 일을 시작했는데, 본명은 이미 버렸으니 알 턱이 없고, 대길이가 붙여준 별명인 장군이를 본명처럼 쓰고 있다.',
	'좀도둑 출신으로 들치기와 날치기 등 날쌔기는 조선 팔도에 최고라 자부한다. 게다가 각종 문서 및 인장 위조, 처녀 후리기와 과부 자빠뜨리기 등 국법을 어기는 모든 일에 능수능란하다.',
	'사당패에서 13살부터 몸을 팔다가 도망쳐 대길의 추노패로 합류한다. 철들기 전부터 저자를 떠돌았고, 그와 비슷하게 몸을 팔기 시작했으니 세상만사 눈치로 해결하고 임기응변으로 하루를 넘기려 한다.',
	'40대 중반. 한수 이북 최고의 추노꾼이었으나, 옛날 졸병이었던 대길이가 ‘조선 최고의 추노꾼이 되면서 자존심 및 존재감이 바닥에 떨어져서 뒹굴어 다닌다.',
	'좌포청 포교로 대길이 어렸을 때 가노 큰놈이가 도망간 사실을 고했으나 관청에 접수치 않고 추노꾼 천지호를 소개해 줬다. 어찌 보면 대길이 추노꾼이 될 수 있는 단초를 제공한 인물이다.',
	'30대 초반. 관기에서 물러나 별감 뒷방 생활을 하다가 일찍 홀로 되어 여각을 벌인 큰 주모.',
	'20대 초반. 비교적 젊은 나이에 숱한 파란을 겪고 그나마 있던 남편과도 사별했다는 동병상련으로 일을 돕다 아예 한집에서 자매처럼 지내고 있는 작은 주모.',
	'40대 중반. 문방구를 열고 심심풀이로 춘화나 그려 팔고 있는데, 때가 되면 언년이 용모화를 갱신하러 오는 대길을 단골로 두고 있다. 옛날에 조선을 들었다 놓았다 할 정도로 유명했던 화공이라 자처하고 특히 명나라 화가 당백호와 자웅을 겨뤘다 하는데, 나이를 감안함에 근거는 희박하다.',
	'군영에서 말을 치료하던 수의사였으나 은퇴하고 여각에서 세마나 돌보는 신세다. 홀아비로 늙어 가족이 없으며 방화백에게 춘화를 받아 스스로 즐기는 것이 유일한 낙이다.',
	'원래는 이대길 집안의 노비였는데(이름은 언년이), 어릴 때부터 대길을 좋아했었다. 병자호란이 일어나 청나라 병사들이 들이 닥쳐 그녀를 끌고가려고 할 때 대길이 뒤늦게나마 와서 구해주었다. 노비 시절에는 밝고 애교많은 전형적인 발랄한 하녀 캐릭터의 모습을 보여준다. 그러나 신분이 다르니 맺어져도 노리개나 다름 없다라며 대길한테 현실을 인식 시켜주는 모습, 동정을 바라는 게 아니라고 단호하게 말하는 등 자기 생각은 확실히 가지고 있는 캐릭터.',
	'30대 후반. 대길이네 집 씨종으로 태어났다. 어미는 북관에, 아비는 삼남에 팔려가며 종살이의 슬픔을 체득한다. 그러다 언년이 마저 대길과의 인연으로 팔려가게 되자, 집에 불을 지른 다음 언년이를 빼내 도망친다.',
	'30대 초중반. 검으로는 조선에서 상대를 찾을 수 없다던 최고의 무장. 조선 최고의 무사를 길러내는 훈련원 교관 시절, 병자호란을 맞아 가족을 잃고 끝까지 항전을 불사하지만 인조가 항복을 하며 전쟁이 끝난다. 홀로 적진에 뛰어들어 청나라 대장군 용골대와 수장승부를 겨루지만 승부를 내지 못하고 소현세자와 함께 청나라로 향한다.',
	'조총으로 강원도 산중을 누비며 호랑이를 쏴잡고 다닌 사냥꾼. 구수한 강원도 사투리를 구사하는 강원도 포수.  관동 포수로 호랑이 사냥을 다녔으나 선대에 갚지 못한 빚 때문에 노비로 팔렸다. 머슴질 수삼년에 더 견디지 못하고 탈출했으나 대길에게 잡혀 오른쪽 뺨에 도망노비라는 문신이 새겨진다.',
	'30대 초중반. 송태하와 동문수학해 나란히 무과에 합격하고 함께 훈련원에 들어갔으나, 늘 태하의 그늘에 가려 2인자로 만족해야 했다.  소현세자가 용골대와의 일기토를 벌일 대상으로 자신 대신 송태하를 지명하고 청에서 생활할 때의 보디가드 또한 송태하를 지명하송태하가 청군 진영을 향해 돌진할 때, 철웅은 그를 따르지 않았다. ',
	'50대 후반. 보통 입직 30년이 지나야 정승 자리에 오르는 게 보통인데, 그는 채 20년이 걸리지 않았다. 그는 중용의 도를 표방하면서 붕당정치 어느 곳에도 기울지 않았는데, 기실 어느 파의 누가 되기보다는 스스로 정계의 일가를 이루고 싶은 마음이 더 컸다.'
];
function showPerson(input){
	var bgColor = '';
	if(input > 13) bgColor = '#553168';
	else if(input > 12) bgColor = '#CFA725';
	else if(input > 11) bgColor = '#3F7C36';
	else if(input > 9) bgColor = '#D5387E';
	else if(input >= 0) bgColor = '#36596E';
	
	document.getElementById("main_articles").style.visibility = 'visible';
	document.getElementById("main_articles").style.background = bgColor;
	document.getElementById("character_img").src = '../image/person/' + img[input];
	document.getElementById("character_img").alt = img[input];
	document.getElementById("character_head").innerHTML = head[input];
	document.getElementById("character_p").innerHTML = p[input];
}