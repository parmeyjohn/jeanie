/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com', 'images.unsplash.com'],
      },
    env: {
      STRIPE_SECRET_KEY: 'sk_test_51NKUjVBk1ShuEzDoTzobjfBaELeMYD2HMQc3TcVHToAfXKHM4DB8CJSkyjJKbBFQoW1k6mNWDkhOoFanghT3TS7U00fJrDoEEp',
      BASE_URL: 'http://localhost:3000'
    }}

module.exports = nextConfig
