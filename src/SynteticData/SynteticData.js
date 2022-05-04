export const race = () => {
    return {
        "count": 2,
        "next": "https://victory-relay.herokuapp.com/api/race/?is_finish=true&limit=1&page=2&year=",
        "previous": null,
        "results": [
            {
                "id": 1,
                "teams": [
                    {
                        "id": 1,
                        "name": "Sarancha",
                        "color_code_hex": "5ac8fa"
                    },
                    {
                        "id": 2,
                        "name": "Cars",
                        "color_code_hex": "ffcc00"
                    },
                    {
                        "id": 3,
                        "name": "Dinosaurs",
                        "color_code_hex": "ff3b30"
                    },
                    {
                        "id": 4,
                        "name": "Puppy Patrol",
                        "color_code_hex": "33c558"
                    },
                    {
                        "id": 5,
                        "name": "Friends",
                        "color_code_hex": "ff9500"
                    }
                ],
                "stage_types": [
                    {
                        "id": 1,
                        "title": "Старт",
                        "icon": "https://storage.yandexcloud.net/django-relay/run.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=Lp2CJL6ESA584V9i2eApC3g%2BR0Y%3D&Expires=1651651879",
                        "icon_bar": "https://storage.yandexcloud.net/django-relay/bar-icon/run.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=ub4cADDgBh5wBqA7KlldESvYHD8%3D&Expires=1651651879"
                    },
                    {
                        "id": 2,
                        "title": "Снайперская",
                        "icon": "https://storage.yandexcloud.net/django-relay/shoot.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=OB4qiLqTqBThrS8GGnqRXaQecPs%3D&Expires=1651651879",
                        "icon_bar": "https://storage.yandexcloud.net/django-relay/bar-icon/sniper.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=sMdw7T%2ByPBcJwBsH6BCA1GmYcp8%3D&Expires=1651651879"
                    },
                    {
                        "id": 3,
                        "title": "Велогонка",
                        "icon": "https://storage.yandexcloud.net/django-relay/bike.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=GtdxgxppdykipGydZxnkSQFbZO4%3D&Expires=1651651879",
                        "icon_bar": "https://storage.yandexcloud.net/django-relay/bar-icon/bike.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=xYjWoVzDlQcTn7QXboW7m8CXn0c%3D&Expires=1651651879"
                    },
                    {
                        "id": 4,
                        "title": "Полоса препятствий",
                        "icon": "https://storage.yandexcloud.net/django-relay/run-with-obstcls.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=g4TSKpvmljgmS2g5SeezGbWBzlw%3D&Expires=1651651879",
                        "icon_bar": "https://storage.yandexcloud.net/django-relay/bar-icon/run-obst.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=L1urx5VnsUqvZi2ZLJWNWCqVgQ4%3D&Expires=1651651879"
                    },
                    {
                        "id": 5,
                        "title": "Автомат",
                        "icon": "https://storage.yandexcloud.net/django-relay/gun.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=7oP8NUuBdVfJ5ZrmFGTmG8dVgwM%3D&Expires=1651651879",
                        "icon_bar": "https://storage.yandexcloud.net/django-relay/bar-icon/gun.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=U7Y8PJ1cmycsVOqEHet4SJVZyhY%3D&Expires=1651651879"
                    },
                    {
                        "id": 6,
                        "title": "Медсанбат",
                        "icon": "https://storage.yandexcloud.net/django-relay/heal.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=HjgiRVJ6%2FkKbbxPAU1sMqzEElz8%3D&Expires=1651651879",
                        "icon_bar": "https://storage.yandexcloud.net/django-relay/bar-icon/medic.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=i0WzGWug1Vl2671ET3ii3asrnpc%3D&Expires=1651651879"
                    },
                    {
                        "id": 7,
                        "title": "Оружейный",
                        "icon": "https://storage.yandexcloud.net/django-relay/gun-stage.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=5BsTBT2mwECuHZ5mOqi5pwhAv90%3D&Expires=1651651879",
                        "icon_bar": "https://storage.yandexcloud.net/django-relay/bar-icon/gunslinger.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=qnNlwM%2BZSc3gkxR7hmsuttm5Bwg%3D&Expires=1651651879"
                    },
                    {
                        "id": 8,
                        "title": "Рубеж",
                        "icon": "https://storage.yandexcloud.net/django-relay/bomb.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=9z5bAz3LsLaVd9IJWeg4zeij64E%3D&Expires=1651651879",
                        "icon_bar": "https://storage.yandexcloud.net/django-relay/bar-icon/boom.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=jlNA3RoEOw6Gz1FCtAFz83IxUJI%3D&Expires=1651651879"
                    },
                    {
                        "id": 9,
                        "title": "Лыжная гонка",
                        "icon": "https://storage.yandexcloud.net/django-relay/ski.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=NxwhsfUdCLTlFbKrKhC8vsBQtdQ%3D&Expires=1651651879",
                        "icon_bar": "https://storage.yandexcloud.net/django-relay/bar-icon/ski.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=AwpvdticiijFrrUC33wh%2BTr2%2F6w%3D&Expires=1651651879"
                    },
                    {
                        "id": 10,
                        "title": "История победы",
                        "icon": "https://storage.yandexcloud.net/django-relay/history.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=dnmXDwsbQQeBsS2lrwovdL6m59Y%3D&Expires=1651651879",
                        "icon_bar": "https://storage.yandexcloud.net/django-relay/bar-icon/history.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=OBnbit6AxVgNKRZH35JhQ%2F2Pc70%3D&Expires=1651651879"
                    },
                    {
                        "id": 11,
                        "title": "ОМП",
                        "icon": "https://storage.yandexcloud.net/django-relay/gaz-mask.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=gu%2BeqUSZj79y4Ol9AbUPbvlyEl4%3D&Expires=1651651879",
                        "icon_bar": "https://storage.yandexcloud.net/django-relay/bar-icon/gaz-mask.png?AWSAccessKeyId=YCAJE5YSq4P0mutgrJT4X7jOA&Signature=MZ%2B%2B1OeoZwZ98g0XyNi9wtoGX9U%3D&Expires=1651651879"
                    }
                ],
                "number": 1,
                "date_year": 2022,
                "is_active": false,
                "is_finish": true
            }
        ]
    }
}

export const teams = () => {
    return [
        {
            "id": 1,
            "results": [
                {
                    "stage_type": 1,
                    "start_time": "2022-04-15T18:01:52.607387+03:00",
                    "result": "00:13:40.845004"
                },
                {
                    "stage_type": 2,
                    "start_time": "2022-04-15T18:26:43.074835+03:00",
                    "result": "00:09:21.767725"
                },
                {
                    "stage_type": 3,
                    "start_time": "2022-04-15T18:36:46.922578+03:00",
                    "result": "00:00:03.602212"
                },
                {
                    "stage_type": 4,
                    "start_time": "2022-04-15T18:41:49.892685+03:00",
                    "result": "00:00:03.443965"
                },
                {
                    "stage_type": 5,
                    "start_time": "2022-04-15T18:42:40.718170+03:00",
                    "result": "00:00:04.060442"
                },
                {
                    "stage_type": 6,
                    "start_time": "2022-04-15T18:53:23.962204+03:00",
                    "result": "00:00:03.589424"
                },
                {
                    "stage_type": 7,
                    "start_time": "2022-04-15T18:54:47.432547+03:00",
                    "result": "00:00:04.998319"
                },
                {
                    "stage_type": 8,
                    "start_time": "2022-04-15T18:55:35.771685+03:00",
                    "result": "00:00:02.967976"
                },
                {
                    "stage_type": 9,
                    "start_time": "2022-04-15T18:56:30.868300+03:00",
                    "result": "00:00:00.603217"
                },
                {
                    "stage_type": 10,
                    "start_time": "2022-04-15T18:56:58.653312+03:00",
                    "result": "00:00:01.271840"
                }
            ],
            "current_stage": null,
            "finished_stages": 10,
            "name": "Sarancha",
            "slug": "sarancha",
            "color_code_hex": "5ac8fa",
            "start_time": "2022-04-15T14:35:54.325509+03:00",
            "final_result": "05:11:19.098276",
            "is_active": false,
            "is_finish": true,
            "race": 1
        },
        {
            "id": 2,
            "results": [
                {
                    "stage_type": 1,
                    "start_time": "2022-04-15T18:07:58.519365+03:00",
                    "result": "00:00:01.042816"
                },
                {
                    "stage_type": 2,
                    "start_time": "2022-04-15T18:27:20.499585+03:00",
                    "result": "00:00:01.812819"
                },
                {
                    "stage_type": 3,
                    "start_time": "2022-04-15T18:40:14.109685+03:00",
                    "result": "00:00:02.648535"
                },
                {
                    "stage_type": 4,
                    "start_time": "2022-04-15T18:42:01.208429+03:00",
                    "result": "00:00:03.404126"
                },
                {
                    "stage_type": 5,
                    "start_time": "2022-04-15T18:42:54.400711+03:00",
                    "result": "00:00:03.590362"
                },
                {
                    "stage_type": 6,
                    "start_time": "2022-04-15T18:53:37.874819+03:00",
                    "result": "00:00:04.099625"
                },
                {
                    "stage_type": 8,
                    "start_time": "2022-04-15T18:55:41.360221+03:00",
                    "result": "00:00:01.838435"
                },
                {
                    "stage_type": 9,
                    "start_time": "2022-04-15T18:56:33.646877+03:00",
                    "result": "00:00:00.946954"
                }
            ],
            "current_stage": null,
            "finished_stages": 8,
            "name": "Cars",
            "slug": "cars",
            "color_code_hex": "ffcc00",
            "start_time": "2022-04-15T14:35:54.325509+03:00",
            "final_result": "05:26:19.914254",
            "is_active": false,
            "is_finish": true,
            "race": 1
        },
        {
            "id": 3,
            "results": [
                {
                    "stage_type": 1,
                    "start_time": "2022-04-15T18:08:41.814202+03:00",
                    "result": "00:00:01.011670"
                },
                {
                    "stage_type": 2,
                    "start_time": "2022-04-15T18:27:33.533718+03:00",
                    "result": "00:00:02.722663"
                },
                {
                    "stage_type": 3,
                    "start_time": "2022-04-15T18:40:34.748600+03:00",
                    "result": "00:00:02.615057"
                },
                {
                    "stage_type": 4,
                    "start_time": "2022-04-15T18:42:07.343928+03:00",
                    "result": "00:00:02.553865"
                },
                {
                    "stage_type": 5,
                    "start_time": "2022-04-15T18:44:19.183865+03:00",
                    "result": "00:00:01.993550"
                },
                {
                    "stage_type": 6,
                    "start_time": "2022-04-15T18:53:54.047837+03:00",
                    "result": "00:00:02.078161"
                },
                {
                    "stage_type": 7,
                    "start_time": "2022-04-15T18:55:00.610501+03:00",
                    "result": "00:00:03.210413"
                },
                {
                    "stage_type": 8,
                    "start_time": "2022-04-15T18:55:45.443034+03:00",
                    "result": "00:00:00.790235"
                },
                {
                    "stage_type": 9,
                    "start_time": "2022-04-15T18:56:37.040394+03:00",
                    "result": "00:00:01.362335"
                },
                {
                    "stage_type": 10,
                    "start_time": "2022-04-15T18:57:04.747450+03:00",
                    "result": "00:00:00.900913"
                },
                {
                    "stage_type": 11,
                    "start_time": "2022-04-15T18:57:57.870211+03:00",
                    "result": "00:00:01.634545"
                }
            ],
            "current_stage": null,
            "finished_stages": 11,
            "name": "Dinosaurs",
            "slug": "dinosaurs",
            "color_code_hex": "ff3b30",
            "start_time": "2022-04-15T14:35:54.325509+03:00",
            "final_result": "05:26:19.991737",
            "is_active": false,
            "is_finish": true,
            "race": 1
        },
        {
            "id": 4,
            "results": [
                {
                    "stage_type": 1,
                    "start_time": "2022-04-15T18:09:36.673531+03:00",
                    "result": "00:00:03.471211"
                },
                {
                    "stage_type": 2,
                    "start_time": "2022-04-15T18:32:38.947821+03:00",
                    "result": "00:00:02.040219"
                },
                {
                    "stage_type": 3,
                    "start_time": "2022-04-15T18:41:15.625551+03:00",
                    "result": "00:00:02.221597"
                },
                {
                    "stage_type": 4,
                    "start_time": "2022-04-15T18:42:12.961552+03:00",
                    "result": "00:00:02.236132"
                },
                {
                    "stage_type": 5,
                    "start_time": "2022-04-15T18:44:31.338852+03:00",
                    "result": "00:00:04.500627"
                },
                {
                    "stage_type": 6,
                    "start_time": "2022-04-15T18:54:00.712367+03:00",
                    "result": "00:00:01.717666"
                },
                {
                    "stage_type": 7,
                    "start_time": "2022-04-15T18:55:09.427865+03:00",
                    "result": "00:00:04.533855"
                },
                {
                    "stage_type": 8,
                    "start_time": "2022-04-15T18:56:01.145311+03:00",
                    "result": "00:00:01.493467"
                },
                {
                    "stage_type": 9,
                    "start_time": "2022-04-15T18:56:41.370223+03:00",
                    "result": "00:00:01.403271"
                },
                {
                    "stage_type": 10,
                    "start_time": "2022-04-15T18:57:08.092791+03:00",
                    "result": "00:00:01.038975"
                }
            ],
            "current_stage": null,
            "finished_stages": 10,
            "name": "Puppy Patrol",
            "slug": "puppy-patrol",
            "color_code_hex": "33c558",
            "start_time": "2022-04-15T14:35:54.325509+03:00",
            "final_result": "05:26:20.139286",
            "is_active": false,
            "is_finish": true,
            "race": 1
        },
        {
            "id": 5,
            "results": [
                {
                    "stage_type": 1,
                    "start_time": "2022-04-15T18:10:33.340436+03:00",
                    "result": "00:00:05.877830"
                },
                {
                    "stage_type": 2,
                    "start_time": "2022-04-15T18:32:47.792484+03:00",
                    "result": "00:00:02.913756"
                },
                {
                    "stage_type": 3,
                    "start_time": "2022-04-15T18:41:23.430134+03:00",
                    "result": "00:00:02.664031"
                },
                {
                    "stage_type": 4,
                    "start_time": "2022-04-15T18:42:27.238155+03:00",
                    "result": "00:00:02.745641"
                },
                {
                    "stage_type": 5,
                    "start_time": "2022-04-15T18:44:45.487582+03:00",
                    "result": "00:00:03.045777"
                },
                {
                    "stage_type": 6,
                    "start_time": "2022-04-15T18:54:06.513188+03:00",
                    "result": "00:00:13.389395"
                },
                {
                    "stage_type": 7,
                    "start_time": "2022-04-15T18:55:19.500998+03:00",
                    "result": "00:00:03.176461"
                },
                {
                    "stage_type": 8,
                    "start_time": "2022-04-15T18:56:05.781487+03:00",
                    "result": "00:00:02.426613"
                },
                {
                    "stage_type": 9,
                    "start_time": "2022-04-15T18:56:45.264152+03:00",
                    "result": "00:00:00.905454"
                }
            ],
            "current_stage": null,
            "finished_stages": 9,
            "name": "Friends",
            "slug": "friends",
            "color_code_hex": "ff9500",
            "start_time": "2022-04-15T14:35:54.325509+03:00",
            "final_result": "05:26:19.925082",
            "is_active": false,
            "is_finish": true,
            "race": 1
        },
        {
            "id": 10,
            "results": [
                {
                    "stage_type": 2,
                    "start_time": "2022-04-19T16:58:28.092431+03:00",
                    "result": "00:00:01.126247"
                },
                {
                    "stage_type": 10,
                    "start_time": "2022-04-19T17:27:39.017926+03:00",
                    "result": "00:00:02.585190"
                }
            ],
            "current_stage": null,
            "finished_stages": 2,
            "name": "Test 4",
            "slug": "test4",
            "color_code_hex": "4b7eff",
            "start_time": "2022-04-18T17:43:06.146089+03:00",
            "final_result": "18:02:42.924452",
            "is_active": false,
            "is_finish": true,
            "race": 2
        },
        {
            "id": 12,
            "results": [
                {
                    "stage_type": 2,
                    "start_time": "2022-04-19T17:26:01.605471+03:00",
                    "result": "00:00:00.620465"
                },
                {
                    "stage_type": 10,
                    "start_time": "2022-04-19T17:31:37.491784+03:00",
                    "result": "00:00:01.331095"
                }
            ],
            "current_stage": null,
            "finished_stages": 2,
            "name": "Test6",
            "slug": "test6",
            "color_code_hex": "ff9500",
            "start_time": "2022-04-18T17:43:06.146089+03:00",
            "final_result": "18:02:42.930069",
            "is_active": false,
            "is_finish": true,
            "race": 2
        },
        {
            "id": 11,
            "results": [
                {
                    "stage_type": 2,
                    "start_time": "2022-04-19T16:58:38.103960+03:00",
                    "result": "00:00:01.888033"
                },
                {
                    "stage_type": 10,
                    "start_time": "2022-04-19T17:31:43.596558+03:00",
                    "result": "00:00:02.160502"
                }
            ],
            "current_stage": null,
            "finished_stages": 2,
            "name": "Test 5",
            "slug": "test5",
            "color_code_hex": "33c558",
            "start_time": "2022-04-18T17:43:06.146089+03:00",
            "final_result": "18:02:42.953493",
            "is_active": false,
            "is_finish": true,
            "race": 2
        },
        {
            "id": 8,
            "results": [
                {
                    "stage_type": 2,
                    "start_time": "2022-04-19T16:43:54.237419+03:00",
                    "result": "00:00:00.477699"
                },
                {
                    "stage_type": 10,
                    "start_time": "2022-04-19T17:26:24.009865+03:00",
                    "result": "00:00:02.627600"
                }
            ],
            "current_stage": null,
            "finished_stages": 2,
            "name": "test 2",
            "slug": "test2",
            "color_code_hex": "ffcc00",
            "start_time": "2022-04-18T17:43:06.146089+03:00",
            "final_result": "18:02:43.209438",
            "is_active": false,
            "is_finish": true,
            "race": 2
        },
        {
            "id": 9,
            "results": [
                {
                    "stage_type": 2,
                    "start_time": "2022-04-19T16:47:37.143254+03:00",
                    "result": "00:02:09.827670"
                },
                {
                    "stage_type": 10,
                    "start_time": "2022-04-19T17:27:11.076984+03:00",
                    "result": "00:00:02.156769"
                }
            ],
            "current_stage": null,
            "finished_stages": 2,
            "name": "test3",
            "slug": "Test3",
            "color_code_hex": "ff3b30",
            "start_time": "2022-04-18T17:43:06.146089+03:00",
            "final_result": "18:02:43.208882",
            "is_active": false,
            "is_finish": true,
            "race": 2
        },
        {
            "id": 7,
            "results": [
                {
                    "stage_type": 10,
                    "start_time": "2022-04-19T17:26:14.480331+03:00",
                    "result": "00:00:01"
                },
                {
                    "stage_type": 2,
                    "start_time": "2022-04-21T11:52:17.267465+03:00",
                    "result": "11:51:09"
                }
            ],
            "current_stage": null,
            "finished_stages": 2,
            "name": "Test 1",
            "slug": "test1",
            "color_code_hex": "5ac8fa",
            "start_time": "2022-04-18T17:43:06.146089+03:00",
            "final_result": "18:09:17.958026",
            "is_active": false,
            "is_finish": true,
            "race": 2
        }
    ]
}