var appElement = document.querySelector('#App-1');
var card = appElement.querySelector('.flip-card-inner');
var cardNext = appElement.querySelector('#next');
var suggestions = appElement.querySelector('#suggestions');
var formMessage = appElement.querySelector('.App-message');
var answerElement = appElement.querySelector('#answer');
var lengthArr = appElement.querySelector('.lengthArr');
var flipCardFrontEle = appElement.querySelector('.flip-card-front');
var submit = appElement.querySelector('#submit');
var submitResult = appElement.querySelector('#submitResult');
var questionFrontId = appElement.querySelector('#questionFront');
var suggestionsMsg = appElement.querySelector('.suggestions');
var suggestionsElement = appElement.querySelector('#suggestionsBack');
var audio = document.querySelector('#audioError');

var vocabularyEnglish = [
  ['hanging', 'They liked...out together when they were kids', 'Gợi ý', 'hanging', "<img src='./Hai_co_tam.png' alt='Avatar' />"],
  ['Leisure', 'thời gian rảnh rỗi', 'Gợi ý', 'Leisure', "<img src='./Hatrang.png' alt='Avatar' />"],
  ['Leisure activity', 'hoạt động lúc rảnh rỗi', 'Gợi ý', '... activity ', "<img src='./MisaCute.png' alt='Avatar' />"],
  ['Hanging out', 'đi chơi với bạn bè', 'Gợi ý', 'Hanging... ', "<img src='./ChinBacNuiRung.jpg' alt='Avatar' />"],
  ['Hang out', 'tụ tập, đi chơi', 'Gợi ý', ' ... out', "<img src='./PhotDoi.jpg' alt='Avatar' />"],
  ["Let's hang out this weekend", 'Cuối tuần này đi chơi đi!', 'Gợi ý', ' Tình anh như nước dâng cao, <br> Tình em như dải lụa đào tẩm hương.'],

  ["What is your brother's name?", 'tên em trai của bạn là gì', 'Gợi ý', " ... brother's name?", "<img src='./Screenshot_20210503-120123_Gallery.jpg' alt='Avatar' />"],
  [
    'Window shopping',
    'n: Ngắm đồ bày trong các cửa hàng',
    'Gợi ý',
    'Anh đi đường ấy xa xa, <br> Để em ôm bóng trăng tà năm canh.',
    "<img src='./Annotation 2022-10-01 180957.png' alt='Avatar' />",
  ],
  [
    'Go window shopping',
    'v: Đi ngắm đồ bày trong các cửa hàng',
    'Gợi ý',
    'Trí tuệ không phải là sản phẩm của việc học mà là của nỗ lực cả đời để có được nó (Albert Einstein).',
    "<img src='./Thanh_ngu.png' alt='Avatar' />",
  ],
  ['Pet training', 'N: Huấn luyện thú cưng', 'Gợi ý', 'Học - học nữa - học mãi (Lê-Nin).'],
  [
    'Train a pet',
    'V: Huấn luyện thú cưng',
    'Gợi ý',
    'Người hỏi về điều mình chưa biết là nhà bác học, người xấu hổ không dám hỏi là kẻ thù của chính mình.',
    "<img src='./khaigiang8A6_2022.png' alt='Avatar' />",
  ],
  ['Making crafts', 'làm đồ thủ công', 'Gợi ý', 'Con tằm bối rối vì tơ  <br> Anh say vì rượu, em ngẩn ngơ vì tình.', "<img src='./GVCN8A6_2022.png' alt='Avatar' />"],

  ['Craft kit', 'bộ dụng cụ làm đồ thủ công', 'Gợi ý', 'Dẫu xây chín bậc phù đồ, <br> Không bằng làm phúc, cứu cho một người.', "<img src='./tapthe8A6.png' alt='Avatar' />"],
  ['Bracelet', 'vòng đeo tay', 'Gợi ý', 'Nhiễu điều phủ lấy giá gương <br> Người trong một nước phải thương nhau cùng', "<img src='./trungthu2022.png' alt='Avatar' />"],
  ['Check out something', 'kiểm tra vật gì đó có phù hợp hay không', 'Gợi ý', 'Nghèo mà có nghĩa có nhân <br> Còn hơn sang cả mà lòng bội phu.'],
  ["Right up someone's street", 'đúng vị/ sở thích của ai', 'Gợi ý', 'Lấy hận thù diệt hận thù <br> Hận thù không mất nghìn thu vẫn còn'],
  ['Playing beach games', 'hoạt động chơi các môn thể thao trên bãi biển', 'Gợi ý', 'Ba năm quân tử trồng tre,<br> Mười năm uốn gậy, đánh què tiểu nhân.'],
  ['Play beach games', 'chơi các môn thể thao trên bãi biển', 'Gợi ý', 'Chim khôn kêu tiếng rảnh rang,  <br> Người khôn nói tiếng dịu dàng dễ nghe.'],
  ['Satisfied', 'hài lòng', 'Gợi ý', 'Có đỏ mà chẳng có thơm <br> Như hoa dâm bụt, nên cơm cháo gì.'],
  ['DIY project', 'N:dự án, kế hoạch tự làm (đồ gì)', 'Gợi ý', 'DIY project'],
  ['Mountain biking', 'n: hoạt động đạp xe leo núi', 'Gợi ý', 'Lúc nghèo thì chẳng ai nhìn <br> Đến khi đỗ trạng chín nghìn anh em.'],
  ['Go mountain biking', 'v: đạp xe leo núi', 'Gợi ý', 'Một gánh sách không bằng một giáo viên giỏi'],
  ['Socialising', 'n: hoạt động giao lưu', 'Gợi ý', 'Trọng thầy mới được làm thầy'],
  ['Socialise', 'v: giao lưu', 'Gợi ý', 'Muốn biết phải hỏi, muốn giỏi phải học'],
  ['Texting', 'n: nhắn tin', 'Gợi ý', 'Bán tự vi sư, nhất tự vi sư'],
  ['Text', 'v: nhắn tin', 'Gợi ý', 'Thời gian dẫu bạc mái đầu <br> Tim trò vẫn tạc đậm câu ơn thầy'],
  ['Surfing the Internet', 'n: lướt web', 'Gợi ý', 'Con ơi ghi nhớ lời này <br> Công cha, nghĩa mẹ, công thầy chớ quên.'],
  ['Surf the Internet', 'v: lướt web', 'Gợi ý', 'Ăn quả nhớ kẻ trồng cây <br> Có danh có vọng nhớ thầy khi xưa.'],
  ['eating', 'I fancy ... out with friends at the weekend', 'Gợi ý', 'Mấy ai là kẻ không thầy <br> Thế gian thường nói đố mày làm nên.'],
  ['Doing', '.... DIY brings you a lot of amazing benefits', 'Gợi ý', 'Ơn thầy soi lối mở đường <br> Cho con vững bước dặm trường tương lai'],
  ['Paddy', 'n: cánh đồng lúa', 'Gợi ý', 'Cứ vui chơi cho hết đời trai trẻ <br>Rồi âm thầm lặng lẽ đạp xích lô.'],
  ['Rice', 'n: lúa, gạo, cơm', 'Gợi ý', 'Gái đâu có gái lạ lùng, <br> Chồng chẳng nằm cùng, ném chó xuống ao.'],
  ['Rice straw', 'rơm', 'Gợi ý', 'Chồng người đánh giặc sông Lô <br> Chồng em ngồi bếp rang ngô cháy quần'],
  ["What is your sister's name?", 'Tên chị gái của bạn là gì', 'Gợi ý', "... sister's name?"],
  ['DIY: Do-It-Yourself', 'tự làm, tự sửa (đồ gì)', 'Gợi ý', ' DIY: Do-It-Yourself'],
  [
    'Harvest time',
    'n: mùa thu hoạch, mùa gặt',
    'Gợi ý',
    'Học trò đèn sách hôm mai <br> Ngày sau thi đỗ nên trai mới hào <br> Làm nên quan thấp, quan cao <br> Làm nên vọng tía võng đào nghênh ngang.',
  ],
  ['Harvest - Collect', 'v: thu hoạch, gặt', 'Gợi ý', 'Giàu người ta chẳng có tham <br> Khó khăn ta liệu ta làm ta ăn.'],
  ['Ripe', 'ad: chín', 'Gợi ý', 'Cô kia cắt cỏ bên sông <br> Có muốn ăn nhãn thì lồng sang đây <br> Sang đây anh nắm cổ tay <br> Anh hỏi câu này: Có lấy anh chăng?'],
  ['Buffalo-drawn cart', 'xe trâu kéo', 'Gợi ý', 'Bao giờ cho gạo bén sàng? <br> Cho trăng bén gió, cho nàng bén anh?'],
  [
    'Grill fish in rice straw',
    'v: nướng cá bằng rơm',
    'Gợi ý',
    'Ước gì anh lấy được nàng <br> Để anh mua gạch Bát Tràng về xây <br> Xây dọc rồi lại xây ngang, <br> Xây hồ bán nguyệt cho nàng rửa chân.',
  ],
  ['Fly a kite', 'v: thả diều', 'Gợi ý', 'Bắt đầu ngủ giữa tiết 3 <br> Đến khi tỉnh giấc đã là tiết 5.'],
  ['Herd the buffalo', 'chăn trâu', 'Gợi ý', 'Học là học biết giữ giàng <br> Biết điều nhân nghĩa biết đàng hiếu trung​'],
  ['Go herding the buffalo', 'v: chăn trâu', 'Gợi ý', 'Muốn sang thì bắc cầu Kiều <br>Muốn con hay chữ thì yêu lấy thầy.'],
  ['Herd the cattle', 'v: chăn bò', 'Gợi ý', 'Học khôn đến chết, học nết đến già.'],
  ['Herd the sheep', 'v: chăn cừu', 'Gợi ý', 'Học hành vất vả kết quả ngọt bùi.'],
  ['Livestock', 'gia súc', 'Gợi ý', 'Học thầy học bạn, vô vạn phong lưu.'],
  ['Ride a buffalo', 'cưỡi trâu', 'Gợi ý', 'Làm trai cố chí lập thân <br> Rồi ra gặp hội phong vân cũng vừa <br> Nên ra tay kiếm tay cờ <br> Chẳng nên thì chớ, chẳng nhờ tay ai.'],
  ['Pick fruit', 'hái trái cây', 'Gợi ý', 'Bàn tay ta làm nên tất cả <br> Có sức người sỏi đá cũng thành cơm.'],
  ['Pick wild flowers', 'hái hoa dại', 'Gợi ý', 'Làm người ăn tối lo mai <br> Việc mình hồ dễ để ai lo lường.'],
  ['Collect hay', 'lượm cỏ khô', 'Gợi ý', 'Being ignorant is not so much a shame, as being unwilling to learn.'],
  ['Collect water', 'lấy nước', 'Gợi ý', 'Learn from the mistakes of others. You can never live long enough to make them all yourself.'],
  ['Convenient', 'ad: thuận tiện', 'Gợi ý', 'Học là học để mà hành <br> Vừa hành vừa học mới thành người khôn.'],
  ['Inconvenient', 'ad: bất tiện', 'Gợi ý', 'Rủ nhau đi học i o <br> Một ngày một chữ, con bò cũng thông.'],
  [
    'Peaceful',
    'ad: yên bình',
    'Gợi ý',
    'Khuyên ai đọc sách ngâm thơ <br> Dùi mài kinh sử để chờ kịp khoa <br> Mai sau nối được nghiệp nhà <br> Trước là mát mặt sau là vinh thân.',
  ],
  ['Hospitable', 'hiếu khách', 'Gợi ý', 'Học trò học hiếu học trung <br> Học cho đến mực anh hùng mới thôi.'],
  ['Generous', 'hào phóng', 'Gợi ý', 'Nhỏ còn thơ dại biết chi <br> Lớn thì đi học, học thì phải siêng <br>Theo đòi cũng thể bút nghiêng <br> Thua em kém chị cũng nên hổ mình.'],
  ['Optimistic', 'lạc quan', 'Gợi ý', 'Cơm cha áo mẹ chữ thầy <br> Gắng công mà học có ngày thành danh.'],
  ['Flying kites in the wide open countryside is great fun', 'Viết lại vd(123) Fly a kite', 'Gợi ý', 'Flying kites in the wide open countryside is great fun'],
  ["What is your father's name?", 'Tên bố của bạn là gì', 'Gợi ý', 'What is your...', "<img src='./Dai_Nhan.png' alt='Avatar' />"],
  ["What is your mother's name?", 'Tên mẹ của bạn là gì?', 'Gợi ý', 'What is your....', "<img src='./EmGaiHiep.jpg' alt='Avatar' />"],
  ['Vietnamese people are very hospitable', 'Viết lại vd(123) với từ: Hospitable', 'Gợi ý', 'Vietnamese people are very hospitable'],
  [
    'Livestock include farm animals such as buffalo, cow, goat or sheep',
    'Viết lại nội dung vừa nghe:<audio class="audioQuestion" controls><source src="https://www.tienganh123.com/file/phothong/lop8-moi/unit2/lesson2/vocab/audio/3-1.mp3"></audio>',
    'Gợi ý',
    'Livestock include farm animals such as buffalo, cow, goat or sheep',
  ],
  [
    'Paddy field',
    'Viết lại nội dung vừa nghe:<audio class="audioQuestion" controls><source src="https://www.tienganh123.com/file/phothong/lop8-moi/unit2/lesson1/vocab/audio/1.mp3"></audio>',
  ],
  [
    'Harvest time',
    'Viết lại nội dung vừa nghe:<audio class="audioQuestion" controls><source src="https://www.tienganh123.com/file/phothong/lop8-moi/unit2/lesson1/vocab/audio/4.mp3"></audio>',
  ],
  [
    'Go herding the buffaloes',
    'Viết lại nội dung vừa nghe:<audio class="audioQuestion" controls><source src="https://www.tienganh123.com/file/phothong/lop8-moi/unit2/lesson1/vocab/audio/11.mp3"></audio>',
    'Gợi ý',
    'Go herding the buffaloes',
  ],
  [
    'Herd the buffaloes',
    'Viết lại nội dung vừa nghe:<audio class="audioQuestion" controls><source src="https://www.tienganh123.com/file/phothong/lop8-moi/unit2/lesson1/vocab/audio/10.mp3"></audio>',
    'Gợi ý',
    'Herd the buffaloes',
  ],
  // ['0', '1', '2', '3', '4', '5', '6'],
];

var songs = [
  'Lười học thì chóng làm quan',
  'Luyện mãi thành tài, miệt mài tất giỏi',
  'Sai rồi! Cố gắng lên con',
  'Gần đúng rồi bạn, Cố lên nào',
  'Học thầy chẳng tày học bạn.',
  'Ngu dốt là tội ác, là giặc',
  'Có học mới biết, có đi mới đến.',
  'Có công mài sắt có ngày nên kim.',
  'Học là học đạo làm người <br> Con đừng lêu lổng kẻ cười người chê.',
  'The eye sees only what the mind is prepared to comprehend.',
  'Learn from yesterday, live for today, hope for tomorrow.',
  'Being ignorant is not so much a shame, as being unwilling to learn.',
  'Ngu dốt là tội ác, là giặc',
  'Lười nhác là kẻ thù của chính bản thân mình',
  'Không có Tri thức là tự làm nhục bản thân mình',
];

var lengths = vocabularyEnglish.length;
var minRequirements = 10;
var randomNumbers = [];
var randomTerm;
var i = 0;
var j = 0;

// Tạo câu hỏi ngẫu nhiên và hiển thị ra giao diện
function getRandomQuestion() {
  // Tạo ra một số ngẫu nhiên không lặp lại theo index trong phạm vi lengths của mảng
  var n = Math.floor(Math.random() * lengths);
  var check = randomNumbers.includes(n);
  if (!check) {
    randomNumbers.push(n);
  } else {
    while (check) {
      n = Math.floor(Math.random() * lengths);
      check = randomNumbers.includes(n);
      if (!check) {
        randomNumbers.push(n);
      }
    }
  }

  randomTerm = vocabularyEnglish[n];
  questionFrontId.innerHTML = `${randomTerm[1]}`;
  lengthArr.innerHTML = `Nhập lại bằng English ${i} / ${lengths}`;

  if (randomTerm[4]) {
    flipCardFrontEle.innerHTML = `${randomTerm[4]}`;
  }

  answerElement.innerHTML = '';

  console.log(`Gợi ý dành cho bạn: `, randomTerm);

  return randomTerm;
}

var randomSong = '';
function getRandomSong() {
  let newRandomSong;
  do {
    newRandomSong = songs[Math.floor(Math.random() * songs.length)];
  } while (newRandomSong === this.length);
  formMessage.innerHTML = `${newRandomSong}`;
}
var answerValue = answerElement.value;

cardNext.addEventListener('click', function () {
  handleTest = function (answerElement) {
    if (formMessage) {
      var testPunctuation = /[!:;"',.?-]/;
      if (testPunctuation.test(randomTerm[0]) && !testPunctuation.test(answerElement.value)) {
        if (answerElement.value && !testPunctuation.test(answerElement.value)) {
          suggestionsMsg.innerHTML = `Chú ý: Sử dụng dấu câu cho chính xác`;
          answerElement.classList.add('invalid');
        }
      }

      if (answerElement.value === '') {
        answerElement.classList.add('invalid');
        suggestionsMsg.innerHTML = `" Nhân bất học bất tri lý. <br> Ngọc bất trác, bất thành khí! " <br> Lười nhác là kẻ thù của chính bản thân mình`;
      }

      if (answerElement.value === randomTerm[0]) {
        formMessage.innerHTML = '';
        submitResult.innerHTML = '';
        getRandomQuestion();
        playerMusic();
        return undefined;
      } else {
        answerElement.classList.add('invalid');
        audio.play();
        getRandomSong();
      }
    }
    var testUppercase = /[A-Z]/;
    if (answerElement.value && !testUppercase.test(answerElement.value)) {
      if (!testUppercase.test(answerElement.value)) {
        suggestionsMsg.innerHTML = `Chú ý: Cần viết "HOA" cho chính xác`;
        answerElement.classList.add('invalid');
      }
    }

    return formMessage;
  };

  if (answerElement.value === randomTerm[0]) {
    i += 1; /* i để hiển thị số lần trả lời đúng trên tổng số Length */
    j += 1; /* J để xử lý treo máy khi lặp quấ giới hạn */
    lengthArr.innerHTML = `${i} / ${lengths}`;
    if (j === lengths - 1) {
      j = 0;
      randomNumbers = [];
    }
  }

  submitResult.innerHTML = '';
  suggestionsMsg.innerHTML = '';
  if (handleTest(answerElement) === undefined) {
    card.classList.remove('is-flipped');
    answerElement.focus();
    answerElement.value;
    // Xử lý thay ảnh nền:
    if (randomTerm[4]) {
      flipCardFrontEle.innerHTML = `${randomTerm[4]}`;
    }
  }
  if (i === minRequirements) {
    submitResult.classList.add('correctResults');
    submitResult.innerHTML = `Chúc mừng bạn!<br> Bạn đã vượt qua thử thách. <br> Bạn vẫn có thể tiếp tục luyện tập <br> Nếu bạn muốn nâng cao Trình độ!`;
  }
});

suggestions.addEventListener('click', function () {
  submitResult.innerHTML = '';
  formMessage.innerHTML = '';
  suggestionsMsg.innerHTML = '';
  // Xử lý hiển thị gợi ý:
  if (randomTerm[2] === 'Gợi ý') {
    suggestionsElement.innerHTML = `${randomTerm[3]}`;
  }
  // Kết hợp css Xử lý xoay ảnh:
  card.classList.toggle('is-flipped');
  // Xử lý hiển thị massage chỉ dẫn gợi ý:
  if (answerElement.value === '') {
    answerElement.classList.add('invalid');
    suggestionsMsg.innerHTML = `Lười học là "Bệnh cần chống như chống giặc!"`;
    return;
  } else {
    answerElement.classList.add('invalid');
    suggestionsMsg.innerHTML = `Click Next để kiểm tra kết quả của bạn!`;
    return;
  }
});

// Hướng dẫn nộp bài
submit.addEventListener('click', function () {
  formMessage.innerHTML = '';
  suggestionsMsg.innerHTML = '';
  if (!answerElement.value) {
    suggestionsMsg.innerHTML = '';
    answerElement.classList.add('invalid');
    submitResult.innerHTML = `Bạn cần phải trả lời trước khi bấm nộp bài`;
    if (i >= minRequirements) {
      submitResult.classList.add('correctResult');
      submitResult.classList.remove('correctResults');
      answerElement.classList.remove('invalid');
      submitResult.innerHTML = `Chúc mừng bạn đã vượt qua thử thách! <br> Kết quả của bạn đã được gửi tới hòm thư: nguyenthanhhoa075@gmail.com.`;
      playBeyMusic();
    }
    return;
  }
  if (i < minRequirements) {
    answerElement.classList.add('invalid');
    submitResult.innerHTML = `Hoàn thành đủ 10 câu trả lời đúng <br> mới được nộp bài!`;
  }
});

// Xóa massage lỗi và input value khi focus input:
answerElement.addEventListener('focus', function handleClearError(e) {
  formMessage.innerHTML = '';
  submitResult.innerHTML = '';
  suggestionsMsg.innerHTML = '';
  answerElement.classList.remove('invalid');
  answerElement.classList.remove('addInvalid');
  playBackgroundMusic();
  e.target.value = '';
});

answerElement.addEventListener('blur', function handle() {
  pauseBackgroundMusic();
});

// Chặn hành vi mặc định của Keydown và gán cho keydown Enter bằng Click
answerElement.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    cardNext.click();
    answerElement.value = '';
  }
});

//  Thay đổi tiếng đúng / sai:
var audioPlays = ['sairoichipoi.m4a', 'Tieng-yeah-tre-con.mp3'];
var audioElement = document.querySelector('#audioErrors');
function playerMusic() {
  audioElement.innerHTML = `<audio id='audioError' src="./${audioPlays[1]}"></audio>`;
  var audio = document.querySelector('#audioError');
  audio.play();
}

// Xử lý so sánh (Tham chiếu) input value với chỗi gốc:
answerElement.oninput = function () {
  formMessage.innerHTML = '';
  submitResult.innerHTML = '';
  suggestionsMsg.innerHTML = '';
  answerElement.classList.remove('invalid');

  // Xử lý báo lỗi khi nhập trường đầu vào bị sai:
  let intInputValue = randomTerm[0];
  let result = intInputValue.includes(answerElement.value);
  if (result) {
    answerElement.classList.remove('addInvalid');
    answerElement.classList.add('unInvalid');
  } else {
    answerElement.classList.remove('unInvalid');
    answerElement.classList.add('addInvalid');
  }
};

var audioBackgroundEle = document.querySelector('#audioBackgroundPlay');
var audioBeyEle = document.querySelector('#audioBeyPlay');
function playBackgroundMusic() {
  audioBackgroundEle.play();
}
function pauseBackgroundMusic() {
  audioBackgroundEle.pause();
}
function playBeyMusic() {
  audioBeyEle.play();
}
