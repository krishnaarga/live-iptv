const channels = [
    {"lang": "Hindi", "group": "Music", "name": "9X Jalwa (1080p)", "url": "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/9x-jalwa/master.m3u8", "thumb": "https://i.imgur.com/qubgOi5.png"},
    {"lang": "Punjabi", "group": "Music", "name": "9X Tashan", "url": "https://9xjio.wiseplayout.com/9X_Tashan/master.m3u8", "thumb": "https://i.imgur.com/MMR1RMF.png"},
    {"lang": "Hindi", "group": "Music", "name": "9XM (576p)", "url": "https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/9xm/23886666-8fc5-470f-aab1-bd637ed607b1/3.m3u8", "thumb": "https://i.imgur.com/F17QtN2.png"},
    {"lang": "Hindi", "group": "Music", "name": "B4U Music (1080p)", "url": "https://cdnb4u.wiseplayout.com/B4U_Music/master.m3u8", "thumb": "https://i.imgur.com/KSxPLJA.png"},
    {"lang": "Punjabi", "group": "Music", "name": "Balle Balle (720p)", "url": "https://mcncdndigital.com/balleballetv/index.m3u8", "thumb": "https://i.imgur.com/oxkkWH5.png"},
    {"lang": "Hindi", "group": "Music", "name": "Boogle Bollywood (1080p)", "url": "http://live.agmediachandigarh.com/booglebollywood/774e3ea9f3fa9bcdac47f445b83b6653.sdp/index.m3u8", "thumb": "https://i.imgur.com/gaKzWdo.png"},
    {"lang": "Hindi", "group": "Music", "name": "Dhamaal (576p)", "url": "https://cdn-1.pishow.tv/live/1291/master.m3u8", "thumb": "https://i.imgur.com/J6D56EF.png"},
    {"lang": "Hindi", "group": "Music", "name": "Dil Se (360p)", "url": "https://live.hungama.com/linear/dil-se/playlist.m3u8", "thumb": "https://i.imgur.com/zYbltEk.png"},
    {"lang": "Hindi", "group": "Music", "name": "Insync (576p)", "url": "https://yuppftalive.akamaized.net/080823/insync/playlist.m3u8", "thumb": "https://i.imgur.com/fAJdazJ.png"},
    {"lang": "Hindi", "group": "Music", "name": "Kadak Hits (1080p)", "url": "https://live.hungama.com/linear/kadak-hits/playlist.m3u8", "thumb": "https://i.imgur.com/jxZYTO2.png"},
    {"lang": "Hindi", "group": "Music", "name": "Mastiii (1080p)", "url": "https://sablive-ddpb.akamaized.net/mastii/playlist.m3u8", "thumb": "https://i.imgur.com/lxgXHx4.png"},
    {"lang": "Punjabi", "group": "Music", "name": "Mh 1 Music (720p)", "url": "https://mhonemusic.com/hls/1/stream.m3u8", "thumb": "https://i.imgur.com/Pi6ldXm.png"},
    {"lang": "Hindi", "group": "Music", "name": "MK Tunes (720p)", "url": "https://cdn-3.pishow.tv/live/433/master.m3u8", "thumb": "https://i.imgur.com/6SUnfuM.png"},
    {"lang": "Hindi", "group": "Music", "name": "Music India (720p)", "url": "https://cdn-2.pishow.tv/live/226/master.m3u8", "thumb": "https://i.imgur.com/kXTCYqg.png"},
    {"lang": "Hindi", "group": "Music", "name": "Nazrana (720p)", "url": "https://live.hungama.com/linear/nazrana/playlist.m3u8", "thumb": "https://i.imgur.com/38Run52.png"},
    {"lang": "Hindi", "group": "Music", "name": "Pop Pataka (480p)", "url": "https://live.hungama.com/linear/pop-pataka/playlist.m3u8", "thumb": "https://i.imgur.com/9NacSLW.png"},
    {"lang": "Punjabi", "group": "Music", "name": "PTC Music (720p)", "url": "https://d2lk5u59tns74c.cloudfront.net/out/v1/f913cf893c594f73b114216e74a2efbc/index.m3u8", "thumb": "https://i.imgur.com/8PHk66Q.png"},
    {"lang": "Punjabi", "group": "Music", "name": "Punjabi Hits (1080p)", "url": "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/punjabi-hits/index.m3u8", "thumb": "https://i.imgur.com/i9xE87K.png"},
    {"lang": "Hindi", "group": "Music", "name": "ShowBox", "url": "https://epiconvh.akamaized.net/live/showbox/master.m3u8", "thumb": "https://i.imgur.com/Zm4Fhah.png"},
    {"lang": "Hindi", "group": "Music", "name": "Songdew TV (396p)", "url": "https://yupplivefragcp3.yuppcdn.net/260423/smil:songdew.smil/index.m3u8", "thumb": "https://i.imgur.com/aFlKqH4.png"},
    {"lang": "Hindi", "group": "Music", "name": "Steelbird Music (720p)", "url": "https://cdn2.in/SteelbirdMusicTVhls/live.m3u8", "thumb": "https://i.imgur.com/Egijzx3.png"},
    {"lang": "Hindi", "group": "Music", "name": "Tunes 6 (576p)", "url": "https://live.dinesh29.com.np/stream/jiotvplus/tunes6/master.m3u8", "thumb": "https://i.imgur.com/VUzMQ9S.png"},
    {"lang": "Hindi", "group": "Music", "name": "ZB Music (720p)", "url": "https://server.zillarbarta.com/zbmusic/index.m3u8", "thumb": "https://i.imgur.com/k1nb8u1.jpeg"},

    {"lang": "English", "group": "Movies", "name": "&flix (480p)", "url": "https://edge3-moblive.yuppcdn.net/drm/smil:nflixdrm.smil/index.m3u8", "thumb": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/%26flix_2025.svg/512px-%26flix_2025.svg.png"},
    {"lang": "Hindi", "group": "Movies", "name": "&pictures (1080p)", "url": "http://66.102.120.18:8000/play/a01t/index.m3u8", "thumb": "https://i.imgur.com/VYh3V8E.png"},
    {"lang": "English", "group": "Movies", "name": "&prive HD (1080p)", "url": "http://87.255.35.150:18494", "thumb": "https://i.imgur.com/qyyUlg3.png"},
    {"lang": "Hindi", "group": "Movies", "name": "&TV (1080p)", "url": "https://amg01117-amg01117c1-amgplt0165.playout.now3.amagi.tv/playlist.m3u8", "thumb": "https://i.imgur.com/32W50Y6.png"},
    {"lang": "Hindi", "group": "Movies", "name": "&xplor HD (1080p)", "url": "http://66.102.120.18:8000/play/a012/index.m3u8", "thumb": "https://i.imgur.com/9mK6dgM.png"},
    {"lang": "Hindi", "group": "Movies", "name": "Abzy Dhakad (480p)", "url": "https://d2lk5u59tns74c.cloudfront.net/out/v1/4fe6ab07a13543d6bdb2ec63b3e2df44/index.m3u8", "thumb": "https://i.imgur.com/5ORC4tn.png"},
    {"lang": "Hindi", "group": "Movies", "name": "Abzy Movies (480p)", "url": "https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/db8d4eca72d64748a00d0631debf542d/index.m3u8", "thumb": "https://i.imgur.com/LnVgKVF.png"},
    {"lang": "Bhojpuri", "group": "Movies", "name": "B4U Bhojpuri (1080p)", "url": "https://cdnb4u.wiseplayout.com/B4U_Bhojpuri/master.m3u8", "thumb": "https://i.imgur.com/NwOQUDp.png"},
    {"lang": "Hindi", "group": "Movies", "name": "B4U Kadak (1080p)", "url": "https://cdnb4u.wiseplayout.com/B4U_Kadak/master.m3u8", "thumb": "https://i.imgur.com/CKLn0ft.png"},
    {"lang": "Hindi", "group": "Movies", "name": "B4U Movies (1080p)", "url": "https://cdnb4u.wiseplayout.com/B4U_Movies/master.m3u8", "thumb": "https://i.imgur.com/M9kMFJl.png"},
    {"lang": "Hindi", "group": "Movies", "name": "B4U Plus (576p)", "url": "http://183.89.246.119:8881/play/a08l/index.m3u8", "thumb": "https://i.postimg.cc/L4Cpy9qt/b4uplus.png"},
    {"lang": "Hindi", "group": "Movies", "name": "Bflix Movies (576p)", "url": "http://163.61.227.29:8000/play/a05s/index.m3u8", "thumb": "https://i.imgur.com/5CtiQ45.png"},
    {"lang": "Bhojpuri", "group": "Movies", "name": "Bhojpuri Cinema (720p)", "url": "https://live-bhojpuri.akamaized.net/liveabr/playlist.m3u8", "thumb": "https://i.imgur.com/ABxIO7r.jpg"},
    {"lang": "Hindi", "group": "Movies", "name": "Colors Cineplex (1080p)", "url": "http://87.255.35.150:18296", "thumb": "https://i.imgur.com/Hvvjfk5.png"},
    {"lang": "Hindi", "group": "Movies", "name": "Colors Cineplex Bollywood (576p)", "url": "http://103.182.170.32:8888/play/a01o", "thumb": "https://i.imgur.com/EbHSQAJ.png"},
    {"lang": "Hindi", "group": "Movies", "name": "Dhinchaak (576p)", "url": "http://14.199.164.20:4001/play/a0o5/index.m3u8", "thumb": "https://i.imgur.com/oqqChlH.png"},
    {"lang": "Bhojpuri", "group": "Movies", "name": "Filamchi Bhojpuri (1080p)", "url": "https://epiconvh.akamaized.net/live/filamchi/master.m3u8", "thumb": "https://upload.wikimedia.org/wikipedia/en/c/c1/Filamchi-Bhojpuri_Tagline.jpg"},
    {"lang": "Hindi", "group": "Movies", "name": "Filmeraa (720p)", "url": "https://a.jsrdn.com/broadcast/7ef91d3d7a/+0000/c.m3u8", "thumb": "https://i.ibb.co/p4BwH0x/images-5.png"},
    {"lang": "Hindi", "group": "Movies", "name": "Maha Movie (576p)", "url": "http://14.199.164.20:4001/play/a0q7/index.m3u8", "thumb": "https://i.imgur.com/hpShFDL.png"},
    {"lang": "Hindi", "group": "Movies", "name": "Manoranjan Grand (720p)", "url": "https://cdn-1.pishow.tv/live/1011/master.m3u8", "thumb": "https://i.imgur.com/qfMEz78.png"},
    {"lang": "Hindi", "group": "Movies", "name": "Manoranjan Movies (720p)", "url": "https://cdn-2.pishow.tv/live/228/master.m3u8", "thumb": "https://i.imgur.com/oTBVML2.png"},
    {"lang": "English", "group": "Movies", "name": "MNX (1080p)", "url": "http://87.255.35.150:18936", "thumb": "https://i.imgur.com/Fo7n4xX.png"},
    {"lang": "Hindi", "group": "Movies", "name": "MoviePlus (576p)", "url": "http://202.164.50.194:8000/play/a03n/index.m3u8", "thumb": "https://i.imgur.com/THJEAqJ.png"},
    {"lang": "English", "group": "Movies", "name": "Movies Now (1080p)", "url": "http://87.255.35.150:18935", "thumb": "https://i.imgur.com/lShH4Z8.png"},
    {"lang": "Bhojpuri", "group": "Movies", "name": "Oscar Movies Bhojpuri (720p)", "url": "https://cdn-4.pishow.tv/live/233/master.m3u8", "thumb": ""},
    {"lang": "Hindi", "group": "Movies", "name": "Shemaroo Josh (720p)", "url": "https://airtelapp.shemaroo.com/shemarooChumbakTV/smil:shemarooChumbakTVadp.smil/playlist.m3u8", "thumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutWZzQySLPpaZvaSHq1SnpV0dXNSFZimyag&s"},
    {"lang": "Hindi", "group": "Movies", "name": "Star Gold 2 (576p)", "url": "http://87.255.35.150:18807", "thumb": "https://i.imgur.com/G0ZfzZr.png"},
    {"lang": "Hindi", "group": "Movies", "name": "Star Gold HD (1080p)", "url": "http://87.255.35.150:18859", "thumb": "https://i.imgur.com/xC460sj.png"},
    {"lang": "Hindi", "group": "Movies", "name": "Star Gold Select HD (1080p)", "url": "http://87.255.35.150:18429", "thumb": "https://i.imgur.com/U7eiuqv.png"},
    {"lang": "English", "group": "Movies", "name": "Star Movies HD (1080p)", "url": "http://87.255.35.150:18301", "thumb": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/STAR_Movies_logo.svg/512px-STAR_Movies_logo.svg.png"},
    {"lang": "English", "group": "Movies", "name": "Star Movies Select HD (1080p)", "url": "http://87.255.35.150:18548", "thumb": "https://i.imgur.com/bnzDNCF.png"},
    {"lang": "Hindi", "group": "Movies", "name": "Studio One + (720p)", "url": "https://cdn-1.pishow.tv/live/276/master.m3u8", "thumb": "https://i.imgur.com/yOPB7JB.png"},
    {"lang": "Hindi", "group": "Movies", "name": "Studio One Yuva (576p)", "url": "http://202.164.50.194:8000/play/a030/index.m3u8", "thumb": "https://i.imgur.com/lzsAPHZ.png"},
    {"lang": "Hindi", "group": "Movies", "name": "ZB Cinema (720p)", "url": "https://server.zillarbarta.com/ZBCINEMA/index.m3u8", "thumb": "https://i.imgur.com/kUg6WSk.jpeg"},
    {"lang": "Hindi", "group": "Movies", "name": "Zee Action (576p)", "url": "http://87.255.35.150:18507", "thumb": "https://i.imgur.com/MIzc3I1.png"},
    {"lang": "Hindi", "group": "Movies", "name": "Zee Bollymovies (1080p)", "url": "https://amg17931-zee-amg17931c8-samsung-th-6526.playouts.now.amagi.tv/playlist.m3u8", "thumb": "https://framerusercontent.com/images/mqfJ18x4jYe0GbZUbxSHsbnWU.png?scale-down-to=512"},
    {"lang": "Hindi", "group": "Movies", "name": "Zee Bollywood (576p)", "url": "http://87.255.35.150:18861", "thumb": "https://i.imgur.com/0qQrV84.png"},
    {"lang": "Hindi", "group": "Movies", "name": "Zee Cinema (1080p)", "url": "https://amg17931-zee-amg17931c5-samsung-au-8873.playouts.now.amagi.tv/playlist.m3u8", "thumb": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Zee_Cinema_2025.svg/512px-Zee_Cinema_2025.svg.png"},

    {"lang": "Hindi", "group": "Entertainment", "name": "Anmol TV (576p)", "url": "http://87.255.35.150:18467", "thumb": "https://static.wikia.nocookie.net/logopedia/images/9/9b/Anmol_TV_Logo_%282025%2C_Low_Quality%29.jpg"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Colors (1080p)", "url": "http://87.255.35.150:18890", "thumb": "https://i.imgur.com/M8uCJ0D.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Dabangg (720p)", "url": "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg01448-samsungin-dabanggin-samsungin/playlist.m3u8", "thumb": "https://i.imgur.com/6ChpxLy.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Desi Channel (720p)", "url": "https://live.wmncdn.net/desichannel/7e2dd0aed46b70a5c77f4affdb702e4b.sdp/playlist.m3u8", "thumb": ""},
    {"lang": "Hindi", "group": "Entertainment", "name": "E 24", "url": "https://live-e24.dailyhunt.in/eternowsa/live/amlst:E24_,b256,b512,b1024,b1824,.smil/playlist.m3u8", "thumb": "https://i.imgur.com/vCaPNTe.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "EET TV (1080p)", "url": "https://live.streamjo.com/eetlive/eettv.m3u8", "thumb": "https://i.imgur.com/rMldFW8.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Epic TV (1080p)", "url": "https://epiconvh.akamaized.net/live/epic/master.m3u8", "thumb": "https://i.imgur.com/h1Ofnon.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Hi Dost! (720p)", "url": "https://cdn-1.pishow.tv/live/224/master.m3u8", "thumb": "https://i.imgur.com/bnST6y5.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Ishara TV (1080p)", "url": "https://epiconvh.akamaized.net/live/ishaara/master.m3u8", "thumb": "https://i.imgur.com/W5YlC2v.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Mandra TV", "url": "http://192.99.2.28/mandra_hls/mandra.m3u8", "thumb": "https://i.ibb.co/92vyxNQ/logo.jpg"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Manoranjan TV (720p)", "url": "https://cdn-1.pishow.tv/live/1013/master.m3u8", "thumb": "https://i.imgur.com/YvAAgPo.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Max Middle East (1080p)", "url": "http://87.255.35.150:18851", "thumb": "https://i.imgur.com/AFXPVYD.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "MK Six (720p)", "url": "https://cdn-3.pishow.tv/live/1253/master.m3u8", "thumb": "https://i.imgur.com/wZjEssv.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "MTV (576p)", "url": "http://87.255.35.150:18901", "thumb": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/MTV_2021_%28brand_version%29.svg/512px-MTV_2021_%28brand_version%29.svg.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Nazara (1080p)", "url": "https://epiconvh.akamaized.net/live/nazara/master.m3u8", "thumb": "https://www.epicon.in/img/nazara-logo.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Nepal 1 (576p)", "url": "http://202.164.50.194:8000/play/a00o/index.m3u8", "thumb": "https://i.imgur.com/Pgg8dQ2.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "One TV (720p)", "url": "http://137.59.86.218:1935/live/onetv/playlist.m3u8", "thumb": "https://i.imgur.com/6Jh8LRI.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Pasand TV (576p)", "url": "https://yuppftalive.akamaized.net/080823/pasand/playlist.m3u8", "thumb": "https://upload.wikimedia.org/wikipedia/en/d/d7/Pasand-TV.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Raj Pariwar (1080p)", "url": "https://livestream.rajtvnet.in/hlslive/Admin/px08241089/live/Raj_Pariwar/master_1.m3u8", "thumb": "https://i.imgur.com/lV9ZGx9.png"},
    {"lang": "Punjabi", "group": "Entertainment", "name": "Sada TV (1080p)", "url": "http://cdn12.henico.net:8080/live/sadatv/index.m3u8", "thumb": "https://i.ibb.co/cXPzpGp/SADA-CHANNEL-HBN-global-Punjabi-Satellite-TV.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Shemaroo TV (720p)", "url": "https://cdn-3.pishow.tv/live/230/master.m3u8", "thumb": "https://i.imgur.com/UNNcOef.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Sony Entertainment Television (1080p)", "url": "https://nxtlive.net/sliv/stream.php?e=.m3u8&id=985980256", "thumb": "https://i.imgur.com/AkdfpVr.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Sony Max 2 (576p)", "url": "http://87.255.35.150:18841", "thumb": "https://i.imgur.com/gqUYk6C.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Sony Pal (576p)", "url": "http://87.255.35.150:18887", "thumb": "https://i.imgur.com/GnoJkj4.png"},
    {"lang": "English", "group": "Entertainment", "name": "Sony Pix (1080p)", "url": "http://87.255.35.150:18495", "thumb": "https://i.postimg.cc/Z5G8j67L/PIX-HD-WHITE.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Sony Yay! (576p)", "url": "http://87.255.35.150:18285", "thumb": "https://i.imgur.com/MhlO1dB.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Star Bharat HD (1080p)", "url": "http://87.255.35.150:18555", "thumb": "https://i.imgur.com/Q8ajPij.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Star Utsav (576p)", "url": "http://163.61.227.29:8000/play/a04p/index.m3u8", "thumb": "https://i.imgur.com/H1jhHDl.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "StarPlus HD (1080p)", "url": "http://87.255.35.150:18880", "thumb": "https://i.imgur.com/xWxNy3L.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Swaraj Express SMBC (720p)", "url": "https://cdn-2.pishow.tv/live/477/master.m3u8", "thumb": "https://i.imgur.com/vuF6PCJ.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Zee Bharat (720p)", "url": "https://vg-zeefta.akamaized.net/ptnr-yupptv/title-zeehindustan/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/96bbab12-582e-4540-af70-510ab6824581/main.m3u8", "thumb": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Zee_Bharat_2025.svg/512px-Zee_Bharat_2025.svg.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Zee Bihar Jharkhand (720p)", "url": "https://raw.githubusercontent.com/Alstruit/adaptive-streams/alstruit-4_24_in/streams/in/ZeeBiharJharkhand.m3u8", "thumb": "https://i.imgur.com/e26mQ7x.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Zee Madhya Pradesh Chhattisgarh (720p)", "url": "https://vg-zeefta.akamaized.net/ptnr-yupptv/title-zeemadhyachhattisgarh/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/2ab17056-6187-4f0e-a34d-f436ac479d6c/main.m3u8", "thumb": "https://i.imgur.com/YccuVVI.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Zee Power (576p)", "url": "http://87.255.35.150:18226", "thumb": "https://static.wikia.nocookie.net/logopedia/images/a/aa/Z_power_general.jpg"},
    {"lang": "Punjabi", "group": "Entertainment", "name": "Zee Punjab Haryana Himachal (720p)", "url": "https://vg-zeefta.akamaized.net/ptnr-yupptv/title-zeepunjabharyanahima/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/65eed269-2f3a-4dd0-ac89-d18959af28e3/main.m3u8", "thumb": "https://i.imgur.com/wnALPbu.png"},
    {"lang": "Punjabi", "group": "Entertainment", "name": "Zee Punjabi (576p)", "url": "http://87.255.35.150:18931", "thumb": "https://i.imgur.com/boDyrrZ.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Zee Rajasthan (720p)", "url": "https://vg-zeefta.akamaized.net/ptnr-yupptv/title-zeerajashthannews/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/8e864b9a-1681-41a0-99a6-387490bc5b24/main.m3u8", "thumb": "https://i.imgur.com/iYrrGlL.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Zee TV (1080p)", "url": "http://87.255.35.150:18849", "thumb": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Zee_TV_Logo_2025.svg/512px-Zee_TV_Logo_2025.svg.png"},
    {"lang": "Hindi", "group": "Entertainment", "name": "Zee Uttar Pradesh/Uttarakhand (720p)", "url": "https://duw35ict5q7th.cloudfront.net/index_3.m3u8", "thumb": "https://i.imgur.com/gxKFKRG.png"}
];

let currentGroup = 'All';
let currentLang = 'All';
const video = document.getElementById('video');
const errorOverlay = document.getElementById('error-overlay');
let hls = new Hls();
const inactiveKey = 'iptv_inactive';
const inactiveSet = new Set(JSON.parse(localStorage.getItem(inactiveKey) || '[]'));
let viewingInactive = false;

// 1. Unified Filter Function
function handleFilters() {
    const searchText = document.getElementById('search').value.toLowerCase();
    let filtered = channels.filter(ch => {
        const matchesSearch = ch.name.toLowerCase().includes(searchText);
        const matchesGroup = currentGroup === 'All' || ch.group === currentGroup;
        const matchesLang = currentLang === 'All' || ch.lang === currentLang;
        return matchesSearch && matchesGroup && matchesLang;
    });

    if (viewingInactive) {
        filtered = filtered.filter(ch => inactiveSet.has(ch.name));
    } else {
        filtered = filtered.filter(ch => !inactiveSet.has(ch.name));
    }

    renderList(filtered);
}

function setGroup(g) {
    currentGroup = g;
    updateUIButtons('group-filters', g);
    handleFilters();
}

function setLang(l) {
    currentLang = l;
    updateUIButtons('lang-filters', l);
    handleFilters();
}

function updateUIButtons(containerId, activeText) {
    document.querySelectorAll(`#${containerId} .filter-btn`).forEach(btn => {
        btn.classList.toggle('active', btn.innerText === activeText || (activeText === 'All' && btn.innerText.includes('All')));
    });
    // update inactive view button state
    const inBtn = document.getElementById('inactive-view-btn');
    if (inBtn) inBtn.classList.toggle('active', viewingInactive);
}

// 2. Render List
function renderList(list) {
    const container = document.getElementById('playlist');
    container.innerHTML = '';
    list.forEach(ch => {
        const card = document.createElement('div');
        card.className = 'channel-card';
        card.innerHTML = `<img src="${ch.thumb}"><div class="channel-name">${ch.name}</div>`;

        // inactivate/reactivate button
        const btn = document.createElement('button');
        btn.className = 'inactivate-btn';
        if (inactiveSet.has(ch.name)) {
            btn.classList.add('active');
            btn.textContent = '↺';
            btn.title = 'Reactivate channel';
        } else {
            btn.textContent = '✕';
            btn.title = 'Mark Inactive';
        }

        btn.onclick = (e) => { e.stopPropagation(); toggleChannelActive(ch.name); };

        card.appendChild(btn);
        card.onclick = () => playChannel(ch);
        container.appendChild(card);
    });
}

// 3. Play & Error Handling
function playChannel(ch) {
    errorOverlay.style.display = 'none';
    document.getElementById('current-title').innerText = ch.name;
    document.getElementById('current-meta').innerText = `${ch.group} | ${ch.lang}`;

    if (Hls.isSupported()) {
        hls.destroy();
        hls = new Hls();
        hls.loadSource(ch.url);
        hls.attachMedia(video);

        // Error listener for HLS.js
        hls.on(Hls.Events.ERROR, function (event, data) {
            if (data.fatal) {
                console.error("HLS Error:", data);
                errorOverlay.style.display = 'flex';
            }
        });

        hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}));
    } 
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = ch.url;
        video.onerror = () => { errorOverlay.style.display = 'flex'; };
    }
}

function toggleChannelActive(name) {
    if (inactiveSet.has(name)) {
        inactiveSet.delete(name);
    } else {
        inactiveSet.add(name);
    }
    localStorage.setItem(inactiveKey, JSON.stringify(Array.from(inactiveSet)));
    handleFilters();
}

function toggleInactiveView() {
    viewingInactive = !viewingInactive;
    const btn = document.getElementById('inactive-view-btn');
    if (btn) btn.classList.toggle('active', viewingInactive);
    // Update search placeholder when viewing inactive list
    const search = document.getElementById('search');
    search.placeholder = viewingInactive ? 'Search inactive channels...' : 'Search channels...';
    handleFilters();
}

// Initial Load
handleFilters();