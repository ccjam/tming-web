import Router from 'next/dist/next-server/server/router'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
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
    
    
    
  }

  const router = useRouter();
  useEffect(() => {
    if(navigator.language.toLocaleLowerCase() === "ko-kr" || navigator.language.toLocaleLowerCase() === "ko" || navigator.language.toLocaleLowerCase() === "ko-KR") {
      router.replace( '/ko')
    }
  }, [])
  return (
    <div id="warp" >
		<div className="top_fixed">
			<div className="container">
				<div className="top_logo animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					<a href="#">home</a>
				</div>
				<div className="top_center pc">
					<div className="top_txt1 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						Make the broadcast easy and the viewers have fun!

					</div>
					<div className="top_txt2 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						From now on, just one TMing app!
					</div>
				</div>
				<div className="top_center mobile">
					<a href="#" onClick={download}><div className="top_btn animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						Windows Donwload
					</div></a>
				</div>
				<ul className="top_right pc animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					<li style={{opacity: 0}}>
						<ul className="lang">
							<li className=""><a href="/ko">KR</a></li>
							<li className="active"><a href="#">EN</a></li>
						</ul>
					</li>
					<li>
					<a href="#" onClick={download} > <div className="top_btn animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						Windows Donwload
					</div></a>
					</li>
				</ul>
				<ul className="top_right mobile animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					<li>
						<ul className="lang">
							<li className=""><a href="index.html">KR</a></li>
							<li className="active"><a href="index_en.html">EN</a></li>
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
					Make the broadcast easy and the viewers have fun!

				</div>
				<div className="page1_txt2 pc animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					From now on, just one TMing app will solve it!

				</div>
				<div className="page1_txt2 mobile animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					From now on, <br/> just one TMing app will solve it!

				</div>
				<div className="page1_txt3 pc animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					Try setting up various audience participation content, such as audience participation questionnaires and chat analysis.<br/>With Tming, you can make a richer broadcast.
				</div>
				<div className="page1_txt3 mobile animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					Try setting up various audience participation content,<br/> such as audience participation questionnaires and chat analysis.<br/>With Tming, you can make a richer broadcast.
				</div>
				<div onClick={download} className="page1_btn animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
					Windows Donwload
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
						<img src="img/page2_img1.png"/>
					</li>
					<li className="ul_info">
						<div className="img_info_r">
							<div className="img_info_r_t1 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">Bring all the features together!</div>
							<div className="img_info_r_t2 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">No chrome plug-ins, no switch plug-ins, etc.<br/>The TMing desktop application is the only way.<br/>Please try to create various audience participation content.</div>
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
							<div className="img_info_l_t1 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">broadcast program integration</div>
							<div className="img_info_l_t2 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">excellent compatibility with broadcast programs – OBS, Xsplit, etc.<br/>Perfect compatibility with existing broadcasting environments.</div>
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
							<div className="img_info_l_t1 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">broadcast program integration</div>
							<div className="img_info_l_t2 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">excellent compatibility with broadcast programs – OBS, Xsplit, etc.<br/>Perfect compatibility with existing broadcasting environments.</div>
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
							<div className="img_info_r_t1 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">Smart Automatic Backup Settings</div>
							<div className="img_info_r_t2 animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">I'm done with setting up a new one every time!
The audience participation questionnaire set to TMing,
All participation results data and so on are automatically saved on the PC.</div>
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
					<span>Please use it at times like this!</span>
				</p>
				<ul className="tab_3">
					<li className="animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						<div className="tab_3_img tab3_ico_1">
							<img src="img/tab3_ico_1.png"/>
						</div>
						<div className="tab_3_t">
							Viewers' participation content<br/>Those who want to host it.
						</div>
					</li>
					<li className="animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						<div className="tab_3_img tab3_ico_2">
							<img src="img/tab3_ico_2.png"/>
						</div>
						<div className="tab_3_t">
							New content.<br/>Those who want to make it.
						</div>
					</li>
					<li className="animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
						<div className="tab_3_img tab3_ico_3">
							<img src="img/tab3_ico_3.png"/>
						</div>
						<div className="tab_3_t">
							All in one place<br/>Those who want to use it
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
				The existing browser plug-in has a limited approach to functionality and only one feature.<br/>
				There are disadvantages that cannot be provided, but for TmingApp, when using the existing plug-in (OBS, Xsplit)<br/>
				It can be used in overlay format, making it easy to use a variety of functions.
				</div>
				<div className="title_info1 animate mobile" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
				The existing browser plug-in has a limited approach to functionality and only one feature.<br/>
				There are disadvantages that cannot be provided, but for TmingApp, when using the existing plug-in (OBS, Xsplit)<br/>
				It can be used in overlay format, making it easy to use a variety of functions.
				</div>






			</div>
			<div id="section-4" className="animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
			</div>
		</section>
		
		<div className="footer">
			<div className="container">
				<p>© SW Maestro 11th CCJAM</p>
			</div>
		</div>



	</div>
  )
}
