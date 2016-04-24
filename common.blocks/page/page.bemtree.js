block('page').content()(function() {

    var tvShows =  [
        {
            time: '12:32',
            title: '"Клуб Веселых и Находчивых". Высшая лига. Третий четвертьфинал'
        },
        {
            time: '12:32',
            title: 'Воскресное "Время'
        },
        {
            time: '23:00',
            title: 'Что? Где? Когда? Пятая игра весенней серии игр'
        },
        {
            time: '23:00',
            title: 'Что? Где? Когда? Пятая игра весенней серии игр'
        },
        {
            time: '23:00',
            title: 'Что? Где? Когда? Пятая игра весенней серии игр'
        }

    ];

    var tvChannels = [
        {
            title: 'Первый',
            img: 'http://avatars.mds.yandex.net/get-tv-shows/70764/2a000001518595815f61238b1893ded04218/orig',
            link: 'https://tv.yandex.ru/213/channels/146',
            shows: tvShows
        },
        {
            title: 'Первый',
            img: 'http://avatars.mds.yandex.net/get-tv-shows/70764/2a000001518595815f61238b1893ded04218/orig',
            link: 'https://tv.yandex.ru/213/channels/146',
            shows: tvShows
        },
        {
            title: 'Первый',
            img: 'http://avatars.mds.yandex.net/get-tv-shows/70764/2a000001518595815f61238b1893ded04218/orig',
            link: 'https://tv.yandex.ru/213/channels/146',
            shows: tvShows
        },
        {
            title: 'Первый',
            img: 'http://avatars.mds.yandex.net/get-tv-shows/70764/2a000001518595815f61238b1893ded04218/orig',
            link: 'https://tv.yandex.ru/213/channels/146',
            shows: tvShows
        },
        {
            title: 'Первый',
            img: 'http://avatars.mds.yandex.net/get-tv-shows/70764/2a000001518595815f61238b1893ded04218/orig',
            link: 'https://tv.yandex.ru/213/channels/146',
            shows: tvShows
        },
        {
            title: 'Первый',
            img: 'http://avatars.mds.yandex.net/get-tv-shows/70764/2a000001518595815f61238b1893ded04218/orig',
            link: 'https://tv.yandex.ru/213/channels/146',
            shows: tvShows
        }
    ];

    return [
        {
            block: 'header'
        },
        {
            block: 'index',
        },
        {
            elem: 'content',
            content: tvChannels.map(function (channel) {
                return {
                    block: 'tv-channel',
                    channel: channel
                }
            })

        },
        {
            block: 'footer'
        }
    ];
});
