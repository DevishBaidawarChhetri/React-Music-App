import { v4 as uuid } from 'uuid';

function chillHopMusics() {
  const base_url = "https://devish-music-player.000webhostapp.com/musics"
  const base_url_1 = "https://reactmusicplayer1.000webhostapp.com/musics"
  return [
    {
      id: uuid(),
      name: "ma hoon yaatri",
      artist: "mc flo ft. mac and yamabuddha",
      cover: "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/1497809_10151847660603435_304354483_n.jpg?_nc_cat=102&ccb=2&_nc_sid=9267fe&_nc_ohc=nzCC93A75tAAX9qnnQ0&_nc_ht=scontent.fktm8-1.fna&oh=c2c062c96b304cba7bb3899fd95df54c&oe=6012FDE5",
      audio: `${base_url}/ma-hu-yaatri-mc-flo.mp3`,
      color: ['#B0B0B0', '#A64067'],
      active: false
    },
    {
      id: uuid(),
      name: "love somebody",
      artist: "maroon 5",
      cover: "https://m.media-amazon.com/images/I/81n9uETN6UL._SS500_.jpg",
      audio: `${base_url}/love-somebody-maroon5.mp3`,
      color: ['#1DC3E0', '#FD48BD'],
      active: true
    },
    {
      id: uuid(),
      name: "be kind",
      artist: "marshmello and halsey",
      cover: "https://i1.sndcdn.com/artworks-8vfvuypQlqVI93cO-Zu7vmw-t500x500.jpg",
      audio: `${base_url}/be-kind-official-music-video-marshmello-and-halsey.mp3`,
      color: ['#F06E7A', '#E5E4E0'],
      active: false
    },
    {
      id: uuid(),
      name: "lucky strike",
      artist: "Maroon 5",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCG0CZClJYpfPMYT-Xfj_A-ftMisC8IUDc2w&usqp=CAU",
      audio: `${base_url}/lucky-strike-maroon5.mp3`,
      color: ['#75AAB8', '#968E9B'],
      active: false
    },
    {
      id: uuid(),
      name: "all of this",
      artist: "Blink 182",
      cover: "https://images-na.ssl-images-amazon.com/images/I/51DsM8XMUdL.jpg",
      audio: `${base_url}/all-of-this-blink-182.mp3`,
      color: ['#75BBBD', '#CB3797'],
      active: false
    },
    {
      id: uuid(),
      name: "21 guns",
      artist: "green day",
      cover: "https://cdns-images.dzcdn.net/images/cover/ebd6fc49c3c87cbd5441424f151c04f2/350x350.jpg",
      audio: `${base_url}/21-guns-greenday.mp3`,
      color: ['#DAB20C', '#750101'],
      active: false
    },
    {
      id: uuid(),
      name: "payphone (clean) - no rap",
      artist: "maroon 5",
      cover: "https://m.media-amazon.com/images/I/81n9uETN6UL._SS500_.jpg",
      audio: `${base_url}/payphone-maroon5-no-rap-clean-version.mp3`,
      color: ['#75AAB8', '#FD48BD'],
      active: false
    },
    {
      id: uuid(),
      name: "american idiot",
      artist: "green day",
      cover: "https://images-na.ssl-images-amazon.com/images/I/71Z0rLIvpuL._SX466_.jpg",
      audio: `${base_url}/american-idiot-greenday.mp3`,
      color: ['#FFFFFF', '#C22F30'],
      active: false
    },
    {
      id: uuid(),
      name: "kana boon (naruto opening 16)",
      artist: "silhouette",
      cover: "https://i1.sndcdn.com/artworks-000227856215-qe3u9v-t500x500.jpg",
      audio: `${base_url}/silhouette-kana-boon.mp3`,
      color: ['#FBDD86', '#A19E9F'],
      active: false
    },
    {
      id: uuid(),
      name: "animals",
      artist: "maroon 5",
      cover: "https://i.pinimg.com/originals/64/e4/c3/64e4c3c97cd3c84b8622e1550f2ddb68.jpg",
      audio: `${base_url}/animals-maroon5.mp3`,
      color: ['#6F6691', '#66262B'],
      active: false
    },
    {
      id: uuid(),
      name: "apologize",
      artist: "timbaland ft one republic",
      cover: "https://m.media-amazon.com/images/M/MV5BNGRlODU0NzYtMmZkYi00ZmFiLTkyMDYtYmI0ZGYyNjFiNTI3XkEyXkFqcGdeQXVyMjA4OTI5NDQ@._V1_.jpg",
      audio: `${base_url}/apologize-timbaland-ft-one-republic.mp3`,
      color: ['#B49A75', '#7C4539'],
      active: false
    },
    {
      id: uuid(),
      name: "ass back home",
      artist: "gym class heroes",
      cover: "https://upload.wikimedia.org/wikipedia/en/6/68/AssBackHome.jpg",
      audio: `${base_url}/ass-back-home-gym-class-heroes.mp3`,
      color: ['#F0712C', '#D316F3'],
      active: false
    },
    {
      id: uuid(),
      name: "back in black",
      artist: "AC/DC",
      cover: "https://i.ebayimg.com/00/s/MTQwMFgxNDAw/z/aK8AAOSwVHlez~hV/$_57.JPG",
      audio: `${base_url}/back-in-black-acdc.mp3`,
      color: ['#929292', '#0C0C0C'],
      active: false
    },
    {
      id: uuid(),
      name: "back to december",
      artist: "taylor swift",
      cover: "https://i.pinimg.com/originals/2c/ea/5c/2cea5c632449e73d692d8c1ff5cf31fa.jpg",
      audio: `${base_url}/back-to-december-taylor-swift.mp3`,
      color: ['#9C6992', '#FAC7AC'],
      active: false
    },
    {
      id: uuid(),
      name: "battle symphony",
      artist: "linkin park",
      cover: "https://www.spirit-of-metal.com/cover.php?id_album=382386",
      audio: `${base_url}/battle-symphony-linkin-park.mp3`,
      color: ['#F7E1C9', '#E7BA9E'],
      active: false
    },
    {
      id: uuid(),
      name: "beautiful goodbye",
      artist: "maroon 5",
      cover: "https://m.media-amazon.com/images/I/81n9uETN6UL._SS500_.jpg",
      audio: `${base_url}/beautiful-goodbye-maroon5.mp3`,
      color: ['#75AAB8', '#968E9B'],
      active: false
    },
    {
      id: uuid(),
      name: "bored to death",
      artist: "blink 182",
      cover: "https://lastfm.freetls.fastly.net/i/u/ar0/22b76185df59649eea7c24a755742836.jpg",
      audio: `${base_url}/bored-to-death-blink-182.mp3`,
      color: ['#E3EECE', '#EEE840'],
      active: false
    },
    {
      id: uuid(),
      name: "californication",
      artist: "red hot chilli peppers",
      cover: "https://ih1.redbubble.net/image.1147067129.2914/gbrf,6x6,f,540x540-pad,450x450,f8f8f8.jpg",
      audio: `${base_url}/californication-rhcp.mp3`,
      color: ['#2985BF', '#DB6037'],
      active: false
    },
    {
      id: uuid(),
      name: "cry thunder",
      artist: "dragon force",
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/DragonForce_Cry_Thunder_Single.jpg/220px-DragonForce_Cry_Thunder_Single.jpg",
      audio: `${base_url}/cry-thunder-dragon-force.mp3`,
      color: ['#CDD9B5', '#FFE198'],
      active: false
    },
    {
      id: uuid(),
      name: "faded",
      artist: "alan walker",
      cover: "https://at-cdn-s02.audiotool.com/2017/04/08/documents/alan_walker_-_faded_remix_the_m0uze_the_fox/1/cover256x256-316b72232d984228bcb867a8f4c3dfa0.jpg",
      audio: `${base_url}/faded-alan-walker .mp3`,
      color: ['#81CEC5', '#5D768E'],
      active: false
    },
    {
      id: uuid(),
      name: "fear of the dark",
      artist: "iron madien",
      cover: "https://upload.wikimedia.org/wikipedia/en/e/eb/Iron_Maiden_-_Fear_Of_The_Dark.jpg",
      audio: `${base_url}/fear-of-the-dark-iron-madien.mp3`,
      color: ['#E5E0C3', '#0E72D0'],
      active: false
    },
    {
      id: uuid(),
      name: "given up",
      artist: "linkin park",
      cover: "https://upload.wikimedia.org/wikipedia/en/4/44/Given_Up_Linkin_Park.jpg",
      audio: `${base_url}/given-up-linkinpark.mp3`,
      color: ['#EBD0AA', '#BF342C'],
      active: false
    },
    {
      id: uuid(),
      name: "hallowed be thy name",
      artist: "cradle of filth",
      cover: "https://4.bp.blogspot.com/-okI0OGl6HKw/WWdkiNDcVaI/AAAAAAAAJAI/GFwuCSyZQuIhIqt7w2WXssdHyOFTUuyKQCLcBGAs/s1600/2072950.jpg",
      audio: `${base_url}/hallowed-be-thy-name-cradle-of-filth.mp3`,
      color: ['#D2BDB4', '#A3464B'],
      active: false
    },
    {
      id: uuid(),
      name: "hard as rock",
      artist: "AC/DC",
      cover: "https://upload.wikimedia.org/wikipedia/en/d/d3/Acdchardasarock.jpg",
      audio: `${base_url}/hard-as-rock-acdc.mp3`,
      color: ['#B34931', '#283780'],
      active: false
    },
    {
      id: uuid(),
      name: "heavy",
      artist: "linkin park ft kiiara",
      cover: "https://i1.sndcdn.com/artworks-000234798863-jrxjc6-t500x500.jpg",
      audio: `${base_url}/heavy-linkin-Park-ft-kiiara.mp3`,
      color: ['#EBD0AA', '#BF342C'],
      active: false
    },
    {
      id: uuid(),
      name: "here i am",
      artist: "bryan adams",
      cover: "https://images.eil.com/large_image/BRYAN_ADAMS_HERE%2BI%2BAM-222624.jpg",
      audio: `${base_url}/here-i-am-bryan-adams.mp3`,
      color: ['#D5C6B3', '#AB8366'],
      active: false
    },
    {
      id: uuid(),
      name: "here without you",
      artist: "3 doors down",
      cover: "https://m.media-amazon.com/images/I/81rKY5MocfL._SS500_.jpg",
      audio: `${base_url}/here-without-you-3-doors-down.mp3`,
      color: ['#7EB1C4', '#297E63'],
      active: false
    },
    {
      id: uuid(),
      name: "highway to hell",
      artist: "AC/DC",
      cover: "https://upload.wikimedia.org/wikipedia/en/a/ac/Acdc_Highway_to_Hell.JPG",
      audio: `${base_url}/highway-to-hell-acdc.mp3`,
      color: ['#E5EEAD', '#F83561'],
      active: false
    },
    {
      id: uuid(),
      name: "i miss you",
      artist: "blink 182",
      cover: "https://i.pinimg.com/originals/b6/0f/08/b60f0812567d50a9c9568b0173cb1304.jpg",
      audio: `${base_url}/i-miss-you-blink-182.mp3`,
      color: ['#D8C8A7', '#231B20'],
      active: false
    },
    {
      id: uuid(),
      name: "school of rock",
      artist: "jack black",
      cover: "https://images-na.ssl-images-amazon.com/images/I/910pWm3bdAL._SX355_.jpg",
      audio: `${base_url}/jack-black-school-of-rock.mp3`,
      color: ['#EC4334', '#FFC122'],
      active: false
    },
    {
      id: uuid(),
      name: "just the way you are",
      artist: "bruno mars",
      cover: "https://upload.wikimedia.org/wikipedia/en/f/fa/Bruno-mars-just-the-way-you-are.jpg",
      audio: `${base_url}/just-the-way-you-are-bruno-mars.mp3`,
      color: ['#D93B30', '#3E368B'],
      active: false
    },
    {
      id: uuid(),
      name: "knocking on heavens door",
      artist: "guns n' roses",
      cover: "https://images-na.ssl-images-amazon.com/images/I/71H60P5NNuL._AC_SL1280_.jpg",
      audio: `${base_url}/knocking-on-heavens-door-gnr.mp3`,
      color: ['#F83561', '#5B1670'],
      active: false
    },
    {
      id: uuid(),
      name: "lose yourself",
      artist: "eminem",
      cover: "https://dd-res.s3.amazonaws.com/photos/118233063_28164.jpg",
      audio: `${base_url}/lose-yourself-eminem.mp3`,
      color: ['#8F927D', '#D69100'],
      active: false
    },
    {
      id: uuid(),
      name: "lost in the echo",
      artist: "linkin park",
      cover: "https://images.genius.com/51289d4bbcaefb4328522d8198553532.1000x1000x1.jpg",
      audio: `${base_url}/lost-in-the-echo-linkin-park.mp3`,
      color: ['#CED2D1', '#64302D'],
      active: false
    },
    {
      id: uuid(),
      name: "love story",
      artist: "taylor swift",
      cover: "https://upload.wikimedia.org/wikipedia/en/0/01/Taylor_Swift_-_Love_Story.png",
      audio: `${base_url}/love-story-taylor-swift.mp3`,
      color: ['#E1DBC9', '#D9BE43'],
      active: false
    },
    {
      id: uuid(),
      name: "maps",
      artist: "maroon 5",
      cover: "https://upload.wikimedia.org/wikipedia/en/3/3e/Maroon_5_Maps_cover.png",
      audio: `${base_url}/maps-maroon-5.mp3`,
      color: ['#D97C7A', '#798558'],
      active: false
    },
    {
      id: uuid(),
      name: "nothing else matter",
      artist: "metallica",
      cover: "https://i1.sndcdn.com/artworks-000053733408-ou9mfm-t500x500.jpg",
      audio: `${base_url}/nothing-else-matter-metallica.mp3`,
      color: ['#BD9560', '#582223'],
      active: false
    },
    {
      id: uuid(),
      name: "nymphetamine",
      artist: "cradle of filth",
      cover: "https://upload.wikimedia.org/wikipedia/en/0/0a/Nymphetamine_cover.jpg",
      audio: `${base_url}/nymphetamine-cradle-of-filth.mp3`,
      color: ['#662211', '#E7A130'],
      active: false
    },
    {
      id: uuid(),
      name: "payphone (explicit)",
      artist: "maroon 5 ft. wiz khalifa",
      cover: "https://m.media-amazon.com/images/I/81n9uETN6UL._SS500_.jpg",
      audio: `${base_url}/payphone-maroon5-ft-wiz-khalifa-explicit.mp3`,
      color: ['#75AAB8', '#FD48BD'],
      active: false
    },
    {
      id: uuid(),
      name: "river flows in you",
      artist: "jasper forks",
      cover: "https://m.media-amazon.com/images/I/81H-Nh+e+HL._SS500_.jpg",
      audio: `${base_url}/river-flows-in-you-jasper-forks.mp3`,
      color: ['#D1C87D', '#CCC208'],
      active: false
    },
    {
      id: uuid(),
      name: "she's out of her mind",
      artist: "blink 182",
      cover: "https://upload.wikimedia.org/wikipedia/en/2/23/SOOHM_Blink.jpg",
      audio: `${base_url}/shes-out-of-her-mind-blink-182.mp3`,
      color: ['#ECEBF1', '#E3BF9F'],
      active: false
    },
    {
      id: uuid(),
      name: "smack that",
      artist: "akon ft. eminem",
      cover: "https://cdns-images.dzcdn.net/images/cover/8fdceab1167b1af2f2a699db8ed246ac/350x350.jpg",
      audio: `${base_url}/smack-that-akon.mp3`,
      color: ['#FCFCFC', '#F61D1F'],
      active: false
    },
    {
      id: uuid(),
      name: "smells like teens spirit",
      artist: "nirvana",
      cover: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
      audio: `${base_url}/smells-like-teens-spirit-nirvana.mp3`,
      color: ['#FAF7F2', '#087AB8'],
      active: false
    },
    {
      id: uuid(),
      name: "space bound",
      artist: "eminem",
      cover: "https://mp3-ape.com/images/10/eminem-space-bound.jpg",
      audio: `${base_url}/space-bound-eminem.mp3`,
      color: ['#C21C28', '#A7A7A7'],
      active: false
    },
    {
      id: uuid(),
      name: "summer of 69",
      artist: "bryan adams",
      cover: "https://i.pinimg.com/originals/56/86/48/56864823cdf03717bb3e5b415090b9bd.jpg",
      audio: `${base_url}/summer-of-69-brian-adams.mp3`,
      color: ['#1B2326', '#DCE2F0'],
      active: false
    },
    {
      id: uuid(),
      name: "the reason",
      artist: "hoobastank",
      cover: "https://upload.wikimedia.org/wikipedia/en/2/2d/Hoobastank_-_The_Reason_%28song%29.jpg",
      audio: `${base_url_1}/the-reason-hoobastank.mp3`,
      color: ['#8EB4E4', '#522B24'],
      active: false
    },
    {
      id: uuid(),
      name: "through the fire and flames",
      artist: "dragon force",
      cover: "https://upload.wikimedia.org/wikipedia/en/f/f6/Through_the_Fire_and_Flames_Cover_Art.jpg",
      audio: `${base_url_1}/through-the-fire-and-flames-dragon-force.mp3`,
      color: ['#EDDAB0', '#DE9E67'],
      active: false
    },
    {
      id: uuid(),
      name: "my heart will go on",
      artist: "celine dion",
      cover: "https://www.carillonstudios.com/image/cache/data/SingleStyles/My%20Heart%20Will%20Go%20On-350x350.jpg",
      audio: `${base_url_1}/titanic-titanic-movie.mp3`,
      color: ['#E8906E', '#444194'],
      active: false
    },
    {
      id: uuid(),
      name: "TNT",
      artist: "AC/DC",
      cover: "https://upload.wikimedia.org/wikipedia/en/1/17/ACDC-TNT.jpg",
      audio: `${base_url}/tnt-acdc.mp3`,
      color: ['#CC270B', '#E1C95F'],
      active: false
    },
    {
      id: uuid(),
      name: "toxicity",
      artist: "system of down",
      cover: "https://media.musicarts.com/is/image/MMGS7/L46113000000000-00-600x600.jpg",
      audio: `${base_url}/toxicity-system-of-down.mp3`,
      color: ['#E7BDA9', '#C5333B'],
      active: false
    },
    {
      id: uuid(),
      name: "the death of love",
      artist: "cradle of filth",
      cover: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/albums/images/176801/original/resize:1000x1000/crop:x0y0w1000h1000/hash:1505934348/a3504554066_10.jpg",
      audio: `${base_url_1}/the-death-of-love-cradle-of-filth.mp3`,
      color: ['#7E7A54', '#FFC67C'],
      active: false
    },
    {
      id: uuid(),
      name: "tie me down",
      artist: "gryffin ft. elley duhé",
      cover: "https://images-na.ssl-images-amazon.com/images/I/51yb%2Bc0EmyL._AC_UL600_SR600,600_.jpg",
      audio: `${base_url}/tie-me-down-gryffin-ft-elley-duhe.mp3`,
      color: ['#A04238', '#276988'],
      active: false
    },
    {
      id: uuid(),
      name: "take you down",
      artist: "illenium",
      cover: "https://c-sf.smule.com/rs-s90/arr/82/41/6635b658-3c49-4e47-9593-e652295f37ad_512.jpg",
      audio: `${base_url}/take-you-down-illenium.mp3`,
      color: ['#F99D48', '#C5350D'],
      active: false
    },
    {
      id: uuid(),
      name: "wake me up when september ends",
      artist: "green day",
      cover: "https://i1.sndcdn.com/artworks-000125052782-qa7utu-t500x500.jpg",
      audio: `${base_url_1}/wake-me-up-when-september-ends-greenday.mp3`,
      color: ['#D28C00', '#4E7C41'],
      active: false
    },
    {
      id: uuid(),
      name: "whats my age again",
      artist: "blink 182",
      cover: "https://images-na.ssl-images-amazon.com/images/I/71IlJb2KIsL._SL1400_.jpg",
      audio: `${base_url_1}/whats-my-age-again.mp3`,
      color: ['#D0E6F8', '#141518'],
      active: false
    },
    {
      id: uuid(),
      name: "whiskey in the jar",
      artist: "metallica",
      cover: "https://ligurianports.it/images/a4/96/300910-metallica-whiskey-in-the-jar-(cover-versions).jpg",
      audio: `${base_url_1}/whiskey-in-the-jar-metallica.mp3`,
      color: ['#DFAD55', '#FFF79F'],
      active: false
    },
    {
      id: uuid(),
      name: "why are we so broken",
      artist: "steve aoki ft. blink 182",
      cover: "https://m.media-amazon.com/images/I/71fQRMrwHyL._SS500_.jpg",
      audio: `${base_url_1}/why-are-we-so-broken-steve-aoki-ft-blink-182.mp3`,
      color: ['#577994', '#3F9DDD'],
      active: false
    },
    {
      id: uuid(),
      name: "wide awake",
      artist: "katy perry",
      cover: "https://upload.wikimedia.org/wikipedia/en/d/da/Katy_Perry_-_Wide_Awake_single_cover.jpg",
      audio: `${base_url_1}/wide-awake.mp3`,
      color: ['#EACDBB', '#9FA9FF'],
      active: false
    },
    {
      id: uuid(),
      name: "without me",
      artist: "halsey",
      cover: "https://upload.wikimedia.org/wikipedia/en/f/f1/Without_Me_%E2%80%93_Halsey.png",
      audio: `${base_url_1}/without-me-halsey.mp3`,
      color: ['#1A8D81', '#F7AD61'],
      active: false
    },
    {
      id: uuid(),
      name: "you are beautiful (explicit)",
      artist: "james blunt",
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/You%27re_Beautiful.png/220px-You%27re_Beautiful.png",
      audio: `${base_url_1}/youre-beautifull-james-blunt.mp3`,
      color: ['#FFFFFF', '#000000'],
      active: false
    },
    {
      id: uuid(),
      name: "zombie",
      artist: "canberis",
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/The_Cranberries_-_Zombie.jpg/220px-The_Cranberries_-_Zombie.jpg",
      audio: `${base_url_1}/zombie-the-canberris.mp3`,
      color: ['#AB9380', '#6A494C'],
      active: false
    }
  ];
}

export default chillHopMusics;