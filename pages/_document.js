/*
<meta charset="utf-8">
	<meta name="viewport" content="width=640, user-scalable=no" />
	<meta content="telephone=no" name="format-detection">
	<!--if IE meta(http-equiv='X-UA-Compatible', content='IE=edge,chrome=1')-->
	<!--if lt IE 9 script(src='http://html5shiv.googlecode.com/svn/trunk/html5.js')-->
	<title>라이브러리 기본</title>
	<!--css import-->
	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<!-- silder -->	
	<!-- <link rel="stylesheet" href="css/swiper_layout.css"> -->
	<link rel="stylesheet" href="plugin/swiper/dist/css/swiper.css">
	<!-- animate -->
	<link rel="stylesheet" href="css/animate.min.css">
	<!-- popup -->
	<link rel="stylesheet" href="css/jquery.modal.css" />	
	<!-- Magnific Popup core CSS file -->
	<link rel="stylesheet" href="plugin/magnific-popup/magnific-popup.css">

	<style>
	.swiper-container {
		width: 600px;
		height: 300px;
	}
    </style>
    */

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
    }

    render() {
    return (
        <Html>
        <Head >
        <meta charset="utf-8"/>
	<meta name="viewport" content="width=640, user-scalable=no" />
	<meta content="telephone=no" name="format-detection"/>
	
	<link rel="stylesheet" type="text/css" href="css/reset.css"/>
	<link rel="stylesheet" type="text/css" href="css/main.css"/>
	
	
	<link rel="stylesheet" href="plugin/swiper/dist/css/swiper.css"/>
	
	<link rel="stylesheet" href="css/animate.min.css"/>
	
	<link rel="stylesheet" href="css/jquery.modal.css" />

	<link rel="stylesheet" href="plugin/magnific-popup/magnific-popup.css"/>
        </Head>
        <body>
            <Main />
            <NextScript>
                
            </NextScript>
            <script src="js/jquery.min.js"></script>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177841511-2"></script>
                <script src="js/scrolla.jquery.min.js"></script>
				<script src="https://use.fontawesome.com/35be55a773.js"></script>
                <script src="plugin/scrolla/scrolla.jquery.min.js"></script>
                <script src="plugin/swiper/dist/js/swiper.ani.js"></script>
                <script src="plugin/swiper/dist/js/swiper.min.js"></script>
                <script src="plugin/magnific-popup/jquery.magnific-popup.js"></script>
                <script src="js/main.js"></script>
                <script src="js/google.js"></script>
        </body>
        </Html>
    )
    }
}

export default MyDocument