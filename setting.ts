import Env from './next.config.js'
const isProd = process.env.NODE_ENV === 'production'

export default {
  isProd,
  basePath: Env.basePath,
  apiPath: isProd ? '' : 'http://localhost:8000',
  title: '🎻 nextjs-ssg-dynamic-route 🎻',
  description: 'nextjs-ssg-dynamic-route 🎻🎻🎻',
  keywords: []
}
