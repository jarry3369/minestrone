var Description = new Array(
  "<p>송창준 입니다.</p>Follow me<ul class='m-social'><a href='' target='_blank'><i class='fa fa-facebook'></i></a><a href='#'><i class='fa fa-instagram'></i></a><a href='#'><i class='fa fa-github'></i></a></ul>",
  "<p>김민규 입니다.</p>Follow me<ul class='m-social'><a href='https://www.linkedin.com/in/mingyu-kim-a19b95160/' target='_blank'><i class='fa fa-linkedin-square'></i></a><a href='https://www.youtube.com/channel/UCURFT3j_XD9eN1rHSAbqMpQ?sub_confirmation=1' title='Subscribe to My Channels' target='_blank'><i class='fa fa-youtube-play'></i></a><a href='https://steamcommunity.com/id/k546' target='_blank' title='제 스팀 프로필 입니다. 관음 쿠다사이'><i class='fa fa-steam-square'></i></a></ul>",
  "<p>임현세 입니다.</p>Follow me<ul class='m-social'><a href='https://www.linkedin.com/in/hyeonse-im-131b54141/' target='_blank'><i class='fa fa-linkedin-square'></i></a><a href='https://github.com/IHyeon' target='_blank'><i class='fa fa-github'></i></a></ul>",
  "<p>이 준 입니다.</p>Follow me<ul class='m-social'><a href='' target='_blank'><i class='fa fa-facebook'></i></a><a href='#'><i class='fa fa-instagram'></i></a><a href='#'><i class='fa fa-github'></i></a></ul>",
  "<p>최현진 입니다.</p>Follow me<ul class='m-social'><a href='https://www.facebook.com/profile.php?id=100025983677184' target='_blank'><i class='fa fa-facebook'></i></a><a href='https://github.com/jarry3369' target='_blank'><i class='fa fa-github'></i></a></ul>",
  "<p>김선우 입니다.</p>Follow me<ul class='m-social'><a href='https://blog.naver.com/rhanwnwmf' target='_blank'><i class='fa fa-bold'></i></a><a href='#'><i class='fa fa-instagram'></i></a><a href='#'><i class='fa fa-github'></i></a></ul>",
  "<p>정보교 입니다.</p>Follow me<ul class='m-social'><a href='' target='_blank'><i class='fa fa-facebook'></i></a><a href='#'><i class='fa fa-instagram'></i></a><a href='#'><i class='fa fa-github'></i></a></ul>",
  "<p>조영환 입니다.</p>Follow me<ul class='m-social'><a href='' target='_blank'><i class='fa fa-facebook'></i></a><a href='#'><i class='fa fa-instagram'></i></a><a href='#'><i class='fa fa-github'></i></a></ul>",
  "<p>이정빈 입니다.</p>Follow me<ul class='m-social'><a href='' target='_blank'><i class='fa fa-facebook'></i></a><a href='#'><i class='fa fa-instagram'></i></a><a href='#'><i class='fa fa-github'></i></a></ul>",
  "<p>황정현 입니다.</p>Follow me<ul class='m-social'><a href='' target='_blank'><i class='fa fa-facebook'></i></a><a href='#'><i class='fa fa-instagram'></i></a><a href='#'><i class='fa fa-github'></i></a></ul>",
  "<p>박상언 입니다.</p>Follow me<ul class='m-social'><a href='' target='_blank'><i class='fa fa-facebook'></i></a><a href='#'><i class='fa fa-instagram'></i></a><a href='#'><i class='fa fa-github'></i></a></ul>"
  //ADD
);

var Dialogue = new Array(
  "사람1",
  "사람2",
  "사람3",
  "사람4",
  "사람5",
  "사람6",
  "사람7",
  "사람8",
  "사람9",
  "사람10",
  "사람11"
);


function redescription(id) {
  var id_code = id.substring(3, id.length)-1
  document.getElementById(id).title = Description[id_code]
}
function description(id){
  var id_code = id.substring(3, id.length)-1
  document.getElementById(id).title = Dialogue[id_code]
}
