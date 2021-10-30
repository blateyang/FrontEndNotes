文本实体是可以直接书写在HTML中用以显示特殊字符的字符串，例如\ \&amp\\;表示 \&。
访问http://www.w3.org/TR/html4/strict.dtd可以在页面中找到3个后缀名为.ent的文件：HTMLlat1.ent,HTMLsymbol.ent和HTMLspecial.ent，分别访问三个文件即可得到相关的文本实体及对应编码，现整理如下（通过[https://www.w3school.com.cn/tags/html_ref_entities.html](https://www.w3school.com.cn/tags/html_ref_entities.html)和[[https://www.w3school.com.cn/tags/html_ref_symbols.html](https://www.w3school.com.cn/tags/html_ref_symbols.html)也可直观看到各文本实体的效果）：
1. http://www.w3.org/TR/html4/HTMLlat1.ent文件
&#160;    nbsp     "\&#160\;" -- no-break space = non-breaking space,U+00A0 ISOnum  
&#161;    iexcl    "\&#161\;" -- inverted exclamation mark, U+00A1 ISOnum  
&#162;    cent     "\&#162\;" -- cent sign, U+00A2 ISOnum  
&#163;    pound    "\&#163\;" -- pound sign, U+00A3 ISOnum  
&#164;    curren   "\&#164\;" -- currency sign, U+00A4 ISOnum  
&#165;    yen      "\&#165\;" -- yen sign = yuan sign, U+00A5 ISOnum  
&#166;    brvbar   "\&#166\;" -- broken bar = broken vertical bar,U+00A6 ISOnum  
&#167;    sect     "\&#167\;" -- section sign, U+00A7 ISOnum  
&#168;    uml      "\&#168\;" -- diaeresis = spacing diaeresis,U+00A8 ISOdia  
&#169;    copy     "\&#169\;" -- copyright sign, U+00A9 ISOnum  
&#170;    ordf     "\&#170\;" -- feminine ordinal indicator, U+00AA ISOnum  
&#171;    laquo    "\&#171\;" -- left-pointing double angle quotation mark= left pointing guillemet, U+00AB ISOnum  
&#172;    not      "\&#172\;" -- not sign, U+00AC ISOnum  
&#173;    shy      "\&#173\;" -- soft hyphen = discretionary hyphen,U+00AD ISOnum  
&#174;    reg      "\&#174\;" -- registered sign = registered trade mark sign,U+00AE ISOnum  
&#175;    macr     "\&#175\;" -- macron = spacing macron = overline= APL overbar, U+00AF ISOdia  
&#176;    deg      "\&#176\;" -- degree sign, U+00B0 ISOnum  
&#177;    plusmn   "\&#177\;" -- plus-minus sign = plus-or-minus sign,U+00B1 ISOnum  
&#178;    sup2     "\&#178\;" -- superscript two = superscript digit two= squared, U+00B2 ISOnum  
&#179;    sup3     "\&#179\;" -- superscript three = superscript digit three= cubed, U+00B3 ISOnum  
&#180;    acute    "\&#180\;" -- acute accent = spacing acute,U+00B4 ISOdia  
&#181;    micro    "\&#181\;" -- micro sign, U+00B5 ISOnum  
&#182;    para     "\&#182\;" -- pilcrow sign = paragraph sign,U+00B6 ISOnum  
&#183;    middot   "\&#183\;" -- middle dot = Georgian comma= Greek middle dot, U+00B7 ISOnum  
&#184;    cedil    "\&#184\;" -- cedilla = spacing cedilla, U+00B8 ISOdia  
&#185;    sup1     "\&#185\;" -- superscript one = superscript digit one,U+00B9 ISOnum  
&#186;    ordm     "\&#186\;" -- masculine ordinal indicator,U+00BA ISOnum  
&#187;    raquo    "\&#187\;" -- right-pointing double angle quotation mark= right pointing guillemet, U+00BB ISOnum  
&#188;    frac14   "\&#188\;" -- vulgar fraction one quarter= fraction one quarter, U+00BC ISOnum  
&#189;    frac12   "\&#189\;" -- vulgar fraction one half= fraction one half, U+00BD ISOnum  
&#190;    frac34   "\&#190\;" -- vulgar fraction three quarters= fraction three quarters, U+00BE ISOnum  
&#191;    iquest   "\&#191\;" -- inverted question mark= turned question mark, U+00BF ISOnum  
&#192;    Agrave   "\&#192\;" -- latin capital letter A with grave= latin capital letter A grave,U+00C0 ISOlat1  
&#193;    Aacute   "\&#193\;" -- latin capital letter A with acute,U+00C1 ISOlat1  
&#194;    Acirc    "\&#194\;" -- latin capital letter A with circumflex,U+00C2 ISOlat1  
&#195;    Atilde   "\&#195\;" -- latin capital letter A with tilde,U+00C3 ISOlat1  
&#196;    Auml     "\&#196\;" -- latin capital letter A with diaeresis,U+00C4 ISOlat1  
&#197;    Aring    "\&#197\;" -- latin capital letter A with ring above= latin capital letter A ring,U+00C5 ISOlat1  
&#198;    AElig    "\&#198\;" -- latin capital letter AE= latin capital ligature AE,U+00C6 ISOlat1  
&#199;    Ccedil   "\&#199\;" -- latin capital letter C with cedilla,U+00C7 ISOlat1  
&#200;    Egrave   "\&#200\;" -- latin capital letter E with grave,U+00C8 ISOlat1  
&#201;    Eacute   "\&#201\;" -- latin capital letter E with acute,U+00C9 ISOlat1  
&#202;    Ecirc    "\&#202\;" -- latin capital letter E with circumflex,U+00CA ISOlat1  
&#203;    Euml     "\&#203\;" -- latin capital letter E with diaeresis,U+00CB ISOlat1  
&#204;    Igrave   "\&#204\;" -- latin capital letter I with grave,U+00CC ISOlat1  
&#205;    Iacute   "\&#205\;" -- latin capital letter I with acute,U+00CD ISOlat1  
&#206;    Icirc    "\&#206\;" -- latin capital letter I with circumflex,U+00CE ISOlat1  
&#207;    Iuml     "\&#207\;" -- latin capital letter I with diaeresis,U+00CF ISOlat1  
&#208;    ETH      "\&#208\;" -- latin capital letter ETH, U+00D0 ISOlat1  
&#209;    Ntilde   "\&#209\;" -- latin capital letter N with tilde,U+00D1 ISOlat1  
&#210;    Ograve   "\&#210\;" -- latin capital letter O with grave,U+00D2 ISOlat1  
&#211;    Oacute   "\&#211\;" -- latin capital letter O with acute,U+00D3 ISOlat1  
&#212;    Ocirc    "\&#212\;" -- latin capital letter O with circumflex,U+00D4 ISOlat1  
&#213;    Otilde   "\&#213\;" -- latin capital letter O with tilde,U+00D5 ISOlat1  
&#214;    Ouml     "\&#214\;" -- latin capital letter O with diaeresis,U+00D6 ISOlat1  
&#215;    times    "\&#215\;" -- multiplication sign, U+00D7 ISOnum  
&#216;    Oslash   "\&#216\;" -- latin capital letter O with stroke= latin capital letter O slash,U+00D8 ISOlat1  
&#217;    Ugrave   "\&#217\;" -- latin capital letter U with grave,U+00D9 ISOlat1  
&#218;    Uacute   "\&#218\;" -- latin capital letter U with acute,U+00DA ISOlat1  
&#219;    Ucirc    "\&#219\;" -- latin capital letter U with circumflex,U+00DB ISOlat1  
&#220;    Uuml     "\&#220\;" -- latin capital letter U with diaeresis,U+00DC ISOlat1  
&#221;    Yacute   "\&#221\;" -- latin capital letter Y with acute,U+00DD ISOlat1  
&#222;    THORN    "\&#222\;" -- latin capital letter THORN,U+00DE ISOlat1  
&#223;    szlig    "\&#223\;" -- latin small letter sharp s = ess-zed,U+00DF ISOlat1  
&#224;    agrave   "\&#224\;" -- latin small letter a with grave= latin small letter a grave,U+00E0 ISOlat1  
&#225;    aacute   "\&#225\;" -- latin small letter a with acute,U+00E1 ISOlat1  
&#226;    acirc    "\&#226\;" -- latin small letter a with circumflex,U+00E2 ISOlat1  
&#227;    atilde   "\&#227\;" -- latin small letter a with tilde,U+00E3 ISOlat1  
&#228;    auml     "\&#228\;" -- latin small letter a with diaeresis,U+00E4 ISOlat1  
&#229;    aring    "\&#229\;" -- latin small letter a with ring above= latin small letter a ring,U+00E5 ISOlat1  
&#230;    aelig    "\&#230\;" -- latin small letter ae= latin small ligature ae, U+00E6 ISOlat1  
&#231;    ccedil   "\&#231\;" -- latin small letter c with cedilla,U+00E7 ISOlat1  
&#232;    egrave   "\&#232\;" -- latin small letter e with grave,U+00E8 ISOlat1  
&#233;    eacute   "\&#233\;" -- latin small letter e with acute,U+00E9 ISOlat1  
&#234;    ecirc    "\&#234\;" -- latin small letter e with circumflex,U+00EA ISOlat1  
&#235;    euml     "\&#235\;" -- latin small letter e with diaeresis,U+00EB ISOlat1  
&#236;    igrave   "\&#236\;" -- latin small letter i with grave,U+00EC ISOlat1  
&#237;    iacute   "\&#237\;" -- latin small letter i with acute,U+00ED ISOlat1  
&#238;    icirc    "\&#238\;" -- latin small letter i with circumflex,U+00EE ISOlat1  
&#239;    iuml     "\&#239\;" -- latin small letter i with diaeresis,U+00EF ISOlat1  
&#240;    eth      "\&#240\;" -- latin small letter eth, U+00F0 ISOlat1  
&#241;    ntilde   "\&#241\;" -- latin small letter n with tilde,U+00F1 ISOlat1  
&#242;    ograve   "\&#242\;" -- latin small letter o with grave,U+00F2 ISOlat1  
&#243;    oacute   "\&#243\;" -- latin small letter o with acute,U+00F3 ISOlat1  
&#244;    ocirc    "\&#244\;" -- latin small letter o with circumflex,U+00F4 ISOlat1  
&#245;    otilde   "\&#245\;" -- latin small letter o with tilde,U+00F5 ISOlat1  
&#246;    ouml     "\&#246\;" -- latin small letter o with diaeresis,U+00F6 ISOlat1  
&#247;    divide   "\&#247\;" -- division sign, U+00F7 ISOnum  
&#248;    oslash   "\&#248\;" -- latin small letter o with stroke,= latin small letter o slash,U+00F8 ISOlat1  
&#249;    ugrave   "\&#249\;" -- latin small letter u with grave,U+00F9 ISOlat1  
&#250;    uacute   "\&#250\;" -- latin small letter u with acute,U+00FA ISOlat1  
&#251;    ucirc    "\&#251\;" -- latin small letter u with circumflex,U+00FB ISOlat1  
&#252;    uuml     "\&#252\;" -- latin small letter u with diaeresis,U+00FC ISOlat1  
&#253;    yacute   "\&#253\;" -- latin small letter y with acute,U+00FD ISOlat1  
&#254;    thorn    "\&#254\;" -- latin small letter thorn,U+00FE ISOlat1  
&#255;    yuml     "\&#255\;" -- latin small letter y with diaeresis,U+00FF ISOlat1  

2. http://www.w3.org/TR/html4/HTMLsymbol.ent文件
- Mathematical, Greek and Symbolic characters for HTML  

- Latin Extended-B  
 &#402;   fnof      "\&#402\;" -- latin small f with hook = function= florin, U+0192 ISOtech  
- Greek ->
 &#913;   Alpha     "\&#913\;" -- greek capital letter alpha, U+0391  
 &#914;   Beta      "\&#914\;" -- greek capital letter beta, U+0392  
 &#915;   Gamma     "\&#915\;" -- greek capital letter gamma,U+0393 ISOgrk3  
 &#916;   Delta     "\&#916\;" -- greek capital letter delta,U+0394 ISOgrk3  
 &#917;   Epsilon   "\&#917\;" -- greek capital letter epsilon, U+0395  
 &#918;   Zeta      "\&#918\;" -- greek capital letter zeta, U+0396  
 &#919;   Eta       "\&#919\;" -- greek capital letter eta, U+0397  
 &#920;   Theta     "\&#920\;" -- greek capital letter theta,U+0398 ISOgrk3  
 &#921;   Iota      "\&#921\;" -- greek capital letter iota, U+0399  
 &#922;   Kappa     "\&#922\;" -- greek capital letter kappa, U+039A  
 &#923;   Lambda    "\&#923\;" -- greek capital letter lambda,U+039B ISOgrk3  
 &#924;   Mu        "\&#924\;" -- greek capital letter mu, U+039C  
 &#925;   Nu        "\&#925\;" -- greek capital letter nu, U+039D  
 &#926;   Xi        "\&#926\;" -- greek capital letter xi, U+039E ISOgrk3  
 &#927;   Omicron   "\&#927\;" -- greek capital letter omicron, U+039F  
 &#928;   Pi        "\&#928\;" -- greek capital letter pi, U+03A0 ISOgrk3  
 &#929;   Rho       "\&#929\;" -- greek capital letter rho, U+03A1  
- there i no Sigmaf, and no U+03A2 character either  
 &#931;   Sigma     "\&#931\;" -- greek capital letter sigma,U+03A3 ISOgrk3  
 &#932;   Tau       "\&#932\;" -- greek capital letter tau, U+03A4  
 &#933;   Upsilon   "\&#933\;" -- greek capital letter upsilon,U+03A5 ISOgrk3  
 &#934;   Phi       "\&#934\;" -- greek capital letter phi,U+03A6 ISOgrk3  
 &#935;   Chi       "\&#935\;" -- greek capital letter chi, U+03A7  
 &#936;   Psi       "\&#936\;" -- greek capital letter psi,U+03A8 ISOgrk3  
 &#937;   Omega     "\&#937\;" -- greek capital letter omega,U+03A9 ISOgrk3  
 &#945;   alpha     "\&#945\;" -- greek small letter alpha,U+03B1 ISOgrk3  
 &#946;   beta      "\&#946\;" -- greek small letter beta, U+03B2 ISOgrk3  
 &#947;   gamma     "\&#947\;" -- greek small letter gamma,U+03B3 ISOgrk3  
 &#948;   delta     "\&#948\;" -- greek small letter delta,U+03B4 ISOgrk3  
 &#949;   epsilon   "\&#949\;" -- greek small letter epsilon,U+03B5 ISOgrk3  
 &#950;   zeta      "\&#950\;" -- greek small letter zeta, U+03B6 ISOgrk3  
 &#951;   eta       "\&#951\;" -- greek small letter eta, U+03B7 ISOgrk3  
 &#952;   theta     "\&#952\;" -- greek small letter theta,U+03B8 ISOgrk3  
 &#953;   iota      "\&#953\;" -- greek small letter iota, U+03B9 ISOgrk3  
 &#954;   kappa     "\&#954\;" -- greek small letter kappa,U+03BA ISOgrk3  
 &#955;   lambda    "\&#955\;" -- greek small letter lambda,U+03BB ISOgrk3  
 &#956;   mu        "\&#956\;" -- greek small letter mu, U+03BC ISOgrk3  
 &#957;   nu        "\&#957\;" -- greek small letter nu, U+03BD ISOgrk3  
 &#958;   xi        "\&#958\;" -- greek small letter xi, U+03BE ISOgrk3  
 &#959;   omicron   "\&#959\;" -- greek small letter omicron, U+03BF NEW  
 &#960;   pi        "\&#960\;" -- greek small letter pi, U+03C0 ISOgrk3  
 &#961;   rho       "\&#961\;" -- greek small letter rho, U+03C1 ISOgrk3  
 &#962;   sigmaf    "\&#962\;" -- greek small letter final sigma,U+03C2 ISOgrk3  
 &#963;   sigma     "\&#963\;" -- greek small letter sigma,U+03C3 ISOgrk3  
 &#964;   tau       "\&#964\;" -- greek small letter tau, U+03C4 ISOgrk3  
 &#965;   upsilon   "\&#965\;" -- greek small letter upsilon,U+03C5 ISOgrk3  
 &#966;   phi       "\&#966\;" -- greek small letter phi, U+03C6 ISOgrk3  
 &#967;   chi       "\&#967\;" -- greek small letter chi, U+03C7 ISOgrk3  
 &#968;   psi       "\&#968\;" -- greek small letter psi, U+03C8 ISOgrk3  
 &#969;   omega     "\&#969\;" -- greek small letter omega,U+03C9 ISOgrk3  
 &#977;   thetasym  "\&#977\;" -- greek small letter theta symbol,U+03D1 NEW  
 &#978;   upsih     "\&#978\;" -- greek upsilon with hook symbol,U+03D2 NEW  
 &#982;   piv       "\&#982\;" -- greek pi symbol, U+03D6 ISOgrk3  
- GeneralPunctuation  
 &#8226;  bull      "\&#8226\;" -- bullet = black small circle,U+2022 ISOpub   
- bullet s NOT the same as bullet operator, U+2219  
 &#8230;  hellip    "\&#8230\;" -- horizontal ellipsis = three dot leader,U+2026 ISOpub   
 &#8242;  prime     "\&#8242\;" -- prime = minutes = feet, U+2032 ISOtech  
 &#8243;  Prime     "\&#8243\;" -- double prime = seconds = inches,U+2033 ISOtech  
 &#8254;  oline     "\&#8254\;" -- overline = spacing overscore,U+203E NEW  
 &#8260;  frasl     "\&#8260\;" -- fraction slash, U+2044 NEW  
- Letterlke Symbols  
 &#8472;  weierp    "\&#8472\;" -- script capital P = power set= Weierstrass p, U+2118 ISOamso  
 &#8465;  image     "\&#8465\;" -- blackletter capital I = imaginary part,U+2111 ISOamso  
 &#8476;  real      "\&#8476\;" -- blackletter capital R = real part symbol,U+211C ISOamso  
 &#8482;  trade     "\&#8482\;" -- trade mark sign, U+2122 ISOnum  
 &#8501;  alefsym   "\&#8501\;" -- alef symbol = first transfinite cardinal,U+2135 NEW  

- Arrows  
 &#8592;  larr      "\&#8592\;" -- leftwards arrow, U+2190 ISOnum  
 &#8593;  uarr      "\&#8593\;" -- upwards arrow, U+2191 ISOnum 
 &#8594;  rarr      "\&#8594\;" -- rightwards arrow, U+2192 ISOnum  
 &#8595;  darr      "\&#8595\;" -- downwards arrow, U+2193 ISOnum  
 &#8596;  harr      "\&#8596\;" -- left right arrow, U+2194 ISOamsa  
 &#8629;  crarr     "\&#8629\;" -- downwards arrow with corner leftwards= carriage return, U+21B5 NEW  
 &#8656;  lArr      "\&#8656\;" -- leftwards double arrow, U+21D0 ISOtech  

 &#8657;  uArr      "\&#8657\;" -- upwards double arrow, U+21D1 ISOamsa  
 &#8658;  rArr      "\&#8658\;" -- rightwards double arrow,U+21D2 ISOtech  

 &#8659;  dArr      "\&#8659\;" -- downwards double arrow, U+21D3 ISOamsa  
 &#8660;  hArr      "\&#8660\;" -- left right double arrow,U+21D4 ISOamsa  
- Mathemaical Operators  
 &#8704;  forall    "\&#8704\;" -- for all, U+2200 ISOtech  
 &#8706;  part      "\&#8706\;" -- partial differential, U+2202 ISOtech   
 &#8707;  exist     "\&#8707\;" -- there exists, U+2203 ISOtech  
 &#8709;  empty     "\&#8709\;" -- empty set = null set = diameter,U+2205 ISOamso  
 &#8711;  nabla     "\&#8711\;" -- nabla = backward difference,U+2207 ISOtech  
 &#8712;  isin      "\&#8712\;" -- element of, U+2208 ISOtech  
 &#8713;  notin     "\&#8713\;" -- not an element of, U+2209 ISOtech  
 &#8715;  ni        "\&#8715\;" -- contains as member, U+220B ISOtech  

 &#8719;  prod      "\&#8719\;" -- n-ary product = product sign,U+220F ISOamsb  

 &#8721;  sum       "\&#8721\;" -- n-ary sumation, U+2211 ISOamsb  

 &#8722;  minus     "\&#8722\;" -- minus sign, U+2212 ISOtech  
 &#8727;  lowast    "\&#8727\;" -- asterisk operator, U+2217 ISOtech  
 &#8730;  radic     "\&#8730\;" -- square root = radical sign,U+221A ISOtech  
 &#8733;  prop      "\&#8733\;" -- proportional to, U+221D ISOtech  
 &#8734;  infin     "\&#8734\;" -- infinity, U+221E ISOtech  
 &#8736;  ang       "\&#8736\;" -- angle, U+2220 ISOamso  
 &#8743;  and       "\&#8743\;" -- logical and = wedge, U+2227 ISOtech  
 &#8744;  or        "\&#8744\;" -- logical or = vee, U+2228 ISOtech  
 &#8745;  cap       "\&#8745\;" -- intersection = cap, U+2229 ISOtech  
 &#8746;  cup       "\&#8746\;" -- union = cup, U+222A ISOtech  
 &#8747;  int       "\&#8747\;" -- integral, U+222B ISOtech  
 &#8756;  there4    "\&#8756\;" -- therefore, U+2234 ISOtech  
 &#8764;  sim       "\&#8764\;" -- tilde operator = varies with = similar to,U+223C ISOtech  

 &#8773;  cong      "\&#8773\;" -- approximately equal to, U+2245 ISOtech  
 &#8776;  asymp     "\&#8776\;" -- almost equal to = asymptotic to,U+2248 ISOamsr  
 &#8800;  ne        "\&#8800\;" -- not equal to, U+2260 ISOtech  
 &#8801;  equiv     "\&#8801\;" -- identical to, U+2261 ISOtech  
 &#8804;  le        "\&#8804\;" -- less-than or equal to, U+2264 ISOtech  
 &#8805;  ge        "\&#8805\;" -- greater-than or equal to,U+2265 ISOtech  
 &#8834;  sub       "\&#8834\;" -- subset of, U+2282 ISOtech  
 &#8835;  sup       "\&#8835\;" -- superset of, U+2283 ISOtech  

 &#8836;  nsub      "\&#8836\;" -- not a subset of, U+2284 ISOamsn  
 &#8838;  sube      "\&#8838\;" -- subset of or equal to, U+2286 ISOtech  
 &#8839;  supe      "\&#8839\;" -- superset of or equal to,U+2287 ISOtech  
 &#8853;  oplus     "\&#8853\;" -- circled plus = direct sum,U+2295 ISOamsb  
 &#8855;  otimes    "\&#8855\;" -- circled times = vector product,U+2297 ISOamsb  
 &#8869;  perp      "\&#8869\;" -- up tack = orthogonal to = perpendicular,U+22A5 ISOtech  
 &#8901;  sdot      "\&#8901\;" -- dot operator, U+22C5 ISOamsb  

- Miscellneous Technical  
 &#8968;  lceil     "\&#8968\;" -- left ceiling = apl upstile,U+2308 ISOamsc   
 &#8969;  rceil     "\&#8969\;" -- right ceiling, U+2309 ISOamsc   
 &#8970;  lfloor    "\&#8970\;" -- left floor = apl downstile,U+230A ISOamsc   
 &#8971;  rfloor    "\&#8971\;" -- right floor, U+230B ISOamsc   
 &#9001;  lang      "\&#9001\;" -- left-pointing angle bracket = bra,U+2329 ISOtech  
 &#9002;  rang      "\&#9002\;" -- right-pointing angle bracket = ket,U+232A ISOtech  

- Geometrc Shapes  
 &#9674;  loz       "\&#9674\;" -- lozenge, U+25CA ISOpub  
- Miscellneous Symbols  
 &#9824;  spades    "\&#9824\;" -- black spade suit, U+2660 ISOpub  
- black hre seems to mean filled as opposed to hollow  
 &#9827;  clubs     "\&#9827\;" -- black club suit = shamrock,U+2663 ISOpub  
 &#9829;  hearts    "\&#9829\;" -- black heart suit = valentine,U+2665 ISOpub  
 &#9830;  diams     "\&#9830\;" -- black diamond suit, U+2666 ISOpub  
3. http://www.w3.org/TR/html4/HTMLspecial.ent文件
- Special characters for HTML  

- C0 Controls and Basic Latin  
 &#34;    quot      "\&#34\;"   -- quotation mark = APL quote,U+0022 ISOnum  
 &#38;    amp       "\&#38\;"   -- ampersand, U+0026 ISOnum  
 &#60;    lt        "\&#60\;"   -- less-than sign, U+003C ISOnum  
 &#62;    gt        "\&#62\;"   -- greater-than sign, U+003E ISOnum  

- Latin Extended-A  
 &#338;   OElig     "\&#338\;"  -- latin capital ligature OE,U+0152 ISOlat2  
 &#339;   oelig     "\&#339\;"  -- latin small ligature oe, U+0153 ISOlat2  
- ligature is a misnomer, this is a separate character in some languages  
 &#352;   Scaron    "\&#352\;"  -- latin capital letter S with caron,U+0160 ISOlat2  
 &#353;   scaron    "\&#353\;"  -- latin small letter s with caron,U+0161 ISOlat2  
 &#376;   Yuml      "\&#376\;"  -- latin capital letter Y with diaeresis,U+0178 ISOlat2  

- Spacing Modifier Letters  
 &#710;   circ      "\&#710\;"  -- modifier letter circumflex accent,U+02C6 ISOpub  
 &#732;   tilde     "\&#732\;"  -- small tilde, U+02DC ISOdia  

- General Punctuation  
 &#8194;  ensp      "\&#8194\;" -- en space, U+2002 ISOpub  
 &#8195;  emsp      "\&#8195\;" -- em space, U+2003 ISOpub  
 &#8201;  thinsp    "\&#8201\;" -- thin space, U+2009 ISOpub  
 &#8204;  zwnj      "\&#8204\;" -- zero width non-joiner,U+200C NEW RFC 2070  
 &#8205;  zwj       "\&#8205\;" -- zero width joiner, U+200D NEW RFC 2070  
 &#8206;  lrm       "\&#8206\;" -- left-to-right mark, U+200E NEW RFC 2070  
 &#8207;  rlm       "\&#8207\;" -- right-to-left mark, U+200F NEW RFC 2070  
 &#8211;  ndash     "\&#8211\;" -- en dash, U+2013 ISOpub  
 &#8212;  mdash     "\&#8212\;" -- em dash, U+2014 ISOpub  
 &#8216;  lsquo     "\&#8216\;" -- left single quotation mark,U+2018 ISOnum  
 &#8217;  rsquo     "\&#8217\;" -- right single quotation mark,U+2019 ISOnum  
 &#8218;  sbquo     "\&#8218\;" -- single low-9 quotation mark, U+201A NEW  
 &#8220;  ldquo     "\&#8220\;" -- left double quotation mark,U+201C ISOnum  
 &#8221;  rdquo     "\&#8221\;" -- right double quotation mark,U+201D ISOnum  
 &#8222;  bdquo     "\&#8222\;" -- double low-9 quotation mark, U+201E NEW  
 &#8224;  dagger    "\&#8224\;" -- dagger, U+2020 ISOpub  
 &#8225;  Dagger    "\&#8225\;" -- double dagger, U+2021 ISOpub  
 &#8240;  permil    "\&#8240\;" -- per mille sign, U+2030 ISOtech  
 &#8249;  lsaquo    "\&#8249\;" -- single left-pointing angle quotation mark,U+2039 ISO proposed  
- lsaquo is proposed but not yet ISO standardized  
 &#8250;  rsaquo    "\&#8250\;" -- single right-pointing angle quotation mark,U+203A ISO proposed  
- rsaquo is proposed but not yet ISO standardized  
&#8364;   euro     "\&#8364\;"  -- euro sign, U+20AC NEW  

