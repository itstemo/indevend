import React, {Component} from 'react'
import {Map, TileLayer} from 'react-leaflet'
var geolib = require('geolib')

var latLongs = [{"lat":37.80125651395771,"lng":-122.40157968364659},{"lat":37.80094285321471,"lng":-122.40152603946629},{"lat":37.800459643517605,"lng":-122.40144020877779},{"lat":37.800315527732785,"lng":-122.4026096519083},{"lat":37.80127346855452,"lng":-122.40281349979341},{"lat":37.79953560213664,"lng":-122.40126854740086},{"lat":37.7993999620619,"lng":-122.40242726169527},{"lat":37.798603071592694,"lng":-122.4010646995157},{"lat":37.79877262347632,"lng":-122.39986306987706},{"lat":37.7984335193199,"lng":-122.40225560031834},{"lat":37.79907781588614,"lng":-122.3979855235666},{"lat":37.799188023946485,"lng":-122.398597067222},{"lat":37.79990013360332,"lng":-122.40588194690648},{"lat":37.798984562783595,"lng":-122.4056888278574},{"lat":37.798216014975104,"lng":-122.40387552883479},{"lat":37.79802102880613,"lng":-122.40549558307977},{"lat":37.797122390245086,"lng":-122.40532392170282},{"lat":37.79688501219619,"lng":-122.40527027752253},{"lat":37.79694799958206,"lng":-122.3994974931702},{"lat":37.79709212193696,"lng":-122.39836023654792},{"lat":37.79723624401068,"lng":-122.3971371492371},{"lat":37.796320640173136,"lng":-122.39706204738468},{"lat":37.79618499419502,"lng":-122.39817784633487},{"lat":37.79587131191672,"lng":-122.40051673259589},{"lat":37.79606630375987,"lng":-122.39918635692447},{"lat":37.79572341185005,"lng":-122.40169564727695},{"lat":37.79551994114461,"lng":-122.40329424384983},{"lat":37.79469757466724,"lng":-122.40316549781711},{"lat":37.794858657481655,"lng":-122.40151325706394},{"lat":37.79498582787653,"lng":-122.40031162742527},{"lat":37.79521473403568,"lng":-122.39915291313083},{"lat":37.79476539905295,"lng":-122.39908854011448},{"lat":37.79442627650168,"lng":-122.39781180862339},{"lat":37.79459060541672,"lng":-122.39666608627888},{"lat":37.79459908348061,"lng":-122.39653734024617},{"lat":37.793195751953995,"lng":-122.39997626747937},{"lat":37.79306010023834,"lng":-122.40114571060987},{"lat":37.792110531254984,"lng":-122.40096332039685},{"lat":37.792254663047,"lng":-122.3997831484303},{"lat":37.792415751187676,"lng":-122.39859224762769},{"lat":37.79383161605123,"lng":-122.39563108887523},{"lat":37.79339922906054,"lng":-122.3962533613667},{"lat":37.79312792612731,"lng":-122.39652158226819},{"lat":37.792458142745296,"lng":-122.39740134682506},{"lat":37.791729137040946,"lng":-122.39828953519465},{"lat":37.79106781944776,"lng":-122.39915857091547},{"lat":37.790817174293956,"lng":-122.39952087868006},{"lat":37.790266069908796,"lng":-122.40059376228602},{"lat":37.790062584173704,"lng":-122.40222454536708},{"lat":37.78983366205194,"lng":-122.40390897262843},{"lat":37.789638653759184,"lng":-122.40544319618493},{"lat":37.78941820898245,"lng":-122.40699887741359},{"lat":37.789082108919516,"lng":-122.40203951485456},{"lat":37.788802311406265,"lng":-122.40199659951033},{"lat":37.78890405607912,"lng":-122.40369175560774},{"lat":37.78869208785258,"lng":-122.40524743683638},{"lat":37.788492141641605,"lng":-122.40682516247035},{"lat":37.78757642943829,"lng":-122.40658912807706},{"lat":37.78777144317328,"lng":-122.4050334468484},{"lat":37.78830560859456,"lng":-122.40842375904323},{"lat":37.78734749961446,"lng":-122.4082735553384},{"lat":37.78643091207866,"lng":-122.4080940987915},{"lat":37.78661744985778,"lng":-122.4064204003662},{"lat":37.78715162362059,"lng":-122.40993945859374},{"lat":37.78810125633176,"lng":-122.41008966229859},{"lat":37.789000004621755,"lng":-122.41025059483947},{"lat":37.789963623135186,"lng":-122.4104597652331},{"lat":37.79015863057034,"lng":-122.40880752447995},{"lat":37.79087930575647,"lng":-122.41066361311826},{"lat":37.791091267708815,"lng":-122.40898991469297},{"lat":37.79183995220045,"lng":-122.41081285290423},{"lat":37.79207734645974,"lng":-122.40924644283952},{"lat":37.79159407877067,"lng":-122.41248655132951},{"lat":37.79254365439136,"lng":-122.41265821270648},{"lat":37.792679307055224,"lng":-122.41195010952654},{"lat":37.79141616445861,"lng":-122.41415203548969},{"lat":37.79043266018946,"lng":-122.41394818760456},{"lat":37.789508493386094,"lng":-122.41375506855549},{"lat":37.78972893789347,"lng":-122.4121350143105},{"lat":37.78882022934222,"lng":-122.41190970875324},{"lat":37.78786583652524,"lng":-122.41171118337662},{"lat":37.787662344180475,"lng":-122.41337415296586},{"lat":37.78758603440672,"lng":-122.40659352857621},{"lat":37.78734014682189,"lng":-122.40825649816544},{"lat":37.78717904761581,"lng":-122.40993019659074},{"lat":37.78695859550156,"lng":-122.41152879316361},{"lat":37.78672148288558,"lng":-122.41322587709877},{"lat":37.785814227812956,"lng":-122.41296838503332},{"lat":37.786017725246765,"lng":-122.41133760195227},{"lat":37.785073530843,"lng":-122.41114825475962},{"lat":37.78487003080931,"lng":-122.41276830900463},{"lat":37.7846326133951,"lng":-122.41445273626597},{"lat":37.783933605463744,"lng":-122.41266382858159},{"lat":37.78372162298025,"lng":-122.41426242515446},{"lat":37.782820723765035,"lng":-122.41413502022627},{"lat":37.78303270883246,"lng":-122.41242913529278},{"lat":37.783244693291856,"lng":-122.41077689453961},{"lat":37.7821847649148,"lng":-122.41036919876935},{"lat":37.78115913724925,"lng":-122.41203715559097},{"lat":37.78207492896755,"lng":-122.41224100347611},{"lat":37.781888379722965,"lng":-122.4139147019014},{"lat":37.78093018754673,"lng":-122.4137001251802},{"lat":37.78070971679262,"lng":-122.4153738236055},{"lat":37.78049017284614,"lng":-122.4169878847897},{"lat":37.778792693218584,"lng":-122.41483008954675},{"lat":37.77758006086873,"lng":-122.41636431310327},{"lat":37.77779206096611,"lng":-122.41608536336572},{"lat":37.77624560567321,"lng":-122.41478998214008},{"lat":37.776749577756675,"lng":-122.40782696753742},{"lat":37.77798766364171,"lng":-122.40939337760211},{"lat":37.776257729664,"lng":-122.41161424666645},{"lat":37.77497721324586,"lng":-122.41010148078205},{"lat":37.77377962411607,"lng":-122.41161659359933},{"lat":37.77501775973905,"lng":-122.41316154599191},{"lat":37.774042517660305,"lng":-122.4143846333027},{"lat":37.77282980739254,"lng":-122.41285040974618},{"lat":37.77309343310967,"lng":-122.4155857600272},{"lat":37.77182982323866,"lng":-122.41405153647068},{"lat":37.7715949479039,"lng":-122.41130935493857},{"lat":37.77065358392669,"lng":-122.41252171341333},{"lat":37.77037583685999,"lng":-122.40978959016505},{"lat":37.77079139696944,"lng":-122.40913513116541},{"lat":37.77129176216554,"lng":-122.40854504518211},{"lat":37.772518841795396,"lng":-122.40699904505165},{"lat":37.77034035645223,"lng":-122.40976708475502},{"lat":37.76835968786603,"lng":-122.40781292784959},{"lat":37.76820702838322,"lng":-122.41077408660206},{"lat":37.76709599709901,"lng":-122.4076841818169},{"lat":37.76854295833927,"lng":-122.41564778611065},{"lat":37.76869561712857,"lng":-122.41346983239056},{"lat":37.766931540787695,"lng":-122.41549758240583},{"lat":37.76707572168313,"lng":-122.41331962868574},{"lat":37.765332445819325,"lng":-122.41531074978413},{"lat":37.76544270420751,"lng":-122.41317571140827},{"lat":37.76553599963836,"lng":-122.4114698264748},{"lat":37.76551055544161,"lng":-122.41243542172016},{"lat":37.764126053263375,"lng":-122.41300094872715},{"lat":37.76371893730398,"lng":-122.41521108895543},{"lat":37.7644483518086,"lng":-122.40744341164829},{"lat":37.76322700252982,"lng":-122.40733612328769},{"lat":37.76319307587307,"lng":-122.40825880318883},{"lat":37.763091295809424,"lng":-122.40931022912267},{"lat":37.76304040572509,"lng":-122.41029728204015},{"lat":37.76292166205878,"lng":-122.41128433495761},{"lat":37.76287077185774,"lng":-122.41285074502231},{"lat":37.761628523239324,"lng":-122.41284001618627},{"lat":37.760508911154155,"lng":-122.41479266434911},{"lat":37.76049194720435,"lng":-122.41597283631566},{"lat":37.76039016342386,"lng":-122.41706717759372},{"lat":37.760207204075634,"lng":-122.41927002556625},{"lat":37.76181876813966,"lng":-122.41935585625471},{"lat":37.76341333381252,"lng":-122.41952751763166},{"lat":37.76507571674185,"lng":-122.41976355202497},{"lat":37.76664523221118,"lng":-122.41993454284969},{"lat":37.75836565758392,"lng":-122.42350816726686},{"lat":37.758654052490975,"lng":-122.41906642913818},{"lat":37.75546686848229,"lng":-122.41870625875893},{"lat":37.75526328695297,"lng":-122.42104514501992},{"lat":37.75541597315249,"lng":-122.41992934606972},{"lat":37.75521239148312,"lng":-122.4231909122318},{"lat":37.755687414506895,"lng":-122.41553052328527},{"lat":37.75398512410303,"lng":-122.41640869528058},{"lat":37.75412084752953,"lng":-122.41424147039652},{"lat":37.754222639935996,"lng":-122.4132115021348},{"lat":37.75425657070706,"lng":-122.41203133016828},{"lat":37.75266180764711,"lng":-122.4119454994798},{"lat":37.75274663633501,"lng":-122.41095844656232},{"lat":37.75259394462677,"lng":-122.41310421377423},{"lat":37.75252608154416,"lng":-122.41411272436383},{"lat":37.75245821839935,"lng":-122.41520706564191},{"lat":37.75237338938079,"lng":-122.41627994924787},{"lat":37.75231467173756,"lng":-122.41748526692392},{"lat":37.75231467173756,"lng":-122.41840794682504},{"lat":37.75066896822722,"lng":-122.4183650314808},{"lat":37.75073683301305,"lng":-122.41737797856332},{"lat":37.75080469773667,"lng":-122.41604760289194},{"lat":37.7508555962385,"lng":-122.41501763463022},{"lat":37.750872562398,"lng":-122.41396620869638},{"lat":37.75231467173756,"lng":-122.41845086216928},{"lat":37.75222984255441,"lng":-122.41900876164438},{"lat":37.75222984255441,"lng":-122.41952374577524},{"lat":37.75209411565912,"lng":-122.4205966293812},{"lat":37.75206018389641,"lng":-122.4216051399708},{"lat":37.75206018389641,"lng":-122.42115452885629},{"lat":37.75195838851488,"lng":-122.42287114262582},{"lat":37.751890524849365,"lng":-122.42405131459238},{"lat":37.751856592993306,"lng":-122.42505982518198},{"lat":37.7533835111123,"lng":-122.42529585957529},{"lat":37.75348530453321,"lng":-122.42424443364145},{"lat":37.75348530453321,"lng":-122.42304280400278},{"lat":37.75443536970833,"lng":-122.42310717701913},{"lat":37.75511398022139,"lng":-122.42310717701913},{"lat":37.75514791058366,"lng":-122.42385819554332},{"lat":37.75514791058366,"lng":-122.42422297596934},{"lat":37.75508004984357,"lng":-122.4248667061329},{"lat":37.75509701503442,"lng":-122.42546752095224},{"lat":37.756640831117906,"lng":-122.42574647068979},{"lat":37.756657795950865,"lng":-122.42501690983774},{"lat":37.756640831117906,"lng":-122.424523383379},{"lat":37.756691725605094,"lng":-122.42387965321544},{"lat":37.75674262005729,"lng":-122.42332175374032},{"lat":37.75747210335772,"lng":-122.4257679283619},{"lat":37.75753996190368,"lng":-122.42334321141244},{"lat":37.75826943734181,"lng":-122.42581084370615},{"lat":37.758371224040374,"lng":-122.42338612675668},{"lat":37.75852390382563,"lng":-122.42130473256113}] 


export default class MainMap extends Component {
  constructor(props) {
    super(props);
    };

  render() {

    let usCenter = [38.702249038932734, -102.56467401981355];
    return (
      <div style={{width:'100%'}}>
        <Map onClick={ e => {
          var closestSpot; 
          var minDist = 10000000000;
          for (var i = 0; i < latLongs.length; i++) {
            var distance = geolib.getDistance(e.latlng,latLongs[i]);
            if( distance < minDist){
              closestSpot = latLongs[i];
              minDist = distance;
            }
          }
          console.log(closestSpot, minDist)
        } } center={usCenter} zoom={4} style={{height: '80vh', width:'90vw'}}>
        <TileLayer 
        url= "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png" 
        attribution="Wikimedia maps beta | &copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"/>
        </Map>
      </div>
    );
  }
  }