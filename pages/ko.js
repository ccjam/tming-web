import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home(req, res) {
const download = async () => {
	console.log('dodwnload')
	const res = await fetch('/api/checkUpdate')
	const json = await res.json()
	console.log(json)
	var link = document.createElement("a");
  link.download = name;
  link.href = json.fileUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.gtag('event', 'download')
  window.gtag('event', 'conversion', {'send_to': 'AW-529575461/ppzuCIbR6uMBEKXcwvwB'});
  
	
	
}
  return (
    <div id="warp" >
		<Head>
        <title>Tming, 방송은 편하게, 시청자는 즐겁게!</title>
      </Head>
		<div className="top_fixed">
			<div className="container">
				<div className="top_logo animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					<a href="#">홈</a>
				</div>
				<div className="top_center pc">
					<div className="top_txt1 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						방송은 편하게, 시청자는 즐겁게!
					</div>
					<div className="top_txt2 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						이젠 TMing앱 하나로!
					</div>
				</div>
				<div className="top_center mobile">
					<a href="#" onClick={download}><div className="top_btn animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						Windows용 다운로드
					</div></a>
				</div>
				<ul className="top_right pc animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					<li style={{opacity: 0}}>
						<ul className="lang">
							<li className="active"><a href="#">KR</a></li>
							<li className=""><a href="/">EN</a></li>
						</ul>
					</li>
					<li>
					<a href="#" onClick={download}>  <div className="top_btn animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						Windows용 다운로드
					</div></a>
					</li>
				</ul>
				<ul className="top_right mobile animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					<li style={{opacity: 0}}>
						<ul className="lang">
							<li className="active"><a href="index.html">KR</a></li>
							<li className=""><a href="index_en.html">EN</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>

		<section id="section-1" >
			<div className="container">
				<div className="page1_logo animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					<img src="img/page1_logo.png"/>
				</div>
				<div className="page1_txt1 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					방송은 편하게, 시청자는 즐겁게!
				</div>
				<div className="page1_txt2 pc animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					이젠, TMing앱 하나로 해결! 
				</div>
				<div className="page1_txt2 mobile animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					이젠, TMing앱<br/> 하나로 해결! 
				</div>
				<div className="page1_txt3 pc animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					시청자 참여 설문, 채팅 분석 등 다양한 시청자 참여 컨텐츠를 손쉽게 설정해보세요.<br/>
					Tming과 함께라면 더 풍성한 방송을 만들 수 있습니다.
				</div>
				<div className="page1_txt3 mobile animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					시청자 참여 설문, 채팅 분석 등 다양한 시청자 참여<br/>컨텐츠를 손쉽게 설정해보세요.<br/>
					Tming과 함께라면 더 풍성한 방송을 만들 수 있습니다.

				</div>
				<div onClick={download} className="page1_btn animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					Windows용 다운로드
				</div>
				<div className="page1_img1 pc  animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					<img src="img/page1_img1.png"/>
				</div>
			</div>
			<div className="page1_img1 mobile animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					<img src="img/m/page1_img1.png"/>
				</div>
		</section>

		<section id="section-2" >
			<div className="container">
				<ul className="info_ul padding_1">
					<li className="ul_img animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					<iframe width="500" height="300" src="https://www.youtube.com/embed/qbTc6QXkB5g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</li>
					<li className="ul_info">
						<div className="img_info_r">
							<div className="img_info_r_t1 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">모든 기능을 하나로!</div>
							<div className="img_info_r_t2 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">크롬 플러그인, 트위치 플러그인 등의 설치 없이<br/>TMing 데스크탑 앱 하나만으로<br/>다양한 시청자 참여 컨텐츠를 만들어보세요</div>
							<ul className="icon_ul_r animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
								<li><a href="#"><img src="img/page2_icon1.png" alt=""/></a></li>
								<li><a href="#"><img src="img/page2_icon2.png" alt=""/></a></li>
							</ul>
						</div>
					</li>
				</ul>
				<div className="clear"></div>
				<ul className="info_ul padding_2 pc">
					<li className="ul_info">
						<div className="img_info_l">
							<div className="img_info_l_t1 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">방송 프로그램 통합</div>
							<div className="img_info_l_t2 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">방송 프로그램과의 뛰어난 호환, OBS, Xsplit등<br/>기존 방송 환경에 완벽하게 호환 가능합니다.</div>
							<ul className="icon_ul_l animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
								<li><a href="#"><img src="img/page2_icon3.png" alt=""/></a></li>
								<li><a href="#"><img src="img/page2_icon4.png" alt=""/></a></li>
							</ul>
						</div>
					</li>
					<li className="ul_img animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						<img src="img/page2_img2.png"/>
					</li>
				</ul>
				<div className="clear"></div>
				<ul className="info_ul padding_2 mobile">
					<li className="ul_img animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						<img src="img/m/page2_img2.png"/>
					</li>
					<li className="ul_info">
						<div className="img_info_l">
							<div className="img_info_l_t1 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">방송 프로그램 통합</div>
							<div className="img_info_l_t2 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">방송 프로그램과의 뛰어난 호환, OBS, Xsplit등<br/>기존 방송 환경에 완벽하게 호환 가능합니다.</div>
							<ul className="icon_ul_l animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
								<li><a href="#"><img src="img/page2_icon3.png" alt=""/></a></li>
								<li><a href="#"><img src="img/page2_icon4.png" alt=""/></a></li>
							</ul>
						</div>
					</li>
				</ul>
				<div className="clear"></div>
			</div>
		</section>
		<section id="section-3" >
			<div className="container">
				<ul className="info_ul padding_3">
					<li className="ul_img animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						<img src="img/page2_img3.png"/>
					</li>
					<li className="ul_info">
						<div className="img_info_r">
							<div className="img_info_r_t1 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">스마트 자동백업/세팅</div>
							<div className="img_info_r_t2 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">매번 새로 세팅하고 백업하는 건 그만!<br/>TMing에 설정해둔 시청자 참여 설문,<br/>참여 결과 데이터 등은 모두 PC에 자동으로 저장됩니다.</div>
							<ul className="icon_ul_r animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
								<li><a href="#"><img src="img/page2_icon5.png" alt=""/></a></li>
							</ul>
						</div>
					</li>
				</ul>
				<div className="clear"></div>
				<div className="content_logo animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					<img src="img/content_logo.png"/>
				</div>
				<p className="title_info animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					<span>이렇게 사용하세요!</span>
				</p>
				<ul className="tab_3">
					<li className="animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						<div className="tab_3_img tab3_ico_1">
							<img src="img/tab3_ico_1.png"/>
						</div>
						<div className="tab_3_t">
							시청자 참여 컨텐츠를<br/>진행하고 싶으신 분들
						</div>
					</li>
					<li className="animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						<div className="tab_3_img tab3_ico_2">
							<img src="img/tab3_ico_2.png"/>
						</div>
						<div className="tab_3_t">
							새로운 컨텐츠를<br/>만들고 싶으신 분들
						</div>
					</li>
					<li className="animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						<div className="tab_3_img tab3_ico_3">
							<img src="img/tab3_ico_3.png"/>
						</div>
						<div className="tab_3_t">
							여러 기능들을 한 곳에서<br/>쓰고 싶으신 분들
						</div>
					</li>
				</ul>
				<div className="content_logo1 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					<img src="img/content_logo.png"/>
				</div>
				<p className="title_info animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					<span>OVERAY FLOATING UI</span>
				</p>
				<div className="title_info1 animate pc" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
				기존 사용중이신 브라우저 플러그인은 기능사용에 제한적인 접근방식과 한가지 기능 밖에<br/>제공해주지 못하는 단점이 있지만 Tming App의 경우 기존 플러그인 사용시(OBS, Xsplit)<br/>오버레이 형식으로 띄워 사용이 가능하기 때문에 간편하게 다양한 기능을 손쉽게 사용할 수 있습니다.
				</div>
				<div className="title_info1 animate mobile" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
				기존 사용중이신 브라우저 플러그인은 기능사용에<br/>
				제한적인 접근방식과 한가지 기능 밖에 제공해주지<br/>
				못하는 단점이 있지만 Tming App의 경우 기존<br/>
				플러그인 사용시(OBS, Xsplit) 오버레이 형식으로 띄워<br/>
				사용이 가능하기 때문에 간편하게 다양한 기능을 손쉽게<br/>
				사용할 수 있습니다.
				</div>






			</div>
			<div id="section-4" className="animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
				<div className="title_info1 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/UqcMo-S2ghU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
		</section>
		
		<div className="footer">
			<div className="top_center">
				<p>© SW Maestro 11th CCJAM</p>
				<br></br>
				<a href="mailto:swmaestroccjam@gmail.com">
					<div className="top_btn cne" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						Contact us
					</div>
				</a>
			</div>
		</div>



	</div>
  )
}
