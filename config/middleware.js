module.exports = ({
  env
}) => ({
  timeout: 100,
  load: {
    before: ['responseTime', 'logger', 'cors', 'responses', 'gzip'],
    order: [
      "Define the middlewares' load order by putting their name in this array is the right order",
    ],
    after: ['parser', 'router'],
  },
  settings: {
    public: {
      path: './public',
      maxAge: 60000,
    },
  },
  csp: {
    enabled: true,
    policy: [
      "block-all-mixed-content"
    ]
  },
  p3p: {
    enabled: true,
    value: ""
  },
  hsts: {
    enabled: true,
    maxAge: 31536000,
    includeSubDomains: true
  },
  xframe: {
    enabled: true,
    value: "SAMEORIGIN"
  },
  xss: {
    enabled: true,
    mode: "block"
  },
  cors: {
    enabled: true
  },
  ip: {
    enabled: false,
    whiteList: [],
    blackList: []
  },
  gzip: {
    "enabled": true
  },
  responseTime: {
    "enabled": false
  },
  poweredBy: {
    "enabled": false,
    "value": "Strapi <strapi.io>"
  },
  session: {
    enabled: true,
    client: "cookie",
    key: "gdi.sid",
    prefix: "gdi:sess:",
    secretKeys: [
      env('SECRET_KEY1', 'Z2dhZBNfyaeuTEYN'),
      env('SECRET_KEY2', 'MPJVwTv7Mfrrjx4K')
    ],
    httpOnly: true,
    maxAge: 86400000,
    overwrite: true,
    signed: false,
    rolling: false
  },
  logger: {
    level: "info",
    exposeInContext: true,
    requests: false
  },
  parser: {
    enabled: true,
    multipart: true
  }
});
