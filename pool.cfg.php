<?php

# towns...
# find:       .*Lv2.*eam\|(.*)"(.*\n){11}.*</tr>
# replace:    ],'$1'=>[

#replace to array...
#  find:      .*Lv4.*\n.*flowBlockId-values.*&quot;(.*?)&quot;,&quot;(.*?)&quot;,&quot;Team.*\n.*\n.*>(.*?)</div>.*
#  replace:   ['flowBlockId'=>'$1','id'=>'$2','name'=>'$3'],

# replace extra crap -- multiple times
# find:      ^[^\[\]].*\n
# replace:   "blank"

$compusport_id=5933;
$compusport_schedule = 'https://compusport.ca/CS/Schedules/BergerSchedule/'.$compusport_id;
$compusport_teamstats = 'https://compusport.ca/CS/TeamStats/EmbeddedStats/'.$compusport_id;


/*

r = [];jQuery('.DropDownItem.Lv2.Item').each(function(){
    let d = jQuery(this).data('m');
    r[d[0].v] = d[1].v;
}); console.log(r);

$teamIds = [
"3-PERSON (SATURDAY) A"=>"27523"
"A1 (MONDAY) F"=>"27096"
"A1 (THURSDAY) R"=>"27122"
"A2 (MONDAY) F"=>"27098"
"A2 (THURSDAY) R"=>"27124"
"A (TUESDAY) 4-PERSON"=>"27106"
"A (TUESDAY) AL"=>"27005"
"A (WEDNESDAY) A"=>"27077"
"A (WEDNESDAY) O"=>"26538"
"AA (THURSDAY) R"=>"27120"
"AA (TUESDAY) A"=>"27075"
"AA (WEDNESDAY) O"=>"26540"
"AA-A (WEDNESDAY) R"=>"27114"
"B1 (TUESDAY) 4-PERSON"=>"27108"
"B1 (TUESDAY) F"=>"27100"
"B1 (TUESDAY) O"=>"26542"
"B2 (THURSDAY) F"=>"27104"
"B2 (TUESDAY) 4-PERSON"=>"27110"
"B (MONDAY) A"=>"27079"
"B (THURSDAY) R"=>"27126"
"B (WEDNESDAY) AL"=>"27071"
"B (WEDNESDAY) R"=>"27118"
"BLUE B (THURSDAY) O"=>"26544"
"C (THURSDAY) AL"=>"27073"
"MASTER (WEDNESDAY) R"=>"27112"
"OPEN HANDICAPPED (THURSDAY) NDC"=>"28949"
"OPEN HANDICAPPED (TUESDAY) NW"=>"29070"
"RED B (THURSDAY) O"=>"26546"
]

*/



$data = [

    'ALBERT LEA' => [
        ['flowBlockId' => '79309c88-775c-423a-b3fc-9490b67f4b34', 'id' => '37167', 'name' => 'B (WEDNESDAY) AL'],
        ['flowBlockId' => 'e3c4475c-1098-4417-b63b-50ddd63cf616', 'id' => '37169', 'name' => 'C (THURSDAY) AL'],
    ],
    'AUSTIN' => [
        ['flowBlockId' => '78b559e5-5ffe-4867-9e74-290859a45097', 'id' => '37164', 'name' => 'AA (TUESDAY) A'],
        ['flowBlockId' => '3b4a4585-42ad-45d8-b09e-dd9ee1759797', 'id' => '37165', 'name' => 'A (WEDNESDAY) A'],
        ['flowBlockId' => '8cecfb13-d171-483c-9a48-14c7c594a181', 'id' => '37166', 'name' => 'B (MONDAY) A'],
        ['flowBlockId' => '00000000-0000-0000-0000-000000000000', 'id' => '37170', 'name' => '3-PERSON (SATURDAY) A'],
    ],
    'EAST COUNTRY' => [
        ['flowBlockId' => '00000000-0000-0000-0000-000000000000', 'id' => '37171', 'name' => 'LADIES (TUESDAY) EC'],
        ['flowBlockId' => '00000000-0000-0000-0000-000000000000', 'id' => '37174', 'name' => 'OPEN (MONDAY) EC'],
        ['flowBlockId' => '00000000-0000-0000-0000-000000000000', 'id' => '37172', 'name' => 'OPEN-2 (WEDNESDAY) EC'],
        ['flowBlockId' => '00000000-0000-0000-0000-000000000000', 'id' => '37173', 'name' => 'OPEN-1 (WEDNESDAY) EC'],
    ],
    'FARIBAULT' => [
        ['flowBlockId' => '9c376570-e4bc-405f-b1ab-9b0837807491', 'id' => '37175', 'name' => 'A1 (MONDAY) F'],
        ['flowBlockId' => '210bcba5-4a4b-4d6b-88e7-fa8fc05d84eb', 'id' => '37176', 'name' => 'A2 (MONDAY) F'],
        ['flowBlockId' => '60741c37-28a6-47d5-ae1d-a92b78267716', 'id' => '37177', 'name' => 'B1 (TUESDAY) F'],
        ['flowBlockId' => '3f040916-cf43-43b5-a03e-005da1110d4b', 'id' => '37178', 'name' => 'B2 (THURSDAY) F'],
    ],
    'NDC' => [
        [
            'flowBlockId' => '00000000-0000-0000-0000-000000000000',
            'id' => '37179',
            'name' => 'OPEN HANDICAPPED (THURSDAY) NDC',
        ],
    ],
    'NORTHWEST' => [
        ['flowBlockId' => '00000000-0000-0000-0000-000000000000', 'id' => '37180', 'name' => 'OPEN HANDICAPPED (TUESDAY) NW'],
    ],
    'OWATONNA' => [
        ['flowBlockId' => '7195adef-d514-4c5b-8152-a157ac83eace', 'id' => '37159', 'name' => 'AA (WEDNESDAY) O'],
        ['flowBlockId' => '8ca83042-2581-4d7f-9325-fe3ae565fe56', 'id' => '37160', 'name' => 'A (WEDNESDAY) O'],
        ['flowBlockId' => 'f69446bc-404b-4af4-ab4a-817f7baf7b76', 'id' => '37161', 'name' => 'RED B (THURSDAY) O'],
        ['flowBlockId' => '93ced750-976b-4e59-8fd4-c8b940042499', 'id' => '37162', 'name' => 'BLUE B (THURSDAY) O'],
        ['flowBlockId' => '3ac69021-b700-4104-9efc-cb5513f26305', 'id' => '37163', 'name' => 'B1 (TUESDAY) O'],
    ],
    'RIVER VALLEY' => [
        ['flowBlockId' => '00000000-0000-0000-0000-000000000000', 'id' => '37181', 'name' => 'OPEN (THURSDAY) RV'],
    ],
    'ROCHESTER' => [
        ['flowBlockId' => 'f5d6f35d-fd37-4736-b82c-38cb4fea22f0', 'id' => '37182', 'name' => 'A (TUESDAY) 4-PERSON'],
        ['flowBlockId' => '34548de7-8b87-45aa-b691-fca6b788b66f', 'id' => '37183', 'name' => 'B1 (TUESDAY) 4-PERSON'],
        ['flowBlockId' => 'f689d88b-4f68-4d7f-b768-a91692abddbf', 'id' => '37184', 'name' => 'B2 (TUESDAY) 4-PERSON'],
        ['flowBlockId' => 'd7253249-44c5-4887-8b9f-3a5807c8d86e', 'id' => '37185', 'name' => 'MASTER (WEDNESDAY) R'],
        ['flowBlockId' => 'a3073a45-6b1e-419e-9ebb-2d9be8414f6b', 'id' => '37186', 'name' => 'AA-A (WEDNESDAY) R'],
        ['flowBlockId' => '1e64592d-5438-49cf-a667-81e8504b51ba', 'id' => '37188', 'name' => 'B (WEDNESDAY) R'],
        ['flowBlockId' => '0bffa18a-fbff-4674-abe5-428065d59f67', 'id' => '37189', 'name' => 'AA (THURSDAY) R'],
        ['flowBlockId' => 'db8cdb1e-0c3a-4838-89da-a1676b523b89', 'id' => '37190', 'name' => 'A1 (THURSDAY) R'],
        ['flowBlockId' => 'a38eb14c-0bf9-47bd-ac7e-d131ba5e0301', 'id' => '37191', 'name' => 'A2 (THURSDAY) R'],
        ['flowBlockId' => 'fd489ba4-6048-4ef6-8ed8-8182db90eecd', 'id' => '37192', 'name' => 'B (THURSDAY) R'],
    ],
    'SOUTH BORDER' => [
        ['flowBlockId' => '00000000-0000-0000-0000-000000000000', 'id' => '37193', 'name' => 'OPEN (MONDAY) 4-PERSON SB'],
    ],
    'SOUTH CENTRAL' => [
        [
            'flowBlockId' => '00000000-0000-0000-0000-000000000000',
            'id' => '37194',
            'name' => '3-PERSON HANDICAPPED (THUR) SCE',
        ],
    ],
    'SOUTH COUNTRY' => [
        ['flowBlockId' => '00000000-0000-0000-0000-000000000000', 'id' => '37195', 'name' => 'OPEN HANDICAPPED (MONDAY) SCO'],
    ],
    'SOUTHLANDER' => [
        ['flowBlockId' => '00000000-0000-0000-0000-000000000000', 'id' => '37196', 'name' => 'OPEN (WEDNESDAY) 4-PERSON SL'],
    ],
    'WEST BORDER' => [
        ['flowBlockId' => 'da9d150d-893e-4e1a-ab4c-ed38643f07a7', 'id' => '37197', 'name' => '3-PERSON (SATURDAY)'],
    ],
    'WEST COUNTRY' => [
        ['flowBlockId' => '00000000-0000-0000-0000-000000000000', 'id' => '37198', 'name' => 'OPEN (WEDNESDAY) WC'],
    ],
    'WEST END' => [
        ['flowBlockId' => '00000000-0000-0000-0000-000000000000', 'id' => '37199', 'name' => 'B (TUESDAY) WE'],
        ['flowBlockId' => '00000000-0000-0000-0000-000000000000', 'id' => '37200', 'name' => 'C (WEDNESDAY) 4-PERSON WE'],
    ],
    'ZUMBROTA VALLEY' => [
        ['flowBlockId' => '00000000-0000-0000-0000-000000000000', 'id' => '37201', 'name' => 'OPEN (THURSDAY) 4-PERSON ZV'],
    ],
    'SAMPLE' => [
        ['flowBlockId' => '00000000-0000-0000-0000-000000000000', 'id' => '39422', 'name' => 'SAMPLE'],
    ],
];
