import { userApi } from '@mz/api'
import { arrayUtil } from '@mz/utils'
import { MButton } from '@mz/components'

export default () => {
  console.log(arrayUtil.isArray(11));
  console.log(arrayUtil.isArray([11]));
  
  userApi.getUser(1).then((res) => {
    console.log('res:', res);
  })

  return (
    <>
      <MButton />
    </>
  )
}