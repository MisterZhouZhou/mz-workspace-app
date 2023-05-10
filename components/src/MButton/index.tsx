export default () => {
  const clickHandler = () => {
    console.log('button click');
  }
  
  return (
    <>
      <button onClick={clickHandler}>button</button>
    </>
  )
}