// This file was generated by lezer-generator. You probably shouldn't edit it.
import {Parser} from "lezer"
import {NodeProp} from "lezer"
const spec_identifier = {__proto__:null,import:10, for:14, as:21, in:32, true:36, false:36, this:38, null:40, super:42, is:100, while:136, if:140, else:142, return:146, break:150, continue:154, foreign:158, class:160, var:176}
const spec_word = {__proto__:null,static:167, foreign:169, construct:171}
export const parser = Parser.deserialize({
  version: 13,
  states: "C|O]QPOOOOQO'#Ck'#CkO#wQPO'#CtO$RQPO'#C|O$YQPO'#DOO!yQPO'#DSO&[QPO'#EiO)eQPO'#EjOOQO'#Dj'#DjO+TQQO'#DiOOQO'#Ej'#EjOOQO'#Ei'#EiOOQO'#EX'#EXOOQO'#Ef'#EfOOQO'#EY'#EYQ]QPOOO+YQPO'#C`O+_QPO'#ChO+dQPO'#DqO+dQPO'#DsOOQO'#Dv'#DvOOQO'#Dx'#DxOOQO'#Dz'#DzO!tQPO'#D|O+iQPO'#D|O+nQPO'#EVO+sQPO'#E[O+}QPO'#EkO-ZQPO'#EkO-eQPO,59`O-jQSO'#CwOOQO,59h,59hO-{QPO,59hOOQO,59j,59jO.SQPO,59nOOQO'#DZ'#DZOOQO'#D]'#D]O$YQPO,59oO$YQPO,59oO$YQPO,59oO$YQPO,59oO$YQPO,59oO$YQPO,59oO$YQPO,59oO$YQPO,59oO$YQPO,59oO$YQPO,59oO$YQPO,59oOOQO'#De'#DeO.XQPO,5:OO$YQPO'#EaO/VQPO,5:[O$YQPO,59oO$YQPO,5:RO1PQPO'#DmO1WQPO'#DnOOQO,5:W,5:WO1bQPO,5:TOOQO-E8W-E8WO1gQPO,58zOOQO'#Ci'#CiO1bQPO'#EhO]QPO,59SO]QPO,5:]O]QPO,5:_O3^QPO,5:hO!tQPO,5:hOOQO'#Ce'#CeO3fQPO,5:qO5`QPO,5:vOOQO-E8Y-E8YO5jQPO,5;VOOQO1G.z1G.zOOQO'#Cy'#CyOOQO'#Em'#EmO!yQPO'#EmO5rQPO'#CxO6QQPO'#ElO6YQPO,59cO7fQPO,5:WOOQO1G/S1G/SOOQO1G/Y1G/YOOQO1G/Z1G/ZO:lQPO1G/ZO:sQPO1G/ZO=pQPO1G/ZO@mQPO1G/ZO@tQPO1G/ZOCqQPO1G/ZOCxQPO1G/ZODPQPO1G/ZOF|QPO1G/ZOGTQPO1G/ZOH`QWO1G/jOIqQWO'#EjOI{QPO,5:{OOQO-E8_-E8_OLfQPO1G/ZONqQPO1G/mO!!jQPO'#EtO!!tQPO,5:XO!!yQPO'#DoOOQO,5:Y,5:YO!#RQPO,5:YO!#RQPO,5:YOOQO1G/r1G/rO!#YQPO1G/oO+nQPO1G.fO!#_QPO,5;SOOQO1G.n1G.nOOQO1G/w1G/wO!#dQPO1G/yO!%rQQO'#EPOOQO1G0S1G0SO!tQPO1G0SO!%yQPO1G0SO$YQPO1G0]O!&RQPO,5;XO!&WQPO'#C{O!yQPO,59dO!&`QPO,59dO!&eQSO'#E^O!&yQPO,5;WOOQO1G.}1G.}O$YQPO7+%UO!'RQWO,5:WO!'YQPO'#E_O!'dQPO,5;`OOQO1G/s1G/sO!'lQPO'#EuO!'tQPO,5:ZOOQO1G/t1G/tO!'yQPO1G/tO!(QQPO7+%ZO!(VQPO'#CdO!*SQPO7+$QO!yQPO1G0nO]QPO7+%eO!+|QPO'#EUOOQO'#EU'#EUO!,XQPO'#EQOOQO'#Eb'#EbO!,aQQO,5:kOOQO,5:k,5:kO!%dQQO'#EQO!,hQQO'#EQO!,yQQO'#EQO!-QQPO7+%nOOQO7+%n7+%nO!tQPO7+%nO!-VQPO7+%wOOQO1G0s1G0sO!.{QPO'#EoO!/TQPO,59gO!/YQPO1G/OOOQO1G/O1G/OOOQO,5:x,5:xOOQO-E8[-E8[O!0hQWO1G/ZO!0oQWO1G/ZO!1zQWO1G/ZO!3VQWO1G/ZO!3^QWO1G/ZO!4iQWO1G/ZO!4pQWO1G/ZO!4wQWO1G/ZO!6SQWO1G/ZO!6ZQWO1G/ZO!6bQPO<<HpO!8uQWO1G/ZO!9fQWO1G/mO!9mQPO,5:yOOQO-E8]-E8]O!9wQPO'#E`O!:SQPO,5;aOOQO1G/u1G/uOOQO7+%`7+%`OOQO<<Hu<<HuO+nQPO,59OO+nQPO'#EZO!:[QPO<<GlO!<UQPO7+&YOOQO<<IP<<IPOOQO,5:p,5:pOOQO,5:l,5:lO!&`QPO,5:lOOQO-E8`-E8`OOQO1G0V1G0VO!,XQPO,5:lO!%dQQO,5:lO!<ZQQO,5:lOOQO<<IY<<IYO!-QQPO<<IYO!<lQPO'#E]O!<wQPO,5;ZOOQO1G/R1G/ROOQO,5:z,5:zOOQO-E8^-E8^OOQO1G.j1G.jOOQO,5:u,5:uOOQO-E8X-E8XOOQO<<It<<ItOOQO1G0W1G0WO!&`QPO1G0WO!,XQPO1G0WO!%dQQO1G0WOOQOAN>tAN>tOOQO,5:w,5:wOOQO-E8Z-E8ZO!=PQWO<<HpOOQO7+%r7+%rO!&`QPO7+%rO!,XQPO7+%rOOQO<<I^<<I^O!&`QPO<<I^OOQOAN>xAN>xO.XQPO'#DOO!=WQPO'#EjO!yQPO,59oO.XQPO,59oO!yQPO,59oO.XQPO,59oO!yQPO,59oO.XQPO,59oO!yQPO,59oO.XQPO,59oO!yQPO,59oO.XQPO,59oO!yQPO,59oO.XQPO,59oO!yQPO,59oO.XQPO,59oO!yQPO,59oO.XQPO,59oO!yQPO,59oO.XQPO,59oO!yQPO,59oO.XQPO,59oO!yQPO,59oO.XQPO,59oO!yQPO'#EaO!=eQPO,5:[O!yQPO,59oO.XQPO,59oO!yQPO,5:RO.XQPO,5:RO!=pQPO1G/ZO!>dQPO1G/ZO!?WQPO1G/ZO!AXQPO1G/ZO!A`QPO1G/ZO!BtQPO1G/ZO!B{QPO1G/ZO!CoQPO1G/ZO!ETQPO1G/ZO!E[QPO1G/ZO!EcQPO,5:{O!EpQPO1G/ZO!FdQPO1G/mO!yQPO7+%UO.XQPO7+%UO!FtQPO<<HpO!yQPO'#DOO!GUQPO'#EiO!GcQWO1G/jO!GjQWO1G/jO.XQPO,5:OO.XQPO,5:O",
  stateData: "!Gt~O#XOSPOSQOS~OT`OUYOVaO^TOaYObYOcYOdYOeYOgQOjROsSOtSOuSO!fbO!hcO!kdO!meO!ofO!qhO!rgO!ziO#ZPO#gWO~OUYO^TOaYObYOcYOdYOeYOgQOjnOs&pOt&pOu&pO#ZPO#gWO~OZjOf#_P~P!yOioO~P]OUYO^TOaYObYOcYOdYOeYOgQOjnOsSOtSOuSO#ZPO#gWO~OuvOxuOyuOzuO{wO|xO!OzO!Q|O!R|O!S!UO!T}O!U!OO!V!PO#dsO#etO#f!QO~OZ!SOT#]XU#]XV#]X^#]Xa#]Xb#]Xc#]Xd#]Xe#]Xg#]Xj#]Xs#]Xt#]X!f#]X!h#]X!k#]X!m#]X!o#]X!q#]X!r#]X!z#]X#V#]X#Z#]X#g#]Xi#]X!i#]X~P%WO^!WOj!XOZ#^Xu#^Xx#^Xy#^Xz#^X{#^X|#^X!O#^X!Q#^X!R#^X!S#^X!T#^X!U#^X!V#^X#d#^X#e#^X#f#^Xi#^X~O![!VOT#^XU#^XV#^Xa#^Xb#^Xc#^Xd#^Xe#^Xg#^Xs#^Xt#^X!f#^X!h#^X!k#^X!m#^X!o#^X!q#^X!r#^X!z#^X#V#^X#Z#^X#g#^X!i#^X~P(TO!_!ZO~OU!]O~O^!_O~O^TO~O!r!dO~O#Z!eO~OZ#OXf#OX~P!yOZjOf#_X~Ou%tOx%rOy%rOz%rO{%vO|%xO!O%|O!Q&QO!R&QO!S&[O!T&SO!U&UO!V&WO#dsO#etO#f!QO~OZjOf#_X~P,VOf!jO~OU!lOa!lOg!mO#b!kOi#`P~Oi!rO~P]On!sO~OUYO^TOaYObYOcYOdYOeYOgQOjnOs%pOt%pOu%pO#ZPO#gWO~OZ!SOT!daU!daV!da^!daa!dab!dac!dad!dae!dag!daj!das!dat!dau!da!f!da!h!da!k!da!m!da!o!da!q!da!r!da!z!da#V!da#Z!da#g!dai!da!i!da~On#hP~P!yOi#YO#e#XO~P]O#ZPO~OV#_OTSaUSa^SaaSabSacSadSaeSagSajSasSatSauSa!fSa!hSa!kSa!mSa!oSa!qSa!rSa!zSa#VSa#ZSa#gSaiSa!iSa~Oj#dO!S#fO~O![#hOT!yaU!yaV!ya^!yaa!yab!yac!yad!yae!yag!yaj!yas!yat!yau!ya!f!ya!h!ya!k!ya!m!ya!o!ya!q!ya!r!ya!z!ya#V!ya#Z!ya#g!yai!ya!i!ya~OZ#Oaf#Oa~P,VOZjOf#_a~O^#jOq#kOZlXilX~OZ#mOi#`X~Oi#oO~Oj!XOu!`ax!`ay!`az!`a{!`a|!`a!O!`a!Q!`a!R!`a!S!`a!T!`a!U!`a!V!`a#d!`a#e!`a#f!`a~OZ!`af!`an!`ai!`a~P6_OxuOyuOzuOTwiUwiVwiZwi^wiawibwicwidwiewigwijwiswitwi{wi|wi!Owi!Qwi!Rwi!Swi!Twi!Uwi!Vwi!fwi!hwi!kwi!mwi!owi!qwi!rwi!zwi#Vwi#Zwi#dwi#ewi#fwi#gwiiwi!iwi~Ouwi~P7vOuvO~P7vOuvOxuOyuOzuO{wOTwiUwiVwiZwi^wiawibwicwidwiewigwijwiswitwi!Owi!Qwi!Rwi!Swi!Twi!Uwi!Vwi!fwi!hwi!kwi!mwi!owi!qwi!rwi!zwi#Vwi#Zwi#dwi#ewi#fwi#gwiiwi!iwi~O|wi~P:zOuvOxuOyuOzuO{wO|xO!Q|O!R|O!S!UO!T}O#etOTwiUwiVwiZwi^wiawibwicwidwiewigwijwiswitwi!Uwi!Vwi!fwi!hwi!kwi!mwi!owi!qwi!rwi!zwi#Vwi#Zwi#dwi#fwi#gwiiwi!iwi~O!OzO~P=wO!Owi~P=wOuvOxuOyuOzuO{wO|xO!Q|O!R|O!S!UOTwiUwiVwiZwi^wiawibwicwidwiewigwijwiswitwi!Owi!Uwi!Vwi!fwi!hwi!kwi!mwi!owi!qwi!rwi!zwi#Vwi#Zwi#dwi#ewi#fwi#gwiiwi!iwi~O!T}O~P@{O|xO~P:zO!Twi~P@{OuvOxuOyuOzuO{wO|xO!OzO!Q|O!R|O!S!UO!T}O#dsO#etOTwiUwiVwiZwi^wiawibwicwidwiewigwijwiswitwi!Vwi!fwi!hwi!kwi!mwi!owi!qwi!rwi!zwi#Vwi#Zwi#fwi#gwiiwi!iwi~O!Uwi~PDWO!U!OO~PDWOu%uOx%sOy%sOz%sO{%wO|%yO!O%}O!Q&RO!R&RO!S&]O!T&TO!U&VO!V&XO#dsO#etO#f!QO~O!Y#pO~PG[O^!WOj!XOu#^Xx#^Xy#^Xz#^X{#^X|#^X!O#^X!Q#^X!R#^X!S#^X!T#^X!U#^X!V#^X#d#^X#e#^X#f#^X~O![&_O!Y#^X~PHgOT#TaU#TaV#TaZ#Ta^#Taa#Tab#Tac#Tad#Tae#Tag#Taj#Tas#Tat#Ta!f#Ta!h#Ta!k#Ta!m#Ta!o#Ta!q#Ta!r#Ta!z#Ta#V#Ta#Z#Ta#g#Tai#Ta!i#Ta~P%WOZwi!Owi!Swi!Twi!Uwi!Vwi#dwi#ewi#fwiiwi~OuvOxuOyuOzuO{wO|xO!Q|O!R|OTwiUwiVwi^wiawibwicwidwiewigwijwiswitwi!fwi!hwi!kwi!mwi!owi!qwi!rwi!zwi#Vwi#Zwi#gwi!iwi~PKtOT!ZiU!ZiV!ZiZ!Zi^!Zia!Zib!Zic!Zid!Zie!Zig!Zij!Zis!Zit!Zi!f!Zi!h!Zi!k!Zi!m!Zi!o!Zi!q!Zi!r!Zi!z!Zi#V!Zi#Z!Zi#g!Zii!Zi!i!Zi~P%WOZ#rOn#hX~P,VOn#tO~O#ZPO#e#iP~Oi#wO~P]O^#yO~O`#|O~O!i#}OT!giU!giV!gi^!gia!gib!gic!gid!gie!gig!gij!gis!git!giu!gi!f!gi!h!gi!k!gi!m!gi!o!gi!q!gi!r!gi!z!gi#V!gi#Z!gi#g!gii!gi~O!u$WO!v$VO!w$UO#b$OO#j$PO#k$PO#l$PO~Oi$TO~P!%ZOj#dO!S$ZO~Of$]O~O#Z!eOn#cP~OjRO~OU!lOa!lOg!mO#b!kOZ#QXi#QX~OZ#mOi#`a~O!Y!`a~P6_OZ#RXn#RX~P!yOZ#rOn#ha~OZ$sO#e#iX~O#e$uO~Oi$vO~P]On$wO~OY$xOTWXUWXVWXZWX^WXaWXbWXcWXdWXeWXgWXjWXsWXtWXuWX!fWX!hWX!kWX!mWX!oWX!qWX!rWX!zWX#VWX#ZWX#gWXiWX!iWX~OZ$yOTSqUSqVSq^SqaSqbSqcSqdSqeSqgSqjSqsSqtSquSq!fSq!hSq!kSq!mSq!oSq!qSq!rSq!zSq#VSq#ZSq#gSqiSq!iSq~O![$}O^!xXj!xX~O^#jOjRO~Oi%RO~P!%ZO!w%TO#b$OO#j$PO#k$PO#l$PO~O!v%UO~P!,hOj#dO~OT!yqU!yqV!yq^!yqa!yqb!yqc!yqd!yqe!yqg!yqj!yqs!yqt!yq!f!yq!h!yq!k!yq!m!yq!o!yq!q!yq!r!yq!z!yq#V!yq#Z!yq#g!yqi!yq!i!yq~P%WOZ%XOn#cX~On%ZO~OZliili~P,VOx%sOy%sOz%sO{wi|wi!Owi!Qwi!Rwi!Swi!Twi!Uwi!Vwi!Ywi#dwi#ewi#fwi~Ouwi~P!/dOu%uO~P!/dOu%uOx%sOy%sOz%sO{%wO!Owi!Qwi!Rwi!Swi!Twi!Uwi!Vwi!Ywi#dwi#ewi#fwi~O|wi~P!0vOu%uOx%sOy%sOz%sO{%wO|%yO!Q&RO!R&RO!S&]O!T&TO#etO!Uwi!Vwi!Ywi#dwi#fwi~O!O%}O~P!2RO!Owi~P!2ROu%uOx%sOy%sOz%sO{%wO|%yO!Q&RO!R&RO!S&]O!Owi!Uwi!Vwi!Ywi#dwi#ewi#fwi~O!T&TO~P!3eO|%yO~P!0vO!Twi~P!3eOu%uOx%sOy%sOz%sO{%wO|%yO!O%}O!Q&RO!R&RO!S&]O!T&TO#dsO#etO!Vwi!Ywi#fwi~O!Uwi~P!5OO!U&VO~P!5OOT!WyU!WyV!WyZ!Wy^!Wya!Wyb!Wyc!Wyd!Wye!Wyg!Wyj!Wys!Wyt!Wy!f!Wy!h!Wy!k!Wy!m!Wy!o!Wy!q!Wy!r!Wy!z!Wy#V!Wy#Z!Wy#g!Wyi!Wy!i!Wy~P%WOu%uOx%sOy%sOz%sO{%wO|%yO!Q&RO!R&RO~O!Owi!Swi!Twi!Uwi!Vwi!Ywi#dwi#ewi#fwi~P!8ZO!Y!Zi~PG[OZ#Ran#Ra~P,VO#ZPOZ#SX#e#SX~OZ$sO#e#ia~OZ$yOTSyUSyVSy^SyaSybSycSydSyeSygSyjSysSytSyuSy!fSy!hSy!kSy!mSy!oSy!qSy!rSy!zSy#VSy#ZSy#gSyiSy!iSy~On%aO~O!w%eO#b$OO#j$PO#k$PO#l$PO~O#Z!eOZ#PXn#PX~OZ%XOn#ca~O!Y!Wy~PG[O![&^Of#^Xn#^X~P(TOZ&YOn!daf!da~Ox%rOy%rOz%rOfwiuwi{wi|wi!Qwi!Rwinwi~PKtOu%tOx%rOy%rOz%rOfwi{wi|wi!Qwi!Rwinwi~PKtOu%tOx%rOy%rOz%rO{%vOfwi|wi!Qwi!Rwinwi~PKtOu%tOx%rOy%rOz%rO{%vO|%xO!Q&QO!R&QO!S&[O!T&SO#etOZwifwi!Uwi!Vwi#dwi#fwinwiiwi~O!O%|O~P!?zO!Owi~P!?zOu%tOx%rOy%rOz%rO{%vO|%xO!Q&QO!R&QO!S&[OZwifwi!Owi!Uwi!Vwi#dwi#ewi#fwinwiiwi~O!T&SO~P!AgOu%tOx%rOy%rOz%rO{%vO|%xOfwi!Qwi!Rwinwi~PKtO!Twi~P!AgOu%tOx%rOy%rOz%rO{%vO|%xO!O%|O!Q&QO!R&QO!S&[O!T&SO#dsO#etOZwifwi!Vwi#fwinwiiwi~O!Uwi~P!CvO!U&UO~P!CvOZ#Tan#Taf#Ta~P,VOu%tOx%rOy%rOz%rO{%vO|%xO!Q&QO!R&QOfwinwi~PKtOZ!Zif!Zin!Zii!Zi~P,VOZ!Wyf!Wyn!Wyi!Wy~P,VOZ&YOn#]Xf#]X~P,VO!Y&mO~PG[O!Y&nO~PG[O#b#Z~",
  goto: "7_#jPPPP#kPPP#y$PPP#k$aP$dPPPPPPPP&aPP&a'|(SP(W(gP&aPPP)[&aPPPPP*}P+nPPPPPP&a,eP&aP&a-OP&a.w/Q/Z/^#kP#kPP#kP#kP#kP#kPP/o/{PPP0P#kP#k0a0s0y1T1Z1a1g1m1wPPP1}P2e2h3P6z6}7QP7UPPPP7X7[i]OR_p!X!`!a!b#Z#[#x#}Q#{#_R%_$yQ!fiS#z#_$yQ$^#jQ%^$xR%g%XR!`a![VORS_puvwxyz{|}!O!P!S!U!V!X!`!a!b#Z#[#h#p#x#}t#Q!R%p%s%u%w%y%{%}&P&R&T&V&X&]&_&n&t&uQ#^!ZQ#`!_Q#u#XQ%[$s!R%qQTj!W!m#k#r#|%r%t%v%x%z%|&O&Q&S&U&W&Y&[&^&m&p$TYOQRST_jpuvwxyz{|}!O!P!R!S!U!V!W!X!`!a!b!m#Z#[#h#k#p#r#x#|#}%p%r%s%t%u%v%w%x%y%z%{%|%}&O&P&Q&R&S&T&U&V&W&X&Y&[&]&^&_&m&n&p&t&uQ!onR$b#mT!ln#mQ#l!nQ%P$QQ%c%SQ%k%dR%n%lh]OR_p!X!`!a!b#Z#[#x#}Q$a#lQ%O$QS%b%P%SS%j%c%dS%m%k%lR%o%n$SYOQRST_jpuvwxyz{|}!O!P!R!S!U!V!W!X!`!a!b!m#Z#[#h#k#p#r#x#|#}%p%r%s%t%u%v%w%x%y%z%{%|%}&O&P&Q&R&S&T&U&V&W&X&Y&[&]&^&_&m&n&p&t&uQ!abR!bc^yU!}#O#R#U$[$nf%zl!g#V$`$q&h&i&j&l&o&q_%{#P$l$m$p%i&r&sb{U!x!y!}#O#R#U$[$nj&Ol!g#V$`$q&c&d&h&i&j&l&o&qc&P#P$g$h$l$m$p%i&r&sY!RU#R#U$[$nb&tl!g#V$`$q&j&l&o&qZ&u#P$p%i&r&s$SXOQRST_jpuvwxyz{|}!O!P!R!S!U!V!W!X!`!a!b!m#Z#[#h#k#p#r#x#|#}%p%r%s%t%u%v%w%x%y%z%{%|%}&O&P&Q&R&S&T&U&V&W&X&Y&[&]&^&_&m&n&p&t&uQ!cgQ#g!dQ$X#fR%W$ZQ!YVQ!q%qR#q#QU!YV#Q%qT#]!q#qR#[!XoZORT_p!X!`!a!b!m#Z#[#x#|#}Q#e!cQ$Y#gQ%V$XR%f%WT$R#d$SS$Q#d$SU%S$U$V$WS%d%T%UR%l%eQ_OQpRW![_p#Z#xQ#Z!XR#x#[Q$z#{R%`$zQkQS!hk!iR!ilQ%Y$^R%h%YQ#n!oR$c#nQ#s#VR$r#sQ$t#uR%]$tQ!TUS#S!T&ZR&Z&qQ$S#dR%Q$S`^OR_p!X#Z#[#xQ#a!`Q#b!aQ#c!bR$|#}R!^ah[OR_p!X!`!a!b#Z#[#x#}QrTQ#i!mR${#|hUOR_p!X!`!a!b#Z#[#x#}QlQUqS%p&pQ!gjU!tu%r%sQ!uvQ!vwQ!wxQ!xyQ!yzQ!z{Q!{|Q!|}Q!}!OQ#O!PQ#P!RQ#R!SQ#T!UQ#U!VQ#V!WQ$[#hQ$`#kQ$d%uQ$e%wQ$f%yQ$g%{Q$h%}Q$i&PQ$j&RQ$k&TQ$l&VQ$m&XQ$n#pQ$o&]Q$p&_Q$q#rQ%i&nQ&`%tQ&a%vQ&b%xQ&c%zQ&d%|Q&e&OQ&f&QQ&g&SQ&h&UQ&i&WQ&j&YQ&k&[Q&l&^Q&o&mU&qT!m#|Q&r&tR&s&uRmQR!pnT!nn#mR$_#jR#W!WR#v#X",
  nodeNames: "⚠ LineComment BlockComment Script ImportDeclaration import String for ImportName VariableDefinition as , ForStatement ForInSpec ( VariableName in Number BooleanLiteral this null super ] [ ArrayExpression } { ObjectExpression Property PropertyNameDefinition ) ParamList Block : UnaryExpression LogicOp BitOp ArithOp ParenthesizedExpression BinaryExpression ArithOp ArithOp ArithOp RangeOp BitOp BitOp BitOp BitOp CompareOp CompareOp is CompareOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression Equals Blah ClassName . CallExpression ArgList BlockMaybeArgs BlockArgs SequenceExpression WhileStatement while IfStatement if else ReturnStatement return BreakStatement break ContinueStatement continue ClassDeclaration foreign class ClassBody MethodDeclaration static foreign construct ClassMethodName VariableDeclaration var ExpressionStatement",
  maxTerm: 120,
  nodeProps: [
    [NodeProp.group, -11,4,12,32,67,69,72,74,76,78,87,89,"Statement",-17,6,15,17,18,19,20,21,24,27,34,38,39,54,57,59,62,66,"Expression",82,"ClassItem"],
    [NodeProp.closedBy, 14,")",23,"]",26,"}"],
    [NodeProp.openedBy, 22,"[",25,"{",30,"("]
  ],
  skippedNodes: [0,1,2],
  repeatNodeCount: 9,
  tokenData: "5}~R!PX^$Upq$Uqr$yrs%Wtu'ouv(Yvw(_xy(lyz(qz{(v{|(}|})U}!O)Z!O!P)b!P!Q*t!Q!R0_!R![0s![!]1p!^!_1w!_!`2^!`!a2f!a!b2q!c!}2v!}#O3c#P#Q3h#Q#R3m#R#S'o#T#o'o#o#p3r#p#q3w#q#r4U#r#s4Z#y#z$U$f$g$U$g#BY'o#BY#BZ4`#BZ$IS'o$IS$I_4`$I_$I|'o$I|$JO4`$JO$JT'o$JT$JU4`$JU$KV'o$KV$KW4`$KW&FU'o&FU&FV4`&FV~'o~$ZY#X~X^$Upq$U#y#z$U$f$g$U#BY#BZ$U$IS$I_$U$I|$JO$U$JT$JU$U$KV$KW$U&FU&FV$U~%OPs~!_!`%R~%WO!T~~%]UU~OY%oZr%ors&cs#O%o#O#P&]#P~%o~%tUU~OY%oZr%ors&Ws#O%o#O#P&]#P~%o~&]OU~~&`PO~%o~&hPU~rs&k~&nROr&krs&ws~&k~&zROr&krs'Ts~&k~'WROr&krs'as~&k~'fRU~Or&krs'as~&k_'vU#bU#ZXtu'o!Q!['o!c!}'o#R#S'o#T#o'o$g~'o~(_Oy~~(dP#d~vw(g~(lO!U~~(qO^~~(vOn~Z(}O#lQzXZ)UO#jQuX~)ZOZ~Z)bO#kQuX_)gQ!_Q!O!P)m!Q![)zX)rP{X!O!P)uX)zO{XT*PRaT!Q![)z!g!h*Y#X#Y*YT*]R{|*f}!O*f!Q![*lT*iP!Q![*lT*qPaT!Q![*l~*yQx~z{+P!P!Q0S~+STOz+Pz{+c{!P+P!P!Q+z!Q~+P~+fTOz+Pz{+c{!P+P!P!Q+u!Q~+P~+zOQ~~+}TOz+Pz{,^{!P+P!P!Q+z!Q~+P~,aTOz,pz{-S{!P,p!P!Q/U!Q~,p~,sTOz,pz{-S{!P,p!P!Q-z!Q~,p~-VTOz,pz{-S{!P,p!P!Q-f!Q~,p~-kTQ~Oz+Pz{+c{!P+P!P!Q+z!Q~+P~-}TOz,pz{.^{!P,p!P!Q-z!Q~,p~.aTOz,pz{-S{!P,p!P!Q.p!Q~,p~.uTQ~Oz,pz{-S{!P,p!P!Q-z!Q~,p~/ZRQ~Oz/dz{/p{~/d~/gROz/dz{/p{~/d~/sTOz/dz{/p{!P/d!P!Q+P!Q~/d~0XQP~OY0SZ~0ST0dTaT!O!P)z!Q![0s!g!h*Y#X#Y*Y#l#m1UT0xSaT!O!P)z!Q![0s!g!h*Y#X#Y*YT1XR!Q![1b!c!i1b#T#Z1bT1gRaT!Q![1b!c!i1b#T#Z1bX1wOqP!YW~1|Q!Q~!^!_2S!_!`2X~2XO|~~2^O!R~~2cP![~!_!`%R~2kQ!R~!_!`2X!`!a2S~2vO#f~~3PU#g~#bU#ZXtu2v!Q![2v!c!}2v#R#S2v#T#o2v$g~2v~3hOg~~3mOf~~3rO!O~~3wOj~~3|P#e~#p#q4P~4UO!V~~4ZOi~~4`Ot~~4if#X~#bU#ZXX^$Upq$Utu'o!Q!['o!c!}'o#R#S'o#T#o'o#y#z$U$f$g$U$g#BY'o#BY#BZ4`#BZ$IS'o$IS$I_4`$I_$I|'o$I|$JO4`$JO$JT'o$JT$JU4`$JU$KV'o$KV$KW4`$KW&FU'o&FU&FV4`&FV~'o",
  tokenizers: [0, 1, 2, 3],
  topRules: {"Script":[0,3]},
  specialized: [{term: 103, get: value => spec_identifier[value] || -1},{term: 110, get: value => spec_word[value] || -1}],
  tokenPrec: 3897
})
