// import React from 'react';
// import { AutoComplete, DataSourceType } from './autoComplete';
// import { action } from '@storybook/addon-actions';

// interface LakerPlayerProps {
//   value: string;
//   number: number;
// }

// interface GithubUser {
//   login: string;
//   id: number;
//   avatar_url: string;
//   // 可以添加其他需要的字段
// }

// const SimpleComplete = () => {
//   const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins', 
//                  'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando'];
//   const lakersWithNumber = [
//     {value: 'green', number: 14},
//     {value: 'howard', number: 39},
//     {value: 'kuzma', number: 0}
//   ]
  
//   // const handleFetch = (query: string) => {
//   //   return lakers.filter(name => name.includes(query)).map(name => ({value: name}));
//   // };
//   // const handleFetch = (query: string) => {
//   //   return lakersWithNumber.filter(player => player.value.includes(query))
//   // }

//   const handleFetch = (query: string): Promise<DataSourceType<GithubUser>[]> => {
//     return fetch(`https://api.github.com/search/users?q=${query}`)
//       .then(res => res.json())
//       .then(data => {
//         const items = data.items || []; // 确保有items属性
//         return items.slice(0, 10).map((item: GithubUser) => ({
//           value: item.login,
//           ...item
//         }));
//       })
//       .catch(error => {
//         console.error('Fetch error:', error);
//         return []; // 返回空数组而不是抛出错误
//       });
//   };

//   // const renderOption = (item: DataSourceType<LakerPlayerProps>): React.ReactElement => {
//   //   return (
//   //     <>
//   //       <h2>Name: {item.value}</h2>
//   //       <p>Number: {item.number}</p>
//   //     </>
//   //   )
//   // }

//   // const renderOption = (item: DataSourceType<GithubUser>) => {
//   //   return (
//   //     <>
//   //       <h2>name: {item.login}</h2>
//   //       <p>url: {item.avatar_url}</p>
//   //     </>
//   //   )
//   // }

//   return <AutoComplete fetchSuggestions={handleFetch} onSelect={action('selected')}/>;
// };

// export default {
//   title: 'AutoComplete Component',
//   component: AutoComplete,
// };

// export const Default = {
//   render: () => <SimpleComplete />,
// };


import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AutoComplete, DataSourceType } from './autoComplete';
import { action } from '@storybook/addon-actions';

// 示例数据类型
interface PlayerProps {
  value: string;
  number: number;
  position?: string;
}

interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
}

const meta: Meta<typeof AutoComplete> = {
  title: 'Components/AutoComplete',
  component: AutoComplete,
  parameters: {
    docs: {
      description: {
        component: '支持异步搜索、键盘导航、自定义渲染的下拉自动完成组件',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

// 基础数据
const players = [
  { value: 'James', number: 23, position: 'SF' },
  { value: 'Curry', number: 30, position: 'PG' },
  { value: 'Durant', number: 7, position: 'SF' },
  { value: 'Jokic', number: 15, position: 'C' },
  { value: 'Luka', number: 77, position: 'PG' },
];

// 基础同步示例
export const BasicAutoComplete: StoryObj<typeof AutoComplete> = {
  render: (args) => (
    <AutoComplete 
      {...args}
      fetchSuggestions={(query) => 
        players.filter(player => 
          player.value.toLowerCase().includes(query.toLowerCase())
      )}
      onSelect={action('selected')}
      placeholder="输入球员姓名..."
    />
  ),
};

// 自定义渲染选项
export const CustomRenderOption: StoryObj<typeof AutoComplete<PlayerProps>> = {
  render: (args) => (
    <AutoComplete<PlayerProps>
      {...args}
      fetchSuggestions={(query) => 
        players.filter(player => 
          player.value.toLowerCase().includes(query.toLowerCase())
      )}
      renderOption={(item) => (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span><b>姓名:</b> {item.value}</span>
          <span><b>号码:</b> {item.number}</span>
          <span><b>位置:</b> {item.position}</span>
        </div>
      )}
      onSelect={action('selected')}
      placeholder="输入球员姓名查看详情..."
    />
  ),
};

// 异步搜索示例
export const AsyncSearch: StoryObj<typeof AutoComplete<GithubUser>> = {
  render: (args) => {
    const handleFetch = (query: string): Promise<DataSourceType<GithubUser>[]> => {
      return fetch(`https://api.github.com/search/users?q=${query}`)
        .then(res => res.json())
        .then(data => {
          return data.items?.slice(0, 5).map((item: GithubUser) => ({
            value: item.login,
            ...item
          })) || [];
        });
    };

    return (
      <AutoComplete<GithubUser>
        {...args}
        fetchSuggestions={handleFetch}
        renderOption={(item) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={item.avatar_url} 
              alt={item.login} 
              style={{ width: 24, height: 24, borderRadius: '50%', marginRight: 8 }}
            />
            <span>{item.login} (ID: {item.id})</span>
          </div>
        )}
        onSelect={action('github-user-selected')}
        placeholder="搜索 GitHub 用户..."
      />
    );
  },
};

// 禁用状态
export const DisabledAutoComplete: StoryObj<typeof AutoComplete> = {
  render: (args) => (
    <AutoComplete
      {...args}
      fetchSuggestions={(query) => []}
      placeholder="禁用的输入框"
      disabled
    />
  ),
};

// 加载状态
export const LoadingState: StoryObj<typeof AutoComplete> = {
  render: (args) => {
    const delayedFetch = (query: string) => {
      return new Promise<DataSourceType[]>(resolve => {
        setTimeout(() => {
          resolve(
            players.filter(player => 
              player.value.toLowerCase().includes(query.toLowerCase())
            )
          );
        }, 1500);
      });
    };

    return (
      <AutoComplete
        {...args}
        fetchSuggestions={delayedFetch}
        onSelect={action('selected')}
        placeholder="输入查看延迟加载效果..."
      />
    );
  },
};

// 键盘导航演示
export const KeyboardNavigation: StoryObj<typeof AutoComplete> = {
  render: (args) => (
    <div>
      <p style={{ marginBottom: 16 }}>尝试使用 ↑ ↓ 键导航，Enter 键选择</p>
      <AutoComplete
        {...args}
        fetchSuggestions={(query) => 
          players.filter(player => 
            player.value.toLowerCase().includes(query.toLowerCase())
          )
        }
        onSelect={action('keyboard-selected')}
        placeholder="测试键盘导航..."
      />
    </div>
  ),
};
