const AUTH_STORAGE_KEY = 'wa_cert_authenticated';
const API_URL = process.env.REACT_APP_API_URL;
const DEFAULT_AVATAR =
  'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

const FAKE_VIDEOS_DATA = [
  {
    kind: 'youtube#searchResult',
    etag: '_PVKwNJf_qw9nukFeRFOtQ837o0',
    id: {
      kind: 'youtube#channel',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
    },
    snippet: {
      publishedAt: '2014-09-27T01:39:18Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Wizeline',
      description:
        "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
      thumbnails: {
        default: {
          url:
            'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
        },
        medium: {
          url:
            'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo',
        },
        high: {
          url:
            'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'upcoming',
      publishTime: '2014-09-27T01:39:18Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'erqeM78PZDWIBe8qOGHGM2WdSE8',
    id: {
      kind: 'youtube#video',
      videoId: 'nmXMgqjQzls',
    },
    snippet: {
      publishedAt: '2019-09-30T23:54:32Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Video Tour | Welcome to Wizeline Guadalajara',
      description:
        'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2019-09-30T23:54:32Z',
    },
  },
];

export { AUTH_STORAGE_KEY, API_URL, DEFAULT_AVATAR, FAKE_VIDEOS_DATA };
