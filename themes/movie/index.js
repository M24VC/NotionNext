// Import required modules
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, images, JS)
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve the HTML template
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en-US" xmlns="http://www.w3.org/1999/xhtml" dir="ltr">
<head>
    <title>Free CSS template</title>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="/css/style.css" type="text/css" media="all" />
    <!--[if IE 6]>
        <link rel="stylesheet" href="/css/ie6.css" type="text/css" media="all" />
    <![endif]-->
    <script type="text/javascript" src="/js/jquery-1.4.2.min.js"></script>
    <script type="text/javascript" src="/js/jquery-func.js"></script>
</head>
<body>
<!-- Shell -->
<div id="shell">
    <!-- Header -->
    <div id="header">
        <h1 id="logo"><a href="#">Movie Hunter</a></h1>
        <div class="social">
            <span>FOLLOW US ON:</span>
            <ul>
                <li><a class="twitter" href="#">twitter</a></li>
                <li><a class="facebook" href="#">facebook</a></li>
                <li><a class="vimeo" href="#">vimeo</a></li>
                <li><a class="rss" href="#">rss</a></li>
            </ul>
        </div>
        
        <!-- Navigation -->
        <div id="navigation">
            <ul>
                <li><a class="active" href="#">HOME</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">IN THEATERS</a></li>
                <li><a href="#">COMING SOON</a></li>
                <li><a href="#">CONTACT</a></li>
                <li><a href="#">ADVERTISE</a></li>
            </ul>
        </div>
        <!-- end Navigation -->
        
        <!-- Sub-menu -->
        <div id="sub-navigation">
            <ul>
                <li><a href="#">SHOW ALL</a></li>
                <li><a href="#">LATEST TRAILERS</a></li>
                <li><a href="#">TOP RATED</a></li>
                <li><a href="#">MOST COMMENTED</a></li>
            </ul>
            <div id="search">
                <form action="home_submit" method="get" accept-charset="utf-8">
                    <label for="search-field">SEARCH</label>                    
                    <input type="text" name="search field" value="Enter search here" id="search-field" title="Enter search here" class="blink search-field"  />
                    <input type="submit" value="GO!" class="search-button" />
                </form>
            </div>
        </div>
        <!-- end Sub-Menu -->
        
    </div>
    <!-- end Header -->
    
    <!-- Main -->
    <div id="main">
        <!-- Content -->
        <div id="content">
            <!-- Box -->
            <div class="box">
                <div class="head">
                    <h2>LATEST TRAILERS</h2>
                    <p class="text-right"><a href="#">See all</a></p>
                </div>
                <!-- Movie items here -->
            </div>
            <!-- end Box -->
        </div>
        <!-- end Content -->

        <!-- NEWS Section -->
        <div id="news">
            <div class="head">
                <h3>NEWS</h3>
                <p class="text-right"><a href="#">See all</a></p>
            </div>
            <!-- News items here -->
        </div>
        <!-- end NEWS -->
        <div class="cl">&nbsp;</div>
    </div>
    <!-- end Main -->

    <!-- Footer -->
    <div id="footer">
        <p>
            <a href="#">HOME</a> <span>|</span>
            <a href="#">NEWS</a> <span>|</span>
            <a href="#">IN THEATERS</a> <span>|</span>
            <a href="#">COMING SOON </a> <span>|</span>
            <a href="#">LATERS TRAILERS</a> <span>|</span>
            <a href="#">TOP RATED TRAILERS</a> <span>|</span>
            <a href="#">MOST COMMENTED TRAILERS</a> <span>|</span>
            <a href="#">ADVERTISE</a> <span>|</span>
            <a href="#">CONTACT </a>
        </p>
        <p> &copy; 2009 Movie Hunter, LLC. All Rights Reserved. <a target="_blank" href="http://www.mobanwang.com/" title="网页模板">网页模板</a></p>
    </div>
    <!-- end Footer -->
</div>
<!-- end Shell -->
</body>
</html>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
