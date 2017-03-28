
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>Nhận diện JAV Idol</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
        <meta name="description" content="Nhận diện JAV Idol">
        <meta name="keywords" content="JAV, Microsoft Cognitive API">
        <meta name="author" content="Hoàng Phạm">
        <meta name="theme-color" content="#ffffff">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

        <meta property="fb:admins" content="100001799469827"/>
        <meta property="fb:app_id" content="1427665520889672"/>
        <meta property="og:title" content="Nhận diện JAV Idol"/>
        <meta property="og:url" content="http://jav-idol.toidicodedao.com/"/>
        <meta property="og:description" content="Công cụ giúp bạn tìm JAV idol mà không cần hóng link từ các " thánh""/>
        <meta property="og:image" content="http://jav-idol.toidicodedao.com/images/logo.png"/>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.9.0/loading-bar.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/angular-toastr/2.1.1/angular-toastr.min.css"/>
        <link rel="stylesheet" href="css/styles.css"/>
    </head>
    <body ng-app="jav-idol-face" ng-controller="mainCtrl">
        <!-- Sidebar Menu -->
        <div class="ui vertical inverted sidebar menu">
            <a href="#top" class="header item">
                <img class="ui logo" src="/images/logo.png">
                Nhận diện Idol
            </a>
            <a href="#guide" class="item">Hướng dẫn sử dụng</a>
            <a href="#idol-list" class="item">Danh sách idol</a>
            <a href="#review" class="item">Đánh giá</a>
            <a href="#about" class="item">Về tác giả</a>
            <a href="#discuss" class="item">Bình luận</a>
        </div>

        <div class="pusher">
            <div class="ui fixed inverted menu">
                <div class="ui container">
                    <a class="toc item">
                        <i class="sidebar icon"></i>
                    </a>
                    <a href="#top" class="header item">
                        <img class="ui logo" src="/images/logo.png">
                        Nhận diện Idol
                    </a>
                    <a href="#guide" class="item">Hướng dẫn sử dụng</a>
                    <a href="#idol-list" class="item">Danh sách idol</a>
                    <a href="#review" class="item">Đánh giá</a>
                    <a href="#about" class="item">Về tác giả</a>
                    <a href="#discuss" class="item">Bình luận</a>
                </div>
            </div>

            <!-- Page Contents -->

            <div class="ui header inverted center aligned segment">
                <div class="ui text container">
                    <img width="100" src="/images/header_logo.jpg" alt="" class="ui center">

                    <h1 class="ui inverted small-margin">
                        Nhận diện idol
                    </h1>
                    <h4 class="small-margin">Công cụ giúp bạn tìm JAV idol mà không cần hóng link từ các "thánh"</h4>
                                        <div class="fb-like" data-href="http://jav-idol.toidicodedao.com/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
                </div>
            </div>
            <br>
            <div id="top" class="ui container">
                <div class="application" ng-cloak>
                    <div class="ui form">
                        <div class="inline fields">
                            <label for="fruit">Dán link vào đây hoặc upload ảnh</label>
                            <div class="field" ng-click="input.source = 'link'">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="source" ng-model="input.source" value="link" checked="" tabindex="0" class="hidden">
                                    <label for="link">Dán link</label>
                                </div>
                            </div>
                            <div class="field" ng-click="input.source = 'file'">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="fruit" ng-model="input.source" value="file" tabindex="0" class="hidden">
                                    <label for="file">Upload ảnh</label>
                                </div>
                            </div>
                        </div>

                        <div class="field">
                            <div ng-class="{loading: isLoading}" class="ui action input">
                                <input type="text" ng-if="input.source == 'link'" ng-model="input.imageLink" placeholder="Link ảnh"/>
                                <input type="file" fileread="input.imageLink" ng-if="input.source == 'file'" placeholder="Upload ảnh"/>

                                <button ng-disabled="isLoading || !input.imageLink" ng-click="recognize()" class="ui icon primary button">

                                    <span ng-if="!isLoading">
                                        <i class="search icon"></i>
                                        Tìm idol</span>
                                    <span ng-if="isLoading">
                                        <i class="spinner loading icon"></i>
                                        Đang tìm, chờ tí</span>
                                </button>

                            </div>
                        </div>
                    </div>
                    <div class="ui center aligned basic segment">
                        <div class="source-image">
                            <img src="http://placehold.it/600x300?text=JAV+idol" ng-if="!input.imageLink" class="ui"/>
                            <img ng-if="input.imageLink" ng-src="{{input.imageLink}}" id="source-image" class="ui"/>
                            <div popup data-html="<img class='ui image idol-name-popup' src='{{face.candidate.thumbnail}}' />" data-position="bottom center" class="idol-face" ng-style="face.face" ng-repeat="face in faces">
                                <!--
                                <a target="_blank" ng-href="http://www.jjgirls.com{{face.candidate.link}}">
                                    <span ng-style="face.candidate.nameStyle" class="idol-name">{{face.candidate.name}}</span>
                                </a>
-->
                                <a target="_blank">
                                    <span ng-style="face.candidate.nameStyle" class="idol-name">{{face.candidate.name}}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="ui clearfix">

                        <h3>Kết quả gần đây nhất (realtime, lọc ảnh 18+)</h3>
                        <div class="ui four doubling cards" ng-cloak>
                            <div class="card" ng-repeat="entry in latestEntries | orderBy:'-' ">
                                <a target="_blank" ng-href="{{entry.image}}" class="image entry-thumbnail">
                                    <img ng-src="{{entry.image}}">
                                </a>
                                <div class="content">
                                    <div class="header">{{entry.idols}}</div>
                                    <div class="meta">
                                        <span time="{{entry.time}}"></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 id="guide" class="section ui horizontal header divider">
                    Hướng dẫn sử dụng
                </h2>

                <div class="ui text container">

                    <p>Cách sử dụng cực kì đơn giản</p>
                    <p>
                        <b>Bước 1:</b>
                        Click chuột phải vào tấm hình bạn muốn tìm, chọn "Copy Image Address"</p>
                    <p>
                        <b>Bước 2:</b>
                        Paste vào textbox và bấm "Nhận diện idol". Nếu ảnh nằm trong máy, bạn nhấp vào "Upload ảnh", chọn ảnh và bấm "Nhận diện Idol"</p>
                    <p>

                        <img src="/images/guide.jpg" class="ui image">
                        <h3 class="section ui horizontal header divider">
                            Về ứng dụng
                        </h3>
                        <p>
                            <b>Hiện tại ứng dụng chỉ hoạt động cho Chrome, Android và iOS 9 trở lên. Nếu ảnh quá nhỏ sẽ không thể nhận diện được.</b>
                        </p>
                        <b>Nhận diện idol</b>
                        có thể hỗ trợ bạn tìm tên và link của hầu hết các JAV Idol nổi tiếng thông qua khuôn mặt.</p>
                    <p>Máy nhận dạng với độ chính xác vào khoảng
                        <b>60 đến 80%</b>, ảnh một hay nhiều người cũng chơi tuốt.
                    </p>
                    <p>Hiện tại, do dữ liệu còn ít nên hệ thống chỉ có thể nhận diện được khoảng 500 idol nổi tiếng. Dữ liệu này sẽ được cập nhật mỗi tháng.</p>
                    <p>Nếu thử không ra kết quả đúng, hãy tìm idol trong danh sách phía dưới để xem hệ thống có thể nhận diện được chưa nhé.</p>
                    <p>
                        <b>Lưu ý:
                        </b>Vui lòng sử dụng có ý thức. Không nên thử up ảnh bạn bè, người yêu v...v nếu không thấy muốn hậu quả đắng lòng. Có thanh niên đã nhảy cầu tự tử khi biết người yêu bấy lâu là Saori Hara.</p>
                    <br>
                    <p>Bạn có thể thử với một số link ảnh dưới đây:</p>
                </div>
                <br>
                <div class="ui four doubling cards" ng-cloak>
                    <div class="card" ng-repeat="image in testImages">
                        <a target="_blank" ng-href="{{image}}" class="image test-thumbnail">
                            <img ng-src="{{image}}">
                        </a>
                    </div>
                </div>

                <h2 id="idol-list" class="section ui horizontal header divider">
                    Danh sách idol
                </h2>
                <div>
                    <div class="ui text container">
                        <p>Hiện tại, hệ thống có thông tin của 2000 JAV/Gravure idol nổi tiếng nhất, và có thể nhận diện được
                            <b>500/2000</b>
                            trong tổng số này. Không có trong list này thì tìm không ra đâu :v.</p>
                        <p>Admin sẽ cố gắng bổ sung thông tin và nâng cao khả năng nhận diện của hệ thống mỗi tháng.</p>
                    </div>
                    <br>
                    <div class="ui fluid icon input">
                        <input type="text" ng-model="idolSearch" placeholder="Tìm idol">
                        <i class="search icon"></i>
                    </div>

                    <div class="idol-list ui six doubling cards" ng-cloak>
                        <div dir-paginate="idol in idols | filter: idolSearch | itemsPerPage: 12" class="card">
                            <a target="_blank" ng-href="{{idol.bigThumb}}" class="image idol-thumbnail">
                                <img ng-src="{{idol.thumbnail}}">
                            </a>
                            <div class="content">
                                <!--<a target="blank" ng-href="{{idol.link}}" class="header">{{idol.name}}</a>-->
                                <a target="blank" class="header">{{idol.name}}</a>
                                <div class="meta">
                                    <span ng-if="idol.id <= 500 || idol.id > 10000">
                                        <i class="green check circle icon"></i>
                                        Có thể nhận diện</span>
                                    <span ng-if="idol.id > 500 && idol.id < 10000">
                                        <i class="red remove circle icon"></i>
                                        Chưa thể nhận diện</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <dir-pagination-controls class="right floated"></dir-pagination-controls>
                </div>

                <div class="clearfix"></div>

                <h2 id="review" class="section ui horizontal header divider">
                    Đánh giá
                </h2>

                <div class="ui text container">
                    <div class="ui statistics idol-statistics">
                        <div class="statistic">
                            <div class="value">
                                <i class="heart icon"></i>
                                260000
                            </div>
                            <div class="label">
                                Ảnh đã nhận diện
                            </div>
                        </div>
                        <div class="statistic">
                            <div class="value">
                                <i class="user secret icon"></i>
                                120000
                            </div>
                            <div class="label">
                                Lượt visit
                            </div>
                        </div>
                    </div>
                    <br>
                    Tuy mới ra đời, nhưng
                    <b>Nhận diện Idol</b>
                    đã nhận được kha khá những đánh giá vô cùng khả quan từ phía cộng đồng.</p>

            </div>
            <br>

            <div class="ui vertical stripe quote segment">
                <div class="ui equal width stackable internally celled grid">
                    <div class="center aligned row">
                        <div class="column">
                            <h3>"Thật không thể tin nổi! Ứng dụng nhỏ, nhưng là một bước tiến lớn về công nghệ."</h3>
                            <p><img src="/images/quang.jpg" class="ui avatar image">
                                <b>Nổ Văn Quảng</b>
                                Giám đốc VAV, JAV và BKAV
                            </p>
                        </div>
                        <div class="column">
                            <h3>"Có nằm mơ tôi cũng không ngờ công nghệ của Microsoft lại được áp dụng một cách sáng tạo như thế"</h3>
                            <p><img src="/images/bill.jpg" class="ui avatar image">
                                <b>Biu Gết</b>
                                Sáng lập Microsoft
                            </p>
                        </div>
                        <div class="column">
                            <h3>"Một cái tát thẳng vào mặt những thằng post ảnh không đưa link"</h3>
                            <p>
                                <img src="/images/huy.jpg" class="ui avatar image">
                                <b>Anh Huy Phạm</b>
                                Admin Page 18+
                            </p>
                        </div>
                        <div class="column">
                            <h3>"Ứng dụng rất hữu ích, giúp ông nhìn mặt nhớ tên mấy đứa cháu gái thân thương"</h3>
                            <p>
                                <img src="/images/shigeo.jpg" class="ui avatar image">
                                <b>Shigeo Tokuda</b>
                                Cụ già thần thánh
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 id="about" class="section ui horizontal header divider">
                Về tác giả
            </h2>

            <div class="ui text container">
                <div class="ui grid">
                    <div class="sixteen wide mobile ten wide computer column">
                        <h3>Về tác giả</h3>
                        <p>Tác giả là Phạm Huy Hoàng, cựu sinh viên Đại học FPT, tác giả của blog IT
                            <a target="_blank" href="https://toidicodedao.com">Tôi đi Code dạo</a>. Vốn trầm lặng ít nói nên anh rất ít khi khoe khoang về bản thân. Quý bạn đoc có thể tìm hiểu thêm
                            <a target="_blank" href="https://toidicodedao.com/about">ở đây</a>.
                        </p>
                        <p>Đồng tác giả còn có anh Nguyễn Nhật Hoàng, cũng là cựu sinh viên FPT, còn trầm lặng ít nói hơn. Anh cũng có một blog IT tại
                            <a target="_blank" href="https://codeaholicguy.com">Codeaholicguy</a>.
                        </p>
                        <p>Cám cảnh dân tình post ảnh 18+ mà không share link, làm cho bách tích lầm than, dân tình oán thán, hai anh dốc hết tâm huyết không ăn không ngủ 3 ngày 3 đêm để viết nên
                            <b>Nhận diện Idol</b>. Nếu thấy có ích, quý bạn đọc hãy like
                            <a target="_blank" href="https://www.facebook.com/toidicodedao/">fanpage</a>
                            bên phải để ủng hộ tác giả nhé.
                        </p>

                        <h3>Về công nghệ</h3>
                        <p>Sản phẩm áp dụng khá nhiều công nghệ hiện đại, vừa để tác giả luyện tập, vừa để phục vụ người dùng.
                        </p>
                        <p>
                            Sử dụng Serverless Architecture và Cloud Computing,
                            <b>Nhận diện Idol</b>
                            có thể phục vụ cho hàng ngàn cho tới hàng triệu người sử dụng.</p>
                        <p>Nhận diện Idol từng phải tạm ngưng hoạt động một thời gian vì không có kinh phí chạy API. Xin chân thành cảm ơn anh Thuận bên
                            <a target="_blank" href="http://azurevn.net/">AzureVN.NET</a>, một cộng đồng lớn về Microsoft Azure tại Việt Nam, đã tài trợ account Azure Microsoft VS Ultimate để Nhận diện Idol có thể tiếp tục phục vụ các đồng dzâm, nhầm, người dùng.</p>
                        <h4>Back end</h4>
                        <div>
                            <div class="ui eight doubling cards">
                                <div class="card" ng-repeat="image in backends">
                                    <a target="_blank" class="image test-thumbnail">
                                        <img ng-src="/images/{{image}}">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h4>Front end</h4>
                        <div>
                            <div class="ui eight doubling cards">
                                <div class="card" ng-repeat="image in frontends">
                                    <a target="_blank" class="image test-thumbnail">
                                        <img ng-src="/images/{{image}}">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sixteen wide mobile six wide computer column">
                        <div class="fb-page" data-href="https://www.facebook.com/toidicodedao" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                            <blockquote cite="https://www.facebook.com/toidicodedao" class="fb-xfbml-parse-ignore">
                                <a href="https://www.facebook.com/toidicodedao">Tôi đi code dạo</a>
                            </blockquote>
                        </div>

                        <div class="fb-page" data-href="https://www.facebook.com/codeaholicguy" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                            <blockquote cite="https://www.facebook.com/codeaholicguy" class="fb-xfbml-parse-ignore">
                                <a href="https://www.facebook.com/codeaholicguy">Codeaholicguy</a>
                            </blockquote>
                        </div>

                        <div class="fb-page" data-href="https://www.facebook.com/msftazurevn/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                            <blockquote cite="https://www.facebook.com/msftazurevn/" class="fb-xfbml-parse-ignore">
                                <a href="https://www.facebook.com/msftazurevn/">AzureVN.net</a>
                            </blockquote>
                        </div>

                        <!-- <div>https://www.facebook.com/msftazurevn/</div> -->
                    </div>

                    <div class="sixteen wide column"></div>
                </div>
            </div>

            <h2 id="discuss" class="section ui horizontal header divider">
                Bình luận
            </h2>

            <div class="ui container">
                <div class="fb-comments" data-href="http://jav-idol.toidicodedao.com/" data-order-by="reverse_time" data-numposts="15"></div>
            </div>
        </div>

        <div id="fb-root"></div>
        <script>
            (function(d, s, id) {
                var js,
                    fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id))
                    return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.8&appId=1427665520889672";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        </script>

    </body>

    <script>
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            },
            i[r].l = 1 * new Date();
            a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-88777570-1', 'auto');
        ga('send', 'pageview');
    </script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.0/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.9.0/loading-bar.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-toastr/2.1.1/angular-toastr.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-toastr/2.1.1/angular-toastr.tpls.min.js"></script>
    <!-- Firebase -->
    <script src="https://www.gstatic.com/firebasejs/3.6.3/firebase.js"></script>
    <script src="https://cdn.firebase.com/libs/angularfire/2.1.0/angularfire.min.js"></script>

    <script>
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCpeV8PVQDIl_kHL00erE7mGrw3b11In2o",
            authDomain: "javidolfacebackup.firebaseapp.com",
            databaseURL: "https://javidolfacebackup.firebaseio.com",
            storageBucket: "javidolfacebackup.appspot.com",
            messagingSenderId: "552716101995"
        };
        firebase.initializeApp(config);
    </script>

    <script src="js/libs/dirPagination.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment-with-locales.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/locale/vi.js"></script>
    <script src="js/main.js"></script>
    <script src="js/app.js"></script>

</html>
