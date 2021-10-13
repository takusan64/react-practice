/** @type {import('next').NextConfig} */
const BASE_URL =
  process.env.NODE_ENV === 'development' ? '' : '/react-practice'

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: BASE_URL,
  basePath: BASE_URL
}
