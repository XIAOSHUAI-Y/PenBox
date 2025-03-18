export default {
  preset: 'ts-jest', // 使用 ts-jest 处理 TypeScript 文件
  testEnvironment: 'jsdom', // 使用 jsdom 模拟浏览器环境
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // 处理样式文件
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // 引入额外的 Jest 断言方法
};