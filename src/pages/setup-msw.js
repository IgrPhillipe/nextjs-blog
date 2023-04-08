import { server } from '@/mocks/server'

if (process.env.NODE_ENV === 'development') {
  server.listen()
}