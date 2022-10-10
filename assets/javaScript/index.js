var appElement = document.querySelector("#App-1");
var card = appElement.querySelector(".flip-card-inner");
var formMessage = appElement.querySelector(".App-message");
var answerElement = appElement.querySelector("#answer");
var lengthArr = appElement.querySelector(".lengthArr");
var flipCardFrontEle = appElement.querySelector("#flip-card-front");
var cardNext = appElement.querySelector("#next");
var coating = appElement.querySelector(".coating");
var timeSum = appElement.querySelector(".timeSum");
var btnStar = appElement.querySelector("#btnStar");
var btnPause = appElement.querySelector("#btnPause");
var btnSubmits = appElement.querySelector("#btnSubmits");
var submitResult = appElement.querySelector("#submitResult");
var questionFrontId = appElement.querySelector("#questionFront");
var suggestions = appElement.querySelector("#suggestions");
var suggestionsMsg = appElement.querySelector(".suggestions");
var suggestionsElement = appElement.querySelector("#suggestionsBack");
var minRequirements = 10;

var vocabularyEnglish = [
  [
    "Let's hang out this weekend!",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson1/ly-thuyet/audio/4-1.mp3",
    "Gợi ý: Let's hang out this weekend!",
    "Hai_co_tam.png",
  ],
  [
    "My favourite leisure activity is arranging flowers.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson1/ly-thuyet/audio/2-1.mp3",
    "Gợi ý: My favourite leisure activity is arranging flowers.",
    "Hatrang.png",
  ],
  [
    "Leisure activity",
    "hoạt động lúc rảnh rỗi",
    "Gợi ý: ... activity ",
    "MisaCute.png",
  ],
  [
    "Girls love window shopping.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson1/ly-thuyet/audio/5-1.mp3",
    "Gợi ý: Girls love window shopping.",
    "ChinBacNuiRung.jpg",
  ],
  [
    "They go window shopping without buying or paying anything.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson1/ly-thuyet/audio/6-1.mp3",
    "Gợi ý: They go window shopping without buying or paying anything.",
    "PhotDoi.jpg",
  ],
  [
    "Do you like pet training?",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson1/ly-thuyet/audio/7-1.mp3",
    "Gợi ý: Tình anh như nước dâng cao, <br> Tình em như dải lụa đào tẩm hương.",
  ],
  [
    "What is your brother's name?",
    "tên em trai của bạn là gì",
    "Gợi ý: ... brother's name?",
    "Screenshot_20210503-120123_Gallery.jpg",
  ],
  [
    "Making crafts was my favourite leisure activity during summer holiday.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson1/ly-thuyet/audio/9-1.mp3",
    "Gợi ý: Anh đi đường ấy xa xa, <br> Để em ôm bóng trăng tà năm canh.",
    "Annotation 2022-10-01 180957.png",
  ],
  [
    "My parents gave me an amazing craft kit which has beads, buttons, stickers and wool, etc.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson1/ly-thuyet/audio/10-1.mp3",
    "Gợi ý: My parents gave me an amazing craft kit which has beads, buttons, stickers and wool, etc.",
    "Thanh_ngu.png",
  ],
  [
    "Look! This is my hand-made bracelet.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson1/ly-thuyet/audio/11-1.mp3",
    "Gợi ý: Học - học nữa - học mãi <br> (Lê-Nin).",
  ],
  [
    "Check out this craft kit. I think you'll like it.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson1/ly-thuyet/audio/12-1.mp3",
    "Gợi ý: Người hỏi về điều mình chưa biết là nhà bác học, người xấu hổ không dám hỏi là kẻ thù của chính mình.",
    "khaigiang8A6_2022.png",
  ],
  [
    "Wow, it's got all things I need: stickers, wool, buttons… This craft kit is right up my street!",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson1/ly-thuyet/audio/13-1.mp3",
    "Gợi ý: Wow, it's got all things I need: stickers, wool, buttons… This craft kit is right up my street!",
    "GVCN8A6_2022.png",
  ],
  [
    "Playing beach games is fun.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson2/ly-thuyet/audio/1-1.mp3",
    "Gợi ý: Dẫu xây chín bậc phù đồ, <br> Không bằng làm phúc, cứu cho một người.",
    "tapthe8A6.png",
  ],
  [
    "A day in the sun is a great time to play beach games.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson2/ly-thuyet/audio/2-2.mp3",
    "Gợi ý: Nhiễu điều phủ lấy giá gương <br> Người trong một nước phải thương nhau cùng",
    "trungthu2022.png",
  ],
  [
    "Doing DIY is the most creative leisure activity.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson2/ly-thuyet/audio/3-4.mp3",
    "Gợi ý: Nghèo mà có nghĩa có nhân <br> Còn hơn sang cả mà lòng bội phu.",
  ],
  [
    "I feel satisfied with these DIY flower vases.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson2/ly-thuyet/audio/4-2.mp3",
    "Gợi ý: Lấy hận thù diệt hận thù <br> Hận thù không mất nghìn thu vẫn còn",
  ],
  [
    "My DIY project is to make some new bookshelves this summer.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson2/ly-thuyet/audio/5-1.mp3",
    "Gợi ý: Ba năm quân tử trồng tre,<br> Mười năm uốn gậy, đánh què tiểu nhân.",
  ],
  [
    "Play beach games",
    "chơi các môn thể thao trên bãi biển",
    "Gợi ý: Chim khôn kêu tiếng rảnh rang,  <br> Người khôn nói tiếng dịu dàng dễ nghe.",
  ],
  [
    "Satisfied",
    "hài lòng",
    "Gợi ý: Có đỏ mà chẳng có thơm <br> Như hoa dâm bụt, nên cơm cháo gì.",
  ],
  ["DIY project", "N:dự án, kế hoạch tự làm (đồ gì)", "Gợi ý: DIY project"],
  [
    "Mountain biking",
    "n: hoạt động đạp xe leo núi",
    "Gợi ý: Lúc nghèo thì chẳng ai nhìn <br> Đến khi đỗ trạng chín nghìn anh em.",
  ],
  [
    "Go mountain biking",
    "v: đạp xe leo núi",
    "Gợi ý: Một gánh sách không bằng một giáo viên giỏi",
  ],
  ["Socialising", "n: hoạt động giao lưu", "Gợi ýTrọng thầy mới được làm thầy"],
  ["Socialise", "v: giao lưu", "Gợi ý: Muốn biết phải hỏi, muốn giỏi phải học"],
  ["Texting", "n: nhắn tin", "Gợi ý", "Bán tự vi sư, nhất tự vi sư"],
  [
    "Text",
    "v: nhắn tin",
    "Gợi ý: Thời gian dẫu bạc mái đầu <br> Tim trò vẫn tạc đậm câu ơn thầy",
  ],
  [
    "Surfing the Internet",
    "n: lướt web",
    "Gợi ý: Con ơi ghi nhớ lời này <br> Công cha, nghĩa mẹ, công thầy chớ quên.",
  ],
  [
    "Surf the Internet",
    "v: lướt web",
    "Gợi ý: Ăn quả nhớ kẻ trồng cây <br> Có danh có vọng nhớ thầy khi xưa.",
  ],
  [
    "eating",
    "I fancy ... out with friends at the weekend",
    "Gợi ý: Mấy ai là kẻ không thầy <br> Thế gian thường nói đố mày làm nên.",
  ],
  [
    "Doing",
    ".... DIY brings you a lot of amazing benefits",
    "Gợi ý: Ơn thầy soi lối mở đường <br> Cho con vững bước dặm trường tương lai",
  ],
  [
    "Paddy",
    "n: cánh đồng lúa",
    "Gợi ý: Cứ vui chơi cho hết đời trai trẻ <br>Rồi âm thầm lặng lẽ đạp xích lô.",
  ],
  [
    "Rice",
    "n: lúa, gạo, cơm",
    "Gợi ý: Gái đâu có gái lạ lùng, <br> Chồng chẳng nằm cùng, ném chó xuống ao.",
  ],
  [
    "Rice straw",
    "rơm",
    "Gợi ý: Chồng người đánh giặc sông Lô <br> Chồng em ngồi bếp rang ngô cháy quần",
  ],
  [
    "What is your sister's name?",
    "Tên chị gái của bạn là gì",
    "Gợi ý: ... sister's name?",
    "MisaCute.png",
  ],
  [
    "DIY: Do-It-Yourself",
    "tự làm, tự sửa (đồ gì)",
    "Gợi ý: DIY: Do-It-Yourself",
  ],
  [
    "Harvest time",
    "n: mùa thu hoạch, mùa gặt",
    "Gợi ý: Học trò đèn sách hôm mai <br> Ngày sau thi đỗ nên trai mới hào <br> Làm nên quan thấp, quan cao <br> Làm nên vọng tía võng đào nghênh ngang.",
  ],
  [
    "Harvest - Collect",
    "v: thu hoạch, gặt",
    "Gợi ý: Giàu người ta chẳng có tham <br> Khó khăn ta liệu ta làm ta ăn.",
  ],
  [
    "Ripe",
    "ad: chín",
    "Gợi ý: Cô kia cắt cỏ bên sông <br> Có muốn ăn nhãn thì lồng sang đây <br> Sang đây anh nắm cổ tay <br> Anh hỏi câu này: Có lấy anh chăng?",
  ],
  [
    "Buffalo-drawn cart",
    "xe trâu kéo",
    "Gợi ý: Bao giờ cho gạo bén sàng? <br> Cho trăng bén gió, cho nàng bén anh?",
  ],
  [
    "Grill fish in rice straw",
    "v: nướng cá bằng rơm",
    "Gợi ý: Ước gì anh lấy được nàng <br> Để anh mua gạch Bát Tràng về xây <br> Xây dọc rồi lại xây ngang, <br> Xây hồ bán nguyệt cho nàng rửa chân.",
  ],
  [
    "Fly a kite",
    "v: thả diều",
    "Gợi ý: Bắt đầu ngủ giữa tiết 3 <br> Đến khi tỉnh giấc đã là tiết 5.",
  ],
  [
    "Herd the buffalo",
    "chăn trâu",
    "Gợi ý: Học là học biết giữ giàng <br> Biết điều nhân nghĩa biết đàng hiếu trung​",
  ],
  [
    "Go herding the buffalo",
    "v: chăn trâu",
    "Gợi ý: Muốn sang thì bắc cầu Kiều <br>Muốn con hay chữ thì yêu lấy thầy.",
  ],
  ["Herd the cattle", "v: chăn bò", "Gợi ýHọc khôn đến chết, học nết đến già."],
  ["Herd the sheep", "v: chăn cừu", "Gợi ýHọc hành vất vả kết quả ngọt bùi."],
  ["Livestock", "gia súc", "Gợi ý", "Học thầy học bạn, vô vạn phong lưu."],
  [
    "Ride a buffalo",
    "cưỡi trâu",
    "Gợi ý: Làm trai cố chí lập thân <br> Rồi ra gặp hội phong vân cũng vừa <br> Nên ra tay kiếm tay cờ <br> Chẳng nên thì chớ, chẳng nhờ tay ai.",
  ],
  [
    "Pick fruit",
    "hái trái cây",
    "Gợi ý: Bàn tay ta làm nên tất cả <br> Có sức người sỏi đá cũng thành cơm.",
  ],
  [
    "Pick wild flowers",
    "hái hoa dại",
    "Gợi ý: Làm người ăn tối lo mai <br> Việc mình hồ dễ để ai lo lường.",
  ],
  ["Collect hay", "lượm cỏ khô", "Gợi ý: Collect hay"],
  [
    "Collect water",
    "lấy nước",
    "Gợi ý: Learn from the mistakes of others. You can never live long enough to make them all yourself.",
  ],
  [
    "Convenient",
    "ad: thuận tiện",
    "Gợi ý: Học là học để mà hành <br> Vừa hành vừa học mới thành người khôn.",
  ],
  [
    "Inconvenient",
    "ad: bất tiện",
    "Gợi ý: Rủ nhau đi học i o <br> Một ngày một chữ, con bò cũng thông.",
  ],
  [
    "Peaceful",
    "ad: yên bình",
    "Gợi ý: Khuyên ai đọc sách ngâm thơ <br> Dùi mài kinh sử để chờ kịp khoa <br> Mai sau nối được nghiệp nhà <br> Trước là mát mặt sau là vinh thân.",
  ],
  [
    "Hospitable",
    "hiếu khách",
    "Gợi ý: Học trò học hiếu học trung <br> Học cho đến mực anh hùng mới thôi.",
  ],
  [
    "Generous",
    "hào phóng",
    "Gợi ý: Nhỏ còn thơ dại biết chi <br> Lớn thì đi học, học thì phải siêng <br>Theo đòi cũng thể bút nghiêng <br> Thua em kém chị cũng nên hổ mình.",
  ],
  [
    "I like hanging out with the girl next door.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson1/ly-thuyet/audio/3-1.mp3",
    "Gợi ý: Cơm cha áo mẹ chữ thầy <br> Gắng công mà học có ngày thành danh.",
  ],
  [
    "Flying kites in the wide open countryside is great fun",
    "Viết lại vd(123) Fly a kite",
    "Gợi ý: Flying kites in the wide open countryside is great fun",
  ],
  [
    "What is your father's name?",
    "Tên bố của bạn là gì",
    "Gợi ý: What is your...",
    "Dai_Nhan.png",
  ],
  [
    "What is your mother's name?",
    "Tên mẹ của bạn là gì?",
    "Gợi ý: What is your....",
    "EmGaiHiep.jpg",
  ],
  [
    "Vietnamese people are very hospitable",
    "Viết lại vd(123) với từ: Hospitable",
    "Gợi ý: Vietnamese people are very hospitable",
  ],
  [
    "Livestock include farm animals such as buffalo, cow, goat or sheep",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit2/lesson2/vocab/audio/3-1.mp3",
    "Gợi ý: Livestock include farm animals such as buffalo, cow, goat or sheep",
  ],
  [
    "Paddy field",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit2/lesson1/vocab/audio/1.mp3",
  ],
  [
    "Harvest time",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit2/lesson1/vocab/audio/4.mp3",
  ],
  [
    "Go herding the buffaloes",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit2/lesson1/vocab/audio/11.mp3",
    "Gợi ý: Go herding the buffaloes",
  ],
  [
    "Herd the buffaloes",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit2/lesson1/vocab/audio/10.mp3",
    "Gợi ý: Herd the buffaloes",
  ],
  [
    "Mountain biking on Sunday is really exciting.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson2/ly-thuyet/audio/6-1.mp3",
    "Gợi ý: Mountain biking on Sunday is really exciting.",
  ],
  [
    "You should go mountain biking more often.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson2/ly-thuyet/audio/7-1.mp3",
    "Gợi ý: You should go mountain biking more often.",
  ],
  [
    "There isn’t much socialising at the party.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson2/ly-thuyet/audio/8-1.mp3",
    "Gợi ý: There isn’t much socialising at the party.",
  ],
  [
    "She socialised with many new friends at the summer camp.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson2/ly-thuyet/audio/9-1.mp3",
    "Gợi ý: She socialised with many new friends at the summer camp.",
  ],
  [
    "Too much texting can be harmful to our health.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson2/ly-thuyet/audio/10-1.mp3",
    "Gợi ý: Too much texting can be harmful to our health.",
  ],
  [
    "She pulled out the phone and sent him a text.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson2/ly-thuyet/audio/11-2.mp3",
    "Gợi ý: She pulled out the phone and sent him a text.",
  ],
  [
    "Surfing the Internet has become his daily routine.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson2/ly-thuyet/audio/12-1.mp3",
    "Gợi ý: Surfing the Internet has become his daily routine.",
  ],
  [
    "I often surf the net for learning tips.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson2/ly-thuyet/audio/13-1.mp3",
    "Gợi ý: I often surf the net for learning tips.",
  ],
  [
    "He won the first prize for breaking bricks.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson3/ex3/1.mp3",
    "Gợi ý: He won the first prize for breaking bricks.",
  ],
  [
    "The presentation provided brilliant ideas.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson3/ex3/2.mp3",
    "Gợi ý: The presentation provided brilliant ideas.",
  ],
  [
    "Brian is preparing a brief presentation on practicing british accent.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson3/ex3/3.mp3",
    "Gợi ý: Brian is preparing a brief presentation on practicing british accent.",
  ],
  [
    "The president ap proved the program to protect ze bras.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson3/ex3/4.mp3",
    "Gợi ý:  The president ap proved the program to protect ze bras.",
  ],
  [
    "The pretty princess prefers broccoli to brown bread for breakfast",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson3/ex3/5.mp3",
    "Gợi ý: The pretty princess prefers broccoli to brown bread for breakfast",
  ],
  [
    "I like skateboarding/ to skateboard in my free time.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson4/ly-thuyet/1-1.mp3",
    "Gợi ý: I like skateboarding/ to skateboard in my free time.",
  ],
  [
    "She loves training/ to train her dog.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson4/ly-thuyet/2-1.mp3",
    "Gợi ý: She loves training/ to train her dog.",
  ],
  [
    "My mother prefers going/ to go jogging.",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit1/lesson4/ly-thuyet/4-1.mp3",
    "Gợi ý: My mother prefers going/ to go jogging.",
  ],
  // // ['0', '1', '2', '3'],
  // // ['0', '1', '2', '3'],
  // // ['0', '1', '2', '3'],
  // // ['0', '1', '2', '3', '4', '5', '6'],
  // // ['0', '1', '2', '3', '4', '5', '6'],
  // // ['0', '1', '2', '3', '4', '5', '6'],
];
var songs = [
  "Lười học thì chóng làm quan",
  "Luyện mãi thành tài, miệt mài tất giỏi",
  "Sai rồi! Cố gắng lên con",
  "Gần đúng rồi bạn, Cố lên nào",
  "Học thầy chẳng tày học bạn.",
  "Ngu dốt là tội ác, là giặc",
  "Có học mới biết, có đi mới đến.",
  "Học là học đạo làm người <br> Con đừng lêu lổng kẻ cười người chê.",
  "The eye sees only what the mind is prepared to comprehend.",
  "Learn from yesterday, live for today, hope for tomorrow.",
  "Being ignorant is not so much a shame, as being unwilling to learn.",
  "Ngu dốt là tội ác, là giặc",
];
var congratulationMusic;
var correctAnswer;
var randomNumbers = [];
var randomTerm;
var n = 0;
var i = 0;
var j = 0;

// Tìm số (n) ngẫu nhiên theo index trong phạm vi max được truyền vào
function randomNumber(max) {
  // Xét (n) không cho lặp lại mỗi khi gọi hàm:
  j++;
  if (j === max - 1) {
    j = 0;
    randomNumbers = [];
  }
  n = Math.floor(Math.random() * max);
  var check = randomNumbers.includes(n);
  if (!check) {
    randomNumbers.push(n);
  } else {
    while (check) {
      n = Math.floor(Math.random() * max);
      check = randomNumbers.includes(n);
      if (!check) {
        randomNumbers.push(n);
      }
    }
  }
}

// Tạo câu hỏi ngẫu nhiên và hiển thị ra giao diện
function getRandomQuestion() {
  // Gọi hàm tạo (n) ngẫu nhiên để  lấy (n) làm chỉ mục
  var lengths = vocabularyEnglish.length;
  randomNumber(lengths);
  randomTerm = vocabularyEnglish[n];
  questionFrontId.innerHTML = `${randomTerm[1]}`;
  speakerWaves();
  lengthArr.innerHTML = `Nhập lại bằng English  ${i} / ${lengths}`;
  i++;
  // Xử lý nếu có ảnh thì hiển thị ra giao diện khi hàm được gọi.

  for (var items of randomTerm) {
    //  let result = intInputValue.includes(answerElement.value);
    if (items.includes("png") || items.includes("jpg")) {
      var itemImg = items;
      flipCardFrontEle.src = `./assets/img/${itemImg}`;
    }
    var itemMp3;
    if (items.includes("audio") || items.includes("mp3")) {
      itemMp3 = items;
      questionFrontId.innerHTML = `Listen, rewrite what you hear:`;
      audioQuestionElement.style.display = "block";
      audioItemElement.src = `${itemMp3}`;
    }
    if (itemMp3 === undefined) {
      var noAudioItem = audioLists[6];
      itemMp3 = `./assets/audio/${noAudioItem}.mp3`;
      audioItemElement.loop;
      audioItemElement.src = `${itemMp3}`;
    }
    // Xử lý hiển thị gợi ý:
    var itemSuggestions = items.endsWith("Gợi ý:", 6);
    var suggestionsValue;
    if (itemSuggestions) {
      suggestionsValue = items;
      suggestionsElement.innerHTML = `${suggestionsValue.slice(6)}`;
    }
    if (suggestionsValue === undefined) {
      suggestionsElement.innerHTML = `Câu này dễ mà <br> Cố gắng suy nghĩ xem nào!`;
    }
  }
  correctAnswer = randomTerm[0];
  console.log(`Gợi ý dành cho bạn: `, correctAnswer);
  return randomTerm;
}
// Xử lý Audio khi có audio question music:
var audioQuestionElement = appElement.querySelector(".audioQuestions");
var audioItemElement = appElement.querySelector(".audioItem");
function speakerWaves() {
  if (audioItemElement) {
    var speakerWaveEle = document.querySelector(".speakerWave");
    speakerWaveEle.addEventListener("click", () => {
      audioItemElement.style.transform = "scale(0.3)";
      if (isPlayIng) {
        pauseBackgroundMusic();
      }
      audioItemElement.play();
    });
  }
}

// Xử lý khi Click vào Btn Next
cardNext.addEventListener("click", function () {
  handleTest = function (answerElement) {
    if (formMessage) {
      var testPunctuation = /[!:;"',.?-]/;
      if (
        testPunctuation.test(correctAnswer) &&
        !testPunctuation.test(answerElement.value)
      ) {
        if (answerElement.value && !testPunctuation.test(answerElement.value)) {
          suggestionsMsg.innerHTML = `Chú ý: Sử dụng dấu câu cho chính xác`;
          answerElement.classList.add("invalid");
        }
      }
      if (answerElement.value === "") {
        answerElement.classList.add("invalid");
        suggestionsMsg.innerHTML = `"Nhân bất học bất tri lý. <br> Ngọc bất trác, bất thành khí!" <br>*  *  *<br> "Không có Tri thức là tự làm nhục Chính mình!" `;
      }
      if (answerElement.value === correctAnswer) {
        card.classList.remove("is-flipped");
        audioQuestionElement.style.display = "none";
        getRandomQuestion();
        if (i - 1 === minRequirements) {
          congratulationMusic = audioLists[9];
          audioPlay(congratulationMusic);
        } else if (i - 1 === minRequirements * 2) {
          congratulationMusic = audioLists[9];
          audioPlay(congratulationMusic);
        } else {
          var audioYeahList = audioLists[2];
          audioPlay(audioYeahList);
        }
        return undefined;
      } else {
        submitResult.innerHTML = "";
        answerElement.classList.add("invalid");
        var audioErrorList = audioLists[0];
        audioPlay(audioErrorList);
        getRandomSong();
      }
    }
    var testUppercase = /[A-Z]/;
    if (answerElement.value && !testUppercase.test(answerElement.value)) {
      if (!testUppercase.test(answerElement.value)) {
        suggestionsMsg.innerHTML = `Chú ý: Cần viết "HOA" cho chính xác`;
        answerElement.classList.add("invalid");
      }
    }
    return formMessage;
  };
  if (handleTest(answerElement) === undefined) {
    answerElement.focus();
  }
  if (i - 1 === minRequirements) {
    submitResult.classList.add("correctResults");
    btnSubmits.textContent = "Nộp bài!";
    submitResult.innerHTML = `Chúc mừng bạn!<br> Bạn đã vượt qua thử thách. <br> Bạn vẫn có thể tiếp tục luyện tập <br> Nếu bạn muốn nâng cao Trình độ!`;
    /* Object.assign để hợp nhất Object tạo Css inline nhưng phức tạp */
    // Object.assign(submitResult.style, {
    //   padding: '10px 0',
    //   marginBottom: '9px',
    // });
  } else if (i - 1 === minRequirements * 2) {
    submitResult.classList.add("correctResults");
    submitResult.innerHTML = ` Bạn là người thật chăm chỉ đấy <br> "Có công mài sắt có ngày nên kim" <br> Chúc mừng bạn cán mốc ${
      minRequirements * 2
    } câu đúng!`;
  }
});

//  Ngẫu nhiên in ra cấu chửi bới (Hát):
function getRandomSong() {
  var songLength = songs.length;
  randomNumber(songLength);
  let newRandomSong;
  newRandomSong = songs[n];
  formMessage.innerHTML = `${newRandomSong}`;
}
// Xử lý nút gợi ý:
suggestions.addEventListener("click", function () {
  submitResult.innerHTML = "";
  formMessage.innerHTML = "";
  suggestionsMsg.innerHTML = "";
  submitResult.classList.remove("correctResult");
  submitResult.classList.remove("correctResults");

  // Kết hợp css Xử lý xoay ảnh:
  // Xử lý hiển thị massage chỉ dẫn gợi ý:
  if (answerElement.value === "") {
    card.classList.toggle("is-flipped");
    answerElement.classList.add("invalid");
    suggestionsMsg.innerHTML = `<div id='sum10'>Lười học là "Bệnh cần chống như chống giặc!"</div>`;
    if (card.matches(".is-flipped")) {
      suggestions.textContent = "Đóng gợi ý";
      if (isPlayIng) {
        pauseBackgroundMusic();
      }
      audioItemElement.play();
    } else {
      suggestionsMsg.innerHTML = "";
      suggestions.textContent = "Xem gợi ý";
      answerElement.classList.remove("invalid");
    }
    return;
  } else if (answerElement.value === correctAnswer) {
    card.classList.toggle("is-flipped");
    answerElement.classList.remove("invalid");
    suggestionsElement.innerHTML = `Xin chúc mừng bạn đã đưa ra đáp án hoàn toàn chính xác!`;
    congratulationMusic = audioLists[9];
    audioPlay(congratulationMusic);
  } else {
    card.classList.toggle("is-flipped");
    answerElement.classList.add("invalid");
    suggestionsMsg.innerHTML = `<div id='sum10'>Click Next để kiểm tra kết quả của bạn!</div>`;
    if (card.matches(".is-flipped")) {
      if (isPlayIng) {
        pauseBackgroundMusic();
      }
      audioItemElement.play();
    }
  }
});

// Hướng dẫn nộp bài
btnSubmits.addEventListener("click", function () {
  formMessage.innerHTML = "";
  suggestionsMsg.innerHTML = "";
  if (!answerElement.value) {
    answerElement.classList.add("invalid");
    if (i === 1) {
      submitResult.innerHTML = `<div id='sum10' class="canTrai">Bạn bấm Star để bắt đâu trả lời câu hỏi<br> Nhập xong đáp án bấm tiếp tục để đi tiếp <br>Không nghĩ được đáp án bấm "Xem gợi ý" để nhận trợ giúp (Chỉ những câu khó) <br> Khi click Star sẽ bắt đầu tính thời gian<br>Cảm ơn bạn đã ủng hộ chúng tôi! <br> Vui lòng không tự động sao chép, chia sẻ dưới mọi hình thức.</div>`;
    }
    if (seconds > 5) {
      submitResult.innerHTML = `<div id='sum10'>Bạn cần trả lời tối thiểu ${minRequirements} Câu hỏi trước khi bấm Dừng lại</div>`;
    }

    if (i > minRequirements) {
      submitResult.classList.remove("correctResults");
      submitResult.classList.add("correctResult");
      answerElement.classList.remove("invalid");
      submitResult.innerHTML = `Chúc mừng bạn đã vượt qua thử thách! <br> Kết quả của bạn đã được gửi tới hòm thư: nguyenthanhhoa075@gmail.com.`;
      stop();
      watch.isOn ? stopWhenOn() : watch.reset();
      backgroundMusic.pause();
      btnSubmits.textContent = "Nộp bài!";
      var audioGoodBeyList = audioLists[3];
      audioPlay(audioGoodBeyList);
      myStopFunction();
      coating.style.display = "block";
      coating.style.opacity = 0;
    }
    return;
  }
  if (i < minRequirements) {
    answerElement.classList.add("invalid");
    submitResult.innerHTML = `<div id='sum10'>Hoàn thành ${minRequirements} câu đúng trước khi Dừng lại<br> Đừng nản chí! Kiên trì bạn sẽ Thành Công</div>`;
  }
});

btnStar.addEventListener("click", function () {
  answerElement.focus();
  suggestions.textContent = "Xem gợi ý";
  coating.style.display = "none";
});

coating.addEventListener("click", function () {
  coating.style.opacity = 1;
  coating.innerHTML = "Vui lòng Click Star để bắt đầu";
});

// Xóa massage lỗi và input value khi focus input:
answerElement.addEventListener("focus", function handleClearError(e) {
  playBackgroundMusic();
  formMessage.innerHTML = "";
  submitResult.innerHTML = "";
  suggestionsMsg.innerHTML = "";
  answerElement.classList.remove("invalid");
  answerElement.classList.remove("addInvalid");
  submitResult.classList.remove("correctResult");
  submitResult.classList.remove("correctResults");
  if (card.matches(".is-flipped")) {
    card.classList.remove("is-flipped");
  }
  suggestions.textContent = "Xem gợi ý";
  e.target.value = "";
});

// Chặn hành vi mặc định của Keydown và gán cho keydown Enter bằng onClick cardNext
answerElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    cardNext.click();
    answerElement.value = "";
  }
});

// Xử lý so sánh (Tham chiếu) input value với chỗi gốc:
answerElement.oninput = function () {
  formMessage.innerHTML = "";
  submitResult.innerHTML = "";
  suggestionsMsg.innerHTML = "";
  answerElement.classList.remove("invalid");
  submitResult.classList.remove("correctResult");
  submitResult.classList.remove("correctResults");

  // Xử lý báo lỗi khi nhập trường đầu vào bị sai:
  let intInputValue = correctAnswer;
  let result = intInputValue.includes(answerElement.value);
  if (result) {
    answerElement.classList.remove("addInvalid");
    answerElement.classList.add("unInvalid");
  } else {
    answerElement.classList.remove("unInvalid");
    answerElement.classList.add("addInvalid");
  }
};

//  Các hàm xử lý Audio:
var audioLists = [
  /* 0 */ "Am_Ohno",
  /* 1 */ "Uoc_mo_cua_Me",
  /* 2 */ "yeah",
  /* 3 */ "Tambiet",
  /* 4 */ "Nhac_nen_hay",
  /* 5 */ "Tieng_bom",
  /* 6 */ "Tiengkimgiaydonghokeu",
  /* 7 */ "Xin_chao",
  /* 8 */ "WelcomeToWonderland",
  /* 9 */ "Tieng_voTay0133",
];
var audioElement = document.querySelector("#audios");
function audioPlay(audioList) {
  audioElement.src = `./assets/audio/${audioList}.mp3`;
  audioElement.play();
}

var backgroundMusic;
var isPlayIng = false;
function playBackgroundMusic() {
  backgroundMusic = appElement.querySelector("#backgroundMusic");
  isPlayIng = true;
  backgroundMusic.play();
}
function pauseBackgroundMusic() {
  isPlayIng = false;
  backgroundMusic.pause();
}

function Dong_ho() {
  var gio = document.getElementById("gio");
  var gios = document.getElementById("gios");
  var phut = document.getElementById("phut");
  var phuts = document.getElementById("phuts");
  var giay = document.getElementById("giay");
  var giays = document.getElementById("giays");
  var Gio_hien_tai = new Date().getHours();
  var Phut_hien_tai = new Date().getMinutes();
  var Giay_hien_tai = new Date().getSeconds();

  gio.innerHTML = Gio_hien_tai;
  gios.innerHTML = Gio_hien_tai;
  if (Phut_hien_tai < 10) {
    phut.innerHTML = ` : 0${Phut_hien_tai}`;
    phuts.innerHTML = ` : 0${Phut_hien_tai}`;
  } else {
    phut.innerHTML = ` : ${Phut_hien_tai}`;
    phuts.innerHTML = ` : ${Phut_hien_tai}`;
  }
  if (Giay_hien_tai < 10) {
    giay.innerHTML = ` : 0${Giay_hien_tai}`;
    giays.innerHTML = ` : 0${Giay_hien_tai}`;
  } else {
    giay.innerHTML = ` : ${Giay_hien_tai}`;
    giays.innerHTML = ` : ${Giay_hien_tai}`;
  }
}
var Dem_gio = setInterval(Dong_ho, 1000);
function myStopFunction() {
  clearInterval(Dem_gio);
}

var dates = new Date();
var date = dates.getDate();
var current_date;
if (date < 10) {
  current_date = `Ngày 0${dates.getDate()} / ${
    dates.getMonth() + 1
  } / ${dates.getFullYear()}`;
} else {
  current_date = `${dates.getDate()} / ${
    dates.getMonth() + 1
  } / ${dates.getFullYear()}`;
}
document.querySelector(".shows_date").innerHTML = current_date;
document.querySelector(".shows_dates").innerHTML = current_date;
var seconds;
function Stopwatch(elem) {
  var time = 0;
  var offset;
  var interval;
  function update() {
    if (this.isOn) {
      time += delta();
    }
    elem.textContent = timeFormatter(time);
  }

  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }
  function timeFormatter(time) {
    time = new Date(time);

    var minutes = time.getMinutes().toString();
    seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();
    var millisecond = Math.floor(milliseconds / 10);

    if (minutes.length < 2) {
      minutes = "0" + minutes;
    }
    if (seconds.length < 2) {
      seconds = "0" + seconds;
    }

    if (millisecond < 10) {
      millisecond = `0${millisecond}`;
    }

    if (seconds > 5) {
      btnSubmits.textContent = "Stop";
    }
    var result = `${minutes} : ${seconds} : ${millisecond}`;
    return result;
  }

  this.start = function () {
    interval = setInterval(update.bind(this), 1);
    offset = Date.now();
    this.isOn = true;
    this.isOnStarAudio = true;
  };

  this.stop = function () {
    clearInterval(interval);
    interval = null;
    this.isOn = false;
    this.isOnStarAudio = true;
  };

  this.reset = function () {
    time = 0;
    interval = null;
    this.isOn = false;
    this.isOnStarAudio = false;
    update();
  };
  this.isOn = false;
  this.isOnStarAudio = false;
}

function start() {
  watch.start();
  // btnSubmits.textContent = 'Stop';
}

function stop() {
  btnStar.textContent = "Start";
  watch.stop();
}

function stopWhenOn() {
  btnStar.textContent = "Start";
  watch.stop();
  watch.reset();
}

btnStar.addEventListener("click", function () {
  var audioHelloList = audioLists[7];
  if (!watch.isOnStarAudio) {
    audioPlay(audioHelloList);
  }
  if (!watch.isOn) {
    start();
  }
});

btnPause.addEventListener("click", function () {
  if (watch.isOn) {
    backgroundMusic.pause();
    stop();
  }
});

// var count = 0;
// document.getElementById("beep").addEventListener(
//   "ended",
//   function () {
//     if (count <= 30) {
//       this.play();
//       count++;
//     }
//   },
//   false
// );
//  <audio id="beep" controls autoplay>
//    <source src="./assets/audio/Tiengkimgiay.mp3" type="audio/mpeg" />
//    Your browser does not support the audio element.
//  </audio>;
