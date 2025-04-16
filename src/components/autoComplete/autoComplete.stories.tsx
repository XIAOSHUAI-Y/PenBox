import React from 'react';
import { AutoComplete, DataSourceType } from './autoComplete';
import { action } from '@storybook/addon-actions';

interface LakerPlayerProps {
  value: string;
  number: number;
}

interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  // 可以添加其他需要的字段
}

const SimpleComplete = () => {
  const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins', 
                 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando'];
  const lakersWithNumber = [
    {value: 'green', number: 14},
    {value: 'howard', number: 39},
    {value: 'kuzma', number: 0}
  ]
  
  // const handleFetch = (query: string) => {
  //   return lakers.filter(name => name.includes(query)).map(name => ({value: name}));
  // };
  // const handleFetch = (query: string) => {
  //   return lakersWithNumber.filter(player => player.value.includes(query))
  // }

  const handleFetch = (query: string): Promise<DataSourceType<GithubUser>[]> => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(data => {
        const items = data.items || []; // 确保有items属性
        return items.slice(0, 10).map((item: GithubUser) => ({
          value: item.login,
          ...item
        }));
      })
      .catch(error => {
        console.error('Fetch error:', error);
        return []; // 返回空数组而不是抛出错误
      });
  };

  // const renderOption = (item: DataSourceType<LakerPlayerProps>): React.ReactElement => {
  //   return (
  //     <>
  //       <h2>Name: {item.value}</h2>
  //       <p>Number: {item.number}</p>
  //     </>
  //   )
  // }

  // const renderOption = (item: DataSourceType<GithubUser>) => {
  //   return (
  //     <>
  //       <h2>name: {item.login}</h2>
  //       <p>url: {item.avatar_url}</p>
  //     </>
  //   )
  // }

  return <AutoComplete fetchSuggestions={handleFetch} onSelect={action('selected')}/>;
};

export default {
  title: 'AutoComplete Component',
  component: AutoComplete,
};

export const Default = {
  render: () => <SimpleComplete />,
};
