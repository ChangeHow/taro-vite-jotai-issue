import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

import { useAtom, atom } from 'jotai';

const countAtom = atom(0);

export default function Index () {
  const [count, setCount] = useAtom(countAtom);
  
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Cout {count}</Text>
    </View>
  )
}
