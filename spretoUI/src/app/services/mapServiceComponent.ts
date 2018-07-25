import { Injectable } from '@angular/core';
import { CountriesData } from 'countries-map';

@Injectable()

export class MapServices{

    getMapData(){
        let data: CountriesData = {
            'AF':{'value': 	1	},
            'AX':{'value': 	2	},
            'AL':{'value': 	3	},
            'DZ':{'value': 	4	},
            'AS':{'value': 	5	},
            'AD':{'value': 	6	},
            'AO':{'value': 	7	},
            'AI':{'value': 	8	},
            'AQ':{'value': 	9	},
            'AG':{'value': 	10	},
            'AR':{'value': 	11	},
            'AM':{'value': 	12	},
            'AW':{'value': 	13	},
            'AU':{'value': 	14	},
            'AT':{'value': 	15	},
            'AZ':{'value': 	16	},
            'BH':{'value': 	17	},
            'BS':{'value': 	18	},
            'BD':{'value': 	19	},
            'BB':{'value': 	20	},
            'BY':{'value': 	21	},
            'BE':{'value': 	22	},
            'BZ':{'value': 	23	},
            'BJ':{'value': 	24	},
            'BM':{'value': 	25	},
            'BT':{'value': 	26	},
            'BO':{'value': 	27	},
            'BQ':{'value': 	28	},
            'BA':{'value': 	29	},
            'BW':{'value': 	30	},
            'BV':{'value': 	31	},
            'BR':{'value': 	32	},
            'IO':{'value': 	33	},
            'BN':{'value': 	34	},
            'BG':{'value': 	35	},
            'BF':{'value': 	36	},
            'BI':{'value': 	37	},
            'KH':{'value': 	38	},
            'CM':{'value': 	39	},
            'CA':{'value': 	40	},
            'CV':{'value': 	41	},
            'KY':{'value': 	42	},
            'CF':{'value': 	43	},
            'TD':{'value': 	44	},
            'CL':{'value': 	45	},
            'CN':{'value': 	46	},
            'CX':{'value': 	47	},
            'CC':{'value': 	48	},
            'CO':{'value': 	49	},
            'KM':{'value': 	50	},
            'CG':{'value': 	51	},
            'CD':{'value': 	52	},
            'CK':{'value': 	53	},
            'CR':{'value': 	54	},
            'CI':{'value': 	55	},
            'HR':{'value': 	56	},
            'CU':{'value': 	57	},
            'CW':{'value': 	58	},
            'CY':{'value': 	59	},
            'CZ':{'value': 	60	},
            'DK':{'value': 	61	},
            'DJ':{'value': 	62	},
            'DM':{'value': 	63	},
            'DO':{'value': 	64	},
            'EC':{'value': 	65	},
            'EG':{'value': 	66	},
            'SV':{'value': 	67	},
            'GQ':{'value': 	68	},
            'ER':{'value': 	69	},
            'EE':{'value': 	70	},
            'ET':{'value': 	71	},
            'FK':{'value': 	72	},
            'FO':{'value': 	73	},
            'FJ':{'value': 	74	},
            'FI':{'value': 	75	},
            'FR':{'value': 	76	},
            'GF':{'value': 	77	},
            'PF':{'value': 	78	},
            'TF':{'value': 	79	},
            'GA':{'value': 	80	},
            'GM':{'value': 	81	},
            'GE':{'value': 	82	},
            'DE':{'value': 	83	},
            'GH':{'value': 	84	},
            'GI':{'value': 	85	},
            'GR':{'value': 	86	},
            'GL':{'value': 	87	},
            'GD':{'value': 	89	},
            'GP':{'value': 	90	},
            'GU':{'value': 	91	},
            'GT':{'value': 	92	},
            'GG':{'value': 	93	},
            'GN':{'value': 	94	},
            'GW':{'value': 	95	},
            'GY':{'value': 	96	},
            'HT':{'value': 	97	},
            'HM':{'value': 	98	},
            'VA':{'value': 	99	},
            'HN':{'value': 	100	},
            'HK':{'value': 	101	},
            'HU':{'value': 	102	},
            'IS':{'value': 	103	},
            'IN':{'value': 	104	},
            'ID':{'value': 	105	},
            'IR':{'value': 	106	},
            'IQ':{'value': 	107	},
            'IE':{'value': 	108	},
            'IM':{'value': 	109	},
            'IL':{'value': 	110	},
            'IT':{'value': 	111	},
            'JM':{'value': 	112	},
            'JP':{'value': 	113	},
            'JE':{'value': 	114	},
            'JO':{'value': 	115	},
            'KZ':{'value': 	116	},
            'KE':{'value': 	117	},
            'KI':{'value': 	118	},
            'KP':{'value': 	119	},
            'KR':{'value': 	120	},
            'KW':{'value': 	121	},
            'KG':{'value': 	122	},
            'LA':{'value': 	123	},
            'LV':{'value': 	124	},
            'LB':{'value': 	125	},
            'LS':{'value': 	126	},
            'LR':{'value': 	127	},
            'LY':{'value': 	128	},
            'LI':{'value': 	129	},
            'LT':{'value': 	130	},
            'LU':{'value': 	131	},
            'MO':{'value': 	132	},
            'MK':{'value': 	133	},
            'MG':{'value': 	134	},
            'MW':{'value': 	135	},
            'MY':{'value': 	136	},
            'MV':{'value': 	137	},
            'ML':{'value': 	138	},
            'MT':{'value': 	139	},
            'MH':{'value': 	140	},
            'MQ':{'value': 	141	},
            'MR':{'value': 	142	},
            'MU':{'value': 	143	},
            'YT':{'value': 	144	},
            'MX':{'value': 	145	},
            'FM':{'value': 	146	},
            'MD':{'value': 	147	},
            'MC':{'value': 	148	},
            'MN':{'value': 	149	},
            'ME':{'value': 	150	},
            'MS':{'value': 	151	},
            'MA':{'value': 	152	},
            'MZ':{'value': 	153	},
            'MM':{'value': 	154	},
            'NA':{'value': 	155	},
            'NR':{'value': 	156	},
            'NP':{'value': 	157	},
            'NL':{'value': 	158	},
            'NC':{'value': 	159	},
            'NZ':{'value': 	160	},
            'NI':{'value': 	161	},
            'NE':{'value': 	162	},
            'NG':{'value': 	163	},
            'NU':{'value': 	164	},
            'NF':{'value': 	165	},
            'MP':{'value': 	166	},
            'NO':{'value': 	167	},
            'OM':{'value': 	168	},
            'PK':{'value': 	169	},
            'PW':{'value': 	170	},
            'PS':{'value': 	171	},
            'PA':{'value': 	172	},
            'PG':{'value': 	173	},
            'PY':{'value': 	174	},
            'PE':{'value': 	175	},
            'PH':{'value': 	176	},
            'PN':{'value': 	177	},
            'PL':{'value': 	178	},
            'PT':{'value': 	179	},
            'PR':{'value': 	180	},
            'QA':{'value': 	181	},
            'RE':{'value': 	182	},
            'RO':{'value': 	183	},
            'RU':{'value': 	184	},
            'RW':{'value': 	185	},
            'BL':{'value': 	186	},
            'SH':{'value': 	187	},
            'KN':{'value': 	188	},
            'LC':{'value': 	189	},
            'MF':{'value': 	190	},
            'PM':{'value': 	191	},
            'VC':{'value': 	192	},
            'WS':{'value': 	193	},
            'SM':{'value': 	194	},
            'ST':{'value': 	195	},
            'SA':{'value': 	196	},
            'SN':{'value': 	197	},
            'RS':{'value': 	198	},
            'SC':{'value': 	199	},
            'SL':{'value': 	200	},
            'SG':{'value': 	201	},
            'SX':{'value': 	202	},
            'SK':{'value': 	203	},
            'SI':{'value': 	204	},
            'SB':{'value': 	205	},
            'SO':{'value': 	206	},
            'ZA':{'value': 	207	},
            'GS':{'value': 	208	},
            'SS':{'value': 	209	},
            'ES':{'value': 	210	},
            'LK':{'value': 	211	},
            'SD':{'value': 	212	},
            'SR':{'value': 	213	},
            'SJ':{'value': 	214	},
            'SZ':{'value': 	215	},
            'SE':{'value': 	216	},
            'CH':{'value': 	217	},
            'SY':{'value': 	218	},
            'TW':{'value': 	219	},
            'TJ':{'value': 	220	},
            'TZ':{'value': 	221	},
            'TH':{'value': 	222	},
            'TL':{'value': 	223	},
            'TG':{'value': 	224	},
            'TK':{'value': 	225	},
            'TO':{'value': 	226	},
            'TT':{'value': 	227	},
            'TN':{'value': 	228	},
            'TR':{'value': 	229	},
            'TM':{'value': 	230	},
            'TC':{'value': 	231	},
            'TV':{'value': 	232	},
            'UG':{'value': 	233	},
            'UA':{'value': 	234	},
            'AE':{'value': 	235	},
            'GB':{'value': 	236	},
            'US':{'value': 	237	},
            'UM':{'value': 	238	},
            'UY':{'value': 	239	},
            'UZ':{'value': 	240	},
            'VU':{'value': 	241	},
            'VE':{'value': 	242	},
            'VN':{'value': 	243	},
            'VG':{'value': 	244	},
            'VI':{'value': 	245	},
            'WF':{'value': 	246	},
            'EH':{'value': 	247	},
            'YE':{'value': 	248	},
            'ZM':{'value': 	249	},
            'ZW':{'value': 	250	}

          };

          return data;
    }
}