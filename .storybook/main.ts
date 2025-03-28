// import type { StorybookConfig } from '@storybook/react-vite';

// const config: StorybookConfig = {
//   "stories": [
//     "../src/**/*.mdx",
//     "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-essentials",
//     "@storybook/addon-onboarding",
//     "@chromatic-com/storybook",
//     "@storybook/experimental-addon-test"
//   ],
//   "framework": {
//     "name": "@storybook/react-vite",
//     "options": {}
//   }
// };
// export default config;

import type { StorybookConfig } from "@storybook/react-vite"; // 或 "@storybook/react-webpack5"
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"], // 确保匹配你的 story 文件
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs", // 确保 docs 插件被添加
    {
      name: "@storybook/addon-docs",
      options: {
        typescript: {
          reactDocgen: "react-docgen-typescript", // 使用 react-docgen-typescript 解析 Props
          reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true, // 提取枚举值
            propFilter: (prop) => {
              // 过滤掉 node_modules 中的类型
              if (prop.parent) {
                return !prop.parent.fileName.includes("node_modules");
              }
              return true;
            },
          },
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite", // 或 "@storybook/react-webpack5" 视你的项目而定
    options: {},
  },
  docs: {
    autodocs: true, // 启用自动文档
  },
};
export default config;
