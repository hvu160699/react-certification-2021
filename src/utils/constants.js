const AUTH_STORAGE_KEY = 'wa_cert_authenticated';
const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const DEFAULT_AVATAR =
  'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

const FAKE_VIDEOS_DATA = [
  {
    kind: 'youtube#searchResult',
    etag: 'Ft_RXJajyWfSIBsmZE2nEZeyuP0',
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
            'https://yt3.ggpht.com/ytc/AAUvwngUzDpQNfvBGjm6G9gY7UDJyH8DQMN4DXwjbfeiDw=s88-c-k-c0xffffffff-no-rj-mo',
        },
        medium: {
          url:
            'https://yt3.ggpht.com/ytc/AAUvwngUzDpQNfvBGjm6G9gY7UDJyH8DQMN4DXwjbfeiDw=s240-c-k-c0xffffffff-no-rj-mo',
        },
        high: {
          url:
            'https://yt3.ggpht.com/ytc/AAUvwngUzDpQNfvBGjm6G9gY7UDJyH8DQMN4DXwjbfeiDw=s800-c-k-c0xffffffff-no-rj-mo',
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'upcoming',
      publishTime: '2014-09-27T01:39:18Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'FsPGT4wx4ddMkwaIzs9tG0MjhqE',
    id: {
      kind: 'youtube#video',
      videoId: 'WDtNW4vjBfg',
    },
    snippet: {
      publishedAt: '2021-06-08T15:11:52Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'A Day in the Life of a Senior Software Engineer at Wizeline',
      description:
        'Meet Jakob Renpening, Senior Software Engineer at Wizeline. Jakob shares with us some of his passions and his day-to-day activities. He also explains why he ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/WDtNW4vjBfg/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/WDtNW4vjBfg/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/WDtNW4vjBfg/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2021-06-08T15:11:52Z',
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
  {
    kind: 'youtube#searchResult',
    etag: 'ZbN3h6QJgwvFChAHJAr2z2IHGts',
    id: {
      kind: 'youtube#video',
      videoId: 'NkZkhISXZ_Q',
    },
    snippet: {
      publishedAt: '2020-12-11T00:07:39Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Wizeline Hiring Process Overview',
      description:
        'Have you ever wondered what is Wizeline looking for in a Software Engineer and how our hiring process looks? Look no further! In this video, we explain ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/NkZkhISXZ_Q/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/NkZkhISXZ_Q/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/NkZkhISXZ_Q/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2020-12-11T00:07:39Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'hpmTyfYWsdjtgdjarGlmBAPMkfA',
    id: {
      kind: 'youtube#video',
      videoId: 'r6sXaNXNKr4',
    },
    snippet: {
      publishedAt: '2020-11-03T16:54:13Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Daniela Perez | Women in Leadership at Wizeline',
      description:
        'Daniela had a different idea of software while she was in college but later realized that it involves lots of adapting and decision making. Watch Daniela discuss ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/r6sXaNXNKr4/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/r6sXaNXNKr4/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/r6sXaNXNKr4/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2020-11-03T16:54:13Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'mDNCQTzMQ1_JBgd7IY69tPVVv6I',
    id: {
      kind: 'youtube#video',
      videoId: 'cjO2fJy8asM',
    },
    snippet: {
      publishedAt: '2018-09-25T17:45:19Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'A Day in the Life of an Engineering Manager at Wizeline',
      description:
        "Fernando Espinoza shares his experience working as an engineering manager at Wizeline and mentoring other engineers. Learn about Fernando's passions ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/cjO2fJy8asM/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/cjO2fJy8asM/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/cjO2fJy8asM/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2018-09-25T17:45:19Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'Xw-viuN8z38aou_VcbSH7tBVVUM',
    id: {
      kind: 'youtube#video',
      videoId: 'bkX4bBVe9R8',
    },
    snippet: {
      publishedAt: '2021-05-10T21:16:49Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Acing the Wizeline Technical Assessment',
      description:
        'Check out this video to learn more about the technical assessment at Wizeline and prepare yourself to succeed in your interviewing process.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/bkX4bBVe9R8/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/bkX4bBVe9R8/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/bkX4bBVe9R8/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2021-05-10T21:16:49Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '0lAt3pnn0L4NTO4L29kAHlCOR4k',
    id: {
      kind: 'youtube#video',
      videoId: 'tG5xXznC58s',
    },
    snippet: {
      publishedAt: '2020-06-04T11:55:32Z',
      channelId: 'UCJTlv_bnr9wkCNYdzD4cBEA',
      title: 'After Work Day in Wizeline Vietnam',
      description:
        'This video shows how a normal after work hours looks like in my company: Wizeline Vietnam #wizeline #apac #softwareEngineer #coding #developer ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/tG5xXznC58s/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/tG5xXznC58s/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/tG5xXznC58s/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Jan Tampos',
      liveBroadcastContent: 'none',
      publishTime: '2020-06-04T11:55:32Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'rzFyQtgk1rx9s-WhAkyxi91xJdI',
    id: {
      kind: 'youtube#video',
      videoId: 'hJc7Hjp6gWQ',
    },
    snippet: {
      publishedAt: '2017-02-02T23:40:11Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Wizeline Team Values: Culture &amp; Projects',
      description:
        'Employees at Wizeline make an impact, work on goal-oriented teams with project ownership and enjoy work-life balance. Watch the full video to learn more ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/hJc7Hjp6gWQ/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/hJc7Hjp6gWQ/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/hJc7Hjp6gWQ/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2017-02-02T23:40:11Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'e69LZQ8KMVzNOm0RfQ1IjaUCbmw',
    id: {
      kind: 'youtube#video',
      videoId: 'HYyRZiwBWc8',
    },
    snippet: {
      publishedAt: '2019-04-18T18:48:04Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
      description:
        'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2019-04-18T18:48:04Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '8q-ajUMnXZm4gQzfSIiyrG2tA7A',
    id: {
      kind: 'youtube#video',
      videoId: '24sTHUyWhRM',
    },
    snippet: {
      publishedAt: '2016-10-05T00:03:32Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: '[1 of 2] Wizeline CEO shares career lessons from Google',
      description:
        'Founder & CEO Bismarck Lepe on growth opportunities at Wizeline and his career-path experience as an early Google employee. Join our team!',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/24sTHUyWhRM/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/24sTHUyWhRM/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/24sTHUyWhRM/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2016-10-05T00:03:32Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'mM9qAwvNhFKGUv6mCIamuWVo0NE',
    id: {
      kind: 'youtube#video',
      videoId: 'RFq7gfvhtCk',
    },
    snippet: {
      publishedAt: '2020-05-23T00:11:23Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Welcome Back to Wizeline Vietnam | Extended Version',
      description:
        'Thanks to swift government action, the COVID-19 situation in Vietnam has reached a point where businesses are able to return to work and reopen offices.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/RFq7gfvhtCk/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/RFq7gfvhtCk/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/RFq7gfvhtCk/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2020-05-23T00:11:23Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'QceJJazlc5MnjeW8w0IGg7t9JG8',
    id: {
      kind: 'youtube#video',
      videoId: '3CmJ68RU2fs',
    },
    snippet: {
      publishedAt: '2021-03-31T21:24:52Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Romina Espinosa | Women in Leadership at Wizeline',
      description:
        "Romina was a very ambitious girl with talent in sales. Now, she's an accomplished software engineer, product owner, mentor, and leader at Wizeline.",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/3CmJ68RU2fs/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/3CmJ68RU2fs/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/3CmJ68RU2fs/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2021-03-31T21:24:52Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '3yhm80mYG8exFHHrr20rcHAn5Wc',
    id: {
      kind: 'youtube#video',
      videoId: 'XNpz9BmGH44',
    },
    snippet: {
      publishedAt: '2020-02-05T22:28:34Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Why Wizeline? | Hung Nguyen, iOS Engineer at Wizeline Vietnam',
      description:
        "WE'RE HIRING! Wizeline is a global software development and design services company headquartered in San Francisco, with offices in Vietnam, Mexico, ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/XNpz9BmGH44/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/XNpz9BmGH44/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/XNpz9BmGH44/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2020-02-05T22:28:34Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'AhxX771r-wThdAB94uJFDeUCyL8',
    id: {
      kind: 'youtube#video',
      videoId: 'JPKk9wzCFP0',
    },
    snippet: {
      publishedAt: '2018-11-27T23:17:43Z',
      channelId: 'UCs3kEHRKVTDTZXH6VUI3Xow',
      title: 'How Wizeline builds culture across continents',
      description:
        'Hear from Wizeline CEO Bismarck Lepe about the importance of culture and values when scaling a company from 1 to 500 employees across 7 countries.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/JPKk9wzCFP0/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/JPKk9wzCFP0/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/JPKk9wzCFP0/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Disco',
      liveBroadcastContent: 'none',
      publishTime: '2018-11-27T23:17:43Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'M6sUmDVOQojYs0ZEMiuTW7PPVXo',
    id: {
      kind: 'youtube#video',
      videoId: 'Hm3wVzcHjnE',
    },
    snippet: {
      publishedAt: '2021-03-01T17:12:42Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Humans of Wizeline | Alonso Donath - Multimedia Producer',
      description:
        "Meet Alonso Donath, Multimedia Producer at Wizeline. He joined us in 2016 and has been building the company's video brand ever since. When he's not ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/Hm3wVzcHjnE/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/Hm3wVzcHjnE/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/Hm3wVzcHjnE/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2021-03-01T17:12:42Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'x_nT-jKPoAHTkrcGSDCnZKKkboc',
    id: {
      kind: 'youtube#video',
      videoId: 'Z4bNMRdsqSo',
    },
    snippet: {
      publishedAt: '2019-12-14T02:00:03Z',
      channelId: 'UCJm1oqUTCYIdTjCyAvkFeXw',
      title: 'VĂN PHÒNG WIZELINE - CHƠI ĐỂ LÀM HIỆU QUẢ',
      description:
        'Đến văn phòng là để làm việc, điều đó là hiển nhiên, bởi không ai trả lương để bạn chơi. Nhưng với những tiện ích dành cho nhân viên ở văn phòng Wizeline, ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/Z4bNMRdsqSo/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/Z4bNMRdsqSo/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/Z4bNMRdsqSo/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'ARCHITECTS WIN',
      liveBroadcastContent: 'none',
      publishTime: '2019-12-14T02:00:03Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '-TEBwvqxxMQ-tehRAEKT9TGk4Fs',
    id: {
      kind: 'youtube#video',
      videoId: 'WKolloYx7Gw',
    },
    snippet: {
      publishedAt: '2018-07-25T20:59:37Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Wizeline&#39;s Got Talent',
      description:
        "Wizeliners are very talented. From rock bands to sports teams, we're proud of our people and all the skills they bring to Wizeline. Join us and show us your ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/WKolloYx7Gw/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/WKolloYx7Gw/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/WKolloYx7Gw/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2018-07-25T20:59:37Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '84apf91UuSnUpEtDp2mtyvT7d90',
    id: {
      kind: 'youtube#video',
      videoId: 'F7C_oz_ZcrM',
    },
    snippet: {
      publishedAt: '2021-02-22T19:42:26Z',
      channelId: 'UCBEH2Cf8rH4Ly2kkSCklLHQ',
      title: 'Welcome to Wizeline Academy',
      description:
        "Wizeline Academy offers free courses on today's most valuable tech skills.",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/F7C_oz_ZcrM/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/F7C_oz_ZcrM/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/F7C_oz_ZcrM/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline Academy',
      liveBroadcastContent: 'none',
      publishTime: '2021-02-22T19:42:26Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'fdpWiNrY8xgMNoQiypeZvFeH884',
    id: {
      kind: 'youtube#video',
      videoId: 'xBXuXOFhNs0',
    },
    snippet: {
      publishedAt: '2020-02-21T00:03:46Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Why Wizeline? | Canh Tran, iOS Engineer at Wizeline Vietnam',
      description:
        "WE'RE HIRING! Wizeline is a global software development and design services company headquartered in San Francisco, with offices in Vietnam, Mexico, ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/xBXuXOFhNs0/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/xBXuXOFhNs0/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/xBXuXOFhNs0/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2020-02-21T00:03:46Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '9-Ag8hUNYBLTjuli6eECa5GXV1Y',
    id: {
      kind: 'youtube#video',
      videoId: '7PtYNO6g7eI',
    },
    snippet: {
      publishedAt: '2019-04-12T20:00:45Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'We Are Wizeline',
      description:
        'Engineering a better tomorrow. Wizeline is a global software development company that helps its clients solve their biggest challenges with design and ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/7PtYNO6g7eI/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/7PtYNO6g7eI/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/7PtYNO6g7eI/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2019-04-12T20:00:45Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'rkIDGKoPMcrEOPphaEgSBDkUBmk',
    id: {
      kind: 'youtube#video',
      videoId: 'TnDYyUu4sZU',
    },
    snippet: {
      publishedAt: '2016-11-22T21:35:45Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title:
        'Wizeline &amp; Wall Street Journal: Design &amp; Innovation in Media &amp; Community',
      description:
        'Wizeline, WSJ & MIND Mexico present: UX Innovation in Media and Community, as part of Innovation and Design Week in Guadalajara. Che Douglas, Head of ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/TnDYyUu4sZU/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/TnDYyUu4sZU/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/TnDYyUu4sZU/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2016-11-22T21:35:45Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 's--YA-jVSGy2lLUS1hnRWIdkMwc',
    id: {
      kind: 'youtube#video',
      videoId: 'sovK3nsoNlI',
    },
    snippet: {
      publishedAt: '2019-11-12T20:41:47Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Silicon Valley Bank Visits Wizeline Guadalajara',
      description:
        'Wizeline recently hosted executives from Silicon Valley Bank and other venture capital and tech organizations. See what these visitors had to say about their ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/sovK3nsoNlI/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/sovK3nsoNlI/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/sovK3nsoNlI/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2019-11-12T20:41:47Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'JwAFZqUJnC74vg6s34t0El-3Ve4',
    id: {
      kind: 'youtube#video',
      videoId: '9zk15MDEAX4',
    },
    snippet: {
      publishedAt: '2016-09-01T22:03:03Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'First Annual Olympics of the Mind at Wizeline Mexico',
      description:
        'Behold our first annual competition where wits and creativity meet engineering greatness. Learn more about Wizeline Mexico careers!',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/9zk15MDEAX4/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/9zk15MDEAX4/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/9zk15MDEAX4/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2016-09-01T22:03:03Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'mmKWfObd7lBv_V_UrUFio-EceWQ',
    id: {
      kind: 'youtube#video',
      videoId: '7dJFraOqcoQ',
    },
    snippet: {
      publishedAt: '2019-07-02T17:40:20Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Why Wizeline? featuring Juan Pablo Villa in Mexico City',
      description:
        'Juan Pablo, known as Gianpa at Wizeline, is a software engineer in our Mexico City office. Gianpa focuses on Android apps, is an integral part of our culture, ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/7dJFraOqcoQ/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/7dJFraOqcoQ/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/7dJFraOqcoQ/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2019-07-02T17:40:20Z',
    },
  },
];

const ROUTES = [
  {
    exact: true,
    pageName: 'Home',
    path: '/',
  },
  {
    exact: true,
    pageName: 'Watch',
    path: '/watch',
  },
];

const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/embed/';

const MOCKED_USER = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export {
  AUTH_STORAGE_KEY,
  API_URL,
  API_KEY,
  DEFAULT_AVATAR,
  FAKE_VIDEOS_DATA,
  ROUTES,
  YOUTUBE_VIDEO_URL,
  MOCKED_USER,
};
